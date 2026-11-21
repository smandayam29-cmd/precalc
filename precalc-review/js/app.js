/* AP Precalculus Midterm Review: single-page app. No build step; open index.html. */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const app = $('#app');
  const DAY_MS = 864e5;
  const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
  const start = parse(START_DATE), exam = parse(EXAM_DATE);
  const dateOf = i => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
  const fmt = d => `${WD[d.getDay()]} ${MO[d.getMonth()]} ${d.getDate()}`;
  const today0 = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
  const todayIdx = () => Math.round((today0() - start) / DAY_MS);          // may be <0 or >23
  const clampDay = i => Math.max(0, Math.min(DAYS.length - 1, i));

  /* ---------- saved progress ---------- */
  const KEY = 'apc-review-v1';
  let state = { res: {}, open: {} };
  try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.res) state = s; } catch (e) { /* storage unavailable: progress lasts for this visit only */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  /* ---------- rendering helpers ---------- */
  const tex = s => String(s)
    .replace(/<div class="fig">\[\[FIG:(\w+)\]\]<\/div>/g, (_, id) => `<div class="fig">${FIGS[id] ? FIGS[id]() : ''}</div>`)
    .replace(/\$([^$]+)\$/g, (_, t) => { try { return katex.renderToString(t, { throwOnError: false }); } catch (e) { return t; } });
  // move a figure to the front of the question so text wraps beside it
  const question = q => { let fig = ''; const body = tex(q).replace(/<div class="fig">[\s\S]*?<\/svg><\/div>/, m => { fig = m; return '<br>'; }); return fig + body; };

  // every question in a day, with a stable id
  function items(di) {
    const d = DAYS[di], out = []; let n = 0;
    (d.warm || []).forEach((p, k) => out.push({ ...p, id: `${di}:w${k + 1}`, label: 'W' + (k + 1), warm: true, di }));
    d.probs.forEach(p => { if (p.part) out.push({ part: p.part }); else { n++; out.push({ ...p, id: `${di}:p${n}`, label: String(n), di }); } });
    return out;
  }
  const real = di => items(di).filter(x => x.q);
  function dayStat(di) { const qs = real(di); const ok = qs.filter(q => state.res[q.id] === 'ok').length, miss = qs.filter(q => state.res[q.id] === 'miss').length; return { total: qs.length, ok, miss, done: ok + miss === qs.length }; }
  const kind = d => d.exam ? 'Practice midterm' : d.check ? 'Checkpoint' : d.light ? 'Quick check' : d.last ? 'Tune-up' : 'Daily review';
  const minutes = d => d.exam ? 60 : d.check ? (d.unit === 1 ? 30 : 35) : 0;

  /* ---------- views ---------- */
  function home() {
    const ti = todayIdx(), left = Math.round((exam - today0()) / DAY_MS);
    let all = 0, done = 0; DAYS.forEach((_, i) => { const s = dayStat(i); all += s.total; done += s.ok + s.miss; });
    const tday = clampDay(ti);
    let h = `<section class="hero"><div><h1>24 days to the midterm</h1>
      <p class="lede">One short session a day covers all of Units 1 and 2. Try each problem on paper first, then check yourself honestly.</p>
      <div class="row"><a class="btn primary" href="#day/${tday + 1}">${ti < 0 ? 'Start Day 1' : ti > 23 ? 'Open the tune-up' : `Do today's review (Day ${tday + 1})`}</a><a class="btn" href="#errors">Error log</a></div>
      <div class="bar" role="img" aria-label="${done} of ${all} questions answered"><i style="width:${all ? 100 * done / all : 0}%"></i></div>
      <p class="lede" style="margin:6px 0 0;font-size:14px">${done} of ${all} questions checked</p></div>
      <div class="count"><b>${left > 0 ? left : left === 0 ? '0' : '✓'}</b><span>${left > 1 ? 'days to go' : left === 1 ? 'day to go' : left === 0 ? 'exam today' : 'exam done'}</span></div></section>`;
    const groups = [['Unit 1: Polynomial and Rational Functions', 0, 11], ['Unit 2: Exponential and Logarithmic Functions', 11, 22], ['Final stretch', 22, 24]];
    groups.forEach(([name, a, b]) => {
      h += `<div class="unit">${name}</div><div class="grid">`;
      for (let i = a; i < b; i++) {
        const d = DAYS[i], s = dayStat(i);
        const cls = (i === ti ? 'today ' : '') + (s.done ? 'done ' : '') + (i < ti ? 'past' : '');
        h += `<a class="dcard ${cls}" href="#day/${i + 1}"><span class="d"><span>Day ${i + 1}</span><span>${i === ti ? 'Today · ' : ''}${fmt(dateOf(i))}</span></span>
          <span class="t">${d.title}</span><span class="s"><span>${s.done ? `Done: ${s.ok}/${s.total}` : s.ok + s.miss ? `${s.ok + s.miss} of ${s.total} checked` : kind(d)}</span><span>${s.miss ? s.miss + ' to fix' : ''}</span></span></a>`;
      }
      h += '</div>';
    });
    app.innerHTML = h;
  }

  let timerId = null;
  function day(di) {
    const d = DAYS[di], its = items(di), s = dayStat(di);
    let h = `<div class="dhead"><div class="dnum"><small>DAY</small><b>${di + 1}</b></div><div><h1>${d.title}</h1>
      <div class="meta">${fmt(dateOf(di))} · ${kind(d)} · in your notes: ${d.src}</div></div></div>`;
    h += `<details class="know" ${d.know.length > 1 ? 'open' : 'open'}><summary>${d.know.length > 1 ? 'Know this' : 'Before you start'}</summary>${d.know.length > 1 ? '<ul>' + d.know.map(k => `<li>${tex(k)}</li>`).join('') + '</ul>' : `<p>${tex(d.know[0])}</p>`}</details>`;
    const sect = (title, extra = '') => `<div class="sec"><span>${title}</span>${extra}</div>`;
    const warm = its.filter(x => x.warm), rest = its.filter(x => !x.warm);
    if (warm.length) h += sect('Warm-up: from earlier days') + warm.map(card).join('');
    const mins = minutes(d);
    h += sect(d.exam ? 'Practice midterm' : d.check ? 'Checkpoint' : d.last ? 'Fill in from memory' : 'Practice',
      mins ? `<span class="row"><span class="timer" id="timer">${mins}:00</span><button class="btn" id="tbtn">Start ${mins}-minute timer</button></span>` : '');
    if (d.hints && d.hints.length) h += `<div id="hintbox"><button class="btn" id="hbtn">Stuck? Show guiding questions</button></div>`;
    h += rest.map(x => x.part ? `<div class="part">${x.part}</div>` : card(x)).join('');
    h += `<div id="sum"></div><div class="pn">${di > 0 ? `<a class="btn" href="#day/${di}">← Day ${di}</a>` : '<span></span>'}<a class="btn" href="#home">Calendar</a>${di < DAYS.length - 1 ? `<a class="btn primary" href="#day/${di + 2}">Day ${di + 2} →</a>` : '<span></span>'}</div>`;
    app.innerHTML = h; summary(di);
    const hb = $('#hbtn'); if (hb) hb.onclick = () => { $('#hintbox').innerHTML = `<div class="hints"><b>Stuck? Ask yourself</b><ul>${d.hints.map(x => `<li>${tex(x)}</li>`).join('')}</ul></div>`; };
    const tb = $('#tbtn'); if (tb) tb.onclick = () => {
      clearInterval(timerId); let left = mins * 60; const el = $('#timer'); tb.textContent = 'Restart timer';
      const tick = () => { if (!document.body.contains(el)) return clearInterval(timerId); el.textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); el.classList.toggle('low', left <= 300); if (left-- <= 0) { clearInterval(timerId); el.textContent = "Time's up"; } };
      tick(); timerId = setInterval(tick, 1000);
    };
  }
  function card(x) {
    const r = state.res[x.id], open = state.open[x.id] || r;
    return `<article class="q ${r || ''}" id="q-${x.id.replace(':', '-')}" data-id="${x.id}"><div class="qh"><span class="n">${x.label}.</span><div class="body">${x.calc ? '<span class="pill calc">Calc</span> ' : ''}${question(x.q)}</div></div>${open ? answer(x) : `<div class="act"><button class="btn" data-act="show">I've tried it: show the answer</button></div>`}</article>`;
  }
  function answer(x) {
    const r = state.res[x.id];
    return `<div class="ans"><b class="l">Answer</b>${tex(x.a)}</div>
      <div class="act"><span style="font-size:14px;color:var(--muted)">How did you do?</span><button class="btn good ${r === 'ok' ? 'on' : ''}" data-act="ok">✓ Got it</button><button class="btn bad ${r === 'miss' ? 'on' : ''}" data-act="miss">✗ Missed it</button>${r ? '<button class="link" data-act="retry">Hide and retry</button>' : ''}</div>
      ${r === 'miss' && x.back ? `<div class="back">Go back to <a href="#day/${x.back}">Day ${x.back}: ${DAYS[x.back - 1].title}</a>.</div>` : ''}`;
  }
  function summary(di) {
    const el = $('#sum'); if (!el) return; const s = dayStat(di), d = DAYS[di];
    if (!s.done) { el.innerHTML = ''; return; }
    let msg = s.miss === 0 ? 'Everything correct. Nice work.' : `Redo the ${s.miss} you missed tomorrow; they are saved in your error log.`;
    if (d.exam) msg = s.ok >= 18 ? 'Ready. Keep it warm with the tune-up tomorrow.' : s.ok >= 14 ? 'Close. Fix your misses tomorrow.' : 'Redo the two checkpoints (Days 11 and 22) before the tune-up.';
    el.innerHTML = `<div class="summary"><b>Day ${di + 1} score: ${s.ok} / ${s.total}</b><br>${msg}</div>`;
  }
  const find = id => { const di = +id.split(':')[0]; return items(di).find(x => x.id === id); };

  function errors() {
    const missed = []; DAYS.forEach((_, di) => real(di).forEach(q => { if (state.res[q.id] === 'miss') missed.push(q); }));
    let h = `<h1>Error log</h1><p class="lede">Every question you marked as missed. Redo each one on paper, then mark it "Got it" to clear it from this list.</p>`;
    if (!missed.length) h += `<div class="empty">Nothing here yet. Questions you mark "Missed it" will show up on this page.</div>`;
    else { let cur = -1; missed.forEach(q => { if (q.di !== cur) { cur = q.di; h += `<div class="sec"><span>Day ${cur + 1}: ${DAYS[cur].title}</span><a href="#day/${cur + 1}">Open day</a></div>`; } state.open[q.id] = false; h += retryCard(q); }); }
    app.innerHTML = h;
  }
  const retryCard = x => `<article class="q miss" data-id="${x.id}" data-log="1"><div class="qh"><span class="n">${x.label}.</span><div class="body">${x.calc ? '<span class="pill calc">Calc</span> ' : ''}${question(x.q)}</div></div><div class="act"><button class="btn" data-act="show">I've redone it: show the answer</button></div></article>`;

  function recall() {
    const cards = DAYS[DAYS.length - 1].probs.filter(p => p.q); let i = 0, order = cards.map((_, k) => k).sort(() => Math.random() - 0.5);
    const draw = () => {
      const c = cards[order[i]];
      app.innerHTML = `<h1>Recall cards</h1><p class="lede">The must-know facts for both units. Say the answer out loud before you flip.</p>
        <p style="color:var(--muted);font-size:14px;margin:0">Card ${i + 1} of ${cards.length} · tap to flip</p>
        <div class="card" tabindex="0" role="button" aria-label="Flip card"><div class="in"><div class="face">${tex(c.q)}</div><div class="face b">${tex(c.a)}</div></div></div>
        <div class="row" style="justify-content:center"><button class="btn" id="prev">← Back</button><button class="btn primary" id="next">Next →</button></div>`;
      const cd = $('.card'), flip = () => cd.classList.toggle('flip'); cd.onclick = flip; cd.onkeydown = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } };
      $('#prev').onclick = () => { i = (i - 1 + cards.length) % cards.length; draw(); }; $('#next').onclick = () => { i = (i + 1) % cards.length; draw(); };
    };
    draw();
  }

  /* ---------- events ---------- */
  app.addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    const art = b.closest('.q'), id = art.dataset.id, x = find(id), act = b.dataset.act, inLog = art.dataset.log;
    if (act === 'show') state.open[id] = true;
    else if (act === 'retry') { delete state.res[id]; state.open[id] = false; }
    else state.res[id] = act;
    save();
    if (inLog) {
      if (act === 'ok') { art.remove(); if (!$('.q', app)) errors(); return; }
      if (act === 'retry') { state.res[id] = 'miss'; state.open[id] = false; save(); const t = document.createElement('div'); t.innerHTML = retryCard(x); art.replaceWith(t.firstElementChild); return; }
      art.querySelectorAll('.ans,.act,.back').forEach(n => n.remove()); art.insertAdjacentHTML('beforeend', answer(x)); return;
    }
    const tmp = document.createElement('div'); tmp.innerHTML = card(x); art.replaceWith(tmp.firstElementChild); summary(x.di);
  });
  $('#reset').onclick = function () {
    if (this.dataset.sure) { state = { res: {}, open: {} }; save(); delete this.dataset.sure; this.textContent = 'Reset progress'; route(); }
    else { this.dataset.sure = 1; this.textContent = 'Click again to erase all progress'; setTimeout(() => { delete this.dataset.sure; this.textContent = 'Reset progress'; }, 4000); }
  };

  /* ---------- router ---------- */
  function route() {
    clearInterval(timerId);
    const hsh = location.hash.replace('#', '') || 'home'; let nav = 'home';
    if (hsh === 'today') { nav = 'day'; day(clampDay(todayIdx())); }
    else if (hsh.startsWith('day/')) { nav = ''; const n = clampDay((parseInt(hsh.slice(4), 10) || 1) - 1); day(n); }
    else if (hsh === 'errors') { nav = 'errors'; errors(); }
    else if (hsh === 'recall') { nav = 'recall'; recall(); }
    else home();
    document.querySelectorAll('nav a').forEach(a => a.classList.toggle('on', a.dataset.nav === nav));
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();

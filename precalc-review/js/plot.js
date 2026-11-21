/* Small SVG graphing helpers used for the figures. */
// Minimal SVG plotting helpers for print (black/grey).
function plot({ fns, xmin, xmax, ymin, ymax, w = 270, h = 215, vas = [], has = [], label }) {
  const L = 26, R = 10, Tp = 10, B = 20, pw = w - L - R, ph = h - Tp - B;
  const X = x => L + (x - xmin) / (xmax - xmin) * pw, Y = y => Tp + (ymax - y) / (ymax - ymin) * ph;
  const stepX = (xmax - xmin) > 10 ? 2 : 1, stepY = (ymax - ymin) > 10 ? 2 : 1;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Liberation Sans, Arial" font-size="9">`;
  s += `<rect x="${L}" y="${Tp}" width="${pw}" height="${ph}" fill="#fff" stroke="#999" stroke-width="0.6"/>`;
  for (let x = Math.ceil(xmin); x <= xmax; x++) { s += `<line x1="${X(x)}" y1="${Tp}" x2="${X(x)}" y2="${Tp + ph}" stroke="#ddd" stroke-width="0.5"/>`; if (x % stepX === 0 && x !== 0) s += `<text x="${X(x)}" y="${Math.min(Math.max(Y(0) + 10, Tp + 10), Tp + ph + 11)}" text-anchor="middle" fill="#444">${x}</text>`; }
  for (let y = Math.ceil(ymin); y <= ymax; y++) { s += `<line x1="${L}" y1="${Y(y)}" x2="${L + pw}" y2="${Y(y)}" stroke="#ddd" stroke-width="0.5"/>`; if (y % stepY === 0 && y !== 0) s += `<text x="${Math.max(X(0) - 4, L - 3)}" y="${Y(y) + 3}" text-anchor="end" fill="#444">${y}</text>`; }
  if (ymin <= 0 && ymax >= 0) s += `<line x1="${L}" y1="${Y(0)}" x2="${L + pw}" y2="${Y(0)}" stroke="#000" stroke-width="1"/><text x="${L + pw - 2}" y="${Y(0) - 3}" text-anchor="end" font-style="italic">x</text>`;
  if (xmin <= 0 && xmax >= 0) s += `<line x1="${X(0)}" y1="${Tp}" x2="${X(0)}" y2="${Tp + ph}" stroke="#000" stroke-width="1"/><text x="${X(0) + 4}" y="${Tp + 9}" font-style="italic">y</text>`;
  vas.forEach(v => s += `<line x1="${X(v)}" y1="${Tp}" x2="${X(v)}" y2="${Tp + ph}" stroke="#000" stroke-width="0.9" stroke-dasharray="5 4"/>`);
  has.forEach(v => s += `<line x1="${L}" y1="${Y(v)}" x2="${L + pw}" y2="${Y(v)}" stroke="#000" stroke-width="0.9" stroke-dasharray="5 4"/>`);
  s += `<clipPath id="c${w}${h}${xmin}${ymax}"><rect x="${L}" y="${Tp}" width="${pw}" height="${ph}"/></clipPath>`;
  fns.forEach(f => {
    let d = '', pen = false; const N = 900; let prev = null;
    for (let i = 0; i <= N; i++) {
      const x = xmin + (xmax - xmin) * i / N, y = f(x);
      const nearVA = vas.some(v => Math.abs(x - v) < (xmax - xmin) / N * 1.5);
      const ok = isFinite(y) && !nearVA && y > ymin - (ymax - ymin) * 2 && y < ymax + (ymax - ymin) * 2;
      if (!ok || (prev !== null && Math.abs(y - prev) > (ymax - ymin) * 1.5)) { pen = false; prev = ok ? y : null; if (!ok) continue; }
      d += (pen ? 'L' : 'M') + X(x).toFixed(2) + ' ' + Y(y).toFixed(2) + ' '; pen = true; prev = y;
    }
    s += `<path d="${d}" fill="none" stroke="#000" stroke-width="1.8" clip-path="url(#c${w}${h}${xmin}${ymax})"/>`;
  });
  if (label) s += `<text x="${L + 6}" y="${Tp + 12}" font-size="11" font-style="italic" font-weight="bold">${label}</text>`;
  return s + '</svg>';
}
function semilog({ pts, xmax, pmax, w = 260, h = 215 }) {
  const L = 44, R = 10, Tp = 10, B = 22, pw = w - L - R, ph = h - Tp - B;
  const X = x => L + x / xmax * pw, Y = p => Tp + (pmax - p) / pmax * ph;
  const sup = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶'];
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Liberation Sans, Arial" font-size="9">`;
  s += `<rect x="${L}" y="${Tp}" width="${pw}" height="${ph}" fill="#fff" stroke="#000" stroke-width="0.8"/>`;
  for (let x = 0; x <= xmax; x++) { s += `<line x1="${X(x)}" y1="${Tp}" x2="${X(x)}" y2="${Tp + ph}" stroke="#ddd" stroke-width="0.5"/><text x="${X(x)}" y="${Tp + ph + 11}" text-anchor="middle" fill="#333">${x}</text>`; }
  for (let p = 0; p <= pmax; p++) {
    s += `<line x1="${L}" y1="${Y(p)}" x2="${L + pw}" y2="${Y(p)}" stroke="#bbb" stroke-width="0.6"/><text x="${L - 4}" y="${Y(p) + 3}" text-anchor="end" fill="#333">${p === 0 ? '1' : p === 1 ? '10' : '10' + sup[p]}</text>`;
    if (p < pmax) for (let k = 2; k <= 9; k++) { const yy = Y(p + Math.log10(k)); s += `<line x1="${L}" y1="${yy}" x2="${L + pw}" y2="${yy}" stroke="#eee" stroke-width="0.4"/>`; }
  }
  const lp = pts.map(([x, y]) => [X(x), Y(Math.log10(y))]);
  s += `<line x1="${lp[0][0]}" y1="${lp[0][1]}" x2="${lp[lp.length - 1][0]}" y2="${lp[lp.length - 1][1]}" stroke="#000" stroke-width="1.4"/>`;
  lp.forEach(([a, b], i) => s += `<circle cx="${a}" cy="${b}" r="3" fill="#000"/><text x="${a + 6}" y="${b + 10}" font-weight="bold" font-size="10">${'ABC'[i]}</text>`);
  s += `<text x="${L + pw / 2}" y="${h - 1}" text-anchor="middle" font-style="italic">x</text><text x="9" y="${Tp + ph / 2}" text-anchor="middle" font-style="italic" transform="rotate(-90 9 ${Tp + ph / 2})">y (log scale)</text>`;
  return s + '</svg>';
}

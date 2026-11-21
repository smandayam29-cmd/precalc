/* Review content: 24 days of AP Precalculus Units 1 and 2.
   Math is written in LaTeX between $...$ (backslashes are doubled because this is a JS string).
   [[FIG:id]] is replaced by the figure with that id from FIGS below.
   Each problem: q = question, a = answer, calc = calculator allowed, back = day to redo (checkpoints). */
const START_DATE = '2026-11-20';   // Day 1
const EXAM_DATE  = '2026-12-14';   // midterm

const FIGS = {
  d1:  () => plot({ fns: [x => (x * x * x - 12 * x) / 8], xmin: -4, xmax: 4, ymin: -3, ymax: 3, label: 'g' }),
  d2:  () => plot({ fns: [x => x ** 4 / 4 - 2 * x * x], xmin: -3.4, xmax: 3.4, ymin: -5, ymax: 4, label: 'h' }),
  d4:  () => plot({ fns: [x => -0.15 * (x + 3) * (x + 1) * (x - 2) ** 2], xmin: -4.5, xmax: 4, ymin: -6, ymax: 4, label: 'p' }),
  d6:  () => plot({ fns: [x => 2 * (x - 1) / (x + 2)], xmin: -8, xmax: 6, ymin: -6, ymax: 10, vas: [-2], has: [2], label: 'f', w: 300, h: 250 }),
  d21: () => semilog({ pts: [[0, 10], [2, 1000], [4, 100000]], xmax: 5, pmax: 6 }),
};

const DAYS = [
 {
  "title": "Change in Tandem & Rates of Change",
  "src": "Notes 1A · Topics 1.1–1.2",
  "unit": 1,
  "know": [
   "A function sends each input to <b>exactly one</b> output. Inputs = domain, outputs = range.",
   "<b>Increasing:</b> outputs go up as inputs go up. <b>Decreasing:</b> outputs go down.",
   "\"Rate of change\" means <b>slope</b>. Average rate of change on $[a,b]$: $\\dfrac{f(b)-f(a)}{b-a}$.",
   "<b>Concave up:</b> the rate of change is increasing. <b>Concave down:</b> the rate of change is decreasing.",
   "Words matter: \"$f$ is increasing\" and \"the rate of change of $f$ is increasing\" are different statements."
  ],
  "probs": [
   {
    "q": "Find the average rate of change of $f(x)=x^2-3x$ on $[1,4]$.",
    "a": "$\\dfrac{f(4)-f(1)}{4-1}=\\dfrac{4-(-2)}{3}=2$"
   },
   {
    "q": "Find the average rate of change of $f(x)=\\dfrac{2}{x}$ on $[1,4]$.",
    "a": "$\\dfrac{0.5-2}{3}=-\\dfrac12$"
   },
   {
    "q": "Selected values of $f$ are shown.<table class=\"dt\"><tr><th>$x$</th><td>0</td><td>2</td><td>4</td><td>6</td><td>8</td></tr><tr><th>$f(x)$</th><td>3</td><td>7</td><td>10</td><td>12</td><td>13</td></tr></table>(a) Find the average rate of change on each interval of length 2.<br>(b) Is $f$ increasing or decreasing?<br>(c) Is the graph concave up or concave down? Explain using your rates.",
    "sp": 1.5,
    "a": "(a) $2,\\ 1.5,\\ 1,\\ 0.5$ (b) Increasing (outputs rise). (c) Concave down: the rates of change are decreasing."
   },
   {
    "q": "The graph of $g$ is shown on $[-4,4]$.<div class=\"fig\">[[FIG:d1]]</div>(a) On what intervals is $g$ increasing?<br>(b) On what interval is $g$ decreasing?<br>(c) Where is $g$ concave down? Concave up?<br>(d) Is the rate of change at $x=-3$ positive or negative?",
    "sp": 1.3,
    "wide": true,
    "a": "(a) $(-4,-2)$ and $(2,4)$ (b) $(-2,2)$ (c) Concave down on $(-4,0)$, concave up on $(0,4)$ (d) Positive ($g$ is increasing there)."
   },
   {
    "q": "Water is poured at a constant rate into a vase that is wide at the bottom and narrow at the top. Is the graph of water height versus time concave up or concave down? Explain.",
    "sp": 1.1,
    "a": "Concave up. The wide bottom fills slowly and the narrow top fills quickly, so the height's rate of change is increasing."
   },
   {
    "q": "A function is increasing, and its rate of change is decreasing. Describe the shape of its graph in two words, then sketch it.",
    "sp": 1,
    "a": "Increasing and concave down (rises, but levels off)."
   }
  ],
  "hints": [
   "For any average rate of change: what two points do you need, and what is the slope between them?",
   "For concavity from a table: are the slopes themselves getting bigger or smaller as you move right?",
   "For the vase: when is the water level rising fastest, and what does that say about the slope of the height graph?"
  ]
 },
 {
  "title": "Linear, Quadratic & Polynomial Rates of Change",
  "src": "Notes 1A · Topics 1.3–1.4",
  "unit": 1,
  "know": [
   "<b>Linear:</b> average rates of change over equal-length intervals are <b>constant</b>.",
   "<b>Quadratic:</b> the average rates of change form a <b>linear pattern</b> (they change by a constant amount), so second differences are constant.",
   "Polynomial: $p(x)=a_nx^n+\\dots+a_1x+a_0$. Degree $n$, leading coefficient $a_n$, leading term $a_nx^n$.",
   "Relative (local) extrema occur where the function switches between increasing and decreasing. The greatest local max is the absolute (global) max.",
   "<b>Point of inflection:</b> concavity changes, so the rate of change switches between increasing and decreasing.",
   "Between two real zeros there is at least one local extremum. An <b>even-degree</b> polynomial has a global max or a global min."
  ],
  "warm": [
   {
    "q": "Find the average rate of change of $f(x)=x^2$ on $[1,3]$.",
    "a": "$\\dfrac{9-1}{2}=4$"
   },
   {
    "q": "A graph is increasing and concave down. Is its rate of change positive or negative? Increasing or decreasing?",
    "a": "Positive and decreasing."
   }
  ],
  "probs": [
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$f(x)$</th><td>4</td><td>7</td><td>12</td><td>19</td><td>28</td></tr></table>Is $f$ linear, quadratic, or neither? Justify with differences.",
    "sp": 1.1,
    "a": "Quadratic. First differences $3,5,7,9$ are not constant; second differences are all $2$."
   },
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>0</td><td>3</td><td>6</td><td>9</td></tr><tr><th>$g(x)$</th><td>10</td><td>4</td><td>-2</td><td>-8</td></tr></table>Is $g$ linear, quadratic, or neither? Give its rate of change.",
    "sp": 1.1,
    "a": "Linear: the output drops $6$ for every $3$ units, so the rate of change is $-2$."
   },
   {
    "q": "For $f(x)=x^2-4x+1$, find the average rate of change on $[0,1]$, $[1,2]$ and $[2,3]$. What do these three numbers tell you about concavity?",
    "sp": 1.2,
    "a": "$-3,\\ -1,\\ 1$. The rates increase by $2$ each time, so the graph is concave up."
   },
   {
    "q": "For $p(x)=-2x^5+3x^4-x+7$, state the degree, the leading coefficient, the maximum number of real zeros, and the maximum number of turning points.",
    "sp": 1,
    "a": "Degree $5$; leading coefficient $-2$; at most $5$ real zeros; at most $4$ turning points."
   },
   {
    "q": "The graph of the polynomial $h$ is shown. Both ends continue upward.<div class=\"fig\">[[FIG:d2]]</div>(a) At what $x$-values does $h$ have local minimums? A local maximum?<br>(b) What is the absolute minimum value? Is there an absolute maximum?<br>(c) How many points of inflection does the graph have?",
    "sp": 1.2,
    "wide": true,
    "a": "(a) Local mins at $x=-2$ and $x=2$; local max at $x=0$. (b) Absolute min is $-4$; no absolute max (it rises without bound). (c) Two (one on each side, where the bend changes)."
   },
   {
    "q": "A polynomial has degree 4 and a positive leading coefficient. Must it have an absolute maximum, an absolute minimum, both, or neither? Why?",
    "sp": 0.9,
    "a": "An absolute minimum. Both ends go up, so there is a lowest point but no highest."
   }
  ],
  "hints": [
   "For a table: what do you get when you subtract consecutive outputs? If those aren't constant, what happens when you subtract again?",
   "For turning points: how does the maximum number compare with the degree?",
   "For inflection points on a graph: where does the curve switch from \"cup\" to \"cap\"?"
  ]
 },
 {
  "title": "Zeros, Multiplicity, Complex Zeros & Inequalities",
  "src": "Notes 1A · Topic 1.5",
  "unit": 1,
  "know": [
   "If $p(a)=0$ then $a$ is a zero (root), and for real $a$, $(x-a)$ is a factor.",
   "<b>Multiplicity</b> = the power on the factor. Odd multiplicity: graph <b>crosses</b> the $x$-axis. Even multiplicity: graph is <b>tangent</b> (bounces).",
   "Non-real zeros come in <b>conjugate pairs</b>: if $a+bi$ is a zero, so is $a-bi$ (real coefficients).",
   "A degree-$n$ polynomial has exactly $n$ complex zeros, counting multiplicity.",
   "<b>Even</b> function: $f(-x)=f(x)$, symmetric about the $y$-axis. <b>Odd</b>: $f(-x)=-f(x)$, symmetric about the origin.",
   "Inequalities: get $0$ on one side, find the zeros, make a <b>sign chart</b>, answer in interval notation."
  ],
  "warm": [
   {
    "q": "A table has constant <i>second</i> differences. What type of function is it?",
    "a": "Quadratic."
   },
   {
    "q": "What is the maximum number of turning points of a degree-5 polynomial?",
    "a": "$4$"
   }
  ],
  "probs": [
   {
    "q": "Find all zeros of $f(x)=x^3-4x^2-5x$.",
    "a": "$x(x-5)(x+1)=0$, so $x=0,\\ 5,\\ -1$"
   },
   {
    "q": "For $y=-0.01(x+4)(x+1)^3(x-3)^2$: list each zero with its multiplicity, say whether the graph crosses or is tangent there, and give the degree.",
    "sp": 1.3,
    "a": "$x=-4$ (mult. 1, crosses); $x=-1$ (mult. 3, crosses); $x=3$ (mult. 2, tangent). Degree $6$."
   },
   {
    "q": "A polynomial with real coefficients has zeros $2$ and $3-i$. (a) What other zero must it have? (b) What is the least possible degree? (c) Write it as a product of a linear factor and a quadratic factor with leading coefficient 1.",
    "sp": 1.4,
    "a": "(a) $3+i$ (b) $3$ (c) $(x-2)(x^2-6x+10)$"
   },
   {
    "q": "Solve $(x+3)(x+1)(x-3)>0$.",
    "sp": 1.2,
    "a": "$(-3,-1)\\cup(3,\\infty)$"
   },
   {
    "q": "Solve $x^2(x-4)\\le 0$. (Careful with the even multiplicity.)",
    "sp": 1.2,
    "a": "$(-\\infty,4]$. Since $x^2\\ge0$, the sign depends only on $x-4$; $x=0$ is included too."
   },
   {
    "q": "Classify as even, odd, or neither: (a) $f(x)=x^4-3x^2$ (b) $g(x)=x^3+x$ (c) $h(x)=x^3+1$",
    "sp": 1,
    "a": "(a) Even (b) Odd (c) Neither"
   }
  ],
  "hints": [
   "To find zeros: what can you factor out first?",
   "For conjugates: if $3-i$ is a zero, what does $(x-(3-i))(x-(3+i))$ multiply out to?",
   "On a sign chart, does the sign change when you pass a zero of even multiplicity?"
  ]
 },
 {
  "title": "Polynomial End Behavior",
  "src": "Notes 1A · Topic 1.6",
  "unit": 1,
  "know": [
   "End behavior is decided by the <b>leading term</b> $a_nx^n$ only.",
   "<b>Even degree:</b> both ends go the same way (up if $a_n>0$, down if $a_n<0$).",
   "<b>Odd degree:</b> ends go opposite ways. If $a_n>0$: down on the left, up on the right. If $a_n<0$: up on the left, down on the right.",
   "Write it with limits: $\\displaystyle\\lim_{x\\to\\infty}f(x)=\\infty$ means \"as $x$ increases without bound, $f(x)$ increases without bound.\"",
   "For a factored polynomial, multiply just the leading terms of each factor to get the leading term."
  ],
  "warm": [
   {
    "q": "At a zero of even multiplicity, does the graph cross the $x$-axis or is it tangent to it?",
    "a": "Tangent (it bounces)."
   },
   {
    "q": "$2-5i$ is a zero of a polynomial with real coefficients. Name another zero.",
    "a": "$2+5i$"
   }
  ],
  "probs": [
   {
    "q": "Write limit statements for the end behavior of $f(x)=-3x^4+2x$.",
    "sp": 1,
    "a": "$\\displaystyle\\lim_{x\\to-\\infty}f(x)=-\\infty$ and $\\displaystyle\\lim_{x\\to\\infty}f(x)=-\\infty$"
   },
   {
    "q": "Write limit statements for the end behavior of $g(x)=2x^5-x^2$.",
    "sp": 1,
    "a": "$\\displaystyle\\lim_{x\\to-\\infty}g(x)=-\\infty$ and $\\displaystyle\\lim_{x\\to\\infty}g(x)=\\infty$"
   },
   {
    "q": "A polynomial $p$ has $\\displaystyle\\lim_{x\\to-\\infty}p(x)=\\infty$ and $\\displaystyle\\lim_{x\\to\\infty}p(x)=-\\infty$. Is its degree even or odd? Is its leading coefficient positive or negative?",
    "sp": 1,
    "a": "Odd degree, negative leading coefficient."
   },
   {
    "q": "Find the leading term of $k(x)=(2-x)(x+1)^2(3x+5)$, then describe its end behavior.",
    "sp": 1.1,
    "a": "$(-x)(x^2)(3x)=-3x^4$. Both ends go to $-\\infty$."
   },
   {
    "q": "For $f(x)=x(x-2)^2(x+3)$, on what intervals is $f(x)>0$?",
    "sp": 1.3,
    "a": "$(-\\infty,-3)\\cup(0,2)\\cup(2,\\infty)$. The sign does not change at $x=2$ (even multiplicity)."
   },
   {
    "q": "The graph of the polynomial $p$ is shown.<div class=\"fig\">[[FIG:d4]]</div>(a) Write limit statements for the end behavior.<br>(b) Is the degree even or odd? Is the leading coefficient positive or negative?<br>(c) Which zero has even multiplicity?<br>(d) What is the least possible degree?",
    "sp": 1.3,
    "wide": true,
    "a": "(a) Both limits are $-\\infty$. (b) Even degree, negative leading coefficient. (c) $x=2$ (tangent). (d) $4$ (zeros at $-3$, $-1$ crossing, and $2$ with multiplicity 2)."
   }
  ],
  "hints": [
   "Which single term controls what happens far to the left and right?",
   "Plug a huge positive and a huge negative number into the leading term only. What signs do you get?",
   "For least degree from a graph: add up the smallest multiplicity each zero could have."
  ]
 },
 {
  "title": "Rational Functions: End Behavior, Zeros & Inequalities",
  "src": "Notes 1.7–1.14 · Topics 1.7–1.8",
  "unit": 1,
  "know": [
   "A rational function is a quotient of two polynomials. Compare the degrees of top ($n$) and bottom ($m$):",
   "$n=m$: horizontal asymptote $y=\\dfrac{a}{b}$ (ratio of leading coefficients). &nbsp; $n<m$: horizontal asymptote $y=0$.",
   "$n>m$: no horizontal asymptote; the ends behave like the polynomial $\\dfrac{a}{b}x^{\\,n-m}$. If $n=m+1$ there is a <b>slant asymptote</b>.",
   "After cancelling common factors: zeros come from the <b>numerator</b>; undefined values come from the <b>denominator</b>.",
   "Rational inequalities: put $0$ on one side, single fraction, then sign chart using <b>both</b> the zeros and the undefined values. Never include a value that makes the denominator $0$."
  ],
  "warm": [
   {
    "q": "Describe the left-end behavior of $5x^3-x$ with a limit statement.",
    "a": "$\\displaystyle\\lim_{x\\to-\\infty}(5x^3-x)=-\\infty$"
   },
   {
    "q": "Solve $(x-1)(x+2)<0$.",
    "a": "$(-2,1)$"
   }
  ],
  "probs": [
   {
    "q": "Find the horizontal asymptote of $f(x)=\\dfrac{6x^2-1}{2x^2+5x}$.",
    "a": "$y=3$"
   },
   {
    "q": "Find the horizontal asymptote of $g(x)=\\dfrac{4x+1}{x^2-9}$.",
    "a": "$y=0$"
   },
   {
    "q": "For $h(x)=\\dfrac{x^3+2}{x^2-1}$: is there a horizontal asymptote? Write limit statements for both ends.",
    "sp": 1.2,
    "a": "No horizontal asymptote (it has a slant asymptote). $\\displaystyle\\lim_{x\\to\\infty}h(x)=\\infty$, $\\displaystyle\\lim_{x\\to-\\infty}h(x)=-\\infty$ (behaves like $y=x$)."
   },
   {
    "q": "Find the zeros of $r(x)=\\dfrac{x^2-x-6}{x^2-4}$. (Factor first.)",
    "sp": 1.2,
    "a": "$\\dfrac{(x-3)(x+2)}{(x-2)(x+2)}$: the only zero is $x=3$. ($x=-2$ cancels, so it is a hole, not a zero.)"
   },
   {
    "q": "Solve $\\dfrac{x-1}{x+4}\\ge 0$.",
    "sp": 1.2,
    "a": "$(-\\infty,-4)\\cup[1,\\infty)$"
   },
   {
    "q": "Solve $\\dfrac{x+2}{(x-1)(x-5)}<0$.",
    "sp": 1.3,
    "a": "$(-\\infty,-2)\\cup(1,5)$"
   },
   {
    "q": "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{3x-2x^2}{x^2+1}$.",
    "a": "$-2$"
   }
  ],
  "hints": [
   "Which is bigger, the degree on top or the degree on the bottom? What does each case mean?",
   "Before naming zeros, did anything cancel?",
   "In an inequality, which endpoints can use a square bracket and which never can?"
  ]
 },
 {
  "title": "Vertical Asymptotes & Holes",
  "src": "Notes 1.7–1.14 · Topics 1.9–1.10",
  "unit": 1,
  "know": [
   "Both happen where the denominator equals $0$. <b>Factor everything first.</b>",
   "<b>Hole:</b> the factor cancels completely. Find its $y$-value by plugging into the simplified function.",
   "<b>Vertical asymptote:</b> the factor does <b>not</b> cancel out of the denominator.",
   "Near a vertical asymptote the outputs go to $\\pm\\infty$: $\\displaystyle\\lim_{x\\to a^-}f(x)$ is from the left, $\\displaystyle\\lim_{x\\to a^+}f(x)$ from the right.",
   "Domain: all real numbers except <b>every</b> $x$ that makes the original denominator $0$ (holes included)."
  ],
  "warm": [
   {
    "q": "Find the horizontal asymptote of $\\dfrac{3x+1}{x^2+4}$.",
    "a": "$y=0$"
   },
   {
    "q": "Find the average rate of change of $f(x)=\\dfrac1x$ on $[1,2]$.",
    "a": "$-\\dfrac12$"
   }
  ],
  "probs": [
   {
    "q": "For $h(x)=\\dfrac{x^2-9}{x^2-x-6}$, find: factored form, hole (as a point), vertical asymptote, horizontal asymptote, zero, and domain.",
    "sp": 1.7,
    "a": "$\\dfrac{(x-3)(x+3)}{(x-3)(x+2)}$. Hole at $\\left(3,\\tfrac65\\right)$; VA $x=-2$; HA $y=1$; zero $x=-3$; domain: all reals except $x=-2$ and $x=3$."
   },
   {
    "q": "For $k(x)=\\dfrac{x^2-x-2}{x^3-4x}$, find: factored form, zero, hole (as a point), vertical asymptotes, and horizontal asymptote.",
    "sp": 1.7,
    "a": "$\\dfrac{(x-2)(x+1)}{x(x-2)(x+2)}$. Zero $x=-1$; hole at $\\left(2,\\tfrac38\\right)$; VAs $x=0$ and $x=-2$; HA $y=0$."
   },
   {
    "q": "For $f(x)=\\dfrac{x+1}{x-3}$, find $\\displaystyle\\lim_{x\\to3^-}f(x)$ and $\\displaystyle\\lim_{x\\to3^+}f(x)$.",
    "sp": 1.1,
    "a": "$-\\infty$ from the left; $+\\infty$ from the right."
   },
   {
    "q": "For $f(x)=\\dfrac{1}{(x-2)^2}$, find $\\displaystyle\\lim_{x\\to2^-}f(x)$ and $\\displaystyle\\lim_{x\\to2^+}f(x)$.",
    "sp": 1,
    "a": "Both are $+\\infty$ (the square keeps it positive)."
   },
   {
    "q": "Write a rational function with a vertical asymptote at $x=-1$, a hole at $x=4$, a zero at $x=2$, and horizontal asymptote $y=3$.",
    "sp": 1.2,
    "a": "One answer: $f(x)=\\dfrac{3(x-2)(x-4)}{(x+1)(x-4)}$"
   },
   {
    "q": "The graph of the rational function $f$ is shown (dashed lines are asymptotes).<div class=\"fig\">[[FIG:d6]]</div>(a) Give the vertical and horizontal asymptotes and the zero.<br>(b) Write an equation of the form $f(x)=\\dfrac{a(x-b)}{x-c}$.",
    "sp": 1.2,
    "wide": true,
    "a": "(a) VA $x=-2$, HA $y=2$, zero $x=1$. (b) $f(x)=\\dfrac{2(x-1)}{x+2}$"
   }
  ],
  "hints": [
   "After factoring, which factors appear on both top and bottom? Which are left only on the bottom?",
   "For a one-sided limit, try a number just to the left (or right). Is the output a big positive or a big negative?",
   "When building a function: which feature tells you a factor goes in the numerator, the denominator, or both?"
  ]
 },
 {
  "title": "Thanksgiving Quick Check (10 minutes)",
  "src": "Mixed review of Days 1–6",
  "unit": 1,
  "light": true,
  "know": [
   "Light day. Do these six from memory, check the key, and circle anything you missed so you know which day to revisit."
  ],
  "probs": [
   {
    "q": "Find the average rate of change of $f(x)=x^3$ on $[-1,2]$.",
    "a": "$\\dfrac{8-(-1)}{3}=3$",
    "sp": 0.8
   },
   {
    "q": "A graph is concave down and increasing. Describe its rate of change (sign and whether it is increasing or decreasing).",
    "a": "Positive and decreasing.",
    "sp": 0.8
   },
   {
    "q": "List the zeros of $(x-1)^2(x+4)$ with multiplicities.",
    "a": "$x=1$ (mult. 2), $x=-4$ (mult. 1)",
    "sp": 0.8
   },
   {
    "q": "Write limit statements for the end behavior of $-x^3+5x$.",
    "a": "$\\displaystyle\\lim_{x\\to-\\infty}=\\infty$, $\\displaystyle\\lim_{x\\to\\infty}=-\\infty$",
    "sp": 0.8
   },
   {
    "q": "Find the horizontal asymptote of $\\dfrac{5x^2}{x^2+1}$.",
    "a": "$y=5$",
    "sp": 0.8
   },
   {
    "q": "Does $\\dfrac{x-3}{(x-3)^2}$ have a hole or a vertical asymptote at $x=3$? Why?",
    "a": "A vertical asymptote. It simplifies to $\\dfrac{1}{x-3}$, so a factor of $(x-3)$ is still in the denominator.",
    "sp": 0.9
   }
  ],
  "hints": [
   "For the last one: after cancelling, is anything still making the denominator zero at $x=3$?"
  ]
 },
 {
  "title": "Long Division, Slant Asymptotes & the Binomial Theorem",
  "src": "Notes 1.7–1.14 · Topic 1.11",
  "unit": 1,
  "know": [
   "Long division: $\\dfrac{f(x)}{g(x)}=q(x)+\\dfrac{r(x)}{g(x)}$, where $q$ is the quotient and $r$ the remainder.",
   "If the numerator's degree is exactly <b>one more</b> than the denominator's, the quotient $y=q(x)$ is the <b>slant asymptote</b> (ignore the remainder).",
   "Missing a power? Hold its place with a $0$ coefficient (for example $x^3+0x^2+\\dots$).",
   "<b>Binomial theorem:</b> $(a+b)^n$ uses row $n$ of Pascal's triangle for coefficients. Powers of $a$ count down from $n$; powers of $b$ count up from $0$.",
   "Pascal rows: $1$ &nbsp;|&nbsp; $1\\ 1$ &nbsp;|&nbsp; $1\\ 2\\ 1$ &nbsp;|&nbsp; $1\\ 3\\ 3\\ 1$ &nbsp;|&nbsp; $1\\ 4\\ 6\\ 4\\ 1$ &nbsp;|&nbsp; $1\\ 5\\ 10\\ 10\\ 5\\ 1$. The first row is row 0."
  ],
  "warm": [
   {
    "q": "Hole or vertical asymptote at $x=2$ for $\\dfrac{(x-2)(x+1)}{(x-2)(x+5)}$?",
    "a": "Hole (the factor cancels)."
   },
   {
    "q": "What is the degree of $(x-1)^2(x+2)^3$?",
    "a": "$5$"
   }
  ],
  "probs": [
   {
    "q": "Divide $(2x^2+3x-4)\\div(x-1)$. Then give the slant asymptote of $y=\\dfrac{2x^2+3x-4}{x-1}$.",
    "sp": 1.7,
    "a": "Quotient $2x+5$, remainder $1$. Slant asymptote $y=2x+5$."
   },
   {
    "q": "Divide $(x^3-2x^2+4)\\div(x+1)$.",
    "sp": 1.7,
    "a": "$x^2-3x+3$ remainder $1$, i.e. $x^2-3x+3+\\dfrac{1}{x+1}$"
   },
   {
    "q": "Find all asymptotes of $g(x)=\\dfrac{x^2+4x+1}{x+2}$.",
    "sp": 1.5,
    "a": "Vertical: $x=-2$. Slant: $y=x+2$ (remainder $-3$). No horizontal asymptote."
   },
   {
    "q": "Expand $(x+2)^4$.",
    "sp": 1.2,
    "a": "$x^4+8x^3+24x^2+32x+16$"
   },
   {
    "q": "Expand $(2x-1)^3$.",
    "sp": 1.2,
    "a": "$8x^3-12x^2+6x-1$"
   },
   {
    "q": "Find the coefficient of the $x^3$ term in $(x+3)^5$.",
    "sp": 1.1,
    "a": "$\\dbinom52(3)^2=10\\cdot 9=90$"
   },
   {
    "q": "Write row 6 of Pascal's triangle.",
    "sp": 0.7,
    "a": "$1\\ \\ 6\\ \\ 15\\ \\ 20\\ \\ 15\\ \\ 6\\ \\ 1$"
   }
  ],
  "hints": [
   "In each division step: what do you multiply the divisor's first term by to match the current leading term?",
   "When does a rational function get a slant asymptote instead of a horizontal one?",
   "For $(2x-1)^3$: what are \"$a$\" and \"$b$\"? Did you raise the whole $2x$ to the power, and keep the negative with the $1$?"
  ]
 },
 {
  "title": "Parent Functions, Piecewise Functions & Transformations",
  "src": "Unit 1C Notes · Topic 1.12",
  "unit": 1,
  "know": [
   "Parent functions to recognize: $c$, $x$, $|x|$, $x^2$, $x^3$, $\\sqrt{x}$, $\\dfrac1x$, and the greatest integer (step) function $\\lfloor x\\rfloor$.",
   "$f(x)+k$: up $k$. &nbsp; $f(x+h)$: <b>left</b> $h$. &nbsp; $a\\,f(x)$: vertical dilation by $|a|$. &nbsp; $f(bx)$: horizontal dilation by $\\left|\\tfrac1b\\right|$.",
   "$-f(x)$ reflects over the $x$-axis. $f(-x)$ reflects over the $y$-axis.",
   "Changes <b>inside</b> the parentheses affect $x$ and do the <b>opposite</b> of what they look like. Changes <b>outside</b> affect $y$ and do exactly what they look like.",
   "$|f(x)|$: any part of the graph below the $x$-axis flips above it. $f(|x|)$: the right side is copied onto the left.",
   "Piecewise: first decide which rule's condition your $x$ satisfies, then use only that rule."
  ],
  "warm": [
   {
    "q": "Find the quotient and remainder: $(x^2+3x+1)\\div(x+1)$.",
    "a": "Quotient $x+2$, remainder $-1$."
   },
   {
    "q": "Evaluate $\\displaystyle\\lim_{x\\to\\infty}\\dfrac{4x^2-1}{2x^2+3}$.",
    "a": "$2$"
   }
  ],
  "probs": [
   {
    "q": "Describe, in order, the transformations that take $f$ to $g(x)=-2f(x+3)+1$.",
    "sp": 1.2,
    "a": "Left $3$; vertical dilation by a factor of $2$; reflection over the $x$-axis; up $1$."
   },
   {
    "q": "The point $(4,6)$ is on the graph of $f$. Find the matching point on (a) $g(x)=f(2x)-5$ and (b) $h(x)=3f(x-1)$.",
    "sp": 1.2,
    "a": "(a) $(2,1)$ (b) $(5,18)$"
   },
   {
    "q": "Write the equation of $y=\\sqrt{x}$ after a reflection over the $y$-axis and a shift up 4. Give its domain and range.",
    "sp": 1.2,
    "a": "$g(x)=\\sqrt{-x}+4$; domain $(-\\infty,0]$; range $[4,\\infty)$"
   },
   {
    "q": "$f(x)=\\begin{cases}x^2+1, & x<0\\\\ 3, & 0\\le x<2\\\\ 2x-5, & x\\ge 2\\end{cases}$ &nbsp; Find $f(-2)$, $f(0)$, $f(2)$ and $f(5)$.",
    "sp": 1.2,
    "a": "$5,\\ 3,\\ -1,\\ 5$"
   },
   {
    "q": "Evaluate the greatest integer function: $\\lfloor 3.7\\rfloor$, $\\lfloor -1.2\\rfloor$, $\\lfloor 5\\rfloor$.",
    "sp": 0.8,
    "a": "$3,\\ -2,\\ 5$"
   },
   {
    "q": "For $g(x)=-|x-2|+5$: give the vertex, domain and range.",
    "sp": 1,
    "a": "Vertex $(2,5)$; domain all real numbers; range $(-\\infty,5]$"
   },
   {
    "q": "Of the parent functions $x$, $x^2$, $x^3$, $|x|$ and $\\dfrac1x$, which are even and which are odd?",
    "sp": 0.9,
    "a": "Even: $x^2$, $|x|$. Odd: $x$, $x^3$, $\\dfrac1x$."
   },
   {
    "q": "In words: how does the graph of $y=|f(x)|$ differ from $y=f(x)$? How does $y=f(|x|)$ differ?",
    "sp": 1,
    "a": "$|f(x)|$: parts below the $x$-axis reflect above it. $f(|x|)$: the left side is replaced by a mirror image of the right side."
   }
  ],
  "hints": [
   "Is the change inside the parentheses (affects $x$, acts \"backwards\") or outside (affects $y$)?",
   "For $f(2x)$: what must the new $x$ be so that the inside still equals $4$?",
   "For piecewise: at a boundary like $x=2$, which inequality includes the \"equal to\"?"
  ]
 },
 {
  "title": "Partial Fractions, Modeling & Residuals",
  "src": "Unit 1C Notes · Topics 1.13–1.14",
  "unit": 1,
  "know": [
   "<b>Partial fractions:</b> factor the denominator, write $\\dfrac{A}{\\text{factor}_1}+\\dfrac{B}{\\text{factor}_2}$, clear fractions, then plug in the $x$-values that make each factor $0$.",
   "Choosing a model: <b>linear</b> = roughly constant rate of change. <b>Quadratic</b> = rates of change that are roughly linear, a single max/min, or an area context. <b>Cubic</b> = volume context.",
   "TI-84 regression: STAT → Edit (L1 = $x$, L2 = $y$), then STAT → CALC → choose the model.",
   "<b>Residual = actual − predicted.</b> Positive residual: the model underestimated. Negative: it overestimated.",
   "A model is appropriate when its residual plot shows no pattern."
  ],
  "warm": [
   {
    "q": "$(2,5)$ is on $f$. What point is on $y=f(x+3)-1$?",
    "a": "$(-1,4)$"
   },
   {
    "q": "Expand $(x+1)^3$.",
    "a": "$x^3+3x^2+3x+1$"
   }
  ],
  "probs": [
   {
    "q": "Find the partial fraction decomposition of $\\dfrac{5x+1}{(x-1)(x+2)}$.",
    "sp": 1.6,
    "a": "$\\dfrac{2}{x-1}+\\dfrac{3}{x+2}$"
   },
   {
    "q": "Find the partial fraction decomposition of $\\dfrac{x+7}{x^2-x-6}$.",
    "sp": 1.6,
    "a": "$\\dfrac{2}{x-3}-\\dfrac{1}{x+2}$"
   },
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$y$</th><td>2.1</td><td>4</td><td>6.1</td><td>7.9</td><td>10</td></tr></table>Would a linear, quadratic, or cubic model be most appropriate? Give a reason.",
    "sp": 1,
    "a": "Linear: the rate of change is roughly constant (about $2$ per unit)."
   },
   {
    "q": "<table class=\"dt\"><tr><th>$t$ (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>height (m)</th><td>5</td><td>24.6</td><td>34.4</td><td>34.4</td><td>24.6</td></tr></table>Which model type fits the height of this ball? Give a reason.",
    "sp": 1,
    "a": "Quadratic: the data are symmetric with a single maximum, and the rates of change decrease steadily."
   },
   {
    "q": "A model predicts a baby weighs $4.6$ kg. The actual weight is $4.4$ kg. Find the residual and say whether the model overestimated or underestimated.",
    "sp": 1,
    "a": "$4.4-4.6=-0.2$ kg. The model overestimated."
   },
   {
    "calc": true,
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$y$</th><td>2.3</td><td>4.1</td><td>6.2</td><td>7.8</td><td>10.1</td></tr></table>(a) Find the linear regression model $y=ax+b$.<br>(b) Predict $y$ when $x=7$.<br>(c) Find the residual at $x=4$.",
    "sp": 1.4,
    "a": "(a) $y=1.93x+0.31$ (b) $13.82$ (c) $7.8-8.03=-0.23$"
   },
   {
    "q": "A problem asks you to model the <i>volume</i> of a box as its side length changes. Which polynomial model type would you expect? What about the <i>area</i> of a garden?",
    "sp": 0.9,
    "a": "Volume: cubic. Area: quadratic."
   }
  ],
  "hints": [
   "After clearing fractions, which value of $x$ makes the $B$ term disappear so you can solve for $A$?",
   "Look at the differences in the table: are they about constant, or do they themselves change steadily?",
   "Residual: which comes first in the subtraction, the real data value or the model's value?"
  ]
 },
 {
  "title": "Unit 1 Checkpoint",
  "src": "All of Unit 1 · no notes",
  "unit": 1,
  "check": true,
  "know": [
   "Treat this like a quiz: 30 minutes, no notes, calculator only where marked. Score it with the key, then use the table at the bottom to see which day to redo."
  ],
  "probs": [
   {
    "q": "Find the average rate of change of $f(x)=x^2+2x$ on $[-1,3]$.",
    "a": "$\\dfrac{15-(-1)}{4}=4$",
    "sp": 0.9,
    "back": 1
   },
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$f(x)$</th><td>2</td><td>5</td><td>10</td><td>17</td><td>26</td></tr></table>Linear, quadratic, or neither?",
    "a": "Quadratic (second differences are all $2$).",
    "sp": 0.8,
    "back": 2
   },
   {
    "q": "For $f(x)=x^3(x-2)^2(x+5)$, list the zeros with multiplicities and give the degree.",
    "a": "$0$ (mult. 3), $2$ (mult. 2), $-5$ (mult. 1); degree $6$",
    "sp": 0.9,
    "back": 3
   },
   {
    "q": "A polynomial with real coefficients has zeros $4i$ and $-1$. What is its least possible degree?",
    "a": "$3$ (it must also have $-4i$).",
    "sp": 0.8,
    "back": 3
   },
   {
    "q": "Solve $x(x-2)(x+4)\\ge 0$.",
    "a": "$[-4,0]\\cup[2,\\infty)$",
    "sp": 1.1,
    "back": 3
   },
   {
    "q": "Write limit statements for the end behavior of $f(x)=-2x^3(x-1)^2$.",
    "a": "Leading term $-2x^5$: $\\displaystyle\\lim_{x\\to-\\infty}f(x)=\\infty$, $\\displaystyle\\lim_{x\\to\\infty}f(x)=-\\infty$",
    "sp": 1,
    "back": 4
   },
   {
    "q": "For $f(x)=\\dfrac{2x^2-8}{x^2-x-2}$, find the hole (as a point), vertical asymptote, horizontal asymptote and zero.",
    "a": "$\\dfrac{2(x-2)(x+2)}{(x-2)(x+1)}$: hole $\\left(2,\\tfrac83\\right)$; VA $x=-1$; HA $y=2$; zero $x=-2$",
    "sp": 1.4,
    "back": 6
   },
   {
    "q": "Solve $\\dfrac{x-3}{x+1}\\le 0$.",
    "a": "$(-1,3]$",
    "sp": 1.1,
    "back": 5
   },
   {
    "q": "Find the slant asymptote of $y=\\dfrac{x^2-3x+5}{x-1}$.",
    "a": "$y=x-2$ (remainder $3$)",
    "sp": 1.3,
    "back": 8
   },
   {
    "q": "Expand $(x-2)^4$.",
    "a": "$x^4-8x^3+24x^2-32x+16$",
    "sp": 1.1,
    "back": 8
   },
   {
    "q": "$(3,-2)$ is on $f$. Find the matching point on $g(x)=-f(x-4)+1$.",
    "a": "$(7,3)$",
    "sp": 0.9,
    "back": 9
   },
   {
    "q": "A model predicts $11.8$; the actual value is $12.5$. Find the residual. Did the model overestimate or underestimate?",
    "a": "$0.7$; underestimate",
    "sp": 0.9,
    "back": 10
   }
  ],
  "hints": []
 },
 {
  "title": "Composition & Inverse Functions",
  "src": "Unit 2A Packet · Day 1 (2.7–2.8)",
  "unit": 2,
  "know": [
   "$f(g(x))$, also written $(f\\circ g)(x)$: work from the <b>inside out</b>. Evaluate $g$ first, then put that answer into $f$.",
   "Order matters: $f(g(x))$ and $g(f(x))$ are usually different.",
   "<b>Inverse:</b> $f^{-1}$ undoes $f$. If $f(a)=b$ then $f^{-1}(b)=a$. Domain and range swap; the graphs reflect over $y=x$.",
   "To find an inverse: write $y=f(x)$, swap $x$ and $y$, solve for $y$.",
   "Check: $f(f^{-1}(x))=x$ and $f^{-1}(f(x))=x$.",
   "A function has an inverse function only if it is <b>one-to-one</b> (each output comes from one input). Otherwise restrict the domain."
  ],
  "warm": [
   {
    "q": "Solve $x(x-3)>0$.",
    "a": "$(-\\infty,0)\\cup(3,\\infty)$"
   },
   {
    "q": "Find the vertical asymptotes of $\\dfrac{1}{x^2-9}$.",
    "a": "$x=3$ and $x=-3$"
   }
  ],
  "probs": [
   {
    "q": "Let $f(x)=2x+3$ and $g(x)=x^2-1$. Evaluate (a) $f(g(2))$ (b) $g(f(2))$ (c) $f(f(1))$.",
    "sp": 1.1,
    "a": "(a) $9$ (b) $48$ (c) $13$"
   },
   {
    "q": "With the same $f$ and $g$, find expressions for (a) $f(g(x))$ and (b) $g(f(x))$.",
    "sp": 1.3,
    "a": "(a) $2x^2+1$ (b) $(2x+3)^2-1=4x^2+12x+8$"
   },
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$f(x)$</th><td>3</td><td>1</td><td>4</td><td>2</td></tr><tr><th>$g(x)$</th><td>2</td><td>4</td><td>1</td><td>3</td></tr></table>Find (a) $f(g(1))$ (b) $g(f(3))$ (c) $f^{-1}(4)$ (d) $g(g(2))$.",
    "sp": 1.1,
    "a": "(a) $1$ (b) $3$ (c) $3$ (d) $3$"
   },
   {
    "q": "Find the inverse of (a) $h(x)=\\dfrac{x-4}{3}$ and (b) $k(x)=x^3+2$.",
    "sp": 1.3,
    "a": "(a) $h^{-1}(x)=3x+4$ (b) $k^{-1}(x)=\\sqrt[3]{x-2}$"
   },
   {
    "q": "Find the inverse of $m(x)=\\dfrac{2x+1}{x-3}$.",
    "sp": 1.6,
    "a": "$m^{-1}(x)=\\dfrac{3x+1}{x-2}$"
   },
   {
    "q": "Write $H(x)=\\sqrt{x^2+5}$ as a composition $f(g(x))$.",
    "sp": 0.9,
    "a": "$g(x)=x^2+5$, $f(x)=\\sqrt{x}$"
   },
   {
    "q": "$f$ has domain $[0,\\infty)$ and range $[-3,\\infty)$ and is one-to-one. Give the domain and range of $f^{-1}$.",
    "sp": 0.9,
    "a": "Domain $[-3,\\infty)$; range $[0,\\infty)$"
   },
   {
    "q": "Why does $f(x)=x^2$ (all real $x$) not have an inverse function? How could you fix that?",
    "sp": 0.9,
    "a": "It is not one-to-one ($2$ and $-2$ give the same output). Restrict the domain, e.g. $x\\ge0$."
   }
  ],
  "hints": [
   "Which function is on the inside? What number comes out of it?",
   "For a rational inverse: after swapping, get every term with $y$ on one side. What can you factor out?",
   "$f^{-1}(4)$ asks: which input gives an output of $4$?"
  ]
 },
 {
  "title": "Arithmetic & Geometric Sequences",
  "src": "Unit 2A Packet · Day 2 (2.1)",
  "unit": 2,
  "know": [
   "<b>Arithmetic:</b> add a common difference $d$ each time. $a_n=a_1+d(n-1)$, or from any known term, $a_n=a_k+d(n-k)$.",
   "<b>Geometric:</b> multiply by a common ratio $r$ each time. $g_n=g_1\\,r^{\\,n-1}$, or $g_n=g_k\\,r^{\\,n-k}$.",
   "If the sequence starts at $n=0$: $a_n=a_0+dn$ and $g_n=g_0\\,r^n$.",
   "Arithmetic sequences behave like <b>linear</b> functions; geometric sequences behave like <b>exponential</b> functions. But a sequence's graph is separate points, not a connected curve.",
   "To test: subtract consecutive terms (constant → arithmetic) or divide them (constant → geometric)."
  ],
  "warm": [
   {
    "q": "$f(x)=x+4$, $g(x)=x^2$. Find $f(g(3))$.",
    "a": "$13$"
   },
   {
    "q": "Find the inverse of $f(x)=5x-2$.",
    "a": "$f^{-1}(x)=\\dfrac{x+2}{5}$"
   }
  ],
  "probs": [
   {
    "q": "For the arithmetic sequence $7, 11, 15, \\dots$ write a formula for $a_n$ and find $a_{20}$.",
    "sp": 1.1,
    "a": "$a_n=7+4(n-1)=4n+3$; $a_{20}=83$"
   },
   {
    "q": "For the geometric sequence $3, 6, 12, \\dots$ write a formula for $g_n$ and find $g_{10}$.",
    "sp": 1.1,
    "a": "$g_n=3\\cdot 2^{\\,n-1}$; $g_{10}=1536$"
   },
   {
    "q": "An arithmetic sequence has $a_3=10$ and $a_7=26$. Find $d$, $a_1$, and a formula for $a_n$.",
    "sp": 1.3,
    "a": "$d=4$, $a_1=2$, $a_n=4n-2$"
   },
   {
    "q": "A geometric sequence has $g_2=12$ and $g_5=324$. Find $r$, $g_1$, and a formula for $g_n$.",
    "sp": 1.3,
    "a": "$r^3=27$ so $r=3$; $g_1=4$; $g_n=4\\cdot3^{\\,n-1}$"
   },
   {
    "q": "Classify each as arithmetic, geometric, or neither, and give $d$ or $r$:<br>(a) $5, 2, -1, -4$ &nbsp; (b) $2, 6, 18, 54$ &nbsp; (c) $1, 4, 9, 16$ &nbsp; (d) $80, 40, 20, 10$",
    "sp": 1.2,
    "a": "(a) Arithmetic, $d=-3$ (b) Geometric, $r=3$ (c) Neither (d) Geometric, $r=\\tfrac12$"
   },
   {
    "q": "A sequence has $a_0=5$ and common difference $3$. Write $a_n$. Which type of function does it match?",
    "sp": 0.9,
    "a": "$a_n=5+3n$; linear (slope $3$)."
   },
   {
    "q": "A sequence has $g_0=100$ and each term is $90\\%$ of the one before. Write $g_n$ and find $g_3$.",
    "sp": 1,
    "a": "$g_n=100(0.9)^n$; $g_3=72.9$"
   }
  ],
  "hints": [
   "How many \"steps\" are there from term 3 to term 7? What must each step add (or multiply by)?",
   "Is the pattern adding the same amount or multiplying by the same amount?",
   "Does your formula give the right first term when you plug in $n=1$?"
  ]
 },
 {
  "title": "Arithmetic & Geometric Series",
  "src": "Unit 2A Packet · Day 3",
  "unit": 2,
  "know": [
   "A <b>series</b> is the sum of the terms of a sequence. $\\displaystyle\\sum_{k=1}^{n}a_k$ means add $a_1+a_2+\\dots+a_n$.",
   "<b>Finite arithmetic:</b> $S_n=\\dfrac{n(a_1+a_n)}{2}$, or $S_n=\\dfrac n2\\bigl(2a_1+(n-1)d\\bigr)$.",
   "<b>Finite geometric:</b> $S_n=\\dfrac{a_1(1-r^n)}{1-r}$.",
   "<b>Infinite geometric:</b> converges only if $|r|<1$, and then $S=\\dfrac{a_1}{1-r}$. If $|r|\\ge 1$ it diverges (no sum).",
   "Count the number of terms carefully: from $k=3$ to $k=6$ is $4$ terms."
  ],
  "warm": [
   {
    "q": "Write a formula for $a_n$: $10, 7, 4, 1, \\dots$",
    "a": "$a_n=13-3n$"
   },
   {
    "q": "Describe the end behavior of $y=-x^4$.",
    "a": "Both ends go to $-\\infty$."
   }
  ],
  "probs": [
   {
    "q": "Evaluate $\\displaystyle\\sum_{k=1}^{5}3k$.",
    "sp": 0.9,
    "a": "$3+6+9+12+15=45$"
   },
   {
    "q": "Evaluate $\\displaystyle\\sum_{k=3}^{6}k^2$.",
    "sp": 0.9,
    "a": "$9+16+25+36=86$"
   },
   {
    "q": "Find the sum of the first 20 terms of $7, 11, 15, \\dots$",
    "sp": 1.1,
    "a": "$a_{20}=83$, so $S_{20}=\\dfrac{20(7+83)}{2}=900$"
   },
   {
    "q": "Find $1+2+3+\\dots+100$.",
    "sp": 0.9,
    "a": "$\\dfrac{100(1+100)}{2}=5050$"
   },
   {
    "q": "Find the sum of the first 8 terms of $3, 6, 12, \\dots$",
    "sp": 1.1,
    "a": "$\\dfrac{3(1-2^8)}{1-2}=765$"
   },
   {
    "q": "Find the sum, if it exists: $12+6+3+\\dots$",
    "sp": 1,
    "a": "$r=\\tfrac12$, so $S=\\dfrac{12}{1-\\frac12}=24$"
   },
   {
    "q": "Find the sum, if it exists: $5+10+20+\\dots$",
    "sp": 0.8,
    "a": "Diverges ($r=2$, and $|r|\\ge1$)."
   },
   {
    "q": "Evaluate $\\displaystyle\\sum_{n=1}^{\\infty}4\\left(\\tfrac13\\right)^{n-1}$.",
    "sp": 1,
    "a": "$\\dfrac{4}{1-\\frac13}=6$"
   },
   {
    "q": "Write $4+7+10+\\dots+31$ in sigma notation, then find the sum.",
    "sp": 1.2,
    "a": "$\\displaystyle\\sum_{n=1}^{10}(3n+1)=\\dfrac{10(4+31)}{2}=175$"
   }
  ],
  "hints": [
   "Is the series arithmetic or geometric? Which formula goes with that?",
   "For an infinite series: what is $r$, and is $|r|$ less than 1?",
   "For sigma notation: what formula gives the terms, and which $n$ gives the last term?"
  ]
 },
 {
  "title": "Linear vs. Exponential & Exponential Functions",
  "src": "Unit 2A Packet · Days 4–5 (2.2–2.3)",
  "unit": 2,
  "know": [
   "<b>Linear:</b> over equal-length input intervals, outputs change by a constant <b>difference</b>. <b>Exponential:</b> outputs change by a constant <b>ratio</b> (proportionally).",
   "Exponential function: $f(x)=a\\,b^x$ with $a\\ne0$, $b>0$, $b\\ne1$. $a$ is the initial value, $b$ is the base (growth factor).",
   "For $a>0$: growth if $b>1$, decay if $0<b<1$.",
   "Exponential functions are <b>always</b> increasing or always decreasing, and always concave up or always concave down: no extrema, no points of inflection.",
   "End behavior: one end goes to $\\pm\\infty$ and the other approaches $0$ (horizontal asymptote $y=0$, or $y=k$ after a vertical shift of $k$)."
  ],
  "warm": [
   {
    "q": "Find $1+2+3+\\dots+50$.",
    "a": "$1275$"
   },
   {
    "q": "Find the hole of $y=\\dfrac{x^2-4}{x-2}$ as a point.",
    "a": "$(2,4)$"
   }
  ],
  "probs": [
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>$f(x)$</th><td>5</td><td>15</td><td>45</td><td>135</td></tr><tr><th>$g(x)$</th><td>5</td><td>8</td><td>11</td><td>14</td></tr></table>Decide whether each function is linear or exponential, and write an equation for each.",
    "sp": 1.2,
    "a": "$f$ is exponential (ratio $3$): $f(x)=5\\cdot3^x$. $g$ is linear (difference $3$): $g(x)=3x+5$."
   },
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>0</td><td>2</td><td>4</td><td>6</td></tr><tr><th>$f(x)$</th><td>4</td><td>12</td><td>36</td><td>108</td></tr></table>Write an exponential equation $f(x)=a\\,b^x$ for these data. (Note the inputs go up by 2.)",
    "sp": 1.2,
    "a": "Ratio $3$ every $2$ units, so $b=\\sqrt3$: $f(x)=4\\left(\\sqrt3\\right)^x=4\\cdot3^{x/2}$"
   },
   {
    "q": "For each, state growth or decay (if it applies), increasing or decreasing, and concave up or down:<br>(a) $f(x)=2(1.5)^x$ &nbsp; (b) $g(x)=5(0.8)^x$ &nbsp; (c) $h(x)=-3(2)^x$",
    "sp": 1.3,
    "a": "(a) Growth, increasing, concave up (b) Decay, decreasing, concave up (c) Decreasing, concave down"
   },
   {
    "q": "Evaluate: (a) $\\displaystyle\\lim_{x\\to\\infty}4(0.5)^x$ (b) $\\displaystyle\\lim_{x\\to-\\infty}4(0.5)^x$ (c) $\\displaystyle\\lim_{x\\to\\infty}-2(3)^x$ (d) $\\displaystyle\\lim_{x\\to-\\infty}-2(3)^x$",
    "sp": 1.2,
    "a": "(a) $0$ (b) $\\infty$ (c) $-\\infty$ (d) $0$"
   },
   {
    "q": "An exponential function $f(x)=a\\,b^x$ passes through $(0,6)$ and $(2,54)$. Find $a$ and $b$.",
    "sp": 1.1,
    "a": "$a=6$; $6b^2=54$ so $b=3$. $f(x)=6\\cdot3^x$"
   },
   {
    "q": "Linear or exponential? (a) A town gains 200 people each year. (b) A town grows 5% each year.",
    "sp": 0.8,
    "a": "(a) Linear (constant amount added) (b) Exponential (constant percent, so a constant ratio of $1.05$)"
   },
   {
    "q": "For $g(x)=3\\cdot2^x+4$, give the horizontal asymptote, domain and range.",
    "sp": 0.9,
    "a": "HA $y=4$; domain all real numbers; range $(4,\\infty)$"
   }
  ],
  "hints": [
   "Do the outputs go up by adding the same number or by multiplying by the same number?",
   "If the ratio is $3$ over an input jump of $2$, what do you multiply by for a jump of $1$?",
   "For a limit of $b^x$: what happens to a number between 0 and 1 when raised to a huge power? To a base bigger than 1 raised to a very negative power?"
  ]
 },
 {
  "title": "Exponential Manipulation, Modeling & the Number e",
  "src": "Unit 2A Packet · Days 5–6 (2.4–2.6)",
  "unit": 2,
  "know": [
   "Exponent rules: $b^mb^n=b^{m+n}$, &nbsp; $(b^m)^n=b^{mn}$, &nbsp; $b^{-n}=\\dfrac{1}{b^n}$.",
   "So a horizontal shift is a vertical dilation: $2^{x+3}=8\\cdot2^x$. And a horizontal dilation changes the base: $4^{x/2}=2^x$.",
   "If a table is not proportional, try adding or subtracting a constant from the outputs: $f(x)=a\\,b^x+k$.",
   "Build a model from two points: write two equations $y_1=a\\,b^{x_1}$, $y_2=a\\,b^{x_2}$ and divide them to find $b$.",
   "Percent change: growth of $p\\%$ means $b=1+\\dfrac{p}{100}$; decay means $b=1-\\dfrac{p}{100}$.",
   "$e\\approx2.718$. $a\\,e^{kt}$ is the same as $a\\,b^t$ with $b=e^k$. To change time units (years → months) use $b^{t/12}=\\left(b^{1/12}\\right)^t$."
  ],
  "warm": [
   {
    "q": "For $f(x)=4(3)^x$: growth or decay? What is $f(0)$?",
    "a": "Growth; $f(0)=4$"
   },
   {
    "q": "Find the sum: $8+4+2+1+\\dots$",
    "a": "$\\dfrac{8}{1-\\frac12}=16$"
   }
  ],
  "probs": [
   {
    "q": "Rewrite each in the requested form: (a) $2^{x+3}$ as $a\\cdot2^x$ (b) $9^x$ with base $3$ (c) $\\left(\\tfrac12\\right)^x$ with base $2$ (d) $4^{x/2}$ with base $2$",
    "sp": 1.2,
    "a": "(a) $8\\cdot2^x$ (b) $3^{2x}$ (c) $2^{-x}$ (d) $2^x$"
   },
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$f(x)$</th><td>5</td><td>8</td><td>14</td><td>26</td><td>50</td></tr></table>Find a constant to subtract from the outputs so they become proportional, then write an equation for $f$.",
    "sp": 1.3,
    "a": "Subtract $2$: $3, 6, 12, 24, 48$ (ratio $2$). $f(x)=3\\cdot2^x+2$"
   },
   {
    "q": "An exponential function $g(x)=a\\,b^x$ has $g(2)=20$ and $g(5)=160$. Write two equations and find $a$ and $b$.",
    "sp": 1.4,
    "a": "$ab^2=20$, $ab^5=160$. Dividing: $b^3=8$, $b=2$, $a=5$. $g(x)=5\\cdot2^x$"
   },
   {
    "calc": true,
    "q": "A population of 80 deer increases by 6% each year. (a) Write $P(t)$. (b) Find the population after 10 years. (c) Rewrite the model with $m$ in months.",
    "sp": 1.4,
    "a": "(a) $P(t)=80(1.06)^t$ (b) $\\approx143$ deer (c) $P=80\\left(1.06^{1/12}\\right)^m\\approx80(1.00487)^m$"
   },
   {
    "calc": true,
    "q": "$B(t)=50e^{0.2t}$ models bacteria after $t$ hours. (a) Write it as $a\\,b^t$. (b) Find $B(10)$. (c) Find the average rate of change from $t=0$ to $t=10$.",
    "sp": 1.4,
    "a": "(a) $b=e^{0.2}\\approx1.221$, so $50(1.221)^t$ (b) $\\approx369.45$ (c) $\\approx31.95$ bacteria per hour"
   },
   {
    "calc": true,
    "q": "A car worth 24,000 dollars loses 15% of its value each year. Write $V(t)$ and find its value after 3 years.",
    "sp": 1.1,
    "a": "$V(t)=24000(0.85)^t$; $V(3)\\approx14{,}739$ dollars"
   },
   {
    "q": "You fit an exponential model and the residual plot shows a clear U-shaped pattern. What does that tell you?",
    "sp": 0.8,
    "a": "The model is not appropriate; a good model's residuals look random with no pattern."
   }
  ],
  "hints": [
   "Which exponent rule lets you split $2^{x+3}$ into two factors?",
   "If you divide the two equations, which unknown cancels?",
   "\"Increases by 6%\" means you keep 100% and add 6%. What single number do you multiply by?"
  ]
 },
 {
  "title": "Logarithms, Inverses of Exponentials & Log Functions",
  "src": "Unit 2B Packet · Days 1–2 (2.9–2.11)",
  "unit": 2,
  "know": [
   "A logarithm is an exponent: $\\log_b c=a$ means exactly $b^a=c$. ($\\log$ is base 10, $\\ln$ is base $e$.)",
   "$y=\\log_b x$ and $y=b^x$ are <b>inverses</b>: $\\log_b(b^x)=x$ and $b^{\\log_b x}=x$. Their graphs reflect over $y=x$, so points swap: $(3,8)\\leftrightarrow(8,3)$.",
   "$f(x)=\\log_b x$ with $b>1$: domain $(0,\\infty)$, range all reals, vertical asymptote $x=0$, always increasing, always concave down.",
   "$\\displaystyle\\lim_{x\\to0^+}\\log_b x=-\\infty$ and $\\displaystyle\\lim_{x\\to\\infty}\\log_b x=\\infty$ (for $b>1$).",
   "Log pattern in a table: inputs change by a constant <b>ratio</b> while outputs change by a constant <b>difference</b> (the reverse of exponential).",
   "The inside of a log must be <b>positive</b>. That sets the domain."
  ],
  "warm": [
   {
    "q": "Rewrite $3^{x+2}$ in the form $a\\cdot3^x$.",
    "a": "$9\\cdot3^x$"
   },
   {
    "q": "Find the inverse of $f(x)=x^3-1$.",
    "a": "$f^{-1}(x)=\\sqrt[3]{x+1}$"
   }
  ],
  "probs": [
   {
    "q": "Convert: (a) $2^5=32$ to log form (b) $\\log_3 81=4$ to exponential form.",
    "sp": 0.9,
    "a": "(a) $\\log_2 32=5$ (b) $3^4=81$"
   },
   {
    "q": "Evaluate without a calculator:<br>(a) $\\log_2 8$ (b) $\\log_5\\tfrac1{25}$ (c) $\\log 1000$ (d) $\\ln e^4$ (e) $\\log_4 2$ (f) $\\log_7 1$ (g) $\\log_9 27$",
    "sp": 1.5,
    "a": "(a) $3$ (b) $-2$ (c) $3$ (d) $4$ (e) $\\tfrac12$ (f) $0$ (g) $\\tfrac32$"
   },
   {
    "q": "Find the inverse of (a) $f(x)=2^x$ (b) $g(x)=\\log_5 x$ (c) $h(x)=3^{x-1}+2$.",
    "sp": 1.4,
    "a": "(a) $f^{-1}(x)=\\log_2 x$ (b) $g^{-1}(x)=5^x$ (c) $h^{-1}(x)=\\log_3(x-2)+1$"
   },
   {
    "q": "For $f(x)=\\log_2 x$, give the domain, range, vertical asymptote, and whether it is increasing or decreasing and concave up or down.",
    "sp": 1.1,
    "a": "Domain $(0,\\infty)$; range all reals; VA $x=0$; increasing; concave down"
   },
   {
    "q": "For $g(x)=\\log_3(x-4)+1$, find the domain, the vertical asymptote and the $x$-intercept.",
    "sp": 1.3,
    "a": "Domain $(4,\\infty)$; VA $x=4$; $\\log_3(x-4)=-1$ gives $x=4+\\tfrac13=\\tfrac{13}{3}$"
   },
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>1</td><td>2</td><td>4</td><td>8</td><td>16</td></tr><tr><th>$f(x)$</th><td>0</td><td>3</td><td>6</td><td>9</td><td>12</td></tr></table>What type of function is $f$? Explain, then write an equation.",
    "sp": 1.1,
    "a": "Logarithmic: inputs multiply by $2$ while outputs add $3$. $f(x)=3\\log_2 x$"
   },
   {
    "q": "The point $(3,8)$ is on $y=2^x$. What point must be on $y=\\log_2 x$?",
    "sp": 0.7,
    "a": "$(8,3)$"
   }
  ],
  "hints": [
   "Ask it as a question: \"the base to what power gives this number?\"",
   "For $\\log_9 27$: can you write both $9$ and $27$ as powers of the same base?",
   "For an inverse: after swapping $x$ and $y$, which operation undoes an exponential?"
  ]
 },
 {
  "title": "Properties of Logarithms",
  "src": "Unit 2B Packet · Day 3 (2.12)",
  "unit": 2,
  "know": [
   "<b>Product:</b> $\\log_b(xy)=\\log_b x+\\log_b y$",
   "<b>Quotient:</b> $\\log_b\\!\\left(\\dfrac xy\\right)=\\log_b x-\\log_b y$",
   "<b>Power:</b> $\\log_b(x^n)=n\\log_b x$",
   "<b>Change of base:</b> $\\log_b x=\\dfrac{\\log x}{\\log b}=\\dfrac{\\ln x}{\\ln b}$",
   "There is <b>no</b> rule for $\\log(x+y)$. It is not $\\log x+\\log y$.",
   "Transformation link: $\\log_b(kx)=\\log_b k+\\log_b x$, so a horizontal dilation of a log graph is the same as a vertical shift."
  ],
  "warm": [
   {
    "q": "Evaluate $\\log_2\\tfrac18$.",
    "a": "$-3$"
   },
   {
    "q": "Find the domain of $y=\\ln(x-5)$.",
    "a": "$(5,\\infty)$"
   }
  ],
  "probs": [
   {
    "q": "Expand $\\log_2\\!\\left(\\dfrac{8x^3}{y}\\right)$.",
    "sp": 1.1,
    "a": "$3+3\\log_2x-\\log_2y$"
   },
   {
    "q": "Expand $\\ln\\!\\left(\\sqrt{x}\\,y^2\\right)$.",
    "sp": 1.1,
    "a": "$\\tfrac12\\ln x+2\\ln y$"
   },
   {
    "q": "Write as a single logarithm: $2\\log x+\\log5-\\log y$.",
    "sp": 1.1,
    "a": "$\\log\\!\\left(\\dfrac{5x^2}{y}\\right)$"
   },
   {
    "q": "Write as a single logarithm: $3\\ln x-\\tfrac12\\ln y$.",
    "sp": 1.1,
    "a": "$\\ln\\!\\left(\\dfrac{x^3}{\\sqrt y}\\right)$"
   },
   {
    "q": "Evaluate without a calculator: (a) $\\log_6 4+\\log_6 9$ (b) $\\log_2 48-\\log_2 3$",
    "sp": 1.1,
    "a": "(a) $\\log_6 36=2$ (b) $\\log_2 16=4$"
   },
   {
    "calc": true,
    "q": "Use change of base to evaluate $\\log_5 20$ to three decimal places.",
    "sp": 0.9,
    "a": "$\\dfrac{\\ln20}{\\ln5}\\approx1.861$"
   },
   {
    "q": "Let $\\log_b2=p$ and $\\log_b3=q$. Write in terms of $p$ and $q$: (a) $\\log_b12$ (b) $\\log_b\\tfrac92$",
    "sp": 1.2,
    "a": "(a) $2p+q$ (b) $2q-p$"
   },
   {
    "q": "Show that the graph of $f(x)=\\log(100x)$ is a vertical translation of $y=\\log x$. By how much?",
    "sp": 1,
    "a": "$\\log(100x)=\\log100+\\log x=2+\\log x$: up $2$."
   },
   {
    "q": "True or false? Fix each false one. (a) $\\log(x+y)=\\log x+\\log y$ (b) $\\log(x^2)=2\\log x$ (c) $\\dfrac{\\log x}{\\log y}=\\log x-\\log y$",
    "sp": 1.1,
    "a": "(a) False: $\\log(xy)=\\log x+\\log y$ (b) True (c) False: $\\log\\!\\left(\\tfrac xy\\right)=\\log x-\\log y$"
   }
  ],
  "hints": [
   "Is the inside a product, a quotient, or a power? Which property matches each?",
   "When condensing, what must happen to a coefficient before you can combine logs?",
   "How can you build $12$ and $\\tfrac92$ using only $2$s and $3$s?"
  ]
 },
 {
  "title": "Exponential & Logarithmic Equations",
  "src": "Unit 2B Packet · Day 4 (2.13)",
  "unit": 2,
  "know": [
   "<b>Exponential, same base possible:</b> rewrite both sides with the same base, then set the exponents equal.",
   "<b>Exponential, otherwise:</b> isolate the exponential part first, then take a log of both sides (or convert to log form).",
   "<b>One log:</b> isolate it, then convert to exponential form. $\\log_b(\\text{stuff})=c\\ \\Rightarrow\\ \\text{stuff}=b^c$.",
   "<b>Several logs:</b> use the properties to condense to a single log on each side first.",
   "<b>Always check for extraneous solutions.</b> Any answer that makes the inside of an original log zero or negative must be thrown out."
  ],
  "warm": [
   {
    "q": "Simplify $\\log4+\\log25$.",
    "a": "$\\log100=2$"
   },
   {
    "q": "List the zeros of $x^2(x+2)$ with multiplicities.",
    "a": "$0$ (mult. 2), $-2$ (mult. 1)"
   }
  ],
  "probs": [
   {
    "q": "Solve $2^{x+1}=32$.",
    "sp": 0.9,
    "a": "$x=4$"
   },
   {
    "q": "Solve $9^x=27^{x-1}$.",
    "sp": 1.1,
    "a": "$3^{2x}=3^{3x-3}$, so $x=3$"
   },
   {
    "calc": true,
    "q": "Solve $5\\cdot3^x=40$. Give an exact answer and a decimal.",
    "sp": 1.1,
    "a": "$3^x=8$, $x=\\dfrac{\\ln8}{\\ln3}\\approx1.893$"
   },
   {
    "calc": true,
    "q": "Solve $4e^{2x}-3=17$. Give an exact answer and a decimal.",
    "sp": 1.1,
    "a": "$e^{2x}=5$, $x=\\dfrac{\\ln5}{2}\\approx0.805$"
   },
   {
    "q": "Solve $\\log_2(x-3)=4$.",
    "sp": 0.9,
    "a": "$x-3=16$, $x=19$"
   },
   {
    "q": "Solve $\\log x+\\log(x-3)=1$.",
    "sp": 1.3,
    "a": "$x^2-3x=10$ gives $x=5$ or $x=-2$; reject $-2$. $x=5$"
   },
   {
    "q": "Solve $\\log_3(x+6)-\\log_3(x-2)=2$.",
    "sp": 1.3,
    "a": "$\\dfrac{x+6}{x-2}=9$, $x=3$ (valid, since $x>2$)"
   },
   {
    "q": "Solve $\\ln(x+2)+\\ln x=\\ln8$.",
    "sp": 1.3,
    "a": "$x^2+2x-8=0$ gives $x=2$ or $x=-4$; reject $-4$. $x=2$"
   },
   {
    "q": "Solve $\\log_2(x^2-4)=\\log_2(3x)$.",
    "sp": 1.3,
    "a": "$x^2-3x-4=0$ gives $x=4$ or $x=-1$; reject $-1$. $x=4$"
   }
  ],
  "hints": [
   "Can both sides be written as powers of the same number?",
   "Is the exponential (or log) term alone on its side yet? What needs to move first?",
   "Plug your answer back into the <i>original</i> equation: is every log's inside positive?"
  ]
 },
 {
  "title": "Exponential & Log Inequalities; Inverses of Exp/Log Functions",
  "src": "Unit 2B Packet · Day 5 (2.13)",
  "unit": 2,
  "know": [
   "Solve the inequality like an equation, but watch the direction: if the base is <b>between 0 and 1</b> the function is decreasing, so the inequality <b>flips</b>.",
   "For log inequalities, the answer must also satisfy the <b>domain</b> (every log's inside $>0$). Intersect your solution with the domain.",
   "$\\log_b A<\\log_b B$ with $b>1$ means $0<A<B$.",
   "When a quadratic appears, finish with a sign chart, just like the polynomial inequalities in Unit 1.",
   "Inverse of an exponential or log function: swap $x$ and $y$, isolate the exponential/log piece, then convert forms."
  ],
  "warm": [
   {
    "q": "Solve $2^x=16$.",
    "a": "$x=4$"
   },
   {
    "q": "Expand $\\ln(x^2y)$.",
    "a": "$2\\ln x+\\ln y$"
   }
  ],
  "probs": [
   {
    "q": "Solve $3^x>81$.",
    "sp": 0.8,
    "a": "$x>4$"
   },
   {
    "q": "Solve $\\left(\\tfrac12\\right)^x\\le 8$.",
    "sp": 1.1,
    "a": "$2^{-x}\\le2^3$, so $-x\\le3$, $x\\ge-3$"
   },
   {
    "q": "Let $p(x)=10+2(5)^x$. For what values of $x$ is $p(x)<60$?",
    "sp": 1.1,
    "a": "$5^x<25$, so $x<2$"
   },
   {
    "q": "Solve $\\log_2(x-1)<3$.",
    "sp": 1.1,
    "a": "$0<x-1<8$, so $1<x<9$"
   },
   {
    "q": "Solve $\\ln(2x+1)\\ge0$.",
    "sp": 1,
    "a": "$2x+1\\ge1$, so $x\\ge0$"
   },
   {
    "q": "Let $f(x)=\\log_2(x^2+2x)-\\log_2(x+6)$. Find all $x$ for which $f(x)>0$.",
    "sp": 1.9,
    "a": "Need $x^2+2x>x+6$: $x<-3$ or $x>2$. Domain: $x^2+2x>0$ and $x>-6$. Answer: $(-6,-3)\\cup(2,\\infty)$"
   },
   {
    "q": "Let $h(x)=\\ln(x^2+3)$ and $k(x)=\\ln(5x-3)$. Find all $x$ for which $h(x)>k(x)$.",
    "sp": 1.9,
    "a": "$x^2-5x+6>0$: $x<2$ or $x>3$. Domain of $k$: $x>\\tfrac35$. Answer: $\\left(\\tfrac35,2\\right)\\cup(3,\\infty)$"
   },
   {
    "q": "Find the inverse of (a) $f(x)=2e^{3x}-1$ and (b) $g(x)=3\\log_2(x+1)-6$.",
    "sp": 1.7,
    "a": "(a) $f^{-1}(x)=\\tfrac13\\ln\\!\\left(\\dfrac{x+1}{2}\\right)$ (b) $g^{-1}(x)=2^{(x+6)/3}-1$"
   }
  ],
  "hints": [
   "Is the base bigger than 1 or between 0 and 1? What does that do to the inequality sign?",
   "Before you answer a log inequality: which $x$-values are even allowed in each log?",
   "After you get a quadratic inequality, where is it zero, and what sign does it have in each region?"
  ]
 },
 {
  "title": "Logarithmic Modeling & Semi-Log Plots",
  "src": "Unit 2B Packet · Day 6 (2.14–2.15)",
  "unit": 2,
  "know": [
   "Log model: $y=a+b\\ln x$ (or $a+b\\log x$). Use it when inputs change <b>proportionally</b> over equal output intervals: fast change at first, then slower and slower.",
   "Build one from two points: plug each point in to get two equations, then solve for $a$ and $b$.",
   "<b>Semi-log plot:</b> the $y$-axis is logarithmically scaled (equal spacing means equal ratios: $1, 10, 100,\\dots$). The actual $y$-values are not changed.",
   "On a semi-log plot, <b>exponential</b> data appear <b>linear</b>.",
   "Linear model for the semi-log plot of $y=ab^x$: $\\ \\log y=(\\log b)\\,x+\\log a$. Slope $=\\log b$, intercept $=\\log a$."
  ],
  "warm": [
   {
    "q": "Solve $\\log_5(x+1)=2$.",
    "a": "$x=24$"
   },
   {
    "q": "$f(x)=e^x$ and $g(x)=\\ln x$. Find $f(g(7))$.",
    "a": "$7$"
   }
  ],
  "probs": [
   {
    "calc": true,
    "q": "$L(x)=a+b\\ln x$ has $L(2)=5$ and $L(8)=11$. Write two equations, then find $a$ and $b$.",
    "sp": 1.5,
    "a": "$a+b\\ln2=5$, $a+b\\ln8=11$. Subtract: $b\\ln4=6$, $b\\approx4.328$, $a=2$."
   },
   {
    "q": "A sound-level model is $M(I)=a+b\\log I$. When $I=10$, $M=30$; when $I=1000$, $M=70$. Find $a$ and $b$, then predict $M$ when $I=10^5$.",
    "sp": 1.5,
    "a": "$a+b=30$, $a+3b=70$: $b=20$, $a=10$. $M(10^5)=10+20(5)=110$"
   },
   {
    "q": "Which function appears linear on a semi-log plot (log-scaled $y$-axis)?<br>(A) $y=3x+2$ &nbsp; (B) $y=x^2$ &nbsp; (C) $y=5(1.4)^x$ &nbsp; (D) $y=2+\\ln x$",
    "sp": 0.8,
    "a": "(C): exponential functions appear linear."
   },
   {
    "calc": true,
    "q": "Write the linear model for the semi-log plot of $y=50\\cdot2^x$ in the form $\\log y=(\\log b)x+\\log a$, with decimals.",
    "sp": 1,
    "a": "$\\log y=(\\log2)x+\\log50\\approx0.301x+1.699$"
   },
   {
    "q": "Points $A$, $B$, $C$ lie on a line on the semi-log plot shown.<div class=\"fig\">[[FIG:d21]]</div>(a) Read the actual $y$-values at $x=0$, $2$ and $4$.<br>(b) By what factor does $y$ multiply for each increase of 1 in $x$?<br>(c) Write an exponential model $y=ab^x$.",
    "sp": 1.2,
    "wide": true,
    "a": "(a) $10$, $1000$, $100{,}000$ (b) $10$ (c) $y=10\\cdot10^x$"
   },
   {
    "q": "<table class=\"dt\"><tr><th>$x$</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$f(x)$</th><td>20</td><td>30</td><td>45</td><td>67.5</td><td>101.25</td></tr></table>Would these data look linear on a semi-log plot? Why? Write an equation for $f$.",
    "sp": 1.2,
    "a": "Yes: constant ratio $1.5$, so $f$ is exponential. $f(x)=20(1.5)^{x-1}$"
   },
   {
    "q": "A data set rises quickly at first and then more and more slowly. Each time the input doubles, the output goes up by about 4. Which model type fits?",
    "sp": 0.8,
    "a": "Logarithmic (inputs change proportionally while outputs change by a constant amount)."
   }
  ],
  "hints": [
   "If you subtract your two equations, which unknown disappears?",
   "On a log-scaled axis, what does one \"step up\" between gridlines multiply $y$ by?",
   "Which kind of function has a constant ratio between outputs, and what does that look like on a semi-log plot?"
  ]
 },
 {
  "title": "Unit 2 Checkpoint",
  "src": "All of Unit 2 · no notes",
  "unit": 2,
  "check": true,
  "know": [
   "Treat this like a quiz: 35 minutes, no notes, calculator only where marked. Score it, then use the table at the bottom to see which day to redo."
  ],
  "probs": [
   {
    "q": "$f(x)=x^2+1$, $g(x)=3x-2$. Find (a) $f(g(2))$ and (b) $g(f(x))$.",
    "a": "(a) $17$ (b) $3x^2+1$",
    "sp": 1,
    "back": 12
   },
   {
    "q": "Find the inverse of $f(x)=\\dfrac{x+5}{2}$.",
    "a": "$f^{-1}(x)=2x-5$",
    "sp": 0.9,
    "back": 12
   },
   {
    "q": "An arithmetic sequence has $a_4=13$ and $a_9=33$. Find a formula for $a_n$.",
    "a": "$d=4$; $a_n=4n-3$",
    "sp": 1,
    "back": 13
   },
   {
    "q": "Find the 6th term of the geometric sequence $2, -6, 18, \\dots$",
    "a": "$2(-3)^5=-486$",
    "sp": 0.9,
    "back": 13
   },
   {
    "q": "Find the sum of the first 15 terms of $4, 9, 14, \\dots$",
    "a": "$a_{15}=74$; $S=\\dfrac{15(4+74)}{2}=585$",
    "sp": 1,
    "back": 14
   },
   {
    "q": "Find the sum: $18+6+2+\\dots$",
    "a": "$\\dfrac{18}{1-\\frac13}=27$",
    "sp": 0.9,
    "back": 14
   },
   {
    "q": "An exponential function $f(x)=ab^x$ passes through $(1,6)$ and $(3,24)$. Find $a$ and $b$.",
    "a": "$b^2=4$, $b=2$, $a=3$: $f(x)=3\\cdot2^x$",
    "sp": 1.1,
    "back": 16
   },
   {
    "q": "A car worth 30,000 dollars loses 12% of its value each year. Write $V(t)$.",
    "a": "$V(t)=30000(0.88)^t$",
    "sp": 0.8,
    "back": 16
   },
   {
    "q": "Evaluate: (a) $\\log_3\\tfrac19$ (b) $\\ln\\sqrt e$ (c) $\\log_8 4$",
    "a": "(a) $-2$ (b) $\\tfrac12$ (c) $\\tfrac23$",
    "sp": 1,
    "back": 17
   },
   {
    "q": "Write as a single logarithm: $2\\log_5x-\\log_5(x+1)+\\log_53$.",
    "a": "$\\log_5\\!\\left(\\dfrac{3x^2}{x+1}\\right)$",
    "sp": 1,
    "back": 18
   },
   {
    "q": "Solve $\\log_2x+\\log_2(x-2)=3$.",
    "a": "$x^2-2x-8=0$; $x=4$ (reject $-2$)",
    "sp": 1.2,
    "back": 19
   },
   {
    "calc": true,
    "q": "Solve $3e^{2x}=24$.",
    "a": "$x=\\dfrac{\\ln8}{2}\\approx1.040$",
    "sp": 1,
    "back": 19
   },
   {
    "q": "Solve $\\log_3(2x-1)\\le2$.",
    "a": "$0<2x-1\\le9$, so $\\tfrac12<x\\le5$",
    "sp": 1.1,
    "back": 20
   },
   {
    "q": "On a semi-log plot, the graph of $y=7(3)^x$ is a line. What is its slope?",
    "a": "$\\log3\\approx0.477$",
    "sp": 0.8,
    "back": 21
   }
  ],
  "hints": []
 },
 {
  "title": "Full Practice Midterm",
  "src": "Units 1 and 2 · 60 minutes",
  "unit": 0,
  "exam": true,
  "know": [
   "Sit somewhere quiet and time yourself: about 40 minutes for Part A (no calculator) and 20 minutes for Part B (calculator). Do not look anything up. Afterwards, score it and write every miss in the error log on the last page."
  ],
  "probs": [
   {
    "part": "Part A: no calculator"
   },
   {
    "q": "Find the average rate of change of $f(x)=2^x$ on $[1,3]$.",
    "a": "$\\dfrac{8-2}{2}=3$",
    "sp": 0.9
   },
   {
    "q": "A graph is decreasing and concave up. Describe its rate of change.",
    "a": "Negative and increasing.",
    "sp": 0.8
   },
   {
    "q": "Write a degree-3 polynomial with leading coefficient 2, a zero at $x=3$ with multiplicity 2, and a zero at $x=-1$.",
    "a": "$f(x)=2(x-3)^2(x+1)$",
    "sp": 0.9
   },
   {
    "q": "Solve $(x-2)^2(x+3)<0$.",
    "a": "$(-\\infty,-3)$",
    "sp": 1.1
   },
   {
    "q": "Evaluate $\\displaystyle\\lim_{x\\to-\\infty}\\left(-4x^6+x^3\\right)$.",
    "a": "$-\\infty$",
    "sp": 0.8
   },
   {
    "q": "For $f(x)=\\dfrac{x^2-1}{x^2-4x+3}$, find the hole (as a point), vertical asymptote and horizontal asymptote.",
    "a": "$\\dfrac{(x-1)(x+1)}{(x-1)(x-3)}$: hole $(1,-1)$; VA $x=3$; HA $y=1$",
    "sp": 1.4
   },
   {
    "q": "Solve $\\dfrac{2x+1}{x-4}>0$.",
    "a": "$\\left(-\\infty,-\\tfrac12\\right)\\cup(4,\\infty)$",
    "sp": 1.1
   },
   {
    "q": "Find the slant asymptote of $y=\\dfrac{2x^2+5x-1}{x+3}$.",
    "a": "$y=2x-1$ (remainder $2$)",
    "sp": 1.4
   },
   {
    "q": "Find the coefficient of $x^2$ in $(x+2)^5$.",
    "a": "$\\dbinom53(2)^3=10\\cdot8=80$",
    "sp": 1
   },
   {
    "q": "$(0,4)$ is on $f$. Find the matching point on $g(x)=2f(x-1)-3$.",
    "a": "$(1,5)$",
    "sp": 0.8
   },
   {
    "q": "Let $f(x)=\\sqrt{x-2}$ and $g(x)=x^2+2$ for $x\\ge0$. Find $f(g(x))$. What does this tell you about $f$ and $g$?",
    "a": "$f(g(x))=\\sqrt{x^2}=x$ (for $x\\ge0$). They are inverses.",
    "sp": 1.1
   },
   {
    "q": "Evaluate $\\displaystyle\\sum_{n=1}^{\\infty}10(0.6)^{n-1}$.",
    "a": "$\\dfrac{10}{1-0.6}=25$",
    "sp": 0.9
   },
   {
    "q": "Expand $\\log_3\\!\\left(\\dfrac{9x^2}{\\sqrt y}\\right)$.",
    "a": "$2+2\\log_3x-\\tfrac12\\log_3y$",
    "sp": 1
   },
   {
    "q": "Solve $4^{x+1}=8^x$.",
    "a": "$2^{2x+2}=2^{3x}$, so $x=2$",
    "sp": 1
   },
   {
    "q": "Solve $\\ln x+\\ln(x+3)=\\ln10$.",
    "a": "$x^2+3x-10=0$; $x=2$ (reject $-5$)",
    "sp": 1.2
   },
   {
    "q": "Solve $(0.5)^x>4$.",
    "a": "$2^{-x}>2^2$, so $x<-2$",
    "sp": 1
   },
   {
    "part": "Part B: calculator allowed"
   },
   {
    "calc": true,
    "q": "A town's population is modeled by $P(t)=1200(1.045)^t$, $t$ in years. (a) Find $P(8)$. (b) When does the population reach 2400?",
    "a": "(a) $\\approx1707$ (b) $t=\\dfrac{\\ln2}{\\ln1.045}\\approx15.7$ years",
    "sp": 1.3
   },
   {
    "calc": true,
    "q": "A linear model is $f(x)=2.1x+3.4$. The actual data value at $x=5$ is $14.2$. Find the residual and interpret its sign.",
    "a": "Predicted $13.9$; residual $=14.2-13.9=0.3$. The model underestimates.",
    "sp": 1.1
   },
   {
    "calc": true,
    "q": "Solve $5\\cdot2^{3x}=90$.",
    "a": "$2^{3x}=18$, $x=\\dfrac{\\ln18}{3\\ln2}\\approx1.390$",
    "sp": 1.1
   },
   {
    "calc": true,
    "q": "$D(t)=a+b\\ln t$ has $D(1)=12$ and $D(5)=20$. Find $a$ and $b$, then find $D(10)$.",
    "a": "$a=12$ (since $\\ln1=0$); $b=\\dfrac{8}{\\ln5}\\approx4.971$; $D(10)\\approx23.45$",
    "sp": 1.3
   }
  ],
  "hints": []
 },
 {
  "title": "Final Tune-Up",
  "src": "Night before · keep it short",
  "unit": 0,
  "last": true,
  "know": [
   "No new problems tonight. Fill in the blanks from memory, check them, re-do the questions in your error log, then stop and sleep."
  ],
  "probs": [
   {
    "q": "Average rate of change of $f$ on $[a,b]$ = __________",
    "a": "$\\dfrac{f(b)-f(a)}{b-a}$",
    "sp": 0.45
   },
   {
    "q": "Concave up means the rate of change is __________.",
    "a": "increasing",
    "sp": 0.45
   },
   {
    "q": "At a zero of even multiplicity the graph is __________ to the $x$-axis.",
    "a": "tangent (it bounces)",
    "sp": 0.45
   },
   {
    "q": "If $a+bi$ is a zero (real coefficients), so is __________.",
    "a": "$a-bi$",
    "sp": 0.45
   },
   {
    "q": "Same degree on top and bottom: the horizontal asymptote is $y=$ __________.",
    "a": "the ratio of the leading coefficients",
    "sp": 0.45
   },
   {
    "q": "A factor that cancels gives a __________; one left in the denominator gives a __________.",
    "a": "hole; vertical asymptote",
    "sp": 0.45
   },
   {
    "q": "A slant asymptote happens when the numerator's degree is __________.",
    "a": "exactly one more than the denominator's",
    "sp": 0.45
   },
   {
    "q": "$f(x+h)$ moves the graph __________; $f(x)+k$ moves it __________.",
    "a": "left $h$; up $k$",
    "sp": 0.45
   },
   {
    "q": "Residual = __________ − __________",
    "a": "actual − predicted",
    "sp": 0.45
   },
   {
    "q": "Arithmetic: $a_n=$ __________ &nbsp;&nbsp; Geometric: $g_n=$ __________",
    "a": "$a_1+d(n-1)$; $g_1r^{\\,n-1}$",
    "sp": 0.45
   },
   {
    "q": "Finite arithmetic sum: $S_n=$ __________ &nbsp;&nbsp; Infinite geometric sum: $S=$ __________ (only if __________)",
    "a": "$\\dfrac{n(a_1+a_n)}{2}$; $\\dfrac{a_1}{1-r}$, only if $|r|<1$",
    "sp": 0.55
   },
   {
    "q": "Linear: constant __________. Exponential: constant __________.",
    "a": "difference (rate of change); ratio",
    "sp": 0.45
   },
   {
    "q": "$\\log_bc=a$ means __________.",
    "a": "$b^a=c$",
    "sp": 0.45
   },
   {
    "q": "$\\log_b(xy)=$ ______ &nbsp; $\\log_b\\!\\left(\\tfrac xy\\right)=$ ______ &nbsp; $\\log_b(x^n)=$ ______",
    "a": "$\\log_bx+\\log_by$; $\\log_bx-\\log_by$; $n\\log_bx$",
    "sp": 0.45
   },
   {
    "q": "After solving a log equation, always check for __________.",
    "a": "extraneous solutions (log insides must be positive)",
    "sp": 0.45
   },
   {
    "q": "On a semi-log plot, __________ functions look linear.",
    "a": "exponential",
    "sp": 0.45
   }
  ],
  "hints": []
 }
];

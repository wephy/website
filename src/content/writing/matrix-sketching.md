---
title: Why waste time use lot rows when few do trick
description: A brief guide to matrix sketching, and why you should use it.
date: 2026-07-02
kind: article
draft: false
---

In <i>The Office</i>, Kevin Malone says the beautiful phrase: ***why waste time say lot word when few do trick***. The profound statement hints towards the redundancy in almost all data we encounter, and it emerges in mathematics, too.

## Work in progress

<!-- 
During Claude Shannon's investigation on redundancy for his paper  <a class="ext" href="https://www.princeton.edu/~wbialek/rome/refs/shannon_51.pdf" style="font-style: italic; text-decoration: underline" target="_blank" rel="noopener">Prediction and Entropy of Printed English</a>, he devised a letter-guessing game for his wife Betty Shannon. It begins with him presenting the first letter, a *T*, then asking what comes next. Let's have you play, instead of Betty.

Well, you think, many sentences begin with 'the', so maybe an *H* follows. Correct. You then ponder, in for penny in for pound, and guess an *E* next. Correct. A *space* next? All correct -- ok, but now it gets tough. Now you haven't got anything to go off of, really. You can guess a few times, but eventually you need to concede that there's no redundancy left. Claude then offers up the letter *R*. You recognise that a vowel must follow, maybe an A? An E? Nope, it was an *O*...

Aha, maybe this next word is room? You got it! An *O*, then *M*, followed. At the end of the game, the conclusion you reach is that, due to context and constraints, the phrase:
> The room was not very light. A small oblong reading lamp on the desk shed glow on polished wood but less on the shabby red carpet.

really only requires the data:
> T⋅⋅ ro⋅⋅ w⋅⋅ n⋅⋅ v⋅⋅⋅ li⋅⋅⋅. A sm⋅⋅⋅ ob⋅⋅⋅⋅ rea⋅⋅⋅⋅ l⋅⋅⋅ o⋅ ⋅⋅⋅ d⋅⋅⋅ shed g⋅⋅⋅ o⋅ pol⋅⋅⋅⋅⋅ w⋅⋅⋅ b⋅⋅ le⋅⋅ o⋅ ⋅⋅⋅ sha⋅⋅⋅ re⋅ c⋅⋅⋅⋅⋅.

That's a over a 60% compression rate, just guessing letter to letter. Is this special to English, or can we get such compression when dealing with numerics? -->
<!-- 
## Linear Systems

A *linear system* is a collection of linear equations which we wish to solve simulataneously. Say we have the following six equations:

<div id="ls-eqs" class="mjx"></div>

written as $\bm{A} \bm{x} = \bm{b}$:

<div id="ls-axb" class="mjx"></div>

In this case, we have a ***tall*** system -- more equations (six) than unknowns (two – $x$ and $y$). A consequence is there's no true solution, and if we want one, we have to first decide what ***kind*** of solution we want. A popular choice is a *least-squares* solution, $\hat{\bm{x}}$:
$$
\begin{align*}
  \hat{\bm{x}} = \argmin_{\bm{x}}\ \lVert \bm{A} \bm{x} - \bm{b} \rVert^2
\end{align*}
$$
Let's explore the linear system, and the least-sqaures solution, visually:

<figure>
  <div id="ls-fig1" class="msk-fig"></div>
  <figcaption><b>Figure 1.</b> The <span id="ls-n1">six</span> equations drawn as lines &#8212; no point
  lies on all of them exactly. The least-squares solution <span id="ls-sol1"></span> is shown as a point.</figcaption>
</figure>

## Sketching

Matrix *sketching* is a form of ***dimensionality reduction*** which looks to see if we can solve linear systems in a smaller space, using a *subspace embedding*. Our earlier problem has $N=6$, but perhaps we can solve it in a smaller dimensional space. Let's explore a subspace embedding on our matrix problem, involving $\bm{A}$ and $\bm{b}$.

Say we want to solve a problem of just two equations instead of six, as for us six is too many. We can do this by first creating two bins, and then putting the six existing rows into a random bin each, with either a $+1$ mutliplier or $-1$ multiplier at random. If we such a mapping:

<div id="sk-bins" class="mjx"></div>

Then the embedding looks like applying the following matrix $\bm{S}$ to the left-hand side:

<div id="sk-S" class="mjx"></div>

The subspace embedding need to be applied to both $\bm{A}$ and $\bm{b}$, giving a new linear system:

<div id="sk-sasb" class="mjx"></div>

This linear system is a ***sketch*** of the original problem, and now represents just two linear equations:

<figure>
  <div id="sk-fig3" class="msk-fig"></div>
  <figcaption><b>Figure 3.</b> The <span id="sk-m">two</span> sketched equations drawn as lines &#8212; <span id="sk-m2">two</span> equations in two unknowns meeting at <span id="sk-sol3desc">a single, exact point, <span id="sk-sol3"></span>,</span> rather than requiring a least-squares fit. The <span class="accent">true least-squares solution</span> of the original system is shown hollow for comparison.</figcaption>
</figure>

<script>
(function(){
  // ===================== EDIT HERE =====================
  var EQ = [
    [-5, 7, 5],
    [8, -4, 2],
    [-10, -5, -10],
    [-8, 4, -5],
    [-3, 8, 3],
    [-16, -4, -8]
  ];
  var S = [
    [ -1,  0, -1,  0,  1,  0],
    [ 0, 1,  0,  -1,  0,  -1]
  ];
  // =====================================================

  if(document.getElementById('mskx-init')) return;
  var flag=document.createElement('meta'); flag.id='mskx-init'; document.head.appendChild(flag);

  var WORDS=['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'];
  function word(n){ return WORDS[n]||(''+n); }
  function fmt(n){ return Number.isInteger(n)?(''+n):(''+parseFloat(n.toFixed(3))); }
  function minus(s){ return (''+s).replace(/-/g,'−'); }

  // ---------- linear algebra ----------
  var A = EQ.map(function(r){return [r[0],r[1]];});
  var bvec = EQ.map(function(r){return r[2];});
  var SA = S.map(function(sr){var a=0,b=0;for(var j=0;j<EQ.length;j++){a+=sr[j]*A[j][0];b+=sr[j]*A[j][1];}return [a,b];});
  var Sb = S.map(function(sr){var s=0;for(var j=0;j<EQ.length;j++)s+=sr[j]*bvec[j];return s;});
  function solveLS(rows,rhs){
    var Saa=0,Sab=0,Sbb=0,Sac=0,Sbc=0;
    for(var i=0;i<rows.length;i++){var a=rows[i][0],b=rows[i][1],c=rhs[i];Saa+=a*a;Sab+=a*b;Sbb+=b*b;Sac+=a*c;Sbc+=b*c;}
    var det=Saa*Sbb-Sab*Sab;
    if(Math.abs(det)<1e-9) return null;
    return {x:(Sbb*Sac-Sab*Sbc)/det, y:(Saa*Sbc-Sab*Sac)/det};
  }
  var trueSol=solveLS(A,bvec);
  var skSol=solveLS(SA,Sb);

  // ---------- KaTeX (TeX) builders ----------
  function eqTeX(a,b,c){
    var x = a===0 ? '' : (a===1?'x':a===-1?'-x':a+'x');
    var y='';
    if(b!==0){ var mag=Math.abs(b), t=(mag===1?'y':mag+'y'); y = (x==='')?(b<0?'-'+t:t):(b<0?' - '+t:' + '+t); }
    return ((x+y)||'0') + ' &= ' + c;
  }
  function pmat(rows){ return '\\begin{pmatrix} ' + rows.map(function(r){return r.map(fmt).join(' & ');}).join(' \\\\ ') + ' \\end{pmatrix}'; }
  function col(v){ return '\\begin{pmatrix} ' + v.map(fmt).join(' \\\\ ') + ' \\end{pmatrix}'; }
  var eqsTeX = '\\begin{aligned} ' + EQ.map(function(r){return eqTeX(r[0],r[1],r[2]);}).join(' \\\\ ') + ' \\end{aligned}';
  var axbTeX = '\\underbrace{'+pmat(A)+'}_{\\bm{A}}\\underbrace{\\begin{pmatrix} x \\\\ y \\end{pmatrix}}_{\\bm{x}} = \\underbrace{'+col(bvec)+'}_{\\bm{b}}.';
  function binTableTeX(){
    var n=EQ.length, cols='c|'+Array(n+1).join('c');
    var head=' '+EQ.map(function(_,j){return '& \\text{eq. '+(j+1)+'}';}).join(' ');
    var body=S.map(function(sr,i){return '\\text{bin '+(i+1)+'} & '+sr.map(fmt).join(' & ');}).join(' \\\\ ');
    return '\\begin{array}{'+cols+'} '+head+' \\\\ \\hline '+body+' \\end{array}';
  }
  var sTeX = '\\bm{S} = '+pmat(S);
  var saSbTeX = '\\bm{S}\\,\\bm{A} = '+pmat(SA)+',\\qquad \\bm{S}\\,\\bm{b} = '+col(Sb);

  function put(id, tex){
    var el=document.getElementById(id); if(!el) return;
    if(window.katex){ try{ el.innerHTML=katex.renderToString(tex,{displayMode:true,throwOnError:false}); return; }catch(e){} }
    el.textContent=tex; // fallback if KaTeX unavailable
  }
  function renderMath(){
    put('ls-eqs', eqsTeX);
    put('ls-axb', axbTeX);
    put('sk-bins', binTableTeX());
    put('sk-S', sTeX);
    put('sk-sasb', saSbTeX);
  }

  // ---------- SVG figure builders ----------
  function view(pts){
    var xs=pts.map(function(p){return p.x;}), ys=pts.map(function(p){return p.y;});
    var Xmin=Math.floor(Math.min.apply(null,[-1].concat(xs.map(function(x){return x-1;}))));
    var Xmax=Math.ceil (Math.max.apply(null,[ 3].concat(xs.map(function(x){return x+1;}))));
    var Ymin=Math.floor(Math.min.apply(null,[-1].concat(ys.map(function(y){return y-1;}))));
    var Ymax=Math.ceil (Math.max.apply(null,[ 3].concat(ys.map(function(y){return y+1;}))));
    return {Xmin:Xmin,Xmax:Xmax,Ymin:Ymin,Ymax:Ymax};
  }
  function mk(V){
    return {
      sx:function(x){return 40+(x-V.Xmin)/(V.Xmax-V.Xmin)*400;},
      sy:function(y){return 30+(V.Ymax-y)/(V.Ymax-V.Ymin)*260;}
    };
  }
  function clip(a,b,c,V){
    var pts=[], inx=function(x){return x>=V.Xmin-1e-9&&x<=V.Xmax+1e-9;}, iny=function(y){return y>=V.Ymin-1e-9&&y<=V.Ymax+1e-9;};
    if(Math.abs(b)>1e-12){var yl=(c-a*V.Xmin)/b; if(iny(yl))pts.push([V.Xmin,yl]); var yr=(c-a*V.Xmax)/b; if(iny(yr))pts.push([V.Xmax,yr]);}
    if(Math.abs(a)>1e-12){var xb=(c-b*V.Ymin)/a; if(inx(xb))pts.push([xb,V.Ymin]); var xt=(c-b*V.Ymax)/a; if(inx(xt))pts.push([xt,V.Ymax]);}
    var u=[];
    for(var i=0;i<pts.length;i++){var p=pts[i],dup=false;for(var k=0;k<u.length;k++){if(Math.abs(u[k][0]-p[0])<1e-6&&Math.abs(u[k][1]-p[1])<1e-6){dup=true;break;}}if(!dup)u.push(p);}
    return u.length<2?null:[u[0],u[1]];
  }
  function grid(V,M){
    var s='<g stroke="currentColor" stroke-opacity=".08">', i, j;
    for(i=Math.ceil(V.Xmin);i<=Math.floor(V.Xmax);i++){var X=M.sx(i).toFixed(1);s+='<line x1="'+X+'" y1="30" x2="'+X+'" y2="290"/>';}
    for(j=Math.ceil(V.Ymin);j<=Math.floor(V.Ymax);j++){var Y=M.sy(j).toFixed(1);s+='<line x1="40" y1="'+Y+'" x2="440" y2="'+Y+'"/>';}
    s+='</g>';
    var ax=M.sx(0).toFixed(1), ay=M.sy(0).toFixed(1);
    s+='<line x1="'+ax+'" y1="18" x2="'+ax+'" y2="290" stroke="--fg-dim" stroke-opacity=".35"/>';
    s+='<line x1="28" y1="'+ay+'" x2="452" y2="'+ay+'" stroke="--fg-dim" stroke-opacity=".35"/>';
    s+='<g font-size="11" fill="currentColor" fill-opacity=".5" font-family="Georgia, \'Times New Roman\', serif">';
    for(i=Math.ceil(V.Xmin);i<=Math.floor(V.Xmax);i++){ if(i!==0) s+='<text x="'+M.sx(i).toFixed(1)+'" y="'+(M.sy(0)+15).toFixed(1)+'" text-anchor="middle">'+minus(i)+'</text>'; }
    for(j=Math.ceil(V.Ymin);j<=Math.floor(V.Ymax);j++){ if(j!==0) s+='<text x="'+(M.sx(0)+8).toFixed(1)+'" y="'+(M.sy(j)+4).toFixed(1)+'" text-anchor="start">'+minus(j)+'</text>'; }
    s+='</g>';
    return s;
  }
  function fig(lines, pts, V, aria){
    var M=mk(V), inner=grid(V,M);
    inner+='<g stroke="currentColor" stroke-opacity=".4" stroke-width="1.2">';
    for(var i=0;i<lines.length;i++){var seg=clip(lines[i][0],lines[i][1],lines[i][2],V); if(seg) inner+='<line x1="'+M.sx(seg[0][0]).toFixed(1)+'" y1="'+M.sy(seg[0][1]).toFixed(1)+'" x2="'+M.sx(seg[1][0]).toFixed(1)+'" y2="'+M.sy(seg[1][1]).toFixed(1)+'"/>';}
    inner+='</g>';
    for(var p=0;p<pts.length;p++){
      var P=pts[p];
      var cx=M.sx(P.x), cy=M.sy(P.y);
      var vis=(cx>=40&&cx<=440&&cy>=30&&cy<=290);
      cx=Math.max(34,Math.min(446,cx)); cy=Math.max(24,Math.min(296,cy));
      inner+='<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="5.5" fill="'+(P.filled?P.color:'var(--bg)')+'" stroke="'+P.color+'" stroke-width="1.4" '+(vis?'':'stroke-opacity=".5" fill-opacity=".5"')+'/>';
      if(pts.length===1){
        inner+='<text x="'+(cx+12).toFixed(1)+'" y="'+(cy-7).toFixed(1)+'" font-size="12" fill="currentColor" fill-opacity=".7" font-family="Georgia, \'Times New Roman\', serif" font-style="italic">('+fmt(P.x)+', '+fmt(P.y)+')</text>';
      }
    }
    if(pts.length>1){
      inner+='<g font-size="11" font-family="Georgia, \'Times New Roman\', serif">';
      for(var q=0;q<pts.length;q++){
        var L=pts[q], ly=42+q*18;
        inner+='<circle cx="300" cy="'+ly+'" r="4.5" fill="'+(L.filled?L.color:'var(--bg)')+'" stroke="'+L.color+'" stroke-width="1.4"/>';
        inner+='<text x="311" y="'+(ly+4)+'" fill="currentColor" fill-opacity=".7">'+L.name+'</text>';
      }
      inner+='</g>';
    }
    return '<svg viewBox="0 0 480 320" width="80%" role="img" aria-label="'+aria+'">'+inner+'</svg>';
  }
  function renderFigs(){
    var V=view([trueSol,skSol].filter(Boolean));
    var f1=document.getElementById('ls-fig1'), f3=document.getElementById('sk-fig3');
    var pts1=[]; if(trueSol) pts1.push({x:trueSol.x,y:trueSol.y,color:'var(--accent)',filled:false,name:'least-squares'});
    if(f1) f1.innerHTML=fig(EQ, pts1, V, EQ.length+' equations drawn as lines, with their least-squares solution.');
    var skLines=SA.map(function(r,i){return [r[0],r[1],Sb[i]];});
    var pts3=[];
    if(skSol) pts3.push({x:skSol.x,y:skSol.y,color:'var(--accent-2)',filled:true,name:'sketched'});
    if(trueSol) pts3.push({x:trueSol.x,y:trueSol.y,color:'var(--accent)',filled:false,name:'least-squares'});
    if(f3) f3.innerHTML=fig(skLines, pts3, V, S.length+' sketched equations, with the sketched solution and the true least-squares solution shown for comparison.');
  }

  // ---------- captions ----------
  function setText(id,t){var el=document.getElementById(id); if(el) el.textContent=t;}
  function renderCaptions(){
    setText('ls-n1', word(EQ.length));
    setText('ls-sol1', trueSol?('('+fmt(trueSol.x)+', '+fmt(trueSol.y)+')'):'');
    setText('sk-m', word(S.length));
    setText('sk-m2', word(S.length));
    var d=document.getElementById('sk-sol3desc');
    if(d){
      if(S.length===2 && skSol){ setText('sk-sol3', '('+fmt(skSol.x)+', '+fmt(skSol.y)+')'); }
      else if(skSol){ d.innerHTML='its least-squares point, ('+fmt(skSol.x)+', '+fmt(skSol.y)+'),'; }
      else { d.textContent='no unique point'; }
    }
  }

  // ---------- go ----------
  renderFigs();
  renderCaptions();
  if(window.katex){ renderMath(); }
  else{
    var k=document.createElement('script');
    k.src='https://cdn.jsdelivr.net/npm/katex@0.17.0/dist/katex.min.js';
    k.onload=renderMath; k.onerror=renderMath; // fallback shows raw TeX
    document.head.appendChild(k);
  }
})();
</script>

The random sketch worked rather well, and neatly provides an exact solution.

There's a rich theory of subspace embeddings, and the guarantees that one gets from sketching systems. This tool becomes especially apt when your dimensions, both the number of equations and number of unknowns, are extremely large.

## Playground

The sketch above used a hand-picked $\bm{S}$. Below you can generate your own tall system of $N$ random equations and watch a CountSketch compress it live. Set the number of bins $m$ (the sketched dimension) and how many bins each row hashes into &#8212; each with a random $\pm1$ multiplier. The <span class="accent">true least-squares solution</span> of the full system and the <span class="accent-2">sketched solution</span> are drawn together, so you can see how close the sketch lands.

<div id="msketch-tool">
  <figure>
    <div id="msk-svgA" class="msk-svg"></div>
    <figcaption id="msk-capA"></figcaption>
  </figure>
  <div class="msk-controls">
    <label class="msk-ctl">N equations <input type="range" id="msk-n" min="3" max="100" value="30"><span id="msk-n-val">9</span></label>
    <label class="msk-ctl">bins <i>m</i> <input type="range" id="msk-bins" min="2" max="50" value="10"><span id="msk-bins-val">3</span></label>
    <label class="msk-ctl">hashes/row <input type="range" id="msk-hash" min="1" max="5" value="2"><span id="msk-hash-val">1</span></label>
    <button type="button" id="msk-reseed">Re-randomise</button>
  </div>

  <figure>
    <div id="msk-svgB" class="msk-svg"></div>
    <figcaption id="msk-capB"></figcaption>
  </figure>
</div>

<style>
#msketch-tool .msk-controls{display:flex;flex-wrap:wrap;gap:.9rem 1.4rem;align-items:center;margin:1.2rem 0 1.4rem;font-family:var(--font-mono);font-size:.8rem;color:var(--fg-muted);}
#msketch-tool .msk-ctl{display:flex;align-items:center;gap:.5rem;}
#msketch-tool .msk-ctl input[type=range]{accent-color:var(--accent);width:110px;}
#msketch-tool .msk-ctl span{min-width:1.5em;text-align:right;color:var(--fg);}
#msketch-tool button{font-family:var(--font-mono);font-size:.78rem;padding:.35rem .75rem;border:1px solid var(--border);background:var(--bg-raised);color:var(--fg);border-radius:var(--radius);cursor:pointer;transition:border-color var(--dur),color var(--dur);}
#msketch-tool button:hover{border-color:var(--accent);color:var(--accent);}
#msketch-tool figure{margin:0 0 1.5rem;}
#msketch-tool .msk-svg svg{width:88%;display:block;margin:0 auto;}
</style>

<script>
(function(){
  var root = document.getElementById('msketch-tool');
  if(!root || root.dataset.init) return;
  root.dataset.init = '1';

  // data domain -> pixel mapping (identical to Figures 1 and 3)
  var X0=-1, X1=3, Y0=-1, Y1=3;
  var sx=function(x){return 40+(x-X0)*100;};
  var sy=function(y){return 30+(Y1-y)*65;};

  var GRID = ''
    + '<g stroke="currentColor" stroke-opacity=".08">'
    + '<line x1="40" y1="30" x2="40" y2="290"/><line x1="140" y1="30" x2="140" y2="290" />'
    + '<line x1="240" y1="30" x2="240" y2="290"/><line x1="340" y1="30" x2="340" y2="290" />'
    + '<line x1="440" y1="30" x2="440" y2="290"/>'
    + '<line x1="40" y1="30" x2="440" y2="30"/><line x1="40" y1="95" x2="440" y2="95"/>'
    + '<line x1="40" y1="160" x2="440" y2="160"/><line x1="40" y1="225" x2="440" y2="225"/>'
    + '<line x1="40" y1="290" x2="440" y2="290"/></g>'
    + '<line x1="140" y1="18" x2="140" y2="290" stroke="--fg-dim" stroke-opacity=".35"/>'
    + '<line x1="28" y1="225" x2="452" y2="225" stroke="--fg-dim" stroke-opacity=".35"/>'
    + '<g font-size="11" fill="currentColor" fill-opacity=".5" font-family="Georgia, \'Times New Roman\', serif">'
    + '<text x="40" y="240" text-anchor="middle">&#8722;1</text><text x="140" y="240" text-anchor="middle">0</text>'
    + '<text x="240" y="240" text-anchor="middle">1</text><text x="340" y="240" text-anchor="middle">2</text>'
    + '<text x="440" y="240" text-anchor="middle">3</text>'
    + '<text x="152" y="34" text-anchor="start">3</text><text x="152" y="99" text-anchor="start">2</text>'
    + '<text x="152" y="164" text-anchor="start">1</text><text x="152" y="290" text-anchor="start">&#8722;1</text></g>';

  function mulberry32(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}

  function genAll(count, seed, opts = {}) {
    var rng = mulberry32(seed);

    // Tunable parameters
    var baseNoise     = opts.baseNoise     ?? 0.2;  // Noise for most lines
    var outlierNoise  = opts.outlierNoise  ?? 5.0;  // Noise for rare bad lines
    var outlierChance = opts.outlierChance ?? 0.2; // Fraction of outliers

    // Hidden common solution
    var sx = 1.5 + rng() * 0.5;
    var sy = 1.0 + rng() * 0.5;

    var arr = [];

    for (var i = 0; i < count; i++) {
      var a = Math.floor(rng() * 15) - 3;
      var b = Math.floor(rng() * 15) - 3;
      if (a === 0 && b === 0) a = 1;

      // Scale noise by line length so every orientation is affected similarly
      var scale = Math.hypot(a, b);

      // Most lines are fairly accurate, a few are very noisy
      var noiseScale =
        (rng() < outlierChance)
          ? outlierNoise
          : baseNoise;

      var noise = (rng() * 2 - 1) * scale * noiseScale;

      arr.push({
        a: a,
        b: b,
        c: a * sx + b * sy + noise
      });
    }

    return arr;
  }

  function solveLS(rows){
    var Saa=0,Sab=0,Sbb=0,Sac=0,Sbc=0;
    for(var i=0;i<rows.length;i++){var r=rows[i];Saa+=r.a*r.a;Sab+=r.a*r.b;Sbb+=r.b*r.b;Sac+=r.a*r.c;Sbc+=r.b*r.c;}
    var det=Saa*Sbb-Sab*Sab;
    if(Math.abs(det)<1e-9) return null;
    return {x:(Sbb*Sac-Sab*Sbc)/det, y:(Saa*Sbc-Sab*Sac)/det};
  }

  function buildSketch(rows,bins,h,seed){
    var rng=mulberry32(seed);
    var S=[]; for(var k=0;k<bins;k++) S.push({a:0,b:0,c:0,n:0});
    var hh=Math.min(h,bins);
    for(var j=0;j<rows.length;j++){
      var row=rows[j];
      var idx=[]; for(var q=0;q<bins;q++) idx.push(q);
      for(var t=0;t<hh;t++){
        var r=t+Math.floor(rng()*(bins-t));
        var tmp=idx[t]; idx[t]=idx[r]; idx[r]=tmp;
        var bin=idx[t], sgn=rng()<0.5?-1:1;
        S[bin].a+=sgn*row.a; S[bin].b+=sgn*row.b; S[bin].c+=sgn*row.c; S[bin].n++;
      }
    }
    return S;
  }

  function buildNaive(rows, m, seed){
    var rng = mulberry32(seed);

    var idx = rows.map((_,i)=>i);

    // Fisher–Yates shuffle
    for(var i=idx.length-1;i>0;i--){
      var j=Math.floor(rng()*(i+1));
      var t=idx[i];
      idx[i]=idx[j];
      idx[j]=t;
    }

    return idx.slice(0,m).map(i=>rows[i]);
  }

  function clip(a,b,c){
    var pts=[], inx=function(x){return x>=X0-1e-9&&x<=X1+1e-9;}, iny=function(y){return y>=Y0-1e-9&&y<=Y1+1e-9;};
    if(Math.abs(b)>1e-12){var yl=(c-a*X0)/b; if(iny(yl))pts.push([X0,yl]); var yr=(c-a*X1)/b; if(iny(yr))pts.push([X1,yr]);}
    if(Math.abs(a)>1e-12){var xb=(c-b*Y0)/a; if(inx(xb))pts.push([xb,Y0]); var xt=(c-b*Y1)/a; if(inx(xt))pts.push([xt,Y1]);}
    var u=[];
    for(var i=0;i<pts.length;i++){var p=pts[i], dup=false;
      for(var k=0;k<u.length;k++){if(Math.abs(u[k][0]-p[0])<1e-6&&Math.abs(u[k][1]-p[1])<1e-6){dup=true;break;}}
      if(!dup) u.push(p);
    }
    return u.length<2?null:[u[0],u[1]];
  }

  function lineSVG(a,b,c,opacity){
    var seg=clip(a,b,c); if(!seg) return '';
    return '<line x1="'+sx(seg[0][0]).toFixed(1)+'" y1="'+sy(seg[0][1]).toFixed(1)
         + '" x2="'+sx(seg[1][0]).toFixed(1)+'" y2="'+sy(seg[1][1]).toFixed(1)
         + '" stroke="currentColor" stroke-opacity="'+opacity+'" stroke-width="1.2"/>';
  }

  function pointSVG(sol,color,filled){
    if(!sol) return '';
    var cx=Math.max(30,Math.min(450,sx(sol.x))), cy=Math.max(20,Math.min(300,sy(sol.y)));
    var clamped=(cx!==sx(sol.x)||cy!==sy(sol.y));
    return '<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="5.5" fill="'
         + (filled?color:'var(--bg)')+'" stroke="'+color+'" stroke-width="1.6" stroke-opacity="'
         + (clamped?'.5':'1')+'"/>';
  }

  function coord(sol){ return sol ? '('+sol.x.toFixed(3)+', '+sol.y.toFixed(3)+')' : 'degenerate'; }

  var svgA=document.getElementById('msk-svgA'), svgB=document.getElementById('msk-svgB');
  var capA=document.getElementById('msk-capA'), capB=document.getElementById('msk-capB');
  var nEl=document.getElementById('msk-n'), binEl=document.getElementById('msk-bins'), hEl=document.getElementById('msk-hash');
  var nVal=document.getElementById('msk-n-val'), binVal=document.getElementById('msk-bins-val'), hVal=document.getElementById('msk-hash-val');

  var eqSeed=1234, skSeed=5678;

  function render(){
    var n=+nEl.value, bins=+binEl.value;
    // a row can hash into at most `bins` distinct bins, so cap the slider there
    var hMax=Math.min(bins, +hEl.max);
    if(+hEl.value>hMax) hEl.value=hMax;
    var hEff=+hEl.value;
    nVal.textContent=n; binVal.textContent=bins; hVal.textContent=hEff;

    // generate exactly N equations; the PRNG is deterministic, so increasing N
    // just appends new lines and leaves the earlier ones unchanged
    var rows=genAll(n, eqSeed);
    var trueSol=solveLS(rows);

    // Panel A: the full tall system
    var innerA='';
    for(var i=0;i<rows.length;i++) innerA+=lineSVG(rows[i].a,rows[i].b,rows[i].c,'.4');
    innerA+=pointSVG(trueSol,'var(--accent)',false);
    svgA.innerHTML='<svg viewBox="0 0 480 320" role="img" aria-label="The full tall linear system of '+n
      +' equations, with its least-squares solution.">'+GRID+innerA+'</svg>';
    capA.innerHTML='<b>Original.</b> '+n+' random equations — no common intersection. '
      +'<span class="accent">Least-squares</span> solution '+coord(trueSol)+'.';

    // Panel B: the CountSketched system
    var S=buildSketch(rows,bins,hEff,skSeed^(bins*131)^(hEff*977)^(n*17));
    var live=[]; for(var k=0;k<S.length;k++) if(S[k].n>0) live.push(S[k]);
    var skSol=solveLS(live);
    var innerB='';
    for(var j=0;j<live.length;j++) innerB+=lineSVG(live[j].a,live[j].b,live[j].c,'.4');

    var naiveRows = buildNaive(rows, bins, skSeed + 12345);
    var naiveSol  = solveLS(naiveRows);
    innerB += pointSVG(naiveSol,'var(--accent-3)',true);

    innerB+=pointSVG(trueSol,'var(--accent)',false);   // true LS, hollow reference
    innerB+=pointSVG(skSol,'var(--accent-2)',true);    // sketched solution, filled
    // legend
    innerB+='<g font-size="11" font-family="Georgia, \'Times New Roman\', serif">'
      +'<circle cx="320" cy="44" r="4.5" fill="var(--bg)" stroke="var(--accent)" stroke-width="1.6"/>'
      +'<text x="331" y="48" fill="currentColor" fill-opacity=".7">least-squares</text>'
      +'<circle cx="320" cy="62" r="4.5" fill="var(--accent-2)"/>'
      +'<text x="331" y="66" fill="currentColor" fill-opacity=".7">sketched solution</text></g>';
    svgB.innerHTML='<svg viewBox="0 0 480 320" role="img" aria-label="The CountSketched system of '+live.length
      +' equations, comparing the sketched solution with the true least-squares solution.">'+GRID+innerB+'</svg>';
    var gap = (trueSol&&skSol) ? Math.hypot(trueSol.x-skSol.x, trueSol.y-skSol.y).toFixed(3) : '—';
    capB.innerHTML='<b>Sketched.</b> '+n+' equations compressed into '+bins+' bin'+(bins===1?'':'s')
      +' ('+hEff+' hash'+(hEff===1?'':'es')+'/row). '
      +'<span class="accent-2">Sketched</span> solution '+coord(skSol)+', off the true fit by '+gap+'.';
  }

  nEl.addEventListener('input',render);
  binEl.addEventListener('input',render);
  hEl.addEventListener('input',render);
  document.getElementById('msk-reseed').addEventListener('click',function(){
    eqSeed=(Math.random()*1e9)|0; skSeed=(Math.random()*1e9)|0; render();
  });
  render();
})();
</script> -->
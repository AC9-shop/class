/* Thème commun : écran d'accueil, fond animé, spotlight, musique (index, archives, Math Arena) */
(function(){
'use strict';
var S=document.currentScript,H=document.documentElement;
var T=(S&&S.hasAttribute('data-title'))?S.getAttribute('data-title'):'1BAC SM1',LOGO=(S&&S.getAttribute('data-logo'))||'',SUB=(S&&S.getAttribute('data-sub'))||'',KICK=(S&&S.getAttribute('data-kicker'))||'1BAC SM1 · Anisse International School';
var RM=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches);
var key='sp_'+location.pathname,seen=false;try{seen=!!sessionStorage.getItem(key);sessionStorage.setItem(key,'1')}catch(e){}
var dur=2600;

/* ---------- transition de page (voile) ---------- */
var SY=['\u2211','\u03C0','\u222B','\u221A','\u221E','\u0394','\u03B8','\u2248','x\u00B2','\u2202','\u00B1','\u00F7','\u03BB','\u03C6','\u03A9','f(x)','sin','lim','\u211D','\u2200','\u2203','%','e','n!'];
var pt=document.createElement('div');pt.id='pt';pt.innerHTML=LOGO?'<img src="'+LOGO+'" alt="">':'<b>\u2211</b>';H.appendChild(pt);
addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank'||a.hasAttribute('download'))return;
 var u;try{u=new URL(a.href,location.href)}catch(x){return}if(u.origin!==location.origin||(u.protocol!=='http:'&&u.protocol!=='https:'))return;if(u.pathname===location.pathname&&u.search===location.search)return;
 e.preventDefault();H.classList.add('leaving');setTimeout(function(){location.href=u.href},RM?0:340)});
addEventListener('pageshow',function(e){if(e.persisted)H.classList.remove('leaving')});

/* ---------- écran d'accueil (1re visite de la session) ---------- */
var done=false,sp=null;
function openSplash(){if(done)return;done=true;if(sp)sp.classList.add('open');H.classList.add('sp-open');
 setTimeout(function(){if(sp&&sp.parentNode)sp.parentNode.removeChild(sp);H.classList.remove('sp-on');H.classList.add('sp-done')},RM?0:1050)}
if(!seen&&!RM){
 sp=document.createElement('div');sp.id='splash';sp.setAttribute('role','presentation');
 sp.innerHTML='<div class="sp-in"><div class="sp-orb">\u2211</div><div class="sp-k"></div><h1 class="sp-t"></h1><p class="sp-s"></p><div class="sp-bar"><i></i></div><p class="sp-h">Touche pour entrer</p></div>';
 if(LOGO){var ob=sp.querySelector('.sp-orb');ob.className='sp-logo';ob.innerHTML='<img src="'+LOGO+'" alt="">'}
 if(!T){var tt=sp.querySelector('.sp-t');tt.parentNode.removeChild(tt)}
 sp.querySelector('.sp-k').textContent=KICK;sp.querySelector('.sp-s').textContent=SUB;
 var h=sp.querySelector('.sp-t');
 T.split('').forEach(function(c,i){var s=document.createElement('span');s.textContent=c===' '?'\u00a0':c;s.style.animationDelay=(.3+i*.045)+'s';h.appendChild(s)});
 sp.querySelector('.sp-bar i').style.animationDuration=dur+'ms';
 H.appendChild(sp);H.classList.add('sp-on');sp.addEventListener('click',openSplash);setTimeout(openSplash,dur);
}else{
 H.classList.add('sp-open','sp-done');done=true;
 if(!RM){H.classList.add('arrive');requestAnimationFrame(function(){requestAnimationFrame(function(){H.classList.remove('arrive')})})}
}

/* ---------- musique de fond ---------- */
var mus=true;try{mus=localStorage.getItem('mq_music')!=='0'}catch(e){}
var a=new Audio('music.mp3');a.loop=true;a.preload='auto';
var ctx=null,gain=null,unlocked=false,btn=null;
a.addEventListener('loadedmetadata',function(){try{var t=+localStorage.getItem('mq_bgt')||0;if(t>1&&t<a.duration-2)a.currentTime=t}catch(e){}});
var lastSave=0;a.addEventListener('timeupdate',function(){var n=Date.now();if(n-lastSave>2000){lastSave=n;try{localStorage.setItem('mq_bgt',a.currentTime)}catch(e){}}});
addEventListener('pagehide',function(){try{localStorage.setItem('mq_bgt',a.currentTime)}catch(e){}});
function wire(){if(gain||ctx===false)return;var AC=window.AudioContext||window.webkitAudioContext;if(!AC){ctx=false;return}
 try{ctx=new AC();var src=ctx.createMediaElementSource(a);gain=ctx.createGain();gain.gain.value=.32;src.connect(gain);gain.connect(ctx.destination)}catch(e){ctx=false;gain=null;try{a.volume=.32}catch(x){}}}
function ui(){if(!btn)return;btn.textContent=mus?'\uD83D\uDD0A':'\uD83D\uDD07';btn.setAttribute('aria-pressed',mus?'false':'true');var t=mus?'Couper la musique':'Activer la musique';btn.title=t;btn.setAttribute('aria-label',t);btn.classList.toggle('play',mus&&unlocked)}
function play(){if(!mus)return;wire();try{if(ctx&&ctx.state==='suspended')ctx.resume()}catch(e){}
 var p=a.play();if(p&&p.then)p.then(function(){unlocked=true;ui()}).catch(function(){})}
['pointerup','click','touchend','keydown'].forEach(function(ev){addEventListener(ev,function(){if(mus&&!unlocked)play()},{passive:true})});
document.addEventListener('visibilitychange',function(){if(document.hidden)a.pause();else if(mus&&unlocked)play()});
function setMus(v){mus=v;try{localStorage.setItem('mq_music',v?'1':'0')}catch(e){}if(v)play();else{a.pause();unlocked=false}ui()}

/* ---------- fond animé, bouton musique, spotlight ---------- */
function ready(){
 var fx=document.createElement('div');fx.id='bgfx';fx.setAttribute('aria-hidden','true');
 var sy=SY,sh='';
 for(var i=0;i<(RM?0:20);i++)sh+='<span style="left:'+(Math.random()*100).toFixed(1)+'%;font-size:'+(1.1+Math.random()*2.4).toFixed(2)+'rem;animation-duration:'+(11+Math.random()*16).toFixed(1)+'s;animation-delay:-'+(Math.random()*24).toFixed(1)+'s;--r:'+Math.round(Math.random()*60-30)+'deg">'+sy[i%sy.length]+'</span>';
 fx.innerHTML='<div class="au a1"></div><div class="au a2"></div><div class="au a3"></div><div class="gr"></div><div class="fs">'+sh+'</div>';
 document.body.insertBefore(fx,document.body.firstChild);
 fluid(fx);
 window.FX={count:countTo,burst:function(x,y,n){if(RM)return;n=n||14;for(var k=0;k<n;k++){var e=document.createElement('span');e.className='fxp';e.textContent=SY[k%10];var an=Math.random()*6.28,d=60+Math.random()*120;e.style.cssText='left:'+x+'px;top:'+y+'px;--dx:'+(Math.cos(an)*d).toFixed(0)+'px;--dy:'+(Math.sin(an)*d).toFixed(0)+'px';document.body.appendChild(e);(function(el){setTimeout(function(){el.remove()},1100)})(e)}},
  rain:function(){if(RM)return;for(var k=0;k<44;k++){var e=document.createElement('span');e.className='fxr';e.textContent=SY[k%SY.length];e.style.cssText='left:'+(Math.random()*100).toFixed(1)+'%;animation-duration:'+(2.6+Math.random()*2.6).toFixed(1)+'s;animation-delay:'+(Math.random()*1.4).toFixed(1)+'s';document.body.appendChild(e);(function(el){setTimeout(function(){el.remove()},7600)})(e)}}};
 if(window.matchMedia&&matchMedia('(hover:hover)').matches&&!RM){var tl=null;
  document.addEventListener('pointermove',function(e){var t=e.target.closest&&e.target.closest('.tilt');if(tl&&tl!==t){tl.style.transform='';tl=null}if(!t)return;tl=t;var r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform='perspective(900px) rotateY('+(x*6).toFixed(2)+'deg) rotateX('+(-y*6).toFixed(2)+'deg)'},{passive:true});
  document.addEventListener('pointerout',function(e){var t=e.target.closest&&e.target.closest('.tilt');if(t&&!t.contains(e.relatedTarget)){t.style.transform='';if(tl===t)tl=null}})}

 btn=document.createElement('button');btn.id='mus';btn.className='mus';btn.type='button';
 btn.addEventListener('click',function(e){e.stopPropagation();setMus(!mus)});document.body.appendChild(btn);ui();
 if(window.matchMedia&&matchMedia('(hover:hover)').matches&&!RM){var raf=0,ev=null;
  document.addEventListener('pointermove',function(e){ev=e;if(raf)return;raf=requestAnimationFrame(function(){raf=0;var t=ev.target.closest&&ev.target.closest('.card,.box,.yr,.lk');if(!t)return;var r=t.getBoundingClientRect();t.style.setProperty('--mx',(ev.clientX-r.left)+'px');t.style.setProperty('--my',(ev.clientY-r.top)+'px')})},{passive:true})}
}

/* ---------- décor avancé + fluidité ---------- */
function fluid(fx){
 var hov=!!(window.matchMedia&&matchMedia('(hover:hover)').matches),small=innerWidth<700;
 /* 1. mojat sinus (CSS pur, GPU) */
 var wv=document.createElement('div');wv.className='wv';
 var d='M0,60 Q100,10 200,60 T400,60 T600,60 T800,60 T1000,60 T1200,60 T1400,60 T1600,60';
 wv.innerHTML='<svg viewBox="0 0 1600 120" preserveAspectRatio="none"><path d="'+d+'"/></svg><svg viewBox="0 0 1600 120" preserveAspectRatio="none"><path d="'+d+'"/></svg><svg viewBox="0 0 1600 120" preserveAspectRatio="none"><path d="'+d+'"/></svg>';
 fx.appendChild(wv);
 if(RM)return;
 /* 2. constellation de points reliés, réagit au pointeur */
 var c=document.createElement('canvas');c.id='fxc';fx.appendChild(c);var g=c.getContext&&c.getContext('2d');
 if(g){var W=0,Hh=0,dpr=Math.min(window.devicePixelRatio||1,1.5),P=[],mx=-9999,my=-9999,last=0,slow=0,on=true,LD=small?95:130;
  var size=function(){W=innerWidth;Hh=innerHeight;c.width=W*dpr;c.height=Hh*dpr;c.style.width=W+'px';c.style.height=Hh+'px';g.setTransform(dpr,0,0,dpr,0,0);
   var n=Math.round(Math.min(small?34:64,Math.max(18,W*Hh/(small?24000:22000))));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*Hh,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:1+Math.random()*1.5})};
  size();var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(size,200)});
  if(hov)document.addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY},{passive:true});
  document.addEventListener('visibilitychange',function(){on=!document.hidden;if(on)requestAnimationFrame(frame)});
  var frame=function(t){if(!on)return;requestAnimationFrame(frame);var dt=t-last;last=t;
   if(dt>38){if(++slow>45&&P.length>14){P.length=Math.max(14,P.length-6);slow=0}}else if(slow>0)slow--;
   g.clearRect(0,0,W,Hh);var i,j,a,b,dx,dy,q;
   for(i=0;i<P.length;i++){a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<-10)a.x=W+10;else if(a.x>W+10)a.x=-10;if(a.y<-10)a.y=Hh+10;else if(a.y>Hh+10)a.y=-10;
    dx=a.x-mx;dy=a.y-my;q=dx*dx+dy*dy;if(q<22000&&q>1){var f=(1-q/22000)*.5;a.x+=dx/Math.sqrt(q)*f;a.y+=dy/Math.sqrt(q)*f}}
   g.fillStyle='rgba(255,255,255,.55)';for(i=0;i<P.length;i++){a=P[i];g.beginPath();g.arc(a.x,a.y,a.r,0,6.283);g.fill()}
   g.lineWidth=1;for(i=0;i<P.length;i++){a=P[i];for(j=i+1;j<P.length;j++){b=P[j];dx=a.x-b.x;dy=a.y-b.y;q=dx*dx+dy*dy;if(q<LD*LD){g.strokeStyle='rgba(76,201,240,'+((1-Math.sqrt(q)/LD)*.32).toFixed(3)+')';g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.stroke()}}
    dx=a.x-mx;dy=a.y-my;q=dx*dx+dy*dy;if(q<20000){g.strokeStyle='rgba(246,194,68,'+((1-q/20000)*.55).toFixed(3)+')';g.beginPath();g.moveTo(a.x,a.y);g.lineTo(mx,my);g.stroke()}}};
  requestAnimationFrame(frame)}
 /* 3. lueur qui suit le curseur (interpolée = fluide) */
 if(hov){var cg=document.createElement('div');cg.className='cglow';document.body.appendChild(cg);var tx=innerWidth/2,ty=innerHeight/3,cx=tx,cy=ty,run=false;
  var loop=function(){cx+=(tx-cx)*.12;cy+=(ty-cy)*.12;cg.style.transform='translate3d('+(cx-210).toFixed(1)+'px,'+(cy-210).toFixed(1)+'px,0)';if(Math.abs(tx-cx)>.4||Math.abs(ty-cy)>.4)requestAnimationFrame(loop);else run=false};
  document.addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;if(!run){run=true;requestAnimationFrame(loop)}},{passive:true})}
 /* 4. ripple sur les boutons + attraction magnétique */
 document.addEventListener('pointerdown',function(e){var t=e.target.closest&&e.target.closest('.btn,.chip,.a,.do');if(!t||t.disabled)return;var r=t.getBoundingClientRect(),z=Math.max(r.width,r.height)*2,s=document.createElement('span');s.className='rip';s.style.cssText='width:'+z+'px;height:'+z+'px;left:'+(e.clientX-r.left-z/2)+'px;top:'+(e.clientY-r.top-z/2)+'px';t.appendChild(s);setTimeout(function(){s.remove()},650)},{passive:true});
 if(hov){document.addEventListener('pointermove',function(e){var t=e.target.closest&&e.target.closest('.btn');if(!t||t.disabled)return;var r=t.getBoundingClientRect();t.style.transform='translate('+(((e.clientX-r.left)/r.width-.5)*7).toFixed(1)+'px,'+(((e.clientY-r.top)/r.height-.5)*7-2).toFixed(1)+'px)'},{passive:true});
  document.addEventListener('pointerout',function(e){var t=e.target.closest&&e.target.closest('.btn');if(t&&!t.contains(e.relatedTarget))t.style.transform=''})}
 /* 5. apparition au défilement (cartes d'annonces, blocs de contrôles) */
 if('IntersectionObserver' in window){H.classList.add('rv-on');var SEL='.an,.ct';
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});
  var arm=function(el){if(el.__rv)return;el.__rv=1;el.classList.add('rvz');io.observe(el);setTimeout(function(){el.classList.add('in')},2600)};
  var scan=function(n){if(n.matches&&n.matches(SEL))arm(n);if(n.querySelectorAll)n.querySelectorAll(SEL).forEach(arm)};
  scan(document.body);new MutationObserver(function(m){for(var i=0;i<m.length;i++)for(var k=0;k<m[i].addedNodes.length;k++){var n=m[i].addedNodes[k];if(n.nodeType===1)scan(n)}}).observe(document.body,{childList:true,subtree:true})}
}
/* compteur animé : FX.count(element, valeur) */
function countTo(el,to,ms){if(!el)return;to=+to||0;var from=parseInt(el.textContent)||0;if(from===to||RM){el.textContent=to;return}var t0=performance.now();ms=ms||700;
 (function st(t){var p=Math.min(1,(t-t0)/ms),e=1-Math.pow(1-p,3);el.textContent=Math.round(from+(to-from)*e);if(p<1)requestAnimationFrame(st)})(t0)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();

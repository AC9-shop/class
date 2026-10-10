/* Thème commun : écran d'accueil, fond animé, spotlight, musique (index, archives, Math Arena) */
(function(){
'use strict';
var S=document.currentScript,H=document.documentElement;
var T=(S&&S.getAttribute('data-title'))||'1BAC SM1',SUB=(S&&S.getAttribute('data-sub'))||'',KICK=(S&&S.getAttribute('data-kicker'))||'1BAC SM1 · Anisse International School';
var RM=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches);
var key='sp_'+location.pathname,seen=false;try{seen=!!sessionStorage.getItem(key);sessionStorage.setItem(key,'1')}catch(e){}
var dur=2600;

/* ---------- transition de page (voile) ---------- */
var SY=['\u2211','\u03C0','\u222B','\u221A','\u221E','\u0394','\u03B8','\u2248','x\u00B2','\u2202','\u00B1','\u00F7','\u03BB','\u03C6','\u03A9','f(x)','sin','lim','\u211D','\u2200','\u2203','%','e','n!'];
var pt=document.createElement('div');pt.id='pt';pt.innerHTML='<b>\u2211</b>';H.appendChild(pt);
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
 window.FX={burst:function(x,y,n){if(RM)return;n=n||14;for(var k=0;k<n;k++){var e=document.createElement('span');e.className='fxp';e.textContent=SY[k%10];var an=Math.random()*6.28,d=60+Math.random()*120;e.style.cssText='left:'+x+'px;top:'+y+'px;--dx:'+(Math.cos(an)*d).toFixed(0)+'px;--dy:'+(Math.sin(an)*d).toFixed(0)+'px';document.body.appendChild(e);(function(el){setTimeout(function(){el.remove()},1100)})(e)}},
  rain:function(){if(RM)return;for(var k=0;k<44;k++){var e=document.createElement('span');e.className='fxr';e.textContent=SY[k%SY.length];e.style.cssText='left:'+(Math.random()*100).toFixed(1)+'%;animation-duration:'+(2.6+Math.random()*2.6).toFixed(1)+'s;animation-delay:'+(Math.random()*1.4).toFixed(1)+'s';document.body.appendChild(e);(function(el){setTimeout(function(){el.remove()},7600)})(e)}}};
 if(window.matchMedia&&matchMedia('(hover:hover)').matches&&!RM){var tl=null;
  document.addEventListener('pointermove',function(e){var t=e.target.closest&&e.target.closest('.tilt');if(tl&&tl!==t){tl.style.transform='';tl=null}if(!t)return;tl=t;var r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform='perspective(900px) rotateY('+(x*6).toFixed(2)+'deg) rotateX('+(-y*6).toFixed(2)+'deg)'},{passive:true});
  document.addEventListener('pointerout',function(e){var t=e.target.closest&&e.target.closest('.tilt');if(t&&!t.contains(e.relatedTarget)){t.style.transform='';if(tl===t)tl=null}})}

 btn=document.createElement('button');btn.id='mus';btn.className='mus';btn.type='button';
 btn.addEventListener('click',function(e){e.stopPropagation();setMus(!mus)});document.body.appendChild(btn);ui();
 if(window.matchMedia&&matchMedia('(hover:hover)').matches&&!RM){var raf=0,ev=null;
  document.addEventListener('pointermove',function(e){ev=e;if(raf)return;raf=requestAnimationFrame(function(){raf=0;var t=ev.target.closest&&ev.target.closest('.card,.box,.yr,.lk');if(!t)return;var r=t.getBoundingClientRect();t.style.setProperty('--mx',(ev.clientX-r.left)+'px');t.style.setProperty('--my',(ev.clientY-r.top)+'px')})},{passive:true})}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else ready();
})();

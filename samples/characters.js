/* 12띠 캐릭터 × 오행 색 (천간 오행으로 색, 지지로 동물) */
(function(){
const PAL={
  목:{m:'#4fa3e0',d:'#2f7fc0',l:'#dcefff',s:'#24679f'},
  화:{m:'#ec5b4b',d:'#c9402f',l:'#ffe0d2',s:'#9c3226'},
  토:{m:'#f2c14e',d:'#d9a230',l:'#fff3cc',s:'#a77a18'},
  금:{m:'#f6f7fa',d:'#cfd4dc',l:'#ffffff',s:'#9aa1ab'},
  수:{m:'#2c3140',d:'#1c202c',l:'#424a5e',s:'#11141c',dark:true}
};
const ICON={
  목:'<path d="M60 4 C50 12 52 22 60 22 C68 22 70 12 60 4Z" fill="#6cc46c"/><path d="M60 10 V22" stroke="#3f8f3f" stroke-width="1.5"/>',
  화:'<path d="M60 2 C50 12 53 22 60 22 C67 22 70 12 60 2Z" fill="#ffb22e"/><path d="M60 10 C56 15 57 21 60 21 C63 21 64 15 60 10Z" fill="#ffe066"/>',
  토:'<path d="M48 22 L56 10 L60 15 L64 9 L72 22Z" fill="#b8863b"/><path d="M62 12 L64 9 L66 12Z" fill="#fff"/>',
  금:'<path d="M60 3 L63 11 L71 12 L65 17 L67 25 L60 21 L53 25 L55 17 L49 12 L57 11Z" fill="#ffd54a" stroke="#d9a520" stroke-width="1"/>',
  수:'<path d="M60 2 C54 12 52 16 60 21 C68 16 66 12 60 2Z" fill="#7fd3ff"/>'
};
const sh='<ellipse cx="60" cy="110" rx="30" ry="5" fill="rgba(0,0,0,.15)"/>';
function eyes(p,y=56,dx=14){
  const L=60-dx,R=60+dx;
  const w=p.dark?`<circle cx="${L}" cy="${y}" r="6.5" fill="#fff"/><circle cx="${R}" cy="${y}" r="6.5" fill="#fff"/>`:'';
  return w+`<circle cx="${L}" cy="${y+1}" r="${p.dark?3.6:5.2}" fill="#111"/><circle cx="${R}" cy="${y+1}" r="${p.dark?3.6:5.2}" fill="#111"/>
  <circle cx="${L+1.5}" cy="${y-1}" r="1.6" fill="#fff"/><circle cx="${R+1.5}" cy="${y-1}" r="1.6" fill="#fff"/>`;
}
const blush=(y=68)=>`<ellipse cx="33" cy="${y}" rx="6" ry="4" fill="#ff9fb0" opacity=".6"/><ellipse cx="87" cy="${y}" rx="6" ry="4" fill="#ff9fb0" opacity=".6"/>`;
const smile=(y=84,c='#5a3a3a')=>`<path d="M54 ${y} Q60 ${y+5} 66 ${y}" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
const head=(p,ry=36)=>`<ellipse cx="60" cy="62" rx="38" ry="${ry}" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>`;

const A=[
 // 0 쥐
 p=>`<path d="M96 90 C118 86 116 62 104 68" stroke="${p.d}" stroke-width="4" fill="none" stroke-linecap="round"/>
  <circle cx="28" cy="34" r="19" fill="${p.m}" stroke="${p.s}" stroke-width="2"/><circle cx="92" cy="34" r="19" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <circle cx="28" cy="34" r="11" fill="#f6b8c8"/><circle cx="92" cy="34" r="11" fill="#f6b8c8"/>
  ${head(p)}<ellipse cx="60" cy="78" rx="22" ry="17" fill="${p.l}"/>${eyes(p,58)}
  <ellipse cx="60" cy="71" rx="5" ry="4" fill="#e7708f"/><path d="M60 75 v4 M54 80 Q60 85 66 80" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M40 72 H24 M40 77 L26 82 M80 72 H96 M80 77 L94 82" stroke="${p.s}" stroke-width="1.5" stroke-linecap="round"/>${blush(70)}`,
 // 1 소
 p=>`<path d="M30 34 C22 28 20 16 26 12 C28 22 34 26 40 30Z" fill="#f3e6c8" stroke="#bfa979" stroke-width="1.5"/>
  <path d="M90 34 C98 28 100 16 94 12 C92 22 86 26 80 30Z" fill="#f3e6c8" stroke="#bfa979" stroke-width="1.5"/>
  <ellipse cx="18" cy="52" rx="13" ry="7" transform="rotate(-20 18 52)" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <ellipse cx="102" cy="52" rx="13" ry="7" transform="rotate(20 102 52)" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  ${head(p)}<ellipse cx="60" cy="40" rx="12" ry="7" fill="${p.d}"/>${eyes(p,56)}
  <ellipse cx="60" cy="82" rx="26" ry="16" fill="#f7c9b8"/><ellipse cx="51" cy="82" rx="3.5" ry="4.5" fill="#a0625a"/><ellipse cx="69" cy="82" rx="3.5" ry="4.5" fill="#a0625a"/>${blush(70)}`,
 // 2 호랑이
 p=>`<circle cx="30" cy="32" r="13" fill="${p.m}" stroke="${p.s}" stroke-width="2"/><circle cx="90" cy="32" r="13" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <circle cx="30" cy="32" r="7" fill="${p.l}"/><circle cx="90" cy="32" r="7" fill="${p.l}"/>
  ${head(p)}
  <path d="M52 30 L54 40 M60 28 V40 M68 30 L66 40" stroke="${p.s}" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M23 58 L34 60 M23 66 L33 66 M97 58 L86 60 M97 66 L87 66" stroke="${p.s}" stroke-width="3.5" stroke-linecap="round"/>
  <ellipse cx="60" cy="80" rx="20" ry="15" fill="${p.l}"/>${eyes(p,56)}
  <path d="M55 72 L65 72 L60 77Z" fill="#e7708f"/><path d="M60 77 v3 M53 82 Q57 86 60 81 Q63 86 67 82" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>${blush(70)}`,
 // 3 토끼
 p=>`<ellipse cx="44" cy="20" rx="9" ry="22" transform="rotate(-10 44 20)" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <ellipse cx="76" cy="20" rx="9" ry="22" transform="rotate(10 76 20)" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <ellipse cx="44" cy="22" rx="4.5" ry="15" transform="rotate(-10 44 22)" fill="#f6b8c8"/><ellipse cx="76" cy="22" rx="4.5" ry="15" transform="rotate(10 76 22)" fill="#f6b8c8"/>
  <ellipse cx="60" cy="66" rx="36" ry="33" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>${eyes(p,60)}
  <ellipse cx="60" cy="74" rx="4.5" ry="3.5" fill="#e7708f"/><path d="M60 77 v3 M54 80 Q57 84 60 80 Q63 84 66 80" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
  <rect x="56.5" y="81" width="7" height="6" rx="1.5" fill="#fff" stroke="#ccc"/>${blush(74)}`,
 // 4 용
 p=>`<path d="M38 34 L28 10 M30 18 L22 16 M33 24 L25 26" stroke="#f2b632" stroke-width="5" stroke-linecap="round"/>
  <path d="M82 34 L92 10 M90 18 L98 16 M87 24 L95 26" stroke="#f2b632" stroke-width="5" stroke-linecap="round"/>
  <path d="M48 28 L54 18 L60 26 L66 18 L72 28Z" fill="${p.d}"/>
  ${head(p)}<path d="M34 86 C20 92 14 84 10 90 M86 86 C100 92 106 84 110 90" stroke="${p.d}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="60" cy="80" rx="24" ry="16" fill="${p.l}"/>${eyes(p,54)}
  <circle cx="52" cy="76" r="2.6" fill="${p.s}"/><circle cx="68" cy="76" r="2.6" fill="${p.s}"/>${smile(86)}${blush(68)}`,
 // 5 뱀
 p=>`<path d="M22 96 C10 80 26 70 40 84 C50 94 70 94 82 84 C96 72 112 84 100 98Z" fill="${p.d}" stroke="${p.s}" stroke-width="2"/>
  <ellipse cx="60" cy="58" rx="36" ry="32" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <circle cx="48" cy="34" r="4" fill="${p.d}"/><circle cx="60" cy="31" r="4" fill="${p.d}"/><circle cx="72" cy="34" r="4" fill="${p.d}"/>
  <ellipse cx="60" cy="72" rx="22" ry="12" fill="${p.l}"/>${eyes(p,54)}
  <circle cx="55" cy="68" r="1.8" fill="${p.s}"/><circle cx="65" cy="68" r="1.8" fill="${p.s}"/>
  <path d="M60 78 V88 M60 88 L56 93 M60 88 L64 93" stroke="#e5484d" stroke-width="2.5" stroke-linecap="round"/>${blush(64)}`,
 // 6 말
 p=>`<path d="M36 32 L30 10 L50 24Z" fill="${p.m}" stroke="${p.s}" stroke-width="2"/><path d="M84 32 L90 10 L70 24Z" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <ellipse cx="60" cy="58" rx="36" ry="34" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <path d="M38 30 C44 10 76 10 82 30 C76 22 66 26 60 20 C54 26 44 22 38 30Z" fill="${p.d}"/>
  <ellipse cx="60" cy="84" rx="26" ry="20" fill="${p.l}"/>${eyes(p,54)}
  <ellipse cx="51" cy="82" rx="3" ry="4" fill="#9a5a3c"/><ellipse cx="69" cy="82" rx="3" ry="4" fill="#9a5a3c"/>${smile(94,'#9a5a3c')}${blush(66)}`,
 // 7 양
 p=>`<g fill="${p.l}" stroke="${p.s}" stroke-width="1.5">
  <circle cx="34" cy="38" r="14"/><circle cx="50" cy="28" r="14"/><circle cx="70" cy="28" r="14"/><circle cx="86" cy="38" r="14"/>
  <circle cx="26" cy="58" r="13"/><circle cx="94" cy="58" r="13"/><circle cx="30" cy="80" r="13"/><circle cx="90" cy="80" r="13"/></g>
  <path d="M30 50 C14 46 14 70 28 66" stroke="#c9a46a" stroke-width="6" fill="none" stroke-linecap="round"/>
  <path d="M90 50 C106 46 106 70 92 66" stroke="#c9a46a" stroke-width="6" fill="none" stroke-linecap="round"/>
  <ellipse cx="60" cy="66" rx="28" ry="30" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>${eyes(p,60,11)}
  <path d="M55 76 L65 76 L60 80Z" fill="#e7708f"/>${smile(84)}<ellipse cx="40" cy="72" rx="5" ry="3.5" fill="#ff9fb0" opacity=".6"/><ellipse cx="80" cy="72" rx="5" ry="3.5" fill="#ff9fb0" opacity=".6"/>`,
 // 8 원숭이
 p=>`<circle cx="20" cy="60" r="14" fill="${p.m}" stroke="${p.s}" stroke-width="2"/><circle cx="100" cy="60" r="14" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <circle cx="20" cy="60" r="8" fill="#f7cbb0"/><circle cx="100" cy="60" r="8" fill="#f7cbb0"/>
  ${head(p)}<path d="M60 44 C48 34 30 42 34 60 C34 76 44 92 60 92 C76 92 86 76 86 60 C90 42 72 34 60 44Z" fill="#f7cbb0"/>
  ${eyes({...p,dark:false},58,12)}<ellipse cx="56" cy="72" rx="1.8" ry="2.4" fill="#7a4a3a"/><ellipse cx="64" cy="72" rx="1.8" ry="2.4" fill="#7a4a3a"/>
  ${smile(80,'#7a4a3a')}<path d="M54 26 C56 20 64 20 66 26" stroke="${p.d}" stroke-width="4" fill="none" stroke-linecap="round"/>${blush(72)}`,
 // 9 닭
 p=>`<path d="M46 30 C42 14 54 12 54 22 C54 10 66 10 64 22 C66 12 78 16 72 30Z" fill="#e8483b"/>
  ${head(p)}${eyes(p,54)}
  <path d="M50 66 L70 66 L60 80Z" fill="#ffb32e" stroke="#d98c10" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M56 80 C54 92 66 92 64 80Z" fill="#e8483b"/>${blush(66)}
  <path d="M22 60 C12 64 12 76 22 78 M98 60 C108 64 108 76 98 78" stroke="${p.d}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
 // 10 개
 p=>`<ellipse cx="24" cy="50" rx="12" ry="22" transform="rotate(20 24 50)" fill="${p.d}" stroke="${p.s}" stroke-width="2"/>
  <ellipse cx="96" cy="50" rx="12" ry="22" transform="rotate(-20 96 50)" fill="${p.d}" stroke="${p.s}" stroke-width="2"/>
  ${head(p)}<ellipse cx="60" cy="78" rx="22" ry="16" fill="${p.l}"/>${eyes(p,56)}
  <ellipse cx="60" cy="70" rx="7" ry="5" fill="#2a2a2a"/><path d="M60 75 v4 M53 80 Q57 84 60 79 Q63 84 67 80" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M57 83 C57 92 63 92 63 83Z" fill="#ff7a8a"/>${blush(68)}`,
 // 11 돼지
 p=>`<ellipse cx="30" cy="30" rx="15" ry="12" transform="rotate(-25 30 30)" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <ellipse cx="90" cy="30" rx="15" ry="12" transform="rotate(25 90 30)" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>
  <ellipse cx="31" cy="31" rx="8" ry="6" transform="rotate(-25 31 31)" fill="#f4a7b9"/><ellipse cx="89" cy="31" rx="8" ry="6" transform="rotate(25 89 31)" fill="#f4a7b9"/>
  <ellipse cx="60" cy="62" rx="42" ry="40" fill="${p.m}" stroke="${p.s}" stroke-width="2"/>${p.dark?`<ellipse cx="60" cy="58" rx="34" ry="30" fill="${p.l}"/>`:''}
  ${eyes(p,52,16)}<ellipse cx="60" cy="72" rx="15" ry="11" fill="#f4a7b9"/>
  <ellipse cx="55" cy="72" rx="2.6" ry="4" fill="#c46a82"/><ellipse cx="65" cy="72" rx="2.6" ry="4" fill="#c46a82"/>
  ${blush(68)}<path d="M54 88 Q60 92 66 88" stroke="#f4a7b9" stroke-width="2.5" fill="none" stroke-linecap="round"/>`
];
window.CHAR=function(bi,el){ const p=PAL[el]; return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">${sh}${A[bi](p)}${ICON[el]}</svg>`; };
})();

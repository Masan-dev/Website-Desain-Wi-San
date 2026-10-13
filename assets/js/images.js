/* WI-San — images.js */

/* ============================================================
   UBAH NILAI DI SINI. Isi dengan link foto langsung (harus
   berakhiran .jpg / .png / .webp) atau lokasi file lokal
   (contoh: 'assets/image/earth.png'). Semua lokasi dihitung dari
   folder utama website, bukan dari folder file ini.
   Kosongkan '' untuk memakai ilustrasi bawaan.
   ============================================================ */
const C='https://commons.wikimedia.org/wiki/Special:FilePath/';
const FOTO={
  earth:   'assets/image/earth.png',
  stats:   C+'Grafana_screenshot_(2018).png?width=900',
  security:C+'Cybersecurity.png?width=700',
  logo:'',   // dikosongkan: logo elang bawaan dipakai
  p1:C+'Network_cables_plugged_to_router_20170903.jpg?width=800',
  p2:C+'20150208ipTIME_A2004NS_Wireless_router.jpg?width=800',
  p3:C+'Router_on_a_wooden_table_with_visible_cables_and_a_wall_in_the_background.jpg?width=800',
  p4:C+'Network_cables_and_switch.jpg?width=800',
  p5:C+'ZTE_WiFi_router4G.jpg?width=800',
  p6:'', p7:'',   // dikosongkan: ilustrasi bawaan (tier Ultimate)
  t1:'', t2:'', t3:'', t4:'', t5:''   // dikosongkan: avatar bawaan dipakai
};
/* ================= ilustrasi bawaan (jangan diubah) ================= */
const svg=s=>'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s);
const NS='xmlns="http://www.w3.org/2000/svg"';

const wing='<path id="w" d="M47 36C33 33 15 24 3 4c6 20 19 34 42 40zM45 43C32 44 20 41 9 33c8 12 21 18 36 17zM45 50c-10 2-19 1-26-3 6 8 15 11 26 9z"/>';
const tail='<path d="M50 60c-4 12-3 24 0 36 3-12 4-24 0-36z"';
const LOGO=svg(`<svg ${NS} viewBox="0 0 100 100" fill="#000"><defs>${wing}</defs><use href="#w"/><use href="#w" transform="translate(100 0) scale(-1 1)"/><path d="M50 27C43 30 41 44 44 55l6 9 6-9c3-11 1-25-6-28z"/><circle cx="52" cy="22" r="5"/><path d="M56 20l8 4-8 2z"/>${tail}/>${tail} transform="rotate(-18 50 60)"/>${tail} transform="rotate(18 50 60)"/>${tail} transform="rotate(-36 50 60)"/>${tail} transform="rotate(36 50 60)"/></svg>`);

const bin=Array.from({length:12},(_,i)=>`<text x="70" y="${92+i*14}" font-size="10" fill="#1e322b" opacity=".55" font-family="monospace">${'0011010100111001010011010101'.slice(i%5,i%5+26)}</text>`).join('');
const SECURITY=svg(`<svg ${NS} viewBox="0 0 520 400"><rect x="60" y="60" width="380" height="250" rx="10" fill="#6fa83a"/>${bin}
<rect x="80" y="30" width="110" height="80" rx="8" fill="#cbf473"/><rect x="92" y="44" width="60" height="7" rx="3" fill="#1e322b"/><rect x="92" y="60" width="80" height="6" rx="3" fill="#6fa83a"/><circle cx="170" cy="46" r="8" fill="#1e322b"/><path d="M166 46l3 3 5-6" stroke="#cbf473" stroke-width="2" fill="none"/>
<rect x="215" y="35" width="150" height="46" rx="8" fill="#cbf473"/><g fill="#1e322b"><circle cx="235" cy="58" r="5"/><circle cx="255" cy="58" r="5"/><circle cx="275" cy="58" r="5"/><circle cx="295" cy="58" r="5"/><circle cx="315" cy="58" r="5"/></g>
<rect x="385" y="20" width="60" height="70" rx="8" fill="#1e322b" stroke="#cbf473" stroke-width="3"/><rect x="401" y="52" width="28" height="22" rx="4" fill="#cbf473"/><path d="M406 52v-8a9 9 0 0 1 18 0v8" stroke="#cbf473" stroke-width="4" fill="none"/>
<rect x="380" y="110" width="110" height="46" rx="10" fill="#cbf473"/><circle cx="405" cy="133" r="12" fill="#6fa83a"/><rect x="425" y="124" width="50" height="6" rx="3" fill="#1e322b"/><rect x="425" y="136" width="36" height="6" rx="3" fill="#6fa83a"/>
<path d="M250 110l95 30v78c0 52-40 80-95 100-55-20-95-48-95-100v-78z" fill="#1e322b" stroke="#cbf473" stroke-width="3"/><path d="M200 210l38 38 65-72" stroke="#cbf473" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
<g fill="#cbf473"><rect x="380" y="190" width="100" height="24" rx="12"/><rect x="380" y="226" width="100" height="24" rx="12"/><rect x="380" y="262" width="100" height="24" rx="12"/></g><g fill="#1e322b"><circle cx="396" cy="202" r="5"/><circle cx="396" cy="238" r="5"/><circle cx="396" cy="274" r="5"/></g>
<circle cx="70" cy="60" r="34" fill="#6fa83a"/><circle cx="70" cy="60" r="12" fill="#1e322b"/>
<circle cx="75" cy="252" r="14" fill="#1e322b"/><path d="M52 372l6-95c0-14 34-14 34 0l6 95z" fill="#1e322b"/><rect x="30" y="376" width="460" height="8" rx="4" fill="#4e5c44"/></svg>`);

const EARTH=svg(`<svg ${NS} viewBox="0 0 800 600"><defs><radialGradient id="g" cx="40%" cy="22%" r="85%"><stop offset="0" stop-color="#b6e05a"/><stop offset=".35" stop-color="#5f9a2c"/><stop offset=".7" stop-color="#1c3d21"/><stop offset="1" stop-color="#08170f"/></radialGradient><clipPath id="c"><circle cx="520" cy="560" r="470"/></clipPath></defs>
<circle cx="520" cy="560" r="480" fill="#9be04a" opacity=".35"/><circle cx="520" cy="560" r="470" fill="url(#g)"/>
<g clip-path="url(#c)"><g fill="#a6d33f" opacity=".55"><path d="M330 200c60-30 130-20 170 20s10 90-40 110-90 60-120 20-40-110-10-150z"/><path d="M520 330c50-10 110 10 130 50s-20 90-70 90-80-60-60-140z"/><path d="M640 200c40-20 90 0 100 40s-30 60-70 50-50-70-30-90z"/><path d="M250 380c30-10 60 10 60 40s-30 60-60 40-30-70 0-80z"/></g>
<g fill="none" stroke="#dff59a" stroke-width="2" opacity=".6"><path d="M150 330Q400 200 800 330"/><path d="M200 460Q480 330 800 430"/><path d="M280 220Q520 150 800 250"/></g>
<g fill="#eaffb0"><circle cx="330" cy="290" r="4"/><circle cx="560" cy="270" r="4"/><circle cx="680" cy="340" r="4"/><circle cx="470" cy="400" r="4"/></g>
<ellipse cx="380" cy="130" rx="150" ry="60" fill="#fff" opacity=".18"/></g><circle cx="520" cy="560" r="470" fill="none" stroke="#9be04a" stroke-width="5"/></svg>`);

const STATS=svg(`<svg ${NS} viewBox="0 0 800 520" font-family="Arial,sans-serif"><rect width="800" height="520" fill="#0c1511"/>
<rect x="40" y="30" width="520" height="330" rx="14" fill="#0b120f" stroke="#26362d" stroke-width="8"/><text x="70" y="70" fill="#fff" font-size="13" font-weight="700">WI-SAN Net</text><text x="70" y="102" fill="#fff" font-size="16" font-weight="700">WI-SAN CONNECTION STABILITY STATISTICS</text>
<g stroke="#1f3128"><path d="M70 150H530M70 200H530M70 250H530M70 300H530"/></g>
<path d="M70 290C130 285 170 250 240 230S380 200 530 170" fill="none" stroke="#3dff7a" stroke-width="4"/><g fill="#3dff7a"><circle cx="170" cy="262" r="5"/><circle cx="300" cy="215" r="5"/><circle cx="420" cy="192" r="5"/><circle cx="530" cy="170" r="5"/></g>
<text x="70" y="335" fill="#7f9480" font-size="11">00:00       08:00       16:00       24:00</text>
<rect x="240" y="360" width="80" height="30" fill="#c9d1cc"/><rect x="200" y="388" width="160" height="10" rx="5" fill="#dde3df"/>
<rect x="400" y="200" width="360" height="230" rx="10" fill="#0b120f" stroke="#26362d" stroke-width="8"/><text x="425" y="235" fill="#fff" font-size="12" font-weight="700">MONITOR KINERJA LANGSUNG</text>
<text x="425" y="285" fill="#cbf473" font-size="34" font-weight="700">99.98%</text><text x="425" y="308" fill="#7f9480" font-size="11">Uptime</text><text x="560" y="285" fill="#cbf473" font-size="34" font-weight="700">14 ms</text><text x="560" y="308" fill="#7f9480" font-size="11">Latensi</text>
<path d="M425 400L480 380 540 390 610 340 680 350 735 300" fill="none" stroke="#3dff7a" stroke-width="3"/><path d="M370 430H790L775 450H385z" fill="#c9d1cc"/></svg>`);

function router(bg,body,acc){return svg(`<svg ${NS} viewBox="0 0 600 400"><rect width="600" height="400" fill="${bg}"/>
<g stroke="${body}" stroke-width="14" stroke-linecap="round"><path d="M150 210V90M450 210V70"/></g><circle cx="150" cy="86" r="10" fill="${acc}"/><circle cx="450" cy="66" r="10" fill="${acc}"/>
<g fill="none" stroke="${acc}" stroke-width="10" stroke-linecap="round"><path d="M255 165a64 64 0 0 1 90 0"/><path d="M235 140a96 96 0 0 1 130 0"/><path d="M215 115a128 128 0 0 1 170 0"/></g><circle cx="300" cy="180" r="9" fill="${acc}"/>
<rect x="90" y="200" width="420" height="110" rx="22" fill="${body}"/><rect x="110" y="222" width="380" height="66" rx="12" fill="#0d1a12" opacity=".25"/>
${[0,1,2,3].map(i=>`<rect x="${140+i*50}" y="236" width="34" height="30" rx="5" fill="#0d1a12"/>`).join('')}<circle cx="450" cy="252" r="8" fill="${acc}"/>
<path d="M200 310c0 50-60 40-100 70" fill="none" stroke="${body}" stroke-width="12" stroke-linecap="round"/></svg>`)}

function avatar(bg,skin,hair,shirt,long){
  const h=long?`<path d="M28 44c0-16 10-24 22-24s22 8 22 24v30h-8V46H36v28h-8z" fill="${hair}"/>`:`<path d="M30 42c0-14 8-22 20-22s20 8 20 22c-6-8-14-10-20-10s-14 2-20 10z" fill="${hair}"/>`;
  return svg(`<svg ${NS} viewBox="0 0 100 100"><rect width="100" height="100" fill="${bg}"/><path d="M12 100c2-24 16-32 38-32s36 8 38 32z" fill="${shirt}"/><rect x="43" y="56" width="14" height="14" fill="${skin}"/><ellipse cx="50" cy="44" rx="16" ry="19" fill="${skin}"/>${h}</svg>`);
}

const IMG={
  logo:LOGO, security:SECURITY, earth:EARTH, stats:STATS,
  p1:router('#dfe3dc','#f4f6f2','#2b541f'),
  p2:router('#cfd6c8','#3a4a40','#6fa83a'),
  p3:router('#e6ecd0','#ffffff','#81c837'),
  p4:router('#d8ddd5','#c9d1cc','#1e322b'),
  p5:router('#c7d0c0','#22322a','#cbf473'),
  p6:router('#1e322b','#d4b04a','#f3df8a'),
  p7:router('#10201a','#cbf473','#ffffff'),
  t1:avatar('#7ccb36','#8f6543','#0d0d0d','#2b8fb0'),
  t2:avatar('#cbf473','#e0b48b','#2a1b12','#1e322b',true),
  t3:avatar('#7ccb36','#b98761','#111','#f4f8dc'),
  t4:avatar('#a7d96a','#f0c9a4','#4a2c1a','#35543a',true),
  t5:avatar('#dff59a','#8f6543','#0d0d0d','#2b541f')
};


/* simpan ilustrasi bawaan sebagai cadangan */
const DEF={...IMG},BACKUP={};
Object.keys(FOTO).forEach(k=>{if(FOTO[k]){BACKUP[new URL(FOTO[k],location.href).href]=DEF[k];IMG[k]=FOTO[k]}});

/* jika link foto gagal dimuat, otomatis pakai ilustrasi bawaan */
document.addEventListener('error',e=>{
  const t=e.target;
  if(t.tagName==='IMG'&&BACKUP[t.src])t.src=BACKUP[t.src];
},true);

/* pasang ke halaman */
document.querySelectorAll('img[data-img]').forEach(el=>{el.src=IMG[el.dataset.img]});
const icon=document.createElement('link');icon.rel='icon';icon.href=IMG.logo;document.head.appendChild(icon);

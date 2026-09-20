
/* ---------- helpers ---------- */
const $ = (h)=>{const d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild;};
const esc = s => String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const vn  = n => n==null ? '—' : n.toLocaleString('vi-VN');
const ty  = n => n==null ? '—' : (n/1e9).toLocaleString('vi-VN',{minimumFractionDigits:1,maximumFractionDigits:1});
const dmy = s => { const p=String(s).split('/'); return new Date(+p[2],+p[1]-1,+p[0]); };
const days = (a,b) => Math.round((dmy(b)-dmy(a))/86400000);
const LV   = {red:'red',amber:'amber',ok:'ok',good:'ok',info:'grey'};

/* ---------- charts (pure SVG, no deps) ---------- */
function lineChart(series){
  const W=520,H=190,L=54,R=12,T=14,B=26, pw=W-L-R, ph=H-T-B;
  const vals=series.map(d=>d.cash), max=Math.max(...vals)*1.12, min=0;
  const x=i=>L+(pw*i)/(series.length-1), y=v=>T+ph-((v-min)/(max-min))*ph;
  let grid='',lbl='';
  for(let i=0;i<=4;i++){const v=min+(max-min)*i/4, yy=y(v);
    grid+=`<line class="gl" x1="${L}" y1="${yy}" x2="${W-R}" y2="${yy}"/>`;
    lbl+=`<text class="ax" x="${L-7}" y="${yy+3}" text-anchor="end">${(v/1e9).toFixed(0)} tỷ</text>`;}
  const solid=series.filter(d=>!d.plan), sPts=solid.map((d,i)=>`${x(i)},${y(d.cash)}`).join(' ');
  const li=solid.length-1, pl=series.find(d=>d.plan);
  let dash='';
  if(pl) dash=`<line x1="${x(li)}" y1="${y(solid[li].cash)}" x2="${x(series.length-1)}" y2="${y(pl.cash)}"
    stroke="var(--amber)" stroke-width="2.5" stroke-dasharray="5 4"/>`;
  const area=`${L},${T+ph} ${sPts} ${x(li)},${T+ph}`;
  let dots=series.map((d,i)=>`<circle cx="${x(i)}" cy="${y(d.cash)}" r="${d.plan?4:3.2}"
     fill="${d.plan?'var(--amber)':'var(--blue)'}" stroke="var(--panel)" stroke-width="1.6"/>`).join('');
  let xl=series.map((d,i)=>`<text class="ax" x="${x(i)}" y="${H-8}" text-anchor="middle">${d.m}</text>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Tiền sẵn có theo tháng">
   ${grid}${lbl}
   <polygon points="${area}" fill="var(--blue)" opacity=".10"/>
   <polyline points="${sPts}" fill="none" stroke="var(--blue)" stroke-width="2.5" stroke-linejoin="round"/>
   ${dash}${dots}${xl}</svg>`;
}
function barChart(series){
  const d=series.filter(s=>s.net!=null);
  const W=520,H=190,L=54,R=12,T=14,B=26, pw=W-L-R, ph=H-T-B;
  const mx=Math.max(...d.map(s=>Math.abs(s.net)))*1.15;
  const y0=T+ph/2, sc=v=>(v/mx)*(ph/2), bw=Math.min(34,pw/d.length-9);
  let grid='',lbl='';
  for(let i=-2;i<=2;i++){const v=mx*i/2, yy=y0-sc(v);
    grid+=`<line class="gl" x1="${L}" y1="${yy}" x2="${W-R}" y2="${yy}" ${i===0?'stroke-width="1.6"':''}/>`;
    lbl+=`<text class="ax" x="${L-7}" y="${yy+3}" text-anchor="end">${(v/1e9).toFixed(0)}</text>`;}
  let bars=d.map((s,i)=>{
    const cx=L+pw*(i+0.5)/d.length, h=Math.abs(sc(s.net)), yy=s.net>=0?y0-h:y0;
    const c=s.net>=0?'var(--green)':'var(--red)';
    return `<rect x="${cx-bw/2}" y="${yy}" width="${bw}" height="${Math.max(h,1.5)}" rx="2.5"
       fill="${c}" opacity="${s.plan?.42:.92}" ${s.plan?'stroke="'+c+'" stroke-width="1.4" stroke-dasharray="3 2"':''}/>
      <text class="ax" x="${cx}" y="${H-8}" text-anchor="middle">${s.m}</text>`;}).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Dòng tiền thực chất theo tháng">
    ${grid}${lbl}${bars}</svg>`;
}


function momChart(rows){
  const d=rows.filter(r=>r.dt!=null);
  const W=560,H=215,L=52,R=12,T=26,B=30, pw=W-L-R, ph=H-T-B;
  const mx=Math.max(...d.map(r=>Math.max(r.dt,r.cp)))*1.14;
  const y=v=>T+ph-(v/mx)*ph, gw=pw/d.length, bw=Math.min(26,(gw-14)/2);
  let grid='',lbl='';
  for(let i=0;i<=4;i++){const v=mx*i/4, yy=y(v);
    grid+=`<line class="gl" x1="${L}" y1="${yy}" x2="${W-R}" y2="${yy}"/>`;
    lbl+=`<text class="ax" x="${L-7}" y="${yy+3}" text-anchor="end">${(v/1e9).toFixed(0)} tỷ</text>`;}
  let bars=d.map((r,i)=>{
    const c=L+gw*(i+0.5), x1=c-bw-2, x2=c+2;
    const pv=i?((r.cp-d[i-1].cp)/d[i-1].cp*100):null;
    const flag=(pv!=null&&pv>=20)?`<text class="ax" x="${c+2+bw/2}" y="${y(r.cp)-5}" text-anchor="middle" fill="var(--red)" font-weight="700">+${pv.toFixed(0)}%</text>`:'';
    return `<rect x="${x1}" y="${y(r.dt)}" width="${bw}" height="${T+ph-y(r.dt)}" rx="2" fill="var(--blue)"/>
            <rect x="${x2}" y="${y(r.cp)}" width="${bw}" height="${T+ph-y(r.cp)}" rx="2" fill="var(--red)" opacity=".85"/>
            ${flag}<text class="ax" x="${c}" y="${H-9}" text-anchor="middle">${r.m}</text>`;}).join('');
  const lg=`<rect x="${L}" y="2" width="9" height="9" rx="2" fill="var(--blue)"/>
    <text class="ax" x="${L+13}" y="10">Doanh thu</text>
    <rect x="${L+78}" y="2" width="9" height="9" rx="2" fill="var(--red)" opacity=".85"/>
    <text class="ax" x="${L+91}" y="10">Chi phí</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Doanh thu và chi phí theo tháng">${grid}${lbl}${lg}${bars}</svg>`;
}
function momCashTable(rows){
  const f=n=> n==null?'—':n.toLocaleString('vi-VN');
  const CORE=6973153449, FULL=9679624017;
  return rows.map((r,i)=>{
    const p=i?rows[i-1]:null;
    const dv = p? r.cash-p.cash : null;
    const dp = (p&&p.cash)? (r.cash-p.cash)/p.cash*100 : null;
    const col = dv==null?'':(dv<0?'var(--red)':'var(--green)');
    const rc = r.cash/CORE, rf = r.cash/FULL;
    const rfs = rf<3?'color:var(--red);font-weight:700':(rf<4?'color:var(--amber);font-weight:700':'');
    return `<tr><td>${r.m}${r.plan?' <span class="chip amber">KH</span>':''}`
      +`${r.note?' <span class="chip grey" title="'+esc(r.note)+'">*</span>':''}</td>`
      +`<td class="num">${f(r.cash)}</td>`
      +`<td class="num" style="color:${col};font-weight:600">${dv==null?'—':(dv>0?'+':'')+f(dv)}</td>`
      +`<td class="num" style="color:${col};font-weight:600">${dp==null?'—':(dp>0?'+':'')+dp.toFixed(1)+'%'}</td>`
      +`<td class="num" style="color:${r.net==null?'':(r.net<0?'var(--red)':'var(--green)')}">${f(r.net)}</td>`
      +`<td class="num">${rc.toFixed(2)}</td>`
      +`<td class="num" style="${rfs}">${rf.toFixed(2)}</td></tr>`;
  }).join('');
}
function momTable(rows){
  const pct=(a,b)=> (a==null||b==null)?null:((a-b)/b*100);
  const cel=v=>{ if(v==null) return '<td class="num">—</td>';
    const c=v>0?'var(--red)':'var(--green)';
    return `<td class="num" style="color:${c};font-weight:600">${v>0?'+':''}${v.toFixed(1)}%</td>`;};
  const f=n=> n==null?'—':n.toLocaleString('vi-VN');
  return rows.map((r,i)=>{
    const p=i?rows[i-1]:null;
    if(r.dt==null) return `<tr><td>${r.m}</td><td class="num na" colspan="8">CHƯA CÓ SỐ LIỆU</td></tr>`;
    const bien=r.ln/r.dt*100, nsdt=r.ns/r.dt*100;
    return `<tr><td>${r.m}${r.note?' <span class="chip amber" title="'+esc(r.note)+'">*</span>':''}</td>
      <td class="num">${f(r.dt)}</td>${cel(p&&p.dt?pct(r.dt,p.dt):null)}
      <td class="num">${f(r.cp)}</td>${cel(p&&p.cp?pct(r.cp,p.cp):null)}
      <td class="num">${f(r.ln)}</td>${cel(p&&p.ln?pct(r.ln,p.ln):null)}
      <td class="num" style="font-weight:600">${bien.toFixed(1)}%</td>
      <td class="num" style="${nsdt>65?'color:var(--red);font-weight:700':''}">${nsdt.toFixed(1)}%</td></tr>`;
  }).join('');
}

/* ---------- render ---------- */
function render(p){
  const S=window.SERIES;
  const H=[];
  const sec=(id,n,title,inner)=>`<section id="${id}"><h2><span class="num">${n}</span>${title}</h2>${inner}</section>`;

  /* verdict + kpi */
  H.push(`<div class="verdict ${p.verdict.level}">
     <h1>${esc(p.verdict.head)}</h1><p>${esc(p.verdict.body)}</p>
     <div class="meta"><span><b>Kỳ:</b> ${esc(p.label)}</span>
     <span><b>Chốt dữ liệu:</b> ${esc(p.asOf)}</span>
     <span><b>Phạm vi quét email:</b> ${esc(p.scan)}</span></div></div>`);
  H.push(`<div class="kpis">`+p.kpi.map(k=>`<div class="kpi ${LV[k.level]||''}">
     <div class="lb">${esc(k.label)}</div><div class="vl">${esc(k.value)}</div>
     <div class="sb">${esc(k.sub)}</div></div>`).join('')+`</div>`);

  /* 1 summary */
  H.push(sec('s1',1,'Tóm tắt điều hành',
    `<div class="card"><ul class="bul">`+p.summary.map(s=>`<li class="${s.level}">${esc(s.t)}</li>`).join('')+`</ul></div>`));

  /* 2 compliance */
  const cst={late:['red','CHƯA NHẬN'],pending:['grey','Chưa đến hạn'],ok:['green','Đã nhận']};
  const late=p.compliance.rows.filter(r=>r.status==='late').length;
  const duen=p.compliance.rows.filter(r=>r.status!=='pending').length;
  H.push(sec('s2',2,'Tuân thủ lịch báo cáo của TCKT',
    `<div class="note">${esc(p.compliance.note)}</div>
     <div class="tw"><table><thead><tr><th style="width:34px">#</th><th>Báo cáo cam kết</th>
     <th style="width:104px">Hạn</th><th style="width:92px">Ngày nhận</th><th style="width:190px">Tình trạng</th></tr></thead><tbody>`
     +p.compliance.rows.map(r=>`<tr><td>${r.n}</td><td>${esc(r.name)}</td><td class="num">${esc(r.due)}</td>
       <td class="num">${esc(r.got)}</td><td><span class="chip ${cst[r.status][0]}">${cst[r.status][1]}</span>
       <span class="age"> ${esc(r.tag)}</span></td></tr>`).join('')
     +`</tbody></table></div>
     <div class="card" style="margin-top:12px"><b>Tỷ lệ đúng hạn trên số báo cáo đã đến hạn: ${duen-late}/${duen}.</b>
     ${late?' Chỉ số theo dõi số 9 trong Đăng ký rủi ro chạm ngưỡng cảnh báo CAM (ngưỡng: dưới 5/5).':''}</div>`));

  /* 3 timeline */
  H.push(sec('s3',3,'Dòng thời gian trong kỳ',
    `<div class="card"><ul class="tl">`+p.timeline.map(t=>`<li class="${t.level}">
      <span class="dt">${esc(t.d)}</span><span class="who">${esc(t.who)}</span>
      <div class="ti">${esc(t.t)}</div><div class="tn">${esc(t.note)}</div></li>`).join('')+`</ul></div>`));

  /* 4 cash */
  const cashRows=p.cash.rows.map(r=>`<tr class="${r.total?'total':''}"><td>${esc(r.k)}</td>
    <td class="num">${esc(r.a)}</td><td class="num">${esc(r.b)}</td>
    <td class="num">${r.c==null?'<span class="na">KHÔNG CÓ</span>':esc(r.c)}</td>
    <td class="num">${esc(r.d)}</td></tr>`).join('');
  const flowRows=p.realFlow.rows.map(r=>`<tr class="${r.total?'total':''}"><td>${esc(r.k)}</td>
    <td class="num">${esc(r.raw)}</td><td class="num">${esc(r.adj)}</td>
    <td class="num" ${r.total?'style="color:var(--red)"':''}>${esc(r.real)}</td></tr>`).join('');
  const runRows=p.runway.map(r=>`<tr><td>${esc(r.k)}</td><td class="num">${esc(r.a)}</td>
    <td class="num" ${r.level==='amber'?'style="color:var(--red);font-weight:700"':''}>${esc(r.b)}</td>
    <td>${esc(r.th)}</td></tr>`).join('');
  H.push(sec('s4',4,'Vị thế tiền mặt và dòng tiền thực chất',
    (window.MOM_CASH?`
     <h3>4.0. Biến động so với tháng trước (MoM)</h3>
     <div class="tw"><table><thead><tr>
       <th>Tháng</th><th class="num">Tiền sẵn có</th><th class="num">Δ so tháng trước</th>
       <th class="num">Δ%</th><th class="num">Dòng tiền thực chất</th>
       <th class="num">Cầm cự — chi lõi</th><th class="num">Cầm cự — gồm thuế &amp; capex</th>
     </tr></thead><tbody>${momCashTable(window.MOM_CASH)}</tbody></table></div>
     <div class="note">Số tháng cầm cự tính trên chi lõi 6.973.153.449 đ/tháng và chi thực chất
       9.679.624.017 đ/tháng (bình quân H1/2026). Tô cam khi dưới 4 tháng, tô đỏ khi dưới 3 tháng.
       Nhãn <span class="chip amber">KH</span> = số kế hoạch, chưa kiểm chứng.</div>
     ${window.MOM_CASH_NOTE?`<div class="note">${esc(window.MOM_CASH_NOTE)}</div>`:''}
     `:'')+
    `<div class="charts">
       <div class="chartbox"><h4>Tiền sẵn có cuối tháng</h4>
         <div class="cs">Ngân hàng + tiền mặt + sổ tiết kiệm · điểm cam nét đứt = số theo KẾ HOẠCH, chưa kiểm chứng</div>
         ${lineChart(S)}</div>
       <div class="chartbox"><h4>Dòng tiền thực chất theo tháng</h4>
         <div class="cs">Đã loại trừ gửi/rút tiết kiệm và cho vay/thu hồi · cột mờ nét đứt = kế hoạch (tỷ đồng)</div>
         ${barChart(S)}</div></div>
     <h3>4.1. Số dư tiền</h3>
     <div class="tw"><table><thead><tr><th>Cấu phần</th><th class="num">31/12/2025</th><th class="num">30/06/2026</th>
       <th class="num">31/07 (thực tế)</th><th class="num">31/07 (kế hoạch)</th></tr></thead><tbody>${cashRows}</tbody></table></div>
     <div class="note">${esc(p.cash.note)}</div>
     <h3>4.2. Dòng tiền thực chất</h3>
     <div class="note" style="font-style:normal">${esc(p.realFlow.note)}</div>
     <div class="tw"><table><thead><tr><th>Chỉ tiêu</th><th class="num">Kế hoạch (thô)</th>
       <th class="num">Loại trừ luân chuyển</th><th class="num">Dòng tiền thực chất</th></tr></thead><tbody>${flowRows}</tbody></table></div>
     <div class="card" style="margin-top:11px">${esc(p.realFlow.comment)}</div>
     <h3>4.3. Số tháng cầm cự</h3>
     <div class="tw"><table><thead><tr><th>Chỉ số</th><th class="num">30/06/2026</th>
       <th class="num">31/07 (ước tính KH)</th><th>Ngưỡng cảnh báo</th></tr></thead><tbody>${runRows}</tbody></table></div>
     <h3>4.4. Công nợ phải thu Chủ đầu tư</h3>
     <div class="card">${esc(p.receivables)}</div>`));

  /* 5 variance */
  const vr=a=>a.map(r=>`<tr><td>${esc(r.k)}</td><td class="num">${esc(r.plan)}</td><td class="num">${esc(r.act)}</td>
    <td class="num" ${r.level==='red'?'style="color:var(--red);font-weight:700"':''}>${esc(r.diff)}</td></tr>`).join('');
  H.push(sec('s5',5,'Kế hoạch so với thực tế — các khoản lệch trọng yếu',
    `<div class="note" style="font-style:normal">Ngưỡng trọng yếu: lệch trên 20% <b>hoặc</b> trên 500 triệu đồng.</div>
     <h3>Kỳ hiện tại</h3>
     <div class="tw"><table><thead><tr><th>Khoản mục</th><th class="num">Kế hoạch / AOP</th>
       <th class="num">Thực tế</th><th class="num">Chênh lệch</th></tr></thead><tbody>${vr(p.variance.t7)}</tbody></table></div>
     <div class="note">${esc(p.variance.t7note)}</div>
     <h3>Tồn đọng từ kỳ trước, chưa được giải trình</h3>
     <div class="tw"><table><thead><tr><th>Khoản mục</th><th class="num">Kế hoạch</th>
       <th class="num">Thực tế</th><th class="num">Chênh lệch</th></tr></thead><tbody>${vr(p.variance.carry)}</tbody></table></div>
     <div class="card" style="margin-top:11px">${esc(p.variance.carrynote)}</div>`));

  /* 6 pnl */
  H.push(sec('s6',6,'Kết quả kinh doanh',
    `<div class="verdict amber" style="margin-top:0"><p>${esc(p.pnl.note)}</p></div>
     <div class="tw"><table><thead><tr><th>Chỉ tiêu</th><th class="num">${esc(p.pnl.h1label||'H1/2026')}</th>
       <th class="num">${esc(p.pnl.t6label||'Riêng tháng 6')}</th><th>Ghi nhận</th></tr></thead><tbody>`
     +p.pnl.rows.map(r=>`<tr><td>${esc(r.k)}</td><td class="num">${esc(r.h1)}</td>
       <td class="num">${esc(r.t6)}</td><td>${esc(r.c)}</td></tr>`).join('')
     +`</tbody></table></div><div class="note">${esc(p.pnl.comment)}</div>`
     +(window.MOM?`
      <h3>Biến động theo tháng — doanh thu và chi phí</h3>
      <div class="chartbox" style="margin-bottom:12px">
        <div class="cs">Cột xanh: doanh thu · cột đỏ: chi phí · nhãn đỏ: tháng chi phí tăng từ 20% trở lên</div>
        ${momChart(window.MOM)}</div>
      <div class="tw"><table><thead><tr>
        <th>Tháng</th><th class="num">Doanh thu</th><th class="num">±%</th>
        <th class="num">Chi phí</th><th class="num">±%</th>
        <th class="num">LNTT</th><th class="num">±%</th>
        <th class="num">Biên LNTT</th><th class="num">CPNS/DT</th></tr></thead>
        <tbody>${momTable(window.MOM)}</tbody></table></div>
      <div class="note">Cột ±% là thay đổi so với tháng liền trước. Màu đỏ = tăng, màu xanh = giảm.
        CPNS/DT tô đỏ khi vượt ngưỡng cảnh báo 65%. Dấu <span class="chip amber">*</span> = có ghi chú bất thường.</div>
      ${window.MOM_CALLOUT?`<div class="verdict ${window.MOM_CALLOUT.level}">
        <h1>${esc(window.MOM_CALLOUT.head)}</h1><p>${esc(window.MOM_CALLOUT.body)}</p></div>`:''}
     `:'')));

  /* 7 flags */
  const rs=p.riskSummary;
  H.push(sec('s7',7,'Cảnh báo đỏ',
    `<div class="note">${esc(p.flagsNote)}</div>
     <div class="kpis" style="margin-bottom:14px">
       <div class="kpi red"><div class="lb">Rủi ro ĐỎ</div><div class="vl">${rs.red}</div><div class="sb">Đăng ký rủi ro</div></div>
       <div class="kpi amber"><div class="lb">Rủi ro CAM</div><div class="vl">${rs.amber}</div><div class="sb">Đăng ký rủi ro</div></div>
       <div class="kpi"><div class="lb">Điểm rủi ro gộp</div><div class="vl">${rs.score}</div><div class="sb">Sau xử lý dự kiến: ${rs.scoreAfter}</div></div>
       <div class="kpi"><div class="lb">Số mục ĐỎ trong kỳ</div><div class="vl">${p.flags.filter(f=>f.level==='red').length} / ${p.flags.length}</div><div class="sb">Rà soát bắt buộc 8 mục</div></div>
     </div>`
     +p.flags.map(f=>{
       const d=days(f.since,p.asOf);
       return `<div class="flag ${LV[f.level]}"><div class="fh">
         <span class="fn">#${f.n}</span><span class="ft">${esc(f.title)}</span>
         <span class="chip ${LV[f.level]}">${f.level==='red'?'ĐỎ':f.level==='amber'?'CAM':'OK'}</span>
         <span class="age">tồn đọng ${d} ngày · từ ${esc(f.since)}</span></div>
         <div class="fd">${esc(f.detail)}</div></div>`;}).join('')
     +`<div class="card" style="border-left:4px solid var(--red)"><b>Nhận định:</b> ${esc(rs.note)}</div>`));

  /* 8 actions */
  H.push(sec('s8',8,'Việc cần làm trong 7 ngày',
    p.actions.map(a=>`<div class="act ${LV[a.level]}"><div class="n">${a.n}</div><div class="b">
      <div class="t">${esc(a.t)}</div><div class="m">
      <span class="chip ${LV[a.level]}">${esc(a.tag)}</span>
      <span class="age">Hạn: ${esc(a.due)}</span></div></div></div>`).join('')
    +`<div class="card" style="margin-top:10px;font-style:italic">${esc(p.actionsExtra)}</div>`));

  /* 9 sources */
  H.push(sec('s9',9,'Nguồn dữ liệu và giới hạn',
    `<h3>Nguồn đã sử dụng</h3><div class="card"><ul class="bul">`
     +p.sources.map(s=>`<li class="info">${esc(s)}</li>`).join('')+`</ul></div>
     <h3>Những gì KHÔNG kiểm chứng được</h3><div class="card"><ul class="bul">`
     +p.limits.map(s=>`<li class="amber">${esc(s)}</li>`).join('')+`</ul></div>
     <h3>Khuyến nghị về chuyên môn độc lập</h3>
     <div class="verdict amber" style="margin:0"><p>${esc(p.legal)}</p></div>`));

  /* 10 appendix */
  const ax=p.appendix;
  H.push(sec('s10',10,'Phụ lục',
    `<details open><summary>${esc(ax.title)}</summary>
      <div class="note">${esc(ax.intro)}</div>
      <div class="doc">`+ax.body.map(b=> b.li
        ? `<ul>`+b.li.map(x=>`<li>${esc(x)}</li>`).join('')+`</ul>`
        : `<p${b.b?' style="font-weight:700"':''}>${esc(b.p)}</p>`).join('')
      +`</div></details>`));

  document.getElementById('app').innerHTML=H.join('');

  /* nav */
  const items=[['s1','Tóm tắt điều hành'],['s2','Tuân thủ báo cáo'],['s3','Dòng thời gian'],
    ['s4','Tiền mặt & dòng tiền'],['s5','Kế hoạch vs thực tế'],['s6','Kết quả kinh doanh'],
    ['s7','Cảnh báo đỏ'],['s8','Việc cần làm'],['s9','Nguồn & giới hạn'],['s10','Phụ lục']];
  document.getElementById('nav').innerHTML=items.map((i,k)=>
    `<a href="#${i[0]}">${k+1}. ${i[1]}</a>`).join('');
  const links=[...document.querySelectorAll('nav.side a')];
  const obs=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id));}
  }),{rootMargin:'-70px 0px -70% 0px'});
  items.forEach(i=>{const el=document.getElementById(i[0]); if(el) obs.observe(el);});
}

/* ---------- boot ---------- */
const sel=document.getElementById('sel');
try{
  if(!window.PERIODS||!window.PERIODS.length) throw new Error('Không tìm thấy dữ liệu (window.PERIODS rỗng).');
  window.PERIODS.forEach((p,i)=>sel.add(new Option(p.label,i)));
  sel.onchange=()=>{render(window.PERIODS[sel.value]);window.scrollTo(0,0);};
  render(window.PERIODS[0]);
}catch(err){
  document.getElementById('app').innerHTML=
   '<div class="verdict red"><h1>Trang chưa hiển thị được dữ liệu</h1>'+
   '<p><b>Lỗi:</b> '+esc(err.message)+'</p>'+
   '<p>Nguyên nhân thường gặp: khu vực dữ liệu ở đầu file bị sửa sai cú pháp '+
   '(thiếu dấu phẩy, thiếu ngoặc, hoặc dùng dấu nháy cong “ ” thay cho \" ). '+
   'Mở Console của trình duyệt (Cmd+Option+J) để xem dòng báo lỗi cụ thể.</p></div>';
  sel.style.display='none';
}

const root=document.documentElement, TK='ksnb-theme';
const setT=t=>{root.dataset.theme=t;try{localStorage.setItem(TK,t)}catch(e){}};
try{const s=localStorage.getItem(TK); if(s) setT(s);
  else if(matchMedia('(prefers-color-scheme:dark)').matches) setT('dark');}catch(e){}
document.getElementById('th').onclick=()=>setT(root.dataset.theme==='dark'?'light':'dark');

window.SERIES = [
  { m: "T12/25", cash: 28656057577, net: null,          plan: false },
  { m: "T1/26",  cash: 20178696322, net: -8477361255,   plan: false },
  { m: "T2/26",  cash: 7419634572,  net: -12759061750,  plan: false },
  { m: "T3/26",  cash: 17163884477, net: 9744249905,    plan: false },
  { m: "T4/26",  cash: 26080362038, net: 8916477561,    plan: false },
  { m: "T5/26",  cash: 33677439510, net: 7597077472,    plan: false },
  { m: "T6/26",  cash: 38876331030, net: 5198891520,    plan: false },
  { m: "T7/26",  cash: 33807606624, net: -5068724406,   plan: true  }
];

/* --- Biến động tiền theo tháng (MoM) ------------------------
   cash = ngân hàng + tiền mặt + sổ tiết kiệm
   net  = dòng tiền thực chất (đã loại gửi/rút TK và cho vay/thu hồi)
   Số tháng cầm cự tính trên chi lõi 6.973.153.449 đ và
   chi thực chất 9.679.624.017 đ (bình quân H1/2026). */
window.MOM_CASH = [
  { m:"T12/25", cash:28656057577, net:null },
  { m:"T1/26",  cash:20178696322, net:-8477361255 },
  { m:"T2/26",  cash:7419634572,  net:-12759061750, note:"Đáy thanh khoản của năm — chỉ còn 1,06 tháng cầm cự" },
  { m:"T3/26",  cash:17163884477, net:9744249905 },
  { m:"T4/26",  cash:26080362038, net:8916477561 },
  { m:"T5/26",  cash:33677439510, net:7597077472,  note:"Tháng phát sinh khoản cho vay 20 tỷ ra–vào" },
  { m:"T6/26",  cash:38876331030, net:5198891520,  note:"Đỉnh tiền của năm" },
  { m:"T7/26",  cash:33807606624, net:-5068724406, plan:true, note:"Ước tính theo kế hoạch — TCKT chưa phát hành số thực tế" }
];
window.MOM_CASH_NOTE = "Cột T7/26 là ƯỚC TÍNH: tiền thực tế 30/06 (38.876.331.030 đ) cộng dòng tiền thực chất theo kế hoạch T7 (−5.068.724.406 đ). Bản thân file kế hoạch ghi 33.514.597.824 đ, thấp hơn 293.008.800 đ, vì kế hoạch cuốn chiếu từ số dư KẾ HOẠCH cuối tháng 6 (8.539.012.230 đ) chứ không phải số THỰC TẾ (8.876.331.030 đ). Cả hai đều là ước tính, chưa kiểm chứng.";

/* --- Các kỳ báo cáo (mới nhất lên đầu) --------------------- */
window.PERIODS = [
{
  id: "2026-07",
  label: "Tháng 7/2026",
  asOf: "12/08/2026",
  scan: "08/07/2026 – 12/08/2026 (36 ngày)",

  verdict: {
    level: "red",
    head: "KHÔNG ĐỦ DỮ LIỆU ĐỂ ĐÁNH GIÁ THÁNG 7 — VÀ DÒNG TIỀN QUÝ 3 ĐANG BỊ TREO",
    body: "TCKT chưa phát hành bất kỳ số liệu tài chính tháng 7/2026 nào; cả ba file nguồn đều dừng ở tháng 6. Đồng thời phát sinh rủi ro mới trong kỳ: CĐT chưa chốt báo cáo ngân sách H1, kéo theo 48,69 tỷ đ phí dịch vụ vận hành Quý 3 chưa được giải ngân."
  },

  kpi: [
    { label: "Tiền sẵn có cuối kỳ", value: "Không có số thực tế", sub: "Ước tính: ~33,81 tỷ đ · MoM −5,07 tỷ (−13,0%)", level: "red", icon: "cash" },
    { label: "Số tháng cầm cự", value: "~3,49 tháng", sub: "Gồm thuế & capex · T6: 4,02 · ngưỡng ĐỎ dưới 3", level: "amber", icon: "clock" },
    { label: "Dòng tiền thực chất", value: "−5,07 tỷ đ", sub: "Theo KH · T6 thực tế +5,20 tỷ · đảo chiều 10,27 tỷ", level: "red", icon: "flow" },
    { label: "Tuân thủ báo cáo", value: "0 / 2", sub: "Đã đến hạn nhưng chưa phát hành · trễ 5 ngày", level: "red", icon: "doc" },
    { label: "Phí DVVH Quý 3 đang treo", value: "48,69 tỷ đ", sub: "CĐT chưa chốt BC ngân sách H1", level: "red", icon: "cash" },
    { label: "Chênh AOP nhân sự lũy kế", value: "27,60 tỷ đ", sub: "Căn cứ để CĐT cắt ngân sách · chưa đối chiếu độc lập", level: "amber", icon: "doc" }
  ],

  summary: [
    { level: "red", t: "Vẫn không trả lời được câu hỏi “tiền tăng hay giảm trong tháng 7”. Đến 12/08/2026, TCKT chưa phát hành bất kỳ số liệu tài chính T7 nào; toàn bộ cột T7.26 trong file Cashflow, PnL và Kế hoạch dòng tiền đều bằng 0." },
    { level: "red", t: "0/2 báo cáo đã đến hạn được phát hành. BC dòng tiền và BC so sánh KH vs TT cùng hạn 07/08/2026 — trễ 5 ngày. Đây là kỳ ĐẦU TIÊN áp dụng cam kết bằng văn bản ngày 24/07/2026 của TCKT." },
    { level: "red", t: "MỚI — rủi ro lớn nhất kỳ này: ngày 09/08 TCKT xin CĐT phản hồi trước 12/08 “để đảm bảo tiến độ thanh toán phí DVVH Quý 3”. Ngày 12/08 CĐT phản hồi KHÔNG chốt, mà kiến nghị giảm định biên nửa cuối năm và điều chuyển một phần chi phí nhân sự H1 sang chi phí vận hành Q3. Kế hoạch thu phí DVVH Q3 là 48.686.314.649 đ." },
    { level: "amber", t: "Chốt chặn đàm phán đã lộ rõ: theo báo cáo lương P. HCNS, lũy kế chênh giữa AOP nhân sự và thực tế là 27.603.431.530 đ; riêng T7 thực chi thấp hơn AOP 47,0% (6.046.145.761 đ so với 11.116.640.715 đ). Đây chính là con số CĐT dùng làm căn cứ cắt ngân sách." },
    { level: "red", t: "Khoản cho vay 20 tỷ đ tháng 5 nay đã truy được trọn chuỗi giao dịch: giải ngân 08/05 cho một CÁ NHÂN, thu hồi đủ gốc 12/05, lãi thu 6.720.430 đ — quy đổi chỉ 3,07%/năm. Cùng ngày 08/05 công ty rút 2 sổ tiết kiệm trước hạn 10 tỷ đ, mất 39.198.630 đ lãi. Chênh kinh tế âm 32.478.200 đ. Cột hợp đồng, khế ước và ghi chú đều trống." },
    { level: "red", t: "Chi mua sắm tài sản ngoài kế hoạch đã định danh: mua ô tô, tổng 1.525.120.000 đ trong tháng 6 (cọc, tiền xe, biển số, bảo hiểm). Dòng “Chi mua sắm CCDC, TTB dài hạn” trong kế hoạch dòng tiền bằng 0 ở cả 12 tháng." },
    { level: "amber", t: "Dòng tiền thực chất đảo chiều mạnh: từ +5,20 tỷ đ thực tế tháng 6 sang −5,07 tỷ đ theo kế hoạch tháng 7 — biến động 10,27 tỷ đ trong một tháng. Nguyên nhân: thu phí DVVH kế hoạch chỉ 7,0 tỷ so với 15,0 tỷ tháng 6, cộng kế hoạch nộp thuế TNDN 2,0 tỷ." },
    { level: "amber", t: "Chất lượng hồ sơ chưa cải thiện: 89/90 giao dịch từ 500 triệu đ trở lên trong H1 không có ghi chú (98,9%). Chênh 94.908.000 đ giữa các file nay đã truy được nguyên nhân gốc là lỗi công thức tổng, nhưng vẫn chưa được sửa." }
  ],

  compliance: {
    note: "Căn cứ email cam kết của KTT ngày 24/07/2026, áp dụng từ kỳ tháng 7/2026. Chốt dữ liệu 12/08/2026.",
    rows: [
      { n: 1, name: "Báo cáo dòng tiền",                       due: "07/08/2026", got: "—", status: "late",    tag: "Trễ 5 ngày" },
      { n: 2, name: "BC so sánh kế hoạch dòng tiền và thực tế", due: "07/08/2026", got: "—", status: "late",    tag: "Trễ 5 ngày" },
      { n: 3, name: "Báo cáo Kết quả Kinh doanh (PnL)",         due: "15/08/2026", got: "—", status: "pending", tag: "Còn 3 ngày" },
      { n: 4, name: "BC phân tích giữa lãi/lỗ và dòng tiền",    due: "18/08/2026", got: "—", status: "pending", tag: "Còn 6 ngày" },
      { n: 5, name: "BC so sánh ngân sách kế hoạch và thực tế", due: "18/08/2026", got: "—", status: "pending", tag: "Còn 6 ngày" }
    ]
  },

  timeline: [
    { d: "16/07", t: "Dự thảo Hợp đồng ủy quyền mua sắm & thanh toán với Bên liên quan B", who: "KTT", level: "red",
      note: "Email nêu rõ Công ty “đã thực hiện thanh toán trước” các khoản thuộc ngân sách CĐT. Đến 12/08 vẫn chưa thấy phản hồi hay bản ký." },
    { d: "16/07", t: "Xin ý kiến chi phí phát triển giai đoạn 2 phần mềm quản lý khu đô thị (~328 triệu đ)", who: "KTT", level: "info",
      note: "Đang xin ý kiến CĐT. Chưa rõ nguồn ngân sách." },
    { d: "27/07", t: "Triển khai trình ký điện tử trên hệ thống ERP cho nghiệp vụ liên quan CĐT", who: "KTT", level: "good",
      note: "Cải thiện kiểm soát — ghi nhận tích cực. Đề nghị mở rộng bắt buộc cho MỌI giao dịch từ 500 triệu đ." },
    { d: "27/07", t: "Phổ biến Thông tư 89/2026/TT-BTC về khấu trừ thuế GTGT (hiệu lực 01/07/2026)", who: "KTT", level: "amber",
      note: "Phổ biến sau ngày hiệu lực 26 ngày. Hóa đơn phát sinh 01/07–27/07 cần rà soát lại tính tuân thủ. Chưa đánh giá được phạm vi ảnh hưởng." },
    { d: "28/07", t: "Cập nhật ngân sách vận hành Quý 3/2026 theo tiến độ bàn giao", who: "KTT", level: "good",
      note: "Dự án B giảm 660.521.511 đ (−4,6%); Dự án A tăng 117 triệu đ (+0,1%). Đề xuất giảm phí DVVH Q3 tương ứng — đúng nguyên tắc." },
    { d: "01/08", t: "Hóa đơn tư vấn môi giới BĐS xuất 23/06, điều chỉnh nội dung địa chỉ 01/07", who: "Đối tác", level: "amber",
      note: "Khoản thanh toán đợt đầu 300 triệu đ chưa VAT. Pháp chế đang rà soát. Hóa đơn điều chỉnh sau phát hành là điểm cơ quan thuế thường soi." },
    { d: "05/08", t: "Trình duyệt lương tháng 07/2026", who: "P. HCNS", level: "info",
      note: "Nguồn dữ liệu T7 duy nhất. CPNS 6.046.145.761 đ so với AOP 11.116.640.715 đ; 477 lao động (+17). Bảng có 3 lỗi số học — xem mục 5." },
    { d: "07/08", t: "HẠN phát hành BC dòng tiền T7 và BC so sánh KH vs TT", who: "TCKT", level: "red",
      note: "Không có báo cáo nào được phát hành. Không có email giải thích lý do chậm." },
    { d: "09/08", t: "BC so sánh Ngân sách vs Thực tế chi phí kỳ T1–T6/2026", who: "KTT", level: "info",
      note: "Gửi TỚI CĐT; TGĐ và PTGĐ TT chỉ nhận CC. Đề nghị CĐT phản hồi trước 12/08 để giải ngân phí DVVH Q3." },
    { d: "11/08", t: "Gửi lại BC trên, bổ sung tổng quan theo nhóm chi phí và thuế TNDN tạm tính Q1+Q2 (4,3 tỷ đ)", who: "KTT", level: "info",
      note: "Ngoài hai nội dung bổ sung, báo cáo không điều chỉnh gì khác." },
    { d: "12/08", t: "CĐT phản hồi: KHÔNG chốt báo cáo, kiến nghị điều chỉnh định biên và chi phí nhân sự", who: "CĐT", level: "red",
      note: "Nguyên văn: “chi phí nhân sự lập ngân sách lớn hơn thực tế nhiều… cân nhắc điều chỉnh lại định biên nhân sự cho 6 tháng cuối năm 2026 và điều chỉnh giảm 1 phần chi phí nhân sự của 6 tháng đầu năm 2026 vào chi phí vận hành quý 3 năm 2026.” Ghi rõ căn cứ là bảng kê chứng từ, “không kiểm tra hồ sơ”. Phí DVVH Q3 do đó chưa được giải ngân." }
  ],

  cash: {
    note: "Cột “thực tế 31/07” trống vì sheet Số dư Bank ở khối tháng 7 không có số dư đầu kỳ, phát sinh nợ hay phát sinh có. Lưu ý thêm: ô “Tổng tiền sẵn có” trong sheet CF_YTD ghi 38.832.021.030 đ, bỏ sót quỹ tiền mặt 44.310.000 đ — giá trị đúng là 38.876.331.030 đ.",
    rows: [
      { k: "Tiền gửi ngân hàng", a: "13.656.057.577", b: "8.832.021.030",  c: null, d: "8.470.287.824" },
      { k: "Tiền mặt",           a: "—",              b: "44.310.000",     c: null, d: "—" },
      { k: "Sổ tiết kiệm",       a: "15.000.000.000", b: "30.000.000.000", c: null, d: "25.000.000.000" },
      { k: "Tổng tiền sẵn có",   a: "28.656.057.577", b: "38.876.331.030", c: null, d: "~33.807.606.624", total: true }
    ]
  },

  realFlow: {
    note: "Loại trừ luân chuyển nội bộ (gửi/rút tiết kiệm, cho vay/thu hồi) để nhìn dòng tiền thật.",
    rows: [
      { k: "Tổng thu",  raw: "27.190.000.000", adj: "−20.000.000.000 (rút TK)", real: "7.190.000.000" },
      { k: "Tổng chi",  raw: "27.258.724.406", adj: "−15.000.000.000 (gửi TK)", real: "12.258.724.406" },
      { k: "Thu − Chi", raw: "−68.724.406",    adj: "",                          real: "−5.068.724.406", total: true }
    ],
    comment: "So với tháng liền trước: tháng 6/2026 thực tế có dòng tiền thực chất DƯƠNG 5.198.891.520 đ (thu thực chất 15.190.981.009 đ, chi thực chất 9.992.089.489 đ). Kế hoạch T7 đảo chiều 10.267.615.926 đ do thu phí DVVH chỉ 7,0 tỷ đ (Bên liên quan A 3,0 tỷ + Bên liên quan B 4,0 tỷ) so với 15,0 tỷ đ tháng 6, đồng thời chi thực chất tăng 2.266.634.917 đ (+22,7%) chủ yếu vì kế hoạch nộp thuế TNDN 2,0 tỷ đ."
  },

  runway: [
    { k: "Tiền sẵn có",                          a: "38.876.331.030", b: "~33.807.606.624", th: "Dưới 25 tỷ = CAM; dưới 15 tỷ = ĐỎ", level: "ok" },
    { k: "Cầm cự theo chi lõi (6,97 tỷ/tháng)",   a: "5,58 tháng",     b: "~4,85 tháng",     th: "Dưới 4 = CAM; dưới 3 = ĐỎ", level: "ok" },
    { k: "Cầm cự gồm thuế & capex (9,68 tỷ/th)",  a: "4,02 tháng",     b: "~3,49 tháng",     th: "Dưới 3 tháng = ĐỎ", level: "amber" }
  ],

  receivables: "Tại 30/06/2026: Bên liên quan A còn phải thu 3.498.534.044 đ (toàn bộ là quý 2); Bên liên quan B đã thanh toán đủ Q1 và Q2 (8.132.686.783 + 11.952.956.127 = 20.085.642.910 đ). Số ngày phải thu khoảng 9,8 ngày — không phải vấn đề. Chưa có số liệu 31/07/2026. RỦI RO ĐÃ HIỆN THỰC HÓA trong kỳ này: CĐT chưa chốt báo cáo ngân sách H1 nên phí DVVH Q3 theo kế hoạch (7,0 tỷ T7 + 26,7 tỷ T8 + 15,0 tỷ T9 = 48.686.314.649 đ) chưa được giải ngân, trong khi tiền sẵn có đang giảm.",

  variance: {
    t7: [
      { k: "Chi lương, thưởng (dòng tiền)",  plan: "5.602.458.717",  act: "5.064.459.618", diff: "−537.999.099 (−9,6%)",   level: "ok" },
      { k: "Chi phí nhân sự (AOP kế toán)",  plan: "11.116.640.715", act: "6.046.145.761", diff: "−5.070.494.954 (−45,6%)", level: "info" },
      { k: "  – Khối hỗ trợ (14 người)",     plan: "715.474.801",    act: "788.842.317",   diff: "+73.367.516 (+10,3%) — VƯỢT AOP", level: "red" },
      { k: "  – BQL Dự án A (311 người)",    plan: "7.052.391.628",  act: "3.531.692.116", diff: "−3.520.699.512 (−49,9%)", level: "info" },
      { k: "  – BQL Dự án B (151 người)",    plan: "3.348.774.285",  act: "1.725.611.328", diff: "−1.623.162.957 (−48,5%)", level: "info" }
    ],
    t7note: "Chênh −45,6% so với AOP không phải tiết kiệm thực chất mà phản ánh AOP lập trên giả định tuyển dụng nhanh hơn thực tế. Tổng 477 người (+17: tuyển mới 40, nghỉ 23); CPNS tăng 278.925.890 đ so với tháng 6. Khối hỗ trợ là khối DUY NHẤT vượt AOP trong khi hai khối vận hành đều thấp hơn trên 48%. CẢNH BÁO CHẤT LƯỢNG SỐ LIỆU: bảng của P. HCNS có 3 lỗi — (a) thiếu hẳn mục II; (b) cộng dọc 3 khối ra 476 người nhưng dòng tổng ghi 477; (c) cột “AOP − thực tế” dòng tổng ghi 5.222.505.738 đ trong khi phép trừ ra 5.070.494.954 đ, lệch 152.010.784 đ không giải thích được. Do lỗi (c), con số lũy kế 27.603.431.530 đ CHƯA đối chiếu độc lập được — cần HCNS xác nhận trước khi dùng để đàm phán với CĐT.",
    carry: [
      { k: "Chi mua sắm CCDC, TTB dài hạn (mua ô tô)",          plan: "0",           act: "1.525.120.000", diff: "+1.525.120.000 — ngoài kế hoạch hoàn toàn", level: "red" },
      { k: "Chi khác cho người lao động (team building đợt 1)", plan: "331.560.414", act: "1.768.914.883", diff: "+1.437.354.469 (+433,5%)", level: "red" },
      { k: "Chi khác cho hoạt động kinh doanh",                 plan: "884.161.103", act: "381.397.556",   diff: "−502.763.547 (−56,9%)", level: "ok" },
      { k: "BHXH, BHYT, BHTN, KPCĐ",                            plan: "663.120.827", act: "0",             diff: "−663.120.827 — dồn sang kỳ sau", level: "info" },
      { k: "Thuế TNCN",                                         plan: "276.300.345", act: "0",             diff: "−276.300.345 — dồn sang kỳ sau", level: "info" }
    ],
    carrynote: "Hai khoản ĐỎ vượt đồng thời cả hai ngưỡng trọng yếu (trên 20% VÀ trên 500 triệu đ). NGHĨA VỤ CHUYỂN TIẾP SANG THÁNG 7: BHXH 663.120.827 đ + thuế TNCN 276.300.345 đ chưa nộp trong tháng 6, cộng phần chi phí gắn kết đã ghi nhận nhưng chưa chi tiền khoảng 1.010.021.941 đ — tổng khoảng 1,95 tỷ đ không nằm trong kế hoạch dòng tiền tháng 7. Chưa kiểm chứng được vì thiếu số liệu T7."
  },

  pnl: {
    note: "Không có PnL tháng 7 — file PnL dừng ở tháng 6, toàn bộ cột tháng 7 bằng 0. Hạn phát hành: 15/08/2026 (còn 3 ngày).",
    rows: [
      { k: "Doanh thu",             h1: "64.495.117.616", t6: "12.615.075.689", c: "Tháng 6 cao nhất H1 (+13,9% so với T5)" },
      { k: "Tổng chi phí",          h1: "42.805.208.653", t6: "9.143.298.992",  c: "T6 tăng 30,0% so với T5" },
      { k: "Lợi nhuận trước thuế",  h1: "21.689.908.963", t6: "3.471.776.697",  c: "Biên H1 33,63%; riêng T6 chỉ 27,52%" },
      { k: "Chi phí nhân sự",       h1: "38.108.123.643", t6: "8.599.525.692",  c: "59,09% DT H1; riêng T6 68,17% — vượt ngưỡng CAM 65%" },
      { k: "Doanh thu bên thứ ba",  h1: "94.908.000",     t6: "94.908.000",     c: "0,147% tổng doanh thu" }
    ],
    comment: "Định nghĩa doanh thu bên thứ ba đang có ba cách tính cho ba kết quả: theo dòng tiền 94.908.000 đ (0,147%); theo PnL riêng mã DV Club house 63.703.142 đ (0,099%); tính cả phí thẻ và hợp tác trạm sạc thì 164.529.406 đ (0,26%). Đề nghị TCKT chốt một định nghĩa duy nhất. Dù tính cách nào, kết luận không đổi: phụ thuộc gần như tuyệt đối vào hai bên liên quan."
  },

  flags: [
    { n: 1, title: "Chi cho vay / thu hồi cho vay (mã 1103.03 / 1104.03) — đã truy được trọn chuỗi", level: "red", since: "08/05/2026",
      detail: "TIẾN TRIỂN TRONG KỲ: nay đã truy được đầy đủ từ sheet giao dịch chi tiết. Ngày 08/05/2026 chi 20.000.000.000 đ cho MỘT CÁ NHÂN (mã khách hàng nội bộ), hạch toán qua tài khoản phải thu khác. Ngày 12/05/2026 thu hồi đủ gốc và thu lãi 6.720.430 đ — lãi suất quy đổi 3,07%/năm, THẤP HƠN lãi tiết kiệm kỳ hạn 1 tháng của chính công ty (4,75%/năm). CÙNG NGÀY 08/05 công ty rút 2 sổ tiết kiệm trước hạn tổng 10 tỷ đ, lãi thực nhận 493.151 đ so với lãi kế hoạch 39.691.781 đ, mất 39.198.630 đ. Chênh lệch kinh tế: −32.478.200 đ. Ngày 19/05 có phiếu thu TIỀN MẶT 39.690.000 đ từ một cá nhân là nhân sự nội bộ, diễn giải “Thu lãi tiền gửi ngắn hạn” — lệch đúng 1.781 đ so với khoản lãi đã mất; KSNB ghi nhận sự trùng khớp giá trị nhưng CHƯA kiểm chứng được có mối liên hệ hay không. Cột hợp đồng, khế ước và ghi chú của cả 3 bút toán đều TRỐNG. Giá trị khoản vay bằng 76,7% tiền sẵn có tại 30/04/2026." },
    { n: 2, title: "Giao dịch từ 500 triệu đ ngoài ngân sách, không phê duyệt trước", level: "red", since: "30/06/2026",
      detail: "Tháng 7: KHÔNG ĐO ĐƯỢC do thiếu dữ liệu. H1/2026: có 90 giao dịch từ 500 triệu đ trở lên; KSNB chưa có quyền truy cập hồ sơ phê duyệt nên chưa đối chiếu được từng giao dịch. MẪU HÌNH MỚI PHÁT HIỆN: ngày 04/06/2026, hai khoản chi cho cùng một nhà cung cấp sự kiện, theo CÙNG một hợp đồng, CÙNG diễn giải “TT lần 1”, được tách thành 422.240.000 đ và 499.000.000 đ (tổng 921.240.000 đ). Cả hai đều nằm dưới ngưỡng 500 triệu đ; khoản thứ hai thấp hơn ngưỡng đúng 1.000.000 đ. KSNB mô tả sự việc, không kết luận về nguyên nhân." },
    { n: 3, title: "Chi mua sắm tài sản (capex) ngoài kế hoạch dòng tiền — đã định danh", level: "red", since: "19/06/2026",
      detail: "Đã bóc tách được chi tiết: cọc xe 50.000.000 đ (19/06), thanh toán tiền xe 1.420.120.000 đ (22/06), biển số 40.100.000 đ (22/06), bảo hiểm 14.900.000 đ (26/06) — tổng 1.525.120.000 đ cho một xe ô tô 7 chỗ. Dòng “Chi mua sắm CCDC, TTB dài hạn” trong kế hoạch dòng tiền 2026 bằng 0 cho cả 12 tháng, tức 100% ngoài kế hoạch. Chưa tìm thấy tờ trình chủ trương hay biên bản lựa chọn nhà cung cấp trong phạm vi đã rà soát. Kế hoạch capex vẫn chưa được cập nhật lại sau sự kiện này." },
    { n: 4, title: "Dòng giá trị lớn bị bỏ trống cột ghi chú", level: "red", since: "31/05/2026",
      detail: "Đã đếm chính xác: trong H1/2026 có 90 giao dịch từ 500 triệu đ trở lên, trong đó 89 giao dịch KHÔNG CÓ ghi chú — tỷ lệ 98,9%. Giao dịch duy nhất có ghi chú là một khoản lương 584.873.704 đ với nội dung “Sai dự án → sửa sang HO”. Nghịch lý: chính những giao dịch bất thường nhất (khoản cho vay 20 tỷ, mua ô tô 1,53 tỷ) lại không có một dòng thuyết minh nào." },
    { n: 5, title: "Đối chiếu số liệu giữa các file — đã xác định nguyên nhân gốc", level: "red", since: "30/06/2026",
      detail: "Chênh 94.908.000 đ VẪN TỒN TẠI nhưng nay đã rõ nguyên nhân: tổng các cột tháng T1–T6 của dòng “DÒNG TIỀN VÀO” là 134.298.017.554 đ, trong khi ô Total của chính dòng đó ghi 134.203.109.554 đ. Lý do: dòng “Thu DV tiện ích” (94.908.000 đ, phát sinh T6) có số ở cột tháng nhưng ô Total của dòng đó ĐỂ TRỐNG. Đây là lỗi công thức cộng, không phải khác biệt bản chất giữa hai file — số liệu gốc trong file Cashflow là đúng. PHÁT HIỆN THÊM: ô “Tổng tiền sẵn có” trong sheet CF_YTD ghi 38.832.021.030 đ, bỏ sót quỹ tiền mặt 44.310.000 đ; giá trị đúng là 38.876.331.030 đ. Sai lệch nhỏ nhưng làm lệch mọi chỉ số tính trên tiền sẵn có." },
    { n: 6, title: "Mất lãi do rút sổ tiết kiệm trước hạn", level: "red", since: "24/02/2026",
      detail: "NÂNG TỪ CAM LÊN ĐỎ sau khi tính lại đầy đủ. Lũy kế H1/2026: 154.480.823 đ, gồm (a) lần tất toán tháng 2/2026 phần 8 tỷ đ của sổ gửi 24/12/2025 — lãi kế hoạch 117.123.288 đ, thực nhận 1.841.095 đ, mất 115.282.193 đ; (b) hai sổ rút trước hạn ngày 08/05/2026 — mất 39.198.630 đ. Ngưỡng cảnh báo là 20 triệu đ/năm, thực tế đã vượt 7,7 lần. ĐIỂM MÙ THÁNG 7: có 4 sổ tiết kiệm đáo hạn trong tháng 7 (15/07, 18/07, 19/07, 25/07), mỗi sổ 5 tỷ đ, tổng 20 tỷ đ, lãi kế hoạch 78.082.192 đ — cột “lãi thực nhận” và “đã tất toán” của cả 4 sổ đều TRỐNG. Không xác định được đã tái tục hay đã rút. Cơ cấu kỳ hạn vẫn kém: tại 30/06 chỉ 10/30 tỷ đ (33,3%) gửi kỳ hạn từ 6 tháng (lãi 8,0%/năm), 20 tỷ còn lại kỳ hạn 1 tháng (4,75%/năm) — chênh 3,25 điểm phần trăm trên 20 tỷ tương đương khoảng 650 triệu đ/năm cơ hội bỏ lỡ." },
    { n: 7, title: "Góp vốn điều lệ", level: "red", since: "31/10/2025",
      detail: "KHÔNG CÓ CẬP NHẬT MỚI trong 36 ngày quét email. Tình trạng giữ nguyên: đăng ký 10 tỷ đ, thực góp 3,43 tỷ đ (34,3%); cổ đông nắm 65% chưa góp đồng nào (còn thiếu 6,57 tỷ đ). Đây là nghĩa vụ pháp lý quá hạn, không phải vấn đề quản trị nội bộ." },
    { n: 8, title: "Email liên quan thuế, hóa đơn rủi ro, kiểm toán", level: "amber", since: "27/07/2026",
      detail: "Không có email nào từ cơ quan thuế hoặc đơn vị kiểm toán trong kỳ. Bốn nội dung theo dõi: (a) Thông tư 89/2026/TT-BTC hiệu lực 01/07/2026 nhưng TCKT phổ biến nội bộ 27/07 — sau 26 ngày; hóa đơn phát sinh trong khoảng này cần rà soát lại, chưa đánh giá được phạm vi. (b) Hợp đồng ủy quyền chi hộ vẫn chưa ký trong khi đã chi trước — cần ý kiến luật sư và chuyên gia thuế độc lập. (c) Hóa đơn tư vấn môi giới BĐS (300 triệu đ chưa VAT) xuất 23/06 rồi điều chỉnh địa chỉ 01/07, Pháp chế đang rà soát. (d) TCKT đã ghi nhận bổ sung thuế TNDN tạm tính Q1+Q2 là 4,3 tỷ đ; kế hoạch nộp 2,0 tỷ đ trong T7 — chưa xác nhận được đã nộp hay chưa." },
    { n: 9, title: "MỚI — Phí dịch vụ vận hành Quý 3 chưa được giải ngân", level: "red", since: "12/08/2026",
      detail: "Ngày 09/08 TCKT đề nghị CĐT phản hồi báo cáo so sánh ngân sách H1 trước 12/08 “để đảm bảo tiến độ thanh toán phí DVVH Quý 3”. Ngày 12/08 CĐT phản hồi nhưng KHÔNG chốt, thay vào đó kiến nghị điều chỉnh định biên nhân sự nửa cuối năm và “điều chỉnh giảm 1 phần chi phí nhân sự của 6 tháng đầu năm 2026 vào chi phí vận hành quý 3 năm 2026”. Giá trị đang treo: 48.686.314.649 đ theo kế hoạch (7,0 tỷ T7 + 26,7 tỷ T8 + 15,0 tỷ T9). Kịch bản minh họa CHƯA KIỂM CHỨNG, chỉ để định cỡ rủi ro: nếu phí Q3 bị điều chỉnh theo tỷ lệ chênh AOP của tháng 7 (47,0%), thu Q3 giảm khoảng 22,9 tỷ đ và số tháng cầm cự rơi xuống dưới ngưỡng ĐỎ ngay trong Quý 4. Phần “điều chỉnh hồi tố chi phí H1” chạm tới BCTC đã lập và thuế TNDN đã tạm nộp — CẦN Ý KIẾN LUẬT SƯ VÀ CHUYÊN GIA THUẾ ĐỘC LẬP trước khi Công ty đồng ý bất kỳ điều chỉnh nào." }
  ],

  flagsNote: "Nội dung mô tả TÌNH TRẠNG HỒ SƠ quan sát được, không kết luận về hành vi hay động cơ của bất kỳ cá nhân nào. “Không có hồ sơ” nghĩa là không tìm thấy trong hộp thư và các file đã rà soát — không loại trừ khả năng hồ sơ tồn tại ở nơi khác. Tài liệu đã ẩn danh: không nêu tên người, tên pháp nhân, số tài khoản hay số sổ tiết kiệm.",

  riskSummary: { red: 7, amber: 3, yellow: 2, score: 195, scoreAfter: 90,
    note: "So với kỳ trước: THÊM 1 rủi ro ĐỎ mới (phí DVVH Q3 chưa giải ngân) và NÂNG 1 rủi ro từ CAM lên ĐỎ (mất lãi tiết kiệm, sau khi tính lại đủ 154.480.823 đ thay vì 39.198.630 đ). Không có rủi ro nào được đóng lại. R02 (khoản 20 tỷ) có hạn hoàn thành 05/08/2026 — đã quá hạn 7 ngày; tuy nhiên trong kỳ này đã truy được trọn chuỗi giao dịch, đủ cơ sở để phát văn bản yêu cầu giải trình cụ thể.",
    momNote: "Điểm sáng duy nhất trong kỳ: mức độ truy vết đã cải thiện rõ — ba cảnh báo (số 1, 3, 5) chuyển từ “không rõ nguyên nhân” sang “đã xác định đầy đủ chi tiết giao dịch”. Vấn đề còn lại là hồ sơ phê duyệt, không còn là dữ liệu."
  },

  actions: [
    { n: 1, t: "Chốt lập trường của Công ty về phí DVVH Quý 3 TRƯỚC khi trả lời CĐT. Yêu cầu TCKT trình bản tính phí Q3 kèm 2 kịch bản (giữ nguyên và bị cắt theo thực chi). KHÔNG đồng ý điều chỉnh hồi tố chi phí H1 khi chưa có ý kiến luật sư và chuyên gia thuế độc lập.", due: "14/08/2026", level: "red", tag: "RẤT KHẨN" },
    { n: 2, t: "Phát văn bản yêu cầu TCKT giải trình khoản cho vay 20 tỷ đ (nội dung soạn sẵn tại Phụ lục, đã cập nhật đầy đủ chi tiết chứng từ truy được), hạn trả lời 5 ngày làm việc.", due: "14/08/2026", level: "red", tag: "RẤT KHẨN" },
    { n: 3, t: "Yêu cầu TCKT phát hành BC dòng tiền T7 và BC so sánh KH vs TT trong 48 giờ (đã trễ 5 ngày); ghi nhận việc trễ hạn vào hồ sơ đánh giá TCKT.", due: "14/08/2026", level: "red", tag: "RẤT KHẨN" },
    { n: 4, t: "Yêu cầu TCKT xác nhận trạng thái 4 sổ tiết kiệm đáo hạn tháng 7 (tổng 20 tỷ đ, lãi kế hoạch 78.082.192 đ): đã tái tục hay đã rút, lãi thực nhận từng sổ; đồng thời trình chính sách kỳ hạn gửi tiền.", due: "17/08/2026", level: "amber", tag: "KHẨN" },
    { n: 5, t: "Yêu cầu P. HCNS đính chính 3 lỗi trong bảng lương T7 (thiếu mục II; 476 vs 477 người; lệch 152.010.784 đ ở cột AOP − thực tế) trước khi con số lũy kế 27,6 tỷ đ được dùng làm căn cứ đàm phán với CĐT.", due: "17/08/2026", level: "amber", tag: "KHẨN" },
    { n: 6, t: "Giám sát 3 báo cáo còn lại đến hạn: PnL (15/08), phân tích lãi/lỗ vs dòng tiền (18/08), so sánh ngân sách KH vs TT (18/08). Nếu tiếp tục trễ, tỷ lệ tuân thủ kỳ đầu tiên sẽ là 0/5.", due: "18/08/2026", level: "amber", tag: "KHẨN" },
    { n: 7, t: "Ban hành quy định: mọi giao dịch từ 500 triệu đ bắt buộc ghi số hiệu phê duyệt vào cột ghi chú; CẤM tách nhỏ một khoản chi cùng hợp đồng, cùng ngày xuống dưới ngưỡng; bắt buộc trình ký điện tử trên hệ thống ERP.", due: "19/08/2026", level: "info", tag: "TRUNG BÌNH" },
    { n: 8, t: "Yêu cầu TCKT sửa hai lỗi số liệu: ô Total bỏ sót 94.908.000 đ trong file Kế hoạch, và ô “Tổng tiền sẵn có” bỏ sót quỹ tiền mặt 44.310.000 đ trong sheet CF_YTD.", due: "19/08/2026", level: "info", tag: "TRUNG BÌNH" },
    { n: 9, t: "Đưa vấn đề vốn điều lệ chưa góp đủ (cổ đông 65%, còn thiếu 6,57 tỷ đ) vào chương trình họp HĐQT gần nhất bằng văn bản chính thức, kèm ý kiến pháp chế về hậu quả pháp lý.", due: "19/08/2026", level: "info", tag: "TRUNG BÌNH" }
  ],

  actionsExtra: "Đề xuất về luồng thông tin: yêu cầu TCKT gửi TRỰC TIẾP (dòng To) tới PTGĐ TT đối với mọi báo cáo tài chính gửi ra ngoài công ty, thay vì CC. Trong kỳ này, báo cáo so sánh ngân sách H1 — tài liệu đang quyết định 48,69 tỷ đ dòng tiền Q3 — được gửi TỚI CĐT còn KSNB chỉ nhận CC. Không tốn chi phí, giải quyết được vấn đề KSNB nhận thông tin ở vị trí thứ cấp.",

  sources: [
    "Hộp thư Outlook của PTGĐ TT, quét 08/07/2026 – 12/08/2026 (36 ngày), 3 lượt tìm kiếm theo người gửi và từ khóa. Đọc chi tiết 3 email: lương T7 của P. HCNS (05/08), BC so sánh ngân sách của KTT (09/08 và 11/08), phản hồi của CĐT (12/08).",
    "File Cashflow 202606 — sheet CF_YTD, Số dư Bank, Sổ tiết kiệm, và sheet giao dịch chi tiết (1.437 bút toán H1).",
    "File Kế hoạch dòng tiền 2026 — sheet KH Dòng tiền, Dòng tiền thực tế, SS KH vs TT.",
    "File PnL 202606 — sheet PnL_Total.",
    "File Đăng ký rủi ro 2026 — sheet Risk Register, Chỉ số theo dõi (đã sửa lỗi lệch cột trong kỳ này).",
    "Toàn bộ 31 phép tính trong kỳ đã được kiểm tra lại độc lập bằng script — 31/31 khớp."
  ],

  limits: [
    "Toàn bộ số liệu tài chính THỰC TẾ tháng 7/2026: số dư ngân hàng, tiền mặt, sổ tiết kiệm, tổng thu, tổng chi, doanh thu, lợi nhuận, công nợ. Nguyên nhân: TCKT chưa phát hành và file trong thư mục chưa được cập nhật.",
    "Mọi con số 31/07/2026 trong dashboard là ƯỚC TÍNH theo kế hoạch, không phải số thực tế.",
    "Hồ sơ phê duyệt của từng giao dịch — KSNB không có quyền truy cập hệ thống chứng từ gốc; chỉ đối chiếu được các trường dữ liệu trong file kế toán.",
    "Mối liên hệ (nếu có) giữa phiếu thu tiền mặt 39.690.000 đ ngày 19/05 và khoản lãi tiết kiệm bị mất 39.691.781 đ ngày 08/05 — chỉ ghi nhận sự trùng khớp về giá trị.",
    "Con số lũy kế chênh AOP nhân sự 27.603.431.530 đ lấy nguyên từ bảng P. HCNS; do bảng có lỗi cộng 152.010.784 đ nên CHƯA đối chiếu độc lập được.",
    "Nội dung file đính kèm BC so sánh Ngân sách vs Thực tế kỳ T1–T6/2026 — chưa tải và phân tích chi tiết; nhận định chỉ dựa trên thân email.",
    "Trạng thái tất toán của 4 sổ tiết kiệm đáo hạn trong tháng 7 (tổng 20 tỷ đ).",
    "Phạm vi ảnh hưởng của Thông tư 89/2026/TT-BTC lên các hóa đơn phát sinh 01/07 – 27/07/2026.",
    "Tình trạng thực tế của việc góp vốn điều lệ tại 31/07/2026 — không có thông tin cập nhật, giả định giữ nguyên."
  ],

  legal: "Ba nội dung vượt quá phạm vi rà soát nội bộ và cần ý kiến chuyên môn ĐỘC LẬP: (a) đề xuất của CĐT về điều chỉnh HỒI TỐ chi phí nhân sự H1/2026 — kỳ đã kết thúc, đã ghi nhận doanh thu, lợi nhuận và thuế TNDN tạm nộp; cần luật sư và chuyên gia thuế trước khi Công ty đồng ý bất kỳ điều chỉnh nào. (b) Khoản 20 tỷ đ cho một cá nhân vay: bản chất kế toán, bản chất thuế và thẩm quyền phê duyệt tương ứng — cần luật sư doanh nghiệp. (c) Hậu quả pháp lý của việc vốn điều lệ chưa góp đủ sau thời hạn quy định, và rủi ro thuế của mô hình chi hộ CĐT khi chưa có hợp đồng ủy quyền — cần chuyên gia thuế độc lập, KHÔNG phải đơn vị đang làm sổ sách cho công ty.",

  appendix: {
    title: "Dự thảo văn bản yêu cầu TCKT giải trình",
    intro: "Soạn sẵn để chỉnh sửa và phát hành. Đề xuất gửi trực tiếp Kế toán trưởng, CC Tổng Giám đốc. Bản này đã cập nhật đầy đủ chi tiết chứng từ truy được trong kỳ.",
    body: [
      { p: "Kính gửi: Kế toán trưởng", b: true },
      { p: "Đồng kính gửi: Tổng Giám đốc", b: true },
      { p: "V/v: Yêu cầu giải trình khoản cho vay 20.000.000.000 đồng phát sinh tháng 5/2026 và các giao dịch liên quan", b: true },
      { p: "Qua rà soát dữ liệu kế toán, bộ phận Kiểm soát Nội bộ ghi nhận chuỗi giao dịch sau:" },
      { li: [
        "Ngày 08/05/2026: chi 20.000.000.000 đồng cho một cá nhân, mã dòng tiền 1103.03 “Chi cho đối tượng khác vay”, hạch toán qua tài khoản phải thu khác.",
        "Ngày 08/05/2026, cùng ngày: rút trước hạn 2 sổ tiết kiệm tổng 10.000.000.000 đồng, lãi thực nhận 493.151 đồng so với lãi kế hoạch 39.691.781 đồng.",
        "Ngày 08/05/2026: chuyển nội bộ 1.000.000.000 đồng giữa hai tài khoản vận hành.",
        "Ngày 12/05/2026: thu hồi đủ gốc 20.000.000.000 đồng và thu lãi vay 6.720.430 đồng.",
        "Ngày 19/05/2026: phiếu thu tiền mặt 39.690.000 đồng từ một cá nhân là nhân sự nội bộ, diễn giải “Thu lãi tiền gửi ngắn hạn”."
      ]},
      { p: "Các cột “Hợp đồng”, “Khế ước” và “Ghi chú” của những bút toán nêu trên đều để trống. Đề nghị Phòng Tài chính Kế toán cung cấp:", b: true },
      { li: [
        "Hợp đồng cho vay hoặc khế ước nhận nợ: bản sao đầy đủ, có chữ ký các bên",
        "Thông tin định danh bên vay: mã số thuế cá nhân, địa chỉ, và mối quan hệ (nếu có) với Công ty, với các bên liên quan, hoặc với người có liên quan của người quản lý doanh nghiệp",
        "Văn bản phê duyệt giao dịch, ban hành TRƯỚC ngày giải ngân 08/05/2026: nghị quyết HĐQT hoặc quyết định của người có thẩm quyền, ghi rõ ngày và người ký",
        "Sao kê tài khoản ngân hàng giai đoạn 01/05/2026 – 31/05/2026, bản do ngân hàng phát hành",
        "Cơ sở xác định lãi suất: chứng từ tính lãi dẫn tới con số 6.720.430 đồng, và lý do mức lãi suất quy đổi 3,07%/năm thấp hơn lãi tiền gửi kỳ hạn 1 tháng của chính công ty (4,75%/năm)",
        "Lý do rút 2 sổ tiết kiệm trước hạn cùng ngày, và văn bản phê duyệt việc chấp nhận mất 39.198.630 đồng tiền lãi",
        "Bản chất khoản thu tiền mặt 39.690.000 đồng ngày 19/05/2026: chứng từ gốc, nguồn tiền, và mối liên hệ (nếu có) với khoản lãi tiết kiệm bị mất ngày 08/05/2026",
        "Giải trình vì sao giao dịch bằng 76,7% tổng tiền sẵn có của công ty tại 30/04/2026 không được thuyết minh trong bất kỳ báo cáo định kỳ nào gửi Ban Tổng Giám đốc"
      ]},
      { p: "Đề nghị bổ sung, đối với hai khoản chi ngoài ngân sách tháng 6/2026:", b: true },
      { li: [
        "Mua ô tô 1.525.120.000 đồng: tờ trình chủ trương, biên bản lựa chọn nhà cung cấp, và văn bản phê duyệt — trong khi kế hoạch dòng tiền 2026 cho khoản mục này bằng 0 ở cả 12 tháng",
        "Chi phí gắn kết 1.768.914.883 đồng (vượt kế hoạch 1.437.354.469 đồng, tương đương 433,5%): hợp đồng, và giải trình vì sao khoản thanh toán lần 1 theo cùng một hợp đồng, cùng ngày 04/06/2026, được tách thành hai lệnh chi 422.240.000 đồng và 499.000.000 đồng — cả hai đều dưới ngưỡng phê duyệt 500 triệu đồng"
      ]},
      { p: "Thời hạn phản hồi: 05 ngày làm việc kể từ ngày nhận văn bản này.", b: true },
      { p: "Trường hợp một phần hoặc toàn bộ hồ sơ nêu trên không tồn tại, đề nghị Phòng Tài chính Kế toán xác nhận rõ điều đó bằng văn bản, để tôi có cơ sở báo cáo Hội đồng Quản trị và đề xuất biện pháp khắc phục quy trình." }
    ]
  }
}
];

;(function(){
  // Cập nhật 20/09/2026 — TCKT phát hành PnL tháng 7 và tháng 8/2026 (16/09), lần đầu tiên có số thực tế
  // kể từ tháng 6. Nguồn: 2 file "BC tổng hợp BOD T7.26 - PnL.docx" / "...T8.26..." và ảnh chụp nhóm chat
  // "BC TÀI CHÍNH OMNI" (Drive cục bộ, không phải hộp thư Outlook như các kỳ trước). Vẫn KHÔNG có báo cáo
  // dòng tiền / so sánh ngân sách nào cho T7 hoặc T8 — mọi số liệu thanh khoản vẫn neo ở 30/06/2026.
  var P = window.PERIODS[0]; // kỳ Tháng 9/2026, đang mở (cùng kỳ với ảnh 09/09 và 15/09, không tạo kỳ trùng)

  P.asOf = "20/09/2026";
  P.scan = "09/09/2026 – 20/09/2026 (cập nhật giữa kỳ) · nguồn bổ sung: thư mục Drive cục bộ 09 TCKT, không phải hộp thư Outlook";

  P.verdict = {
    level: "red",
    head: "PnL THÁNG 7 VÀ THÁNG 8 CUỐI CÙNG ĐÃ VỀ (16/09) — VÀ SỐ THỰC TẾ CHO THẤY CHI PHÍ NHÂN SỰ THÁNG 8 VƯỢT NGƯỠNG CẢNH BÁO",
    body: "Sau đúng 4 kỳ giám sát liên tiếp không có số liệu, TCKT phát hành báo cáo kết quả kinh doanh tháng 7 VÀ tháng 8/2026 cùng lúc vào 16/09, qua một nhóm chat báo cáo tài chính mới gửi TRỰC TIẾP tới PTGĐ TT — đúng khuyến nghị nhiều kỳ trước. Số thực tế cho thấy một vấn đề mới: chi phí nhân sự tháng 8 chiếm 71,5% doanh thu, vượt ngưỡng cảnh báo nội bộ 65%, kéo biên lợi nhuận trước thuế từ 41,3% (tháng 7) xuống còn 23,3%. Đây là PnL — vẫn KHÔNG có báo cáo dòng tiền hay so sánh ngân sách nào cho cả hai tháng, nên tiền sẵn có và số tháng cầm cự vẫn chỉ tính được đến 30/06/2026."
  };

  P.kpi = [
    { label: "Tuân thủ báo cáo", value: "2 / 10", sub: "PnL T7 (trễ 32 ngày) và T8 (trễ 1 ngày) đã nhận · 8 báo cáo dòng tiền/ngân sách vẫn 0", level: "amber" },
    { label: "PnL T7 & T8 — lần đầu có số thực tế", value: "Đã nhận 16/09", sub: "Qua nhóm chat mới, gửi trực tiếp PTGĐ TT — đúng khuyến nghị kỳ trước", level: "ok" },
    { label: "CPNS / Doanh thu — tháng 8", value: "71,5%", sub: "VƯỢT ngưỡng cảnh báo 65% · tháng 7: 52,9% (trong ngưỡng)", level: "red" },
    { label: "Biên LNTT — tháng 8", value: "23,3%", sub: "Tháng 7: 41,3% · tháng 6: 27,5% · giảm 18,0 điểm so với T7", level: "amber" },
    { label: "Phí DVVH Q3 (đã chốt giá)", value: "40,25 tỷ đ", sub: "Trước VAT · sau VAT 44,28 tỷ · vẫn chưa quan sát được lệnh giải ngân", level: "amber" },
    { label: "Số tháng cầm cự", value: "~4,02 tháng", sub: "Vẫn tính trên số 30/06 · chưa có dòng tiền thực tế T7–T8", level: "amber" }
  ];

  P.summary = [
    { level: "good", t: "Chuỗi 4 kỳ liên tiếp không có số tài chính thực tế đã bị phá — TCKT phát hành PnL tháng 7 VÀ tháng 8/2026 cùng lúc ngày 16/09/2026, qua một nhóm chat báo cáo tài chính mới (\"BC TÀI CHÍNH OMNI\", 4 thành viên) gửi TRỰC TIẾP tới PTGĐ TT thay vì chỉ CC — đúng khuyến nghị KSNB nêu ở nhiều kỳ trước. PnL tháng 7 trễ 32 ngày so với hạn 15/08; PnL tháng 8 chỉ trễ 1 ngày so với hạn 15/09 — cải thiện rõ rệt về tốc độ." },
    { level: "red", t: "Số thực tế đầu tiên sau 3 tháng cho thấy vấn đề mới: chi phí nhân sự tháng 8 là 8.690.382.237 đ trên doanh thu 12.150.562.673 đ — tỷ lệ 71,52%, VƯỢT ngưỡng cảnh báo CAM 65% đã nêu ở các kỳ trước (tháng 6: 68,17%; tháng 7: 52,85% — trong ngưỡng). Đây là bằng chứng thực tế đầu tiên, không còn là ước tính từ kế hoạch." },
    { level: "amber", t: "Biên lợi nhuận trước thuế tháng 8 chỉ 23,30% (2.831.619.577 đ / 12.150.562.673 đ), giảm 17,95 điểm phần trăm so với tháng 7 (41,25%) và thấp hơn cả biên bình quân H1 (33,63%). Doanh thu tháng 8 cũng giảm 8,04% so với tháng 7 (giảm 1.062.904.992 đ). Hai yếu tố cộng hưởng: doanh thu giảm trong khi chi phí nhân sự tăng 24,44% (+1.706.730.036 đ)." },
    { level: "amber", t: "Chưa đối chiếu được: chi phí nhân sự tháng 7 theo PnL (6.983.652.201 đ) CAO HƠN 937.506.440 đ so với con số \"AOP kế toán — thực tế\" đã dùng làm căn cứ đàm phán với CĐT ở kỳ trước (6.046.145.761 đ, nguồn báo cáo lương P.HCNS 05/08). Chưa rõ nguyên nhân chênh lệch (phạm vi tài khoản khác nhau, trích lập, hay lỗi số liệu) — KHÔNG dùng con số nào trong hai con số này để đàm phán với CĐT cho tới khi TCKT giải trình." },
    { level: "red", t: "PnL không thay thế được báo cáo dòng tiền. Vẫn KHÔNG có bất kỳ báo cáo dòng tiền, so sánh kế hoạch dòng tiền vs thực tế, hay so sánh ngân sách KH vs TT nào cho tháng 7 hoặc tháng 8 — 8/10 báo cáo cam kết (24/07) vẫn ở trạng thái CHƯA NHẬN, một số đã quá hạn tới 44 ngày. Tiền sẵn có, số tháng cầm cự và mọi chỉ số thanh khoản trong dashboard này VẪN neo ở mốc 30/06/2026." },
    { level: "info", t: "Thay đổi phương thức tiếp cận nguồn của kỳ này: cập nhật này đọc trực tiếp thư mục Drive cục bộ do PTGĐ TT chỉ định (09 TCKT), KHÔNG phải quét hộp thư Outlook như các kỳ trước — vì vậy KHÔNG loại trừ khả năng có email hoặc báo cáo khác phát sinh trong cùng cửa sổ thời gian mà phạm vi rà soát này chưa bao quát." }
  ];

  P.compliance = {
    note: "Căn cứ email cam kết KTT 24/07/2026 (hạn: BC dòng tiền & SS dòng tiền ngày 7; PnL ngày 15; phân tích lãi-lỗ vs dòng tiền & SS ngân sách ngày 18 hằng tháng). Chốt dữ liệu 20/09/2026. Số ngày trễ tính lại bằng script từ ngày chốt (Asia/Saigon). Hai dòng PnL đã cập nhật trạng thái \"Đã nhận\" — cột Ngày nhận lấy theo dấu thời gian phát hành trong nhóm chat (16/09/2026), không phải ngày KSNB quan sát được hồ sơ.",
    rows: [
      { n:1, name:"BC dòng tiền — kỳ T7", due:"07/08/2026", got:"—", status:"late", tag:"Quá hạn 44 ngày" },
      { n:2, name:"BC so sánh KH dòng tiền vs thực tế — kỳ T7", due:"07/08/2026", got:"—", status:"late", tag:"Quá hạn 44 ngày" },
      { n:3, name:"BC Kết quả Kinh doanh (PnL) — kỳ T7", due:"15/08/2026", got:"16/09/2026", status:"ok", tag:"Nhận muộn 32 ngày" },
      { n:4, name:"BC phân tích lãi/lỗ vs dòng tiền — kỳ T7", due:"18/08/2026", got:"—", status:"late", tag:"Quá hạn 33 ngày" },
      { n:5, name:"BC so sánh ngân sách KH vs thực tế — kỳ T7", due:"18/08/2026", got:"—", status:"late", tag:"Quá hạn 33 ngày" },
      { n:6, name:"BC dòng tiền — kỳ T8", due:"07/09/2026", got:"—", status:"late", tag:"Quá hạn 13 ngày" },
      { n:7, name:"BC so sánh KH dòng tiền vs thực tế — kỳ T8", due:"07/09/2026", got:"—", status:"late", tag:"Quá hạn 13 ngày" },
      { n:8, name:"BC Kết quả Kinh doanh (PnL) — kỳ T8", due:"15/09/2026", got:"16/09/2026", status:"ok", tag:"Nhận muộn 1 ngày" },
      { n:9, name:"BC phân tích lãi/lỗ vs dòng tiền — kỳ T8", due:"18/09/2026", got:"—", status:"late", tag:"Quá hạn 2 ngày" },
      { n:10, name:"BC so sánh ngân sách KH vs thực tế — kỳ T8", due:"18/09/2026", got:"—", status:"late", tag:"Quá hạn 2 ngày" }
    ]
  };

  P.timeline.push(
    { d:"16/09", who:"TCKT (Ngọc KT)", level:"good", t:"Phát hành PnL tháng 7 VÀ tháng 8/2026 cùng lúc, qua nhóm chat báo cáo tài chính mới \"BC TÀI CHÍNH OMNI\"",
      note:"Nhóm 4 thành viên (được lập trước đó \"để Kế toán thực hiện báo cáo\"), gửi kèm @Tùng Ty (PTGĐ TT) TRỰC TIẾP trong nội dung — không còn chỉ CC. Tin nhắn ghi \"báo cáo kết quả kinh doanh tháng 7/2026\" nhưng file đính kèm và nội dung báo cáo là tháng 8/2026 (BC tổng hợp BOD T8.26 - PnL.docx) — lệch tiêu đề, nội dung số liệu khớp đúng tháng 8. PnL tháng 7 (file BOD T7.26) có trong cùng thư mục nguồn, thời điểm phát hành thực tế qua kênh nào chưa xác nhận được từ phạm vi rà soát này." },
    { d:"20/09", who:"KSNB", level:"info", t:"Chốt cập nhật giữa kỳ — bổ sung số PnL T7/T8 vào dashboard, giữ nguyên toàn bộ phần dòng tiền/thanh khoản do chưa có báo cáo mới",
      note:"Nguồn: thư mục Drive cục bộ 09 TCKT (không phải quét hộp thư Outlook như thường lệ). Đã tính lại độc lập bằng script mọi số ngày trễ, tỷ lệ % và tổng lũy kế trong phần PnL." }
  );

  P.pnl = {
    note: "CẬP NHẬT 20/09: PnL tháng 7 và tháng 8/2026 đã có số thực tế (phát hành 16/09, xem timeline). Bảng dưới thay số H1/tháng 6 cũ bằng lũy kế 8 tháng và hai tháng gần nhất. PnL kỳ T9 chưa đến hạn (15/10).",
    h1label: "Lũy kế T1–T8/2026",
    t6label: "Riêng tháng 8",
    rows: [
      { k: "Doanh thu",             h1: "89.859.147.954", t6: "12.150.562.673", c: "Lũy kế T1–T8 · riêng T8 giảm 8,04% so với T7 (13.213.467.665)" },
      { k: "Tổng chi phí",          h1: "60.518.863.296", t6: "9.447.606.291",  c: "Lũy kế T1–T8 · riêng T8 tăng 19,89% so với T7 (7.880.786.119)" },
      { k: "Lợi nhuận trước thuế",  h1: "29.972.547.655", t6: "2.831.619.577", c: "Biên lũy kế T1–T8 33,36%; riêng T8 chỉ 23,30% — thấp nhất kể từ tháng 2/2026" },
      { k: "Chi phí nhân sự",       h1: "53.782.158.081", t6: "8.690.382.237", c: "59,86% DT lũy kế; riêng T8 71,52% DT — VƯỢT ngưỡng CAM 65% (T7: 52,85%, trong ngưỡng)" },
      { k: "Lợi nhuận sau thuế",    h1: "23.978.038.124", t6: "2.265.295.662", c: "Thuế TNDN tạm tính lũy kế 5.994.509.531 đ" }
    ],
    comment: "Bảng gốc \"Doanh thu bên thứ ba\" của kỳ trước không có trong báo cáo BOD tháng 7/8 (báo cáo tổng hợp cấp BOD không tách dòng này) — chưa xác nhận được số phát sinh T7/T8, giữ nguyên hạn chế đã nêu. Đối chiếu nội bộ: lũy kế T1–T7 (77.708.585.281 đ DT, 27.140.928.078 đ LNTT) cộng số tháng 8 khớp đúng với lũy kế T1–T8 công bố (89.859.147.954 đ DT, 29.972.547.655 đ LNTT) — khớp."
  };

  P.variance.t7note = P.variance.t7note + " CẬP NHẬT 20/09: PnL tháng 7 vừa công bố ghi chi phí nhân sự 6.983.652.201 đ — CAO HƠN 937.506.440 đ so với con số 6.046.145.761 đ lấy từ báo cáo lương P.HCNS đang dùng làm căn cứ đàm phán với CĐT. Hai nguồn chưa đối chiếu được với nhau; đề nghị KHÔNG dùng con số nào trong hai con số cho tới khi TCKT xác nhận phạm vi tài khoản của từng báo cáo.";

  P.flags[9] = { n:10, level:"amber", since:"07/08/2026",
    title:"CẬP NHẬT — Chậm phát hành báo cáo: PnL đã về sau 4 kỳ im lặng, nhưng dòng tiền/ngân sách vẫn 0/8",
    detail:"HẠ TỪ ĐỎ XUỐNG CAM sau khi TCKT phát hành PnL tháng 7 và tháng 8/2026 cùng lúc ngày 16/09/2026 — PnL T7 trễ 32 ngày (hạn 15/08), PnL T8 chỉ trễ 1 ngày (hạn 15/09), cải thiện tốc độ rõ rệt so với 4 kỳ giám sát liên tiếp trước đó không có báo cáo nào. NHƯNG đây chỉ là 2/10 báo cáo cam kết (24/07/2026): 8 báo cáo còn lại — dòng tiền và so sánh ngân sách của CẢ HAI tháng, cùng hai báo cáo phân tích lãi/lỗ vs dòng tiền — vẫn ở trạng thái CHƯA NHẬN, một số quá hạn tới 44 ngày. Đây là nhóm báo cáo trực tiếp phục vụ giám sát thanh khoản (tiền sẵn có, số tháng cầm cự) nên tác động thực chất tới khả năng giám sát của KSNB CHƯA được cải thiện tương ứng với việc có PnL." };

  P.flags.push({ n:12, level:"red", since:"16/09/2026",
    title:"MỚI — Chi phí nhân sự tháng 8/2026 vượt ngưỡng cảnh báo nội bộ 65% doanh thu",
    detail:"Theo PnL tháng 8 vừa công bố (16/09): chi phí nhân sự 8.690.382.237 đ trên doanh thu 12.150.562.673 đ = 71,52% — vượt ngưỡng cảnh báo CAM 65% đã nêu ở các kỳ trước (từng chạm 68,17% ở tháng 6, nhưng tháng 7 đã về 52,85%, trong ngưỡng). Đây là bằng chứng THỰC TẾ đầu tiên (không phải ước tính) cho thấy chi phí nhân sự đang tăng nhanh hơn doanh thu: chi phí nhân sự tăng 24,44% (+1.706.730.036 đ) trong khi doanh thu GIẢM 8,04% (−1.062.904.992 đ) so với tháng liền trước. Hệ quả trực tiếp: biên lợi nhuận trước thuế tháng 8 chỉ 23,30%, thấp nhất kể từ tháng 2/2026 và thấp hơn 17,95 điểm phần trăm so với tháng 7. KSNB mô tả số liệu quan sát được, chưa có đủ thông tin (cơ cấu nhân sự tháng 8, biến động lương/thưởng, khoản chi một lần nếu có) để kết luận nguyên nhân — đề nghị TCKT giải trình cơ cấu chi phí nhân sự tháng 8 trước khi đưa vào báo cáo HĐQT." });

  P.flags.push({ n:13, level:"amber", since:"16/09/2026",
    title:"MỚI — Hai con số chi phí nhân sự tháng 7 chưa đối chiếu được, đang dùng song song để đàm phán với CĐT",
    detail:"PnL tháng 7 (công bố 16/09) ghi chi phí nhân sự 6.983.652.201 đ. Báo cáo lương P.HCNS (05/08), dùng làm căn cứ tính \"chênh AOP nhân sự lũy kế 27,60 tỷ đ\" để đàm phán phí DVVH Q3 với CĐT, ghi con số thực tế T7 là 6.046.145.761 đ. Chênh lệch: 937.506.440 đ (15,5%). Hai nguồn có thể khác phạm vi tài khoản (PnL có thể gồm cả trích lập BHXH/BHYT/KPCĐ, thưởng dồn tích mà báo cáo lương thuần không có) nhưng KSNB CHƯA xác nhận được giả thuyết này. Rủi ro: nếu con số 6,05 tỷ đang dùng để đàm phán với CĐT thấp hơn thực tế kế toán ghi nhận, lập luận \"AOP lớn hơn thực tế nhiều\" mà Công ty dùng để phản bác đề xuất cắt ngân sách của CĐT có thể bị suy yếu. Đề nghị TCKT xác nhận phạm vi từng con số bằng văn bản TRƯỚC khi dùng bất kỳ số nào trong đàm phán tiếp theo." });

  P.flagsNote = P.flagsNote + " Mục #10 CẬP NHẬT (hạ từ đỏ xuống cam — PnL đã về nhưng dòng tiền/ngân sách vẫn 0/8). Mục #12 và #13 là phát hiện MỚI của kỳ cập nhật 20/09, trực tiếp từ số liệu PnL T7/T8 vừa công bố.";

  P.riskSummary.note = P.riskSummary.note + " CẬP NHẬT 20/09 (chưa tái tính điểm rủi ro gộp — Đăng ký rủi ro nguồn vẫn dừng ở 202606, chưa có bản cập nhật mới): mục #10 hạ nhiệt một phần (PnL đã về); phát sinh 2 rủi ro MỚI trực tiếp từ số liệu PnL — #12 (CPNS/DT tháng 8 vượt ngưỡng, ĐỎ) và #13 (hai con số chi phí nhân sự T7 chưa đối chiếu, CAM). Điểm rủi ro gộp 195/90 CHƯA phản ánh hai mục mới này.";
  P.riskSummary.momNote = "So với bản chốt 15/09: bước ngoặt của kỳ này là PnL tháng 7 và tháng 8 lần đầu có số thực tế sau 4 kỳ giám sát trống — kênh gửi báo cáo cũng cải thiện (nhóm chat mới, TO trực tiếp PTGĐ TT, đúng khuyến nghị nhiều kỳ trước). Nhưng số thực tế đầu tiên lại là tin xấu: chi phí nhân sự tháng 8 vượt ngưỡng cảnh báo, biên lợi nhuận giảm mạnh. Dòng tiền/ngân sách — nhóm báo cáo phục vụ giám sát thanh khoản trực tiếp nhất — vẫn hoàn toàn trống cho cả hai tháng.";

  P.actions = [
    { n:1, level:"red", tag:"RẤT KHẨN", due:"23/09/2026", t:"Yêu cầu TCKT giải trình bằng văn bản cơ cấu chi phí nhân sự tháng 8/2026 (71,52% doanh thu, vượt ngưỡng 65%): biến động nhân sự, lương/thưởng, có khoản chi một lần hay không. Không đưa số liệu vào báo cáo HĐQT cho tới khi có giải trình." },
    { n:2, level:"red", tag:"RẤT KHẨN", due:"23/09/2026", t:"Yêu cầu TCKT đối chiếu và xác nhận bằng văn bản chênh lệch 937.506.440 đ giữa chi phí nhân sự T7 trên PnL (6.983.652.201 đ) và trên báo cáo lương P.HCNS (6.046.145.761 đ) — TRƯỚC khi dùng bất kỳ con số nào để tiếp tục đàm phán phí DVVH Q3 với CĐT." },
    { n:3, level:"red", tag:"RẤT KHẨN", due:"25/09/2026", t:"Phát văn bản chính thức yêu cầu TCKT phát hành NGAY 8 báo cáo còn thiếu: dòng tiền và so sánh ngân sách KH vs TT của CẢ hai tháng 7 và 8 (một số đã quá hạn 44 ngày), cùng 2 báo cáo phân tích lãi/lỗ vs dòng tiền. Đây là nhóm báo cáo phục vụ giám sát thanh khoản trực tiếp — PnL không thay thế được." },
    { n:4, level:"amber", tag:"KHẨN", due:"25/09/2026", t:"Xác nhận trạng thái phí DVVH Q3 đã chốt giá (40,25 tỷ trước VAT): CĐT đã phê duyệt bằng văn bản chưa; hồ sơ trình ký thanh toán và lệnh giải ngân đã phát hành chưa — vẫn chưa quan sát được đến 20/09." },
    { n:5, level:"amber", tag:"KHẨN", due:"25/09/2026", t:"Trước khi chi phí môi giới Song Cát (88,69 tr đ): xác nhận đã hoàn tất đủ 4 điều kiện hồ sơ nêu ở kỳ 15/09 (biên bản nghiệm thu, xác nhận diện tích, hóa đơn GTGT, thẩm quyền phê duyệt) hay chưa." },
    { n:6, level:"info", tag:"TRUNG BÌNH", due:"30/09/2026", t:"Ghi nhận nhóm chat \"BC TÀI CHÍNH OMNI\" là kênh báo cáo chính thức mới; đề nghị TCKT xác nhận bằng văn bản việc này không thay thế nghĩa vụ gửi email báo cáo định kỳ (để giữ dấu vết hồ sơ chính thức), và đính chính tiêu đề tin nhắn 16/09 (ghi nhầm \"tháng 7\" khi gửi báo cáo tháng 8)." },
    { n:7, level:"info", tag:"TRUNG BÌNH", due:"30/09/2026", t:"Đưa vốn điều lệ góp thiếu 6,57 tỷ (cổ đông 65%) và mô hình chi hộ CĐT chưa có hợp đồng ủy quyền vào chương trình họp HĐQT gần nhất, kèm ý kiến pháp chế về hậu quả pháp lý." }
  ];

  P.actionsExtra = "Điểm sáng của kỳ này: kênh gửi báo cáo đã cải thiện — nhóm chat mới gửi TRỰC TIẾP tới PTGĐ TT thay vì chỉ CC, đúng khuyến nghị nhiều kỳ liền. Đề nghị duy trì và mở rộng nguyên tắc này sang mọi báo cáo dòng tiền, so sánh ngân sách và hồ sơ thanh toán trọng yếu — hiện các nhóm báo cáo đó vẫn hoàn toàn trống cho cả tháng 7 và tháng 8.";

  P.sources.push(
    "BC tổng hợp BOD T7.26 - PnL.docx và BC tổng hợp BOD T8.26 - PnL.docx (thư mục Drive cục bộ 09 TCKT/, không phải hộp thư Outlook) — báo cáo kết quả kinh doanh tháng 7 và tháng 8/2026 cấp Ban Giám đốc.",
    "Ảnh chụp màn hình nhóm chat \"BC TÀI CHÍNH OMNI\" (chụp 20/09/2026), cho thấy tin nhắn phát hành PnL tháng 8 lúc 06:14 16/09/2026, địa chỉ trực tiếp PTGĐ TT.",
    "Toàn bộ số liệu MoM, tỷ lệ % và tổng lũy kế trong phần PnL của cập nhật này đã được tính lại độc lập bằng script: 89.859.147.954 = 77.708.585.281 + 12.150.562.673 (khớp); 71,52% = 8.690.382.237 / 12.150.562.673; chênh chi phí nhân sự T7 = 6.983.652.201 − 6.046.145.761 = 937.506.440 — khớp."
  );

  P.limits.push(
    "Cập nhật này đọc thư mục Drive cục bộ 09 TCKT thay vì quét hộp thư Outlook như các kỳ trước — KHÔNG loại trừ khả năng có email hoặc báo cáo khác phát sinh trong cùng cửa sổ thời gian mà phạm vi rà soát chưa bao quát.",
    "Cơ cấu chi phí nhân sự tháng 8 theo khối/dự án (như bảng phân tách của tháng 7) — báo cáo BOD chỉ có tổng, chưa có chi tiết để đối chiếu với AOP theo từng khối.",
    "Nguyên nhân chênh lệch 937.506.440 đ giữa chi phí nhân sự PnL và báo cáo lương P.HCNS cho tháng 7 — chưa xác nhận được phạm vi tài khoản khác nhau hay lỗi số liệu.",
    "Ngày giờ chính xác thành lập nhóm chat \"BC TÀI CHÍNH OMNI\" — ảnh chụp chỉ thấy một tin nhắn 14:28 không có ngày đầy đủ, xuất hiện trước mốc 16/09/2026 trong lịch sử chat.",
    "Báo cáo dòng tiền, so sánh ngân sách KH vs TT và số dư tiền thực tế 31/07, 31/08/2026 — vẫn hoàn toàn chưa có, không suy luận được từ PnL (khác cơ sở kế toán dồn tích và thực thu thực chi)."
  );

  window.MOM[6] = { m:"T7/26", dt:13213467665, cp:7880786119, ln:5451019115, ns:6983652201,
    note:"Số thực tế, công bố 16/09/2026. Chi phí nhân sự PnL (6.983.652.201 đ) chưa khớp với báo cáo lương P.HCNS dùng đàm phán CĐT (6.046.145.761 đ) — xem cảnh báo #13." };
  window.MOM.push({ m:"T8/26", dt:12150562673, cp:9447606291, ln:2831619577, ns:8690382237,
    note:"CPNS/DT 71,52% — VƯỢT ngưỡng cảnh báo 65% lần đầu tiên có số thực tế xác nhận. Biên LNTT giảm còn 23,30%. Xem cảnh báo #12." });
  window.MOM.push({ m:"T9/26", dt:null, cp:null, ln:null, ns:null, note:"Chưa đến hạn — PnL kỳ T9 hạn 15/10/2026" });

  window.MOM_CALLOUT = {
    level: "red",
    head: "Tháng 8: doanh thu giảm nhưng chi phí nhân sự lại tăng — biên lợi nhuận rơi xuống thấp nhất kể từ tháng 2",
    body: "Doanh thu giảm 8,04% (−1.062.904.992 đ) trong khi chi phí nhân sự tăng 24,44% (+1.706.730.036 đ) so với tháng 7 — hai chiều ngược nhau cùng lúc. Hệ quả: LNTT giảm 48,05% (−2.619.399.538 đ), biên LNTT rơi từ 41,25% (T7) xuống 23,30% (T8) — mất 17,95 điểm phần trăm trong một tháng và thấp hơn cả biên bình quân 8 tháng (33,36%). Tỷ lệ chi phí nhân sự trên doanh thu vọt lên 71,52% — lần đầu tiên VƯỢT ngưỡng cảnh báo 65% bằng số liệu thực tế (không phải ước tính). Đây là PnL đầu tiên có số thực tế sau 4 kỳ giám sát liên tiếp không có dữ liệu (tháng 7 và 8 cùng về một lúc, ngày 16/09) — nên chưa có đủ lịch sử liền mạch để phân biệt đây là biến động một lần hay xu hướng; KSNB đề nghị TCKT giải trình cơ cấu trước khi kết luận."
  };
})();

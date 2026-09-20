;(function(){
  var JUL = window.PERIODS[0];
  // clone flags, update #9, add #10
  var fl = JUL.flags.map(function(f){return Object.assign({}, f);});
  fl[8] = { n:9, level:"amber", since:"12/08/2026",
    title:"CẬP NHẬT — Phí dịch vụ vận hành Quý 3 đã được chốt giá (kỳ trước: chưa giải ngân)",
    detail:"Đã hạ nhiệt so với kỳ trước. Sau họp lãnh đạo 18/08/2026 (cơ chế: Omni giữ lại 10% LN sau thuế + cập nhật theo tiến độ bàn giao), TCKT phát hành số phí DVVH Quý 3 điều chỉnh: vòng 1 ngày 21/08 (Vinh 25.409.560.982 đ), số CHỐT ngày 24/08 — Vinh 26.653.934.757 đ + Long An 13.599.764.533 đ = 40.253.699.290 đ trước VAT; 44.279.069.220 đ sau VAT. So với số đã duyệt sau cập nhật bàn giao 42.671.781.137 đ, giảm 2.418.081.847 đ, toàn bộ ở Vinh. Đề xuất của kế toán CĐT ngày 12/08 (điều chỉnh HỒI TỐ một phần chi phí nhân sự H1 sang chi phí vận hành Q3) KHÔNG xuất hiện trong cơ chế số chốt — nếu đúng là đã bị loại thì đây là kết quả tránh được rủi ro chạm tới BCTC đã lập và thuế TNDN đã tạm nộp. CÒN MỞ đến 08/09: chưa quan sát được (a) văn bản CĐT phê duyệt số chốt, (b) hồ sơ trình ký thanh toán, (c) lệnh giải ngân. Rủi ro do đó chuyển từ định giá sang thu tiền đúng hạn." };
  fl.push({ n:10, level:"red", since:"07/08/2026",
    title:"MỚI — Chậm phát hành báo cáo tài chính đã thành mẫu hình hai kỳ liên tiếp",
    detail:"Cam kết bằng văn bản của KTT ngày 24/07/2026 gồm 5 báo cáo mỗi tháng (hạn ngày 7, 15, 18). KỲ THÁNG 7: đến 08/09 cả 5 báo cáo đều chưa phát hành — quá hạn 21 đến 32 ngày. KỲ THÁNG 8: hai báo cáo đầu (dòng tiền, so sánh dòng tiền) hạn 07/09 cũng đã quá hạn. Đây không còn là sự cố đơn lẻ mà là vấn đề năng lực/ý chí tuân thủ; hệ quả trực tiếp là KSNB và Ban TGĐ không có số tài chính thực tế của HAI tháng gần nhất để giám sát thanh khoản. Đề nghị ghi nhận vào hồ sơ đánh giá TCKT và đưa ra HĐQT nếu kỳ tháng 8 tiếp tục 0/5." });

  var AUG = {
    id:"2026-08", label:"Tháng 8/2026", asOf:"08/09/2026",
    scan:"13/08/2026 – 08/09/2026 (27 ngày)",
    verdict:{ level:"red",
      head:"VẪN KHÔNG CÓ SỐ TÀI CHÍNH THỰC TẾ — NHƯNG PHÍ DVVH QUÝ 3 ĐÃ ĐƯỢC CHỐT GIÁ VÀ HAI CHỐT KIỂM SOÁT ĐÃ SIẾT LẠI",
      body:"Đến 08/09/2026, TCKT vẫn chưa phát hành bất kỳ báo cáo tài chính định kỳ nào — cả 5 báo cáo kỳ tháng 7 (cam kết văn bản 24/07) đều quá hạn 21–32 ngày, và kỳ tháng 8 cũng đã bắt đầu trễ. Bù lại, rủi ro lớn nhất kỳ trước đã hạ nhiệt: phí DVVH Quý 3 được chốt ở 40,25 tỷ đồng trước VAT (44,28 tỷ sau VAT) sau họp lãnh đạo 18/08 theo cơ chế Omni giữ lại 10% LN sau thuế, và quy trình trình ký điện tử MISA đã triển khai toàn công ty." },
    kpi:[
      { label:"Tuân thủ báo cáo", value:"0 / 7", sub:"Đã đến hạn nhưng chưa nhận · kỳ T7 quá hạn 21–32 ngày · kỳ T8 đã bắt đầu trễ", level:"red" },
      { label:"Phí DVVH Q3 (đã chốt)", value:"40,25 tỷ đ", sub:"Trước VAT · sau VAT 44,28 tỷ · cơ chế 10% LNST · chờ xác nhận giải ngân", level:"amber" },
      { label:"Tiền sẵn có thực tế", value:"Không có số thực tế", sub:"Gần nhất 38,88 tỷ đ (30/06) · T7 và T8 chưa phát hành", level:"red" },
      { label:"Số tháng cầm cự", value:"~4,02 tháng", sub:"Trên số 30/06 · gồm thuế & capex · chưa có số T7–T8", level:"amber" },
      { label:"Chốt kiểm soát mới", value:"MISA toàn cty", sub:"Trình ký điện tử 25–26/08 · đúng khuyến nghị kỳ trước", level:"ok" },
      { label:"Chênh AOP nhân sự (đàm phán)", value:"27,60 tỷ đ", sub:"Căn cứ CĐT dùng để cắt NS · vẫn chưa đối chiếu độc lập", level:"amber" }
    ],
    summary:[
      { level:"red", t:"Cả 5 báo cáo kỳ tháng 7 vẫn chưa phát hành tính đến 08/09 — quá hạn 21 đến 32 ngày. Tỷ lệ tuân thủ kỳ đầu tiên của cam kết 24/07 là 0/5, không phải 0/2 như ước tính giữa kỳ trước. Kỳ tháng 8 (hạn BC dòng tiền 07/09) cũng đã trễ: chậm phát hành đã thành MẪU HÌNH hai kỳ liên tiếp, không còn là sự cố đơn lẻ." },
      { level:"good", t:"Rủi ro lớn nhất kỳ trước HẠ NHIỆT — phí DVVH Quý 3 đã được chốt giá. Sau họp lãnh đạo 18/08 (cơ chế Omni giữ lại 10% LN sau thuế + cập nhật tiến độ bàn giao), TCKT chốt ngày 24/08: Vinh 26.653.934.757 đ + Long An 13.599.764.533 đ = 40.253.699.290 đ trước VAT (44.279.069.220 đ sau VAT). So với số đã duyệt sau bàn giao 42,67 tỷ, giảm 2,42 tỷ, toàn bộ ở Vinh." },
      { level:"amber", t:"Đề xuất điều chỉnh HỒI TỐ chi phí nhân sự H1 của kế toán CĐT (nêu 12/08) KHÔNG xuất hiện trong cơ chế số chốt — cách tính cuối là 10% LNST + cập nhật bàn giao, không phải đẩy chi phí H1 sang Q3. Nếu đúng là đã bị loại thì tránh được rủi ro chạm BCTC đã lập và thuế TNDN đã tạm nộp; NHƯNG chưa có văn bản CĐT xác nhận trong hộp thư và chưa quan sát được lệnh giải ngân." },
      { level:"good", t:"Quy trình trình ký điện tử MISA đã triển khai TOÀN CÔNG TY (25/08), kèm hướng dẫn hoàn thiện hồ sơ gốc (26/08) — mở rộng từ phạm vi CĐT (27/07) đúng khuyến nghị KSNB kỳ trước. Ghi nhận tích cực; đề nghị KSNB xác minh ngưỡng bắt buộc trình ký ≥ 500 triệu và cơ chế chặn tách nhỏ giao dịch đã được cấu hình." },
      { level:"red", t:"Toàn bộ số tài chính thực tế tháng 7 VÀ tháng 8 vẫn trống. Không trả lời được câu hỏi tiền tăng hay giảm cho cả hai tháng. Mọi chỉ số thanh khoản vẫn dừng ở 30/06/2026 (38,88 tỷ đ; ~4,02 tháng cầm cự gồm thuế & capex)." },
      { level:"amber", t:"Các cảnh báo đỏ tồn đọng từ kỳ trước KHÔNG có bằng chứng đã đóng trong kỳ quét: khoản cho vay 20 tỷ (chưa thấy văn bản giải trình), mua ô tô 1,53 tỷ ngoài kế hoạch, tách nhỏ giao dịch 04/06, vốn điều lệ góp thiếu 6,57 tỷ. Văn bản yêu cầu TCKT giải trình (soạn kỳ trước) — chưa quan sát được đã phát hành." }
    ],
    compliance:{
      note:"Căn cứ email cam kết KTT 24/07/2026 (hạn: BC dòng tiền & SS dòng tiền ngày 7; PnL ngày 15; phân tích lãi-lỗ vs dòng tiền & SS ngân sách ngày 18 hằng tháng). Chốt dữ liệu 08/09/2026. Bảng dưới gộp cả kỳ tháng 7 và kỳ tháng 8.",
      rows:[
        { n:1, name:"BC dòng tiền — kỳ T7", due:"07/08/2026", got:"—", status:"late", tag:"Quá hạn 32 ngày" },
        { n:2, name:"BC so sánh KH dòng tiền vs thực tế — kỳ T7", due:"07/08/2026", got:"—", status:"late", tag:"Quá hạn 32 ngày" },
        { n:3, name:"BC Kết quả Kinh doanh (PnL) — kỳ T7", due:"15/08/2026", got:"—", status:"late", tag:"Quá hạn 24 ngày" },
        { n:4, name:"BC phân tích lãi/lỗ vs dòng tiền — kỳ T7", due:"18/08/2026", got:"—", status:"late", tag:"Quá hạn 21 ngày" },
        { n:5, name:"BC so sánh ngân sách KH vs thực tế — kỳ T7", due:"18/08/2026", got:"—", status:"late", tag:"Quá hạn 21 ngày" },
        { n:6, name:"BC dòng tiền — kỳ T8", due:"07/09/2026", got:"—", status:"late", tag:"Quá hạn 1 ngày" },
        { n:7, name:"BC so sánh KH dòng tiền vs thực tế — kỳ T8", due:"07/09/2026", got:"—", status:"late", tag:"Quá hạn 1 ngày" },
        { n:8, name:"BC Kết quả Kinh doanh (PnL) — kỳ T8", due:"15/09/2026", got:"—", status:"pending", tag:"Còn 7 ngày" },
        { n:9, name:"BC phân tích lãi/lỗ vs dòng tiền — kỳ T8", due:"18/09/2026", got:"—", status:"pending", tag:"Còn 10 ngày" },
        { n:10, name:"BC so sánh ngân sách KH vs thực tế — kỳ T8", due:"18/09/2026", got:"—", status:"pending", tag:"Còn 10 ngày" }
      ]
    },
    timeline:[
      { d:"13/08", who:"TGĐ", level:"info", t:"TGĐ (anh Sơn) phản hồi kế toán CĐT: khẳng định KH Q3 đã ốp sát tiến độ bàn giao, từ chối điều chỉnh thêm",
        note:"Trả lời đề xuất 12/08 của kế toán CĐT (đẩy một phần chi phí nhân sự H1 sang chi phí vận hành Q3). Yêu cầu CĐT xác nhận trong ngày để trình lãnh đạo và thực hiện thanh toán, đảm bảo dòng tiền vận hành." },
      { d:"17/08", who:"KTT", level:"info", t:"TCKT chốt phương án phí DVVH Q3 theo email Cập nhật bàn giao & ngân sách Q3 ngày 04/08",
        note:"Bước khởi động cho vòng điều chỉnh số phí Q3." },
      { d:"18/08", who:"Lãnh đạo", level:"good", t:"Họp lãnh đạo: phê duyệt cơ chế Omni giữ lại 10% LN sau thuế",
        note:"Cơ sở cho số phí DVVH Q3 điều chỉnh, thay cho đề xuất điều chỉnh hồi tố chi phí H1." },
      { d:"21/08", who:"KTT", level:"info", t:"TCKT gửi số phí DVVH Q3 điều chỉnh vòng 1: Vinh 25,41 tỷ + Long An 13,60 tỷ",
        note:"Trước VAT. Kèm file so sánh ngân sách vs thực tế T1–T6." },
      { d:"24/08", who:"KTT", level:"good", t:"TCKT gửi số phí DVVH Q3 CHỐT: Vinh 26,65 tỷ + Long An 13,60 tỷ = 40,25 tỷ trước VAT (44,28 tỷ sau VAT)",
        note:"Kèm file 2026_Omni_BC so sánh_Ngân sách vs Thực tế_kỳ T1-T6_Final_V3.xlsx (1,85 MB), sheet 3. Phí DVVH sau điều chỉnh. Vinh tăng 1,24 tỷ so với vòng 21/08; Long An giữ nguyên." },
      { d:"25/08", who:"KTT", level:"good", t:"Triển khai quy trình trình ký điện tử MISA cho toàn Công ty OMNI",
        note:"Mở rộng từ phạm vi Chủ đầu tư (27/07) ra toàn công ty — đúng khuyến nghị KSNB kỳ trước." },
      { d:"26/08", who:"KTT", level:"good", t:"Hướng dẫn hoàn thiện và bàn giao hồ sơ gốc cho ĐNTT/ĐNTU trình ký trên MISA",
        note:"Siết luồng hồ sơ thanh toán và tạm ứng — củng cố chốt kiểm soát." },
      { d:"07/09", who:"TCKT", level:"red", t:"HẠN phát hành BC dòng tiền T8 và BC so sánh KH vs TT (kỳ tháng 8)",
        note:"Không có báo cáo nào được phát hành tính đến 08/09. Kỳ tháng 8 lặp lại đúng mẫu hình kỳ tháng 7." },
      { d:"08/09", who:"KSNB", level:"red", t:"Chốt kỳ giám sát — vẫn không có báo cáo tài chính T7 hay T8 nào trong hộp thư",
        note:"6 email của TCKT trong kỳ, không email nào là báo cáo tài chính định kỳ." }
    ],
    cash: Object.assign({}, JUL.cash, { note:"Không có số dư tiền thực tế tháng 7 hoặc tháng 8 — TCKT chưa phát hành. Bảng dưới giữ nguyên từ kỳ tháng 7: mốc thực tế gần nhất là 30/06/2026 (38.876.331.030 đ); cột 31/07 là ƯỚC TÍNH theo kế hoạch. Chưa có cột nào phản ánh 31/08." }),
    realFlow: Object.assign({}, JUL.realFlow, { note:"Không có dòng tiền thực tế tháng 7 hay tháng 8. Bảng dưới là kế hoạch tháng 7 từ kỳ trước, giữ nguyên để tham chiếu." }),
    runway: JUL.runway,
    receivables:"CẬP NHẬT KỲ NÀY: phí DVVH Quý 3 đã được chốt giá ở 40.253.699.290 đ trước VAT (44.279.069.220 đ sau VAT) sau họp lãnh đạo 18/08 — rủi ro treo 48,69 tỷ của kỳ trước đã hạ nhiệt ở khâu ĐỊNH GIÁ; nhưng đến 08/09 chưa quan sát được văn bản CĐT phê duyệt hay lệnh giải ngân trong hộp thư, nên rủi ro chuyển sang khâu THU TIỀN ĐÚNG HẠN. Số phải thu 30/06/2026 giữ nguyên: Bên liên quan A còn phải thu 3.498.534.044 đ (toàn bộ quý 2); Bên liên quan B đã thanh toán đủ Q1 và Q2 (20.085.642.910 đ); số ngày phải thu khoảng 9,8 ngày. Chưa có số liệu 31/07 hay 31/08/2026.",
    variance: Object.assign({}, JUL.variance, { t7note:"KHÔNG có bảng lương tháng 8 trong kỳ quét; số dưới đây là tháng 7 (bảng lương P.HCNS ngày 05/08), giữ nguyên từ kỳ trước để theo dõi. Lưu ý tiếp tục: con số lũy kế chênh AOP nhân sự 27.603.431.530 đ VẪN chưa đối chiếu độc lập được, do bảng lương T7 có 3 lỗi (thiếu hẳn mục II; cộng dọc 476 nhưng dòng tổng ghi 477; cột AOP − thực tế lệch 152.010.784 đ). Phải đính chính trước khi dùng làm căn cứ đàm phán với CĐT." }),
    pnl: Object.assign({}, JUL.pnl, { note:"Không có PnL tháng 7 hoặc tháng 8 — file PnL vẫn dừng ở tháng 6, toàn bộ cột tháng 7 và tháng 8 bằng 0. PnL kỳ T7 (hạn 15/08) quá hạn 24 ngày; PnL kỳ T8 (hạn 15/09) còn 7 ngày. Số dưới đây là H1/2026 và riêng tháng 6, giữ nguyên." }),
    flags: fl,
    flagsNote:"Các mục #1–#8 là cảnh báo tồn đọng từ H1/2026; trong phạm vi quét 13/08–08/09 KHÔNG có hồ sơ mới làm thay đổi trạng thái đóng/mở của chúng — giữ nguyên nội dung để tiếp tục theo dõi. Mục #9 được CẬP NHẬT (hạ từ ĐỎ xuống CAM sau khi phí DVVH Q3 được chốt giá). Mục #10 là phát hiện MỚI của kỳ này. Nội dung mô tả tình trạng hồ sơ quan sát được, không kết luận về hành vi hay động cơ cá nhân; tài liệu đã ẩn danh.",
    riskSummary:{ red:7, amber:3, yellow:2, score:195, scoreAfter:90,
      note:"Thay đổi ròng kỳ này: HẠ 1 rủi ro (phí DVVH Q3 từ treo/chưa giải ngân xuống đã chốt giá 40,25 tỷ, chờ xác nhận giải ngân); THÊM 1 rủi ro ĐỎ (chậm phát hành báo cáo thành mẫu hình 2 kỳ liên tiếp). Không có rủi ro tồn đọng nào (#1–#8) được đóng lại trong kỳ. Điểm rủi ro gộp giữ nguyên từ kỳ tháng 7, CHƯA tái tính trong phạm vi kỳ này.",
      momNote:"Điểm sáng: hai chốt kiểm soát siết lại trong kỳ — MISA trình ký điện tử toàn công ty (25/08) và phí DVVH Q3 được chốt giá minh bạch theo cơ chế 10% LNST. Vấn đề trọng tâm còn lại là TCKT không phát hành báo cáo đúng hạn — chốt kiểm soát yếu nhất hiện nay nằm ở luồng thông tin, không phải ở giao dịch." },
    actions:[
      { n:1, level:"red", tag:"RẤT KHẨN", due:"11/09/2026", t:"Phát văn bản chính thức yêu cầu TCKT phát hành NGAY 5 báo cáo kỳ tháng 7 (quá hạn 21–32 ngày) và 2 báo cáo kỳ tháng 8 đã đến hạn; ghi nhận việc trễ hạn vào hồ sơ đánh giá TCKT. Đây là kỳ THỨ HAI liên tiếp không tuân thủ cam kết 24/07." },
      { n:2, level:"red", tag:"RẤT KHẨN", due:"11/09/2026", t:"Xác nhận trạng thái phí DVVH Q3 đã chốt (40,25 tỷ trước VAT): (a) CĐT đã phê duyệt bằng văn bản chưa; (b) hồ sơ trình ký thanh toán đã phát hành chưa; (c) đối chiếu con số với sheet 3. Phí DVVH sau điều chỉnh trong file đính kèm 24/08 trước khi ghi nhận là đã giải quyết." },
      { n:3, level:"red", tag:"RẤT KHẨN", due:"11/09/2026", t:"Theo dõi văn bản yêu cầu TCKT giải trình khoản cho vay 20 tỷ (soạn kỳ trước): đã phát hành chưa, đã có phản hồi chưa. Nếu chưa, phát hành trong 48 giờ." },
      { n:4, level:"amber", tag:"KHẨN", due:"14/09/2026", t:"Yêu cầu KSNB xác minh cấu hình MISA: ngưỡng bắt buộc trình ký điện tử với giao dịch từ 500 triệu, và cơ chế chặn tách nhỏ một khoản chi cùng hợp đồng/cùng ngày. Ghi nhận triển khai MISA toàn công ty là điểm kiểm soát tích cực." },
      { n:5, level:"amber", tag:"KHẨN", due:"14/09/2026", t:"Trước khi dùng con số chênh AOP nhân sự 27,6 tỷ làm căn cứ đàm phán với CĐT, yêu cầu P.HCNS đính chính 3 lỗi bảng lương T7 (thiếu mục II; 476 vs 477 người; lệch 152.010.784 đ ở cột AOP − thực tế)." },
      { n:6, level:"amber", tag:"KHẨN", due:"15/09/2026", t:"Chuẩn bị cho hạn PnL kỳ T8 (15/09) và 2 báo cáo 18/09: nếu TCKT lỡ tiếp, kỳ tháng 8 cũng 0/5 và cần đưa vào báo cáo HĐQT về năng lực tuân thủ của TCKT." },
      { n:7, level:"info", tag:"TRUNG BÌNH", due:"19/09/2026", t:"Đưa vốn điều lệ góp thiếu 6,57 tỷ (cổ đông 65%) và mô hình chi hộ CĐT chưa có hợp đồng ủy quyền vào chương trình họp HĐQT gần nhất, kèm ý kiến pháp chế về hậu quả pháp lý." }
    ],
    actionsExtra:"Vấn đề luồng thông tin của kỳ trước VẪN TỒN TẠI: báo cáo phí DVVH Q3 ngày 24/08 — tài liệu định giá 40,25 tỷ đ — tiếp tục gửi TỚI kế toán CĐT và team kinh doanh, PTGĐ TT chỉ nhận CC. Đề nghị TCKT gửi TRỰC TIẾP (dòng To) tới PTGĐ TT đối với mọi báo cáo tài chính gửi ra ngoài công ty.",
    sources:[
      "Hộp thư Outlook của PTGĐ TT (tungtruong@omni.com.vn), quét 13/08/2026 – 08/09/2026 (27 ngày). Tìm theo người gửi ngocctm@omni.com.vn: 6 email trong kỳ, KHÔNG email nào là báo cáo tài chính định kỳ.",
      "Đọc chi tiết: chuỗi email BC so sánh Ngân sách vs Thực tế T1–T6 (17/08 chốt phương án, 21/08 số vòng 1, 24/08 số chốt phí DVVH Q3 kèm file 1,85 MB); email triển khai MISA toàn công ty (25/08) và hoàn thiện hồ sơ gốc (26/08).",
      "Email cam kết lịch báo cáo của KTT ngày 24/07/2026 (5 báo cáo, hạn ngày 7 / 15 / 18 hằng tháng).",
      "Các mốc tài chính thực tế gần nhất giữ nguyên từ kỳ tháng 7: file Cashflow / PnL / Kế hoạch dòng tiền / Đăng ký rủi ro 202606 — chưa được cập nhật số T7/T8.",
      "Phép tính ngày và tổng phí DVVH Q3 trong kỳ được tính lại độc lập bằng script: compliance day-counts; Vinh 26.653.934.757 + Long An 13.599.764.533 = 40.253.699.290 trước VAT; sau VAT 44.279.069.220 — khớp."
    ],
    limits:[
      "Toàn bộ số tài chính THỰC TẾ tháng 7 và tháng 8/2026 — TCKT chưa phát hành.",
      "Xác nhận CĐT phê duyệt phí DVVH Q3 bằng văn bản, và lệnh giải ngân / hồ sơ trình ký thanh toán — chưa quan sát được trong hộp thư đến 08/09.",
      "Việc đề xuất điều chỉnh hồi tố chi phí nhân sự H1 có bị loại hoàn toàn hay không — số chốt 24/08 dựa trên cơ chế 10% LNST, không đề cập hồi tố; nhưng không có văn bản xác nhận đã bác đề xuất đó (suy luận, chưa kiểm chứng).",
      "Nội dung file đính kèm 24/08 (sheet 3. Phí DVVH sau điều chỉnh) — chưa mở và đối chiếu từng dòng; số liệu lấy từ bảng trong thân email.",
      "Cấu hình thực tế của hệ thống MISA (ngưỡng bắt buộc, cơ chế chặn tách nhỏ) — mới ghi nhận việc triển khai, chưa xác minh tham số.",
      "Các cảnh báo đỏ tồn đọng #1–#8 không có dữ liệu mới trong kỳ để cập nhật trạng thái đóng/mở."
    ],
    legal:"CẬP NHẬT: theo số chốt phí DVVH Q3 ngày 24/08, cơ chế áp dụng là Omni giữ lại 10% LN sau thuế + cập nhật tiến độ bàn giao — KHÔNG thấy đề cập việc điều chỉnh hồi tố chi phí nhân sự H1 mà kế toán CĐT đề xuất ngày 12/08. Nếu đề xuất hồi tố đã bị loại, rủi ro pháp lý/thuế lớn nhất kỳ trước đã được tránh; tuy nhiên cần văn bản xác nhận. Ba nội dung sau VẪN cần ý kiến chuyên môn ĐỘC LẬP: (a) mọi điều chỉnh hồi tố chi phí H1 nếu còn được nêu lại — kỳ đã kết thúc, đã ghi nhận doanh thu, lợi nhuận và thuế TNDN tạm nộp; (b) khoản 20 tỷ cho một cá nhân vay — bản chất kế toán, bản chất thuế và thẩm quyền phê duyệt; (c) vốn điều lệ chưa góp đủ (thiếu 6,57 tỷ) và mô hình chi hộ CĐT chưa có hợp đồng ủy quyền — chuyên gia thuế độc lập, KHÔNG phải đơn vị đang làm sổ sách cho công ty.",
    appendix: Object.assign({}, JUL.appendix, { intro:"Soạn từ kỳ tháng 7 để yêu cầu TCKT giải trình khoản cho vay 20 tỷ và các giao dịch liên quan; đến 08/09 chưa quan sát được đã phát hành hay có phản hồi. Giữ nguyên để phát hành. Đề xuất gửi trực tiếp Kế toán trưởng, CC Tổng Giám đốc." })
  };
  window.PERIODS.unshift(AUG);
})();


;(function(){
  // Kỳ Tháng 9/2026 — cập nhật GIỮA KỲ (chốt 15/09/2026, đúng lịch chạy định kỳ ngày 15).
  // Nguồn: hộp thư PTGĐ TT (tungtruong@omni.com.vn), quét 09/09–15/09/2026.
  // Vẫn CHƯA có tháng báo cáo tài chính mới đóng lại; KHÔNG thêm điểm chuỗi thời gian (không có số thực tế mới).
  // Cùng một kỳ Tháng 9 với ảnh giám sát đầu kỳ 09/09 — cập nhật số ngày, trạng thái và cờ, không tạo kỳ trùng.
  var AUG = window.PERIODS[0];
  var SEP = JSON.parse(JSON.stringify(AUG)); // deep clone, giữ nguyên mọi trường mang từ kỳ trước

  SEP.id = "2026-09";
  SEP.label = "Tháng 9/2026";
  SEP.asOf = "15/09/2026";
  SEP.scan = "09/09/2026 – 15/09/2026 (cập nhật giữa kỳ, đúng lịch chạy định kỳ ngày 15)";

  SEP.verdict = {
    level: "red",
    head: "GIỮA THÁNG 9 — VẪN KHÔNG CÓ SỐ TÀI CHÍNH THỰC TẾ; CHẬM BÁO CÁO SANG KỲ THỨ TƯ; RỦI RO PHÍ MÔI GIỚI ĐÃ CÓ HƯỚNG XỬ LÝ",
    body: "Bản chốt 15/09/2026 (đúng lịch định kỳ ngày 15). Đến hôm nay TCKT vẫn chưa phát hành bất kỳ báo cáo tài chính định kỳ nào: cả 5 báo cáo kỳ tháng 7 quá hạn 28–39 ngày, hai báo cáo đầu kỳ tháng 8 (hạn 07/09) quá hạn 8 ngày, và báo cáo PnL kỳ tháng 8 ĐẾN HẠN ĐÚNG HÔM NAY (15/09) — chưa nhận được. Điểm sáng kiểm soát chi: rủi ro phí môi giới BĐS (Song Cát) đã có hướng xử lý sau cuộc họp 14/09 — hai bên thống nhất nghiệm thu và thanh toán THEO TỶ LỆ HOÀN THÀNH THỰC TẾ, đúng nguyên tắc KSNB nêu kỳ trước; song hồ sơ căn cứ (biên bản nghiệm thu, xác nhận diện tích, bằng chứng giới thiệu khách theo Điều 3.2) vẫn phải hoàn tất trước khi chi."
  };

  SEP.kpi = [
    { label:"Tuân thủ báo cáo", value:"0 / 8", sub:"Đã đến hạn nhưng chưa nhận · T7 quá hạn 28–39 ngày · T8: 2 BC quá hạn 8 ngày + PnL đến hạn hôm nay", level:"red" },
    { label:"Số tài chính thực tế", value:"Không có", sub:"T7, T8 chưa phát hành · mốc gần nhất 30/06 (38,88 tỷ đ)", level:"red" },
    { label:"Phí DVVH Q3 (đã chốt giá)", value:"40,25 tỷ đ", sub:"Trước VAT · sau VAT 44,28 tỷ · chưa quan sát được lệnh giải ngân đến 15/09", level:"amber" },
    { label:"Số tháng cầm cự", value:"~4,02 tháng", sub:"Trên số 30/06 · gồm thuế & capex · chưa có số T7–T8", level:"amber" },
    { label:"Phí môi giới Song Cát", value:"88,69 tr đ", sub:"Sau họp 14/09: chốt thanh toán theo tỷ lệ hoàn thành thực tế · chờ hồ sơ nghiệm thu", level:"amber" },
    { label:"Chênh AOP nhân sự (đàm phán)", value:"27,60 tỷ đ", sub:"Căn cứ CĐT dùng để cắt NS · vẫn chưa đối chiếu độc lập", level:"amber" }
  ];

  SEP.summary = [
    { level:"red", t:"Chậm phát hành báo cáo tài chính đã sang kỳ thứ TƯ liên tiếp. Đến 15/09: cả 5 báo cáo kỳ tháng 7 (cam kết văn bản 24/07) quá hạn 28–39 ngày; hai báo cáo đầu kỳ tháng 8 (hạn 07/09) quá hạn 8 ngày; PnL kỳ tháng 8 ĐẾN HẠN ĐÚNG HÔM NAY (15/09) và chưa nhận được. KSNB và Ban TGĐ vẫn không có số tài chính thực tế của hai tháng gần nhất để giám sát thanh khoản." },
    { level:"good", t:"Rủi ro phí môi giới BĐS (Song Cát) đã có hướng xử lý. Sau cuộc họp trực tuyến 14/09, Song Cát ĐỒNG Ý nghiệm thu và thanh toán theo TỶ LỆ HOÀN THÀNH THỰC TẾ (không thanh toán trọn gói khoản 14,78 tr khi chưa đủ 4 đầu mục sản phẩm) — đúng nguyên tắc KSNB nêu ở kỳ giám sát đầu kỳ. CĐT tiếp tục hợp đồng và ký Phụ lục điều chỉnh đợt thanh toán đầu tiên theo kết quả thực tế." },
    { level:"amber", t:"Nhưng khoản phí môi giới 88,69 tr đ CHƯA đủ điều kiện chi cho tới khi hoàn tất: (a) biên bản nghiệm thu ghi rõ công thức tính giá trị (đã yêu cầu bổ sung công thức ra 73.909.377 đ); (b) văn bản xác nhận diện tích lấp đầy 220,28 m² và bằng chứng Bên A giới thiệu khách trong thời hạn hợp đồng (Điều 3.2) — rủi ro thời điểm ký (thuê 01/06 trước môi giới 10/06, chênh 9 ngày) vẫn chưa được hồ sơ hóa giải; (c) hóa đơn GTGT; (d) xác nhận thẩm quyền phê duyệt của GĐ Khối Đầu tư & TMDV." },
    { level:"red", t:"Toàn bộ số tài chính thực tế tháng 7 VÀ tháng 8 vẫn trống — file Cashflow/PnL/Kế hoạch dòng tiền vẫn dừng ở tháng 6. Không trả lời được câu hỏi tiền tăng hay giảm cho cả hai tháng. Mọi chỉ số thanh khoản vẫn neo ở 30/06/2026 (38,88 tỷ đ; ~4,02 tháng cầm cự gồm thuế & capex)." },
    { level:"good", t:"Chốt kiểm soát tiếp tục siết: quy trình trình ký điện tử MISA/AMIS WeSign đang vận hành thực tế — trong kỳ có nhiều đề nghị thanh toán (ĐNTT) ECP Vinh, Eco Retreat luân chuyển qua e-sign, một ĐNTT công tác phí T8 đã bị hủy đúng quy trình (14/09). Ngày 11/09 ban hành Quyết định Quy trình phối hợp vận hành Thương mại dịch vụ tại cơ sở — thêm một khung kiểm soát quy trình." },
    { level:"amber", t:"Các cảnh báo đỏ tồn đọng từ H1 KHÔNG có bằng chứng đã đóng trong kỳ quét: phí DVVH Q3 đã chốt giá 40,25 tỷ nhưng chưa quan sát được văn bản CĐT phê duyệt hay lệnh giải ngân đến 15/09; khoản cho vay 20 tỷ, mua ô tô 1,53 tỷ ngoài kế hoạch, tách nhỏ giao dịch 04/06, vốn điều lệ góp thiếu 6,57 tỷ — giữ nguyên trạng thái mở." }
  ];

  SEP.compliance = {
    note: "Căn cứ email cam kết KTT 24/07/2026 (hạn: BC dòng tiền & SS dòng tiền ngày 7; PnL ngày 15; phân tích lãi-lỗ vs dòng tiền & SS ngân sách ngày 18 hằng tháng). Chốt dữ liệu 15/09/2026. Số ngày trễ/còn lại tính lại bằng script từ ngày chốt (Asia/Saigon). Bảng gộp kỳ tháng 7 và kỳ tháng 8.",
    rows: [
      { n:1, name:"BC dòng tiền — kỳ T7", due:"07/08/2026", got:"—", status:"late", tag:"Quá hạn 39 ngày" },
      { n:2, name:"BC so sánh KH dòng tiền vs thực tế — kỳ T7", due:"07/08/2026", got:"—", status:"late", tag:"Quá hạn 39 ngày" },
      { n:3, name:"BC Kết quả Kinh doanh (PnL) — kỳ T7", due:"15/08/2026", got:"—", status:"late", tag:"Quá hạn 31 ngày" },
      { n:4, name:"BC phân tích lãi/lỗ vs dòng tiền — kỳ T7", due:"18/08/2026", got:"—", status:"late", tag:"Quá hạn 28 ngày" },
      { n:5, name:"BC so sánh ngân sách KH vs thực tế — kỳ T7", due:"18/08/2026", got:"—", status:"late", tag:"Quá hạn 28 ngày" },
      { n:6, name:"BC dòng tiền — kỳ T8", due:"07/09/2026", got:"—", status:"late", tag:"Quá hạn 8 ngày" },
      { n:7, name:"BC so sánh KH dòng tiền vs thực tế — kỳ T8", due:"07/09/2026", got:"—", status:"late", tag:"Quá hạn 8 ngày" },
      { n:8, name:"BC Kết quả Kinh doanh (PnL) — kỳ T8", due:"15/09/2026", got:"—", status:"late", tag:"Đến hạn hôm nay — chưa nhận" },
      { n:9, name:"BC phân tích lãi/lỗ vs dòng tiền — kỳ T8", due:"18/09/2026", got:"—", status:"pending", tag:"Còn 3 ngày" },
      { n:10, name:"BC so sánh ngân sách KH vs thực tế — kỳ T8", due:"18/09/2026", got:"—", status:"pending", tag:"Còn 3 ngày" }
    ]
  };

  SEP.timeline = [
    { d:"09/09", who:"KTT / CĐT", level:"amber", t:"CĐT gửi Song Cát dự thảo hồ sơ nghiệm thu & thanh toán (HĐ dịch vụ 001/HĐTV/2026/VL-ECP)",
      note:"Gồm Phụ lục điều chỉnh đợt thanh toán đầu tiên, Biên bản nghiệm thu & xác nhận giá trị thanh toán, Bảng tính. KTT xác nhận tiếp tục hợp đồng, ký phụ lục theo kết quả thực tế; nếu Song Cát không tiến triển thì thanh lý." },
    { d:"11/09", who:"HCNS / BLĐ", level:"good", t:"Ban hành Quyết định Quy trình phối hợp vận hành Thương mại dịch vụ tại cơ sở",
      note:"Thêm khung kiểm soát quy trình phối hợp vận hành TMDV — ghi nhận tích cực." },
    { d:"11/09", who:"Song Cát", level:"amber", t:"Song Cát phản hồi hồ sơ 09/09 “chưa đúng tinh thần”, chưa đồng ý",
      note:"Bổ sung đầu mối xác nhận hóa đơn; hai bên chốt họp trực tuyến." },
    { d:"14/09", who:"Song Cát / CĐT", level:"good", t:"Họp trực tuyến: thống nhất nghiệm thu & thanh toán THEO TỶ LỆ HOÀN THÀNH THỰC TẾ",
      note:"Song Cát đồng ý nghiệm thu và thanh toán theo tỷ lệ hoàn thành thực tế cho đợt đầu và lần 1, chi tiết theo Biên bản nghiệm thu. Đúng nguyên tắc KSNB nêu kỳ trước; còn chờ hồ sơ nghiệm thu hoàn tất." },
    { d:"14/09", who:"TCKT / BQL", level:"info", t:"ĐNTT ECP Vinh / Eco Retreat luân chuyển qua AMIS WeSign; 1 ĐNTT công tác phí T8 bị hủy",
      note:"Quy trình trình ký điện tử đang vận hành thực tế; việc hủy một ĐNTT cho thấy chốt kiểm soát hoạt động." },
    { d:"15/09", who:"TCKT", level:"red", t:"HẠN phát hành PnL kỳ tháng 8 — chưa nhận được",
      note:"Đến ngày chốt 15/09 chưa có PnL kỳ T8. Cùng ngày, 5 báo cáo kỳ T7 vẫn quá hạn 28–39 ngày và 2 BC đầu kỳ T8 quá hạn 8 ngày." }
  ];

  SEP.flags[9] = { n:10, level:"red", since:"07/08/2026",
    title:"Chậm phát hành báo cáo tài chính đã thành mẫu hình bốn kỳ liên tiếp",
    detail:"Cam kết văn bản KTT 24/07/2026 gồm 5 báo cáo mỗi tháng (hạn ngày 7, 15, 18). Đến 15/09: kỳ tháng 7 cả 5 báo cáo chưa phát hành — quá hạn 28 đến 39 ngày; kỳ tháng 8 hai báo cáo đầu (hạn 07/09) quá hạn 8 ngày và PnL (hạn 15/09) đến hạn đúng hôm nay chưa nhận; hai báo cáo còn lại kỳ T8 đến hạn 18/09 (còn 3 ngày). Đây là kỳ giám sát thứ tư liên tiếp ghi nhận chậm phát hành — vấn đề năng lực/ý chí tuân thủ, không còn là sự cố đơn lẻ. Hệ quả: KSNB và Ban TGĐ không có số tài chính thực tế của hai tháng gần nhất để giám sát thanh khoản. ĐỀ NGHỊ đưa vào hồ sơ đánh giá TCKT và trình HĐQT: nếu đến 18/09 kỳ tháng 8 vẫn 0/5, cần văn bản chính thức và cơ chế chế tài." };
  SEP.flags[10] = { n:11, level:"amber", since:"08/09/2026",
    title:"Phí môi giới BĐS (Song Cát) — đã có hướng xử lý theo tỷ lệ hoàn thành thực tế, chờ hồ sơ căn cứ",
    detail:"HẠ NHIỆT so với kỳ giám sát đầu kỳ. Sau cuộc họp trực tuyến 14/09/2026, hai bên thống nhất nghiệm thu và THANH TOÁN THEO TỶ LỆ HOÀN THÀNH THỰC TẾ cho đợt thanh toán đầu tiên (300 tr, sản phẩm NCTT) và lần 1 (150 tr, mốc lấp đầy 10%), chi tiết theo Biên bản nghiệm thu — đúng nguyên tắc KSNB nêu ở kỳ trước (không chi trọn gói 14.781.875 đ khi chưa đủ 4 đầu mục sản phẩm). CĐT tiếp tục hợp đồng và ký Phụ lục điều chỉnh đợt thanh toán đầu tiên. CÒN MỞ trước khi chi: (a) biên bản nghiệm thu ghi rõ công thức tính ra 73.909.377 đ (KTT đã yêu cầu bổ sung); (b) văn bản xác nhận diện tích lấp đầy 220,28 m² và bằng chứng Bên A giới thiệu khách trong thời hạn hợp đồng còn hiệu lực (Điều 3.2) — rủi ro thời điểm ký (hợp đồng thuê 01/06 TRƯỚC hợp đồng môi giới 10/06, chênh 9 ngày) chưa được hồ sơ hóa giải; (c) hóa đơn GTGT; (d) xác nhận thẩm quyền phê duyệt của GĐ Khối Đầu tư & TMDV, nếu không đủ thì PD chủ trương lãnh đạo. Tổng hai khoản đang treo: 88.691.252 đ. Nội dung mô tả tình trạng hồ sơ, không kết luận về hành vi hay động cơ; đã ẩn danh." };
  SEP.flagsNote = "Các mục #1–#8 là cảnh báo tồn đọng từ H1/2026; trong cửa sổ quét 09–15/09 KHÔNG có hồ sơ mới làm thay đổi trạng thái đóng/mở. Mục #9 (phí DVVH Q3 đã chốt giá) giữ nguyên trạng CAM — chưa quan sát được văn bản phê duyệt/lệnh giải ngân đến 15/09. Mục #10 cập nhật theo đồng hồ hiện tại (mẫu hình chậm phát hành sang kỳ thứ tư). Mục #11 đã hạ nhiệt sau họp 14/09 nhưng còn chờ hồ sơ căn cứ. Nội dung mô tả tình trạng hồ sơ quan sát được, không kết luận về hành vi hay động cơ cá nhân; tài liệu đã ẩn danh.";

  SEP.cash = Object.assign({}, SEP.cash, { note:"Không có số dư tiền thực tế tháng 7, 8 hay 9 — TCKT chưa phát hành. Bảng dưới giữ nguyên: mốc thực tế gần nhất là 30/06/2026 (38.876.331.030 đ); cột 31/07 là ƯỚC TÍNH theo kế hoạch. Chưa có cột nào phản ánh 31/08 hay 31/09." });
  SEP.realFlow = Object.assign({}, SEP.realFlow, { note:"Không có dòng tiền thực tế tháng 7, 8 hay 9. Bảng dưới là kế hoạch tháng 7 từ kỳ trước, giữ nguyên để tham chiếu." });
  SEP.pnl = Object.assign({}, SEP.pnl, { note:"Không có PnL tháng 7, 8 hay 9 — file PnL vẫn dừng ở tháng 6. PnL kỳ T7 (hạn 15/08) quá hạn 31 ngày; PnL kỳ T8 (hạn 15/09) đến hạn đúng hôm nay, chưa nhận. Số dưới đây là H1/2026 và riêng tháng 6, giữ nguyên." });

  SEP.receivables = "Giữ nguyên từ kỳ tháng 8: phí DVVH Quý 3 đã chốt giá 40.253.699.290 đ trước VAT (44.279.069.220 đ sau VAT) sau họp lãnh đạo 18/08; đến 15/09 vẫn CHƯA quan sát được văn bản CĐT phê duyệt hay lệnh giải ngân trong hộp thư — rủi ro vẫn ở khâu THU TIỀN ĐÚNG HẠN. Số phải thu 30/06/2026 giữ nguyên: Bên liên quan A còn phải thu 3.498.534.044 đ; Bên liên quan B đã thanh toán đủ Q1+Q2 (20.085.642.910 đ); số ngày phải thu ~9,8 ngày. Chưa có số liệu 31/07, 31/08 hay 31/09/2026.";

  SEP.riskSummary = {
    red:7, amber:4, yellow:2, score:195, scoreAfter:90,
    note:"Thay đổi ròng kỳ này: rủi ro phí môi giới Song Cát (#11) HẠ NHIỆT sau họp 14/09 (chốt thanh toán theo tỷ lệ hoàn thành thực tế) nhưng chưa đóng — còn chờ hồ sơ nghiệm thu, xác nhận diện tích và bằng chứng giới thiệu khách (Điều 3.2). Không có rủi ro tồn đọng nào (#1–#9) được đóng lại. Mẫu hình chậm phát hành báo cáo (#10) sang kỳ thứ TƯ liên tiếp và nặng thêm (PnL kỳ T8 đến hạn hôm nay). Điểm rủi ro gộp giữ nguyên từ kỳ tháng 7, CHƯA tái tính khi chưa có số tài chính thực tế mới.",
    momNote:"So với ảnh giám sát đầu kỳ 09/09: (1) chốt kiểm soát chi hoạt động đúng hướng — Song Cát đồng ý thanh toán theo tỷ lệ hoàn thành thực tế, e-sign MISA/AMIS vận hành thực tế; (2) nhưng tuân thủ báo cáo xấu đi — thêm 6 ngày trễ trên toàn bộ kỳ T7 và PnL kỳ T8 đến hạn hôm nay chưa nhận. Không có số tài chính mới; không thêm điểm chuỗi thời gian."
  };

  SEP.actions = [
    { n:1, level:"red", tag:"RẤT KHẨN", due:"16/09/2026", t:"Phát văn bản chính thức yêu cầu TCKT phát hành NGAY 5 báo cáo kỳ tháng 7 (quá hạn 28–39 ngày), 2 báo cáo đầu kỳ tháng 8 (quá hạn 8 ngày) và PnL kỳ tháng 8 (đến hạn 15/09). Ghi nhận việc trễ hạn vào hồ sơ đánh giá TCKT — đây là kỳ giám sát thứ tư liên tiếp không tuân thủ cam kết 24/07." },
    { n:2, level:"amber", tag:"KHẨN", due:"18/09/2026", t:"Trước khi chi phí môi giới Song Cát (88,69 tr đ): yêu cầu (a) biên bản nghiệm thu ghi rõ công thức tính giá trị; (b) văn bản xác nhận diện tích lấp đầy 220,28 m² và bằng chứng Bên A giới thiệu khách trong thời hạn hợp đồng còn hiệu lực (Điều 3.2) — hóa giải rủi ro thuê 01/06 trước môi giới 10/06; (c) hóa đơn GTGT; (d) xác nhận thẩm quyền phê duyệt của GĐ Khối Đầu tư & TMDV, nếu không đủ thì PD chủ trương lãnh đạo. Đã có hướng xử lý theo tỷ lệ hoàn thành thực tế — chỉ chi khi hồ sơ đủ." },
    { n:3, level:"amber", tag:"KHẨN", due:"18/09/2026", t:"Xác nhận trạng thái phí DVVH Q3 đã chốt giá (40,25 tỷ trước VAT): CĐT đã phê duyệt bằng văn bản chưa; hồ sơ trình ký thanh toán và lệnh giải ngân đã phát hành chưa. Chưa quan sát được đến 15/09 — rủi ro chuyển sang thu tiền đúng hạn." },
    { n:4, level:"amber", tag:"KHẨN", due:"18/09/2026", t:"Chuẩn bị mốc 18/09 (2 báo cáo cuối kỳ T8): nếu TCKT tiếp tục lỡ, kỳ tháng 8 cũng 0/5 và cần đưa vào báo cáo HĐQT về năng lực tuân thủ của TCKT kèm cơ chế chế tài." },
    { n:5, level:"info", tag:"TRUNG BÌNH", due:"30/09/2026", t:"Đưa vốn điều lệ góp thiếu 6,57 tỷ (cổ đông 65%) và mô hình chi hộ CĐT chưa có hợp đồng ủy quyền vào chương trình họp HĐQT gần nhất, kèm ý kiến pháp chế về hậu quả pháp lý." }
  ];

  SEP.actionsExtra = "Vấn đề luồng thông tin của các kỳ trước VẪN TỒN TẠI: PTGĐ TT tiếp tục chỉ nhận CC trên các tài liệu tài chính/định giá gửi ra ngoài (phí DVVH Q3, hồ sơ môi giới). Đề nghị TCKT gửi TRỰC TIẾP (dòng To) tới PTGĐ TT đối với mọi báo cáo tài chính và hồ sơ thanh toán trọng yếu.";

  SEP.sources = [
    "Hộp thư Outlook của PTGĐ TT (tungtruong@omni.com.vn), quét 09/09/2026 – 15/09/2026. Trong cửa sổ: KHÔNG có báo cáo tài chính định kỳ (dòng tiền, PnL, so sánh ngân sách) từ TCKT; email tài chính của KTT trong kỳ là chuỗi phí môi giới BĐS và các đề nghị thanh toán qua AMIS WeSign.",
    "Đọc chi tiết chuỗi email môi giới Song Cát: 09/09 (CĐT gửi dự thảo hồ sơ nghiệm thu; KTT xác nhận tiếp tục hợp đồng), 11/09 (Song Cát phản hồi chưa đồng ý; chốt lịch họp), 14/09 (Song Cát đồng ý nghiệm thu & thanh toán theo tỷ lệ hoàn thành thực tế).",
    "Quyết định ban hành Quy trình phối hợp vận hành Thương mại dịch vụ tại cơ sở (11/09); các đề nghị thanh toán ECP Vinh / Eco Retreat qua AMIS WeSign (14/09).",
    "Email cam kết lịch báo cáo của KTT ngày 24/07/2026 (5 báo cáo, hạn ngày 7 / 15 / 18 hằng tháng) — căn cứ đồng hồ tuân thủ.",
    "Các mốc tài chính thực tế gần nhất giữ nguyên từ kỳ tháng 7–8: file Cashflow / PnL / Kế hoạch dòng tiền / Đăng ký rủi ro 202606 — chưa cập nhật số T7/T8/T9.",
    "Toàn bộ ngày, số ngày trễ và tổng phí trong kỳ được tính lại độc lập bằng script từ ngày chốt 15/09/2026 (Asia/Saigon): 14.781.875 + 73.909.377 = 88.691.252; chênh ngày ký hợp đồng 9 ngày; phí DVVH Q3 26.653.934.757 + 13.599.764.533 = 40.253.699.290 (x1,10 = 44.279.069.220) — khớp."
  ];

  SEP.limits = [
    "Cập nhật giữa kỳ: cửa sổ quét 09–15/09; kỳ tháng 9 thực sự khép lại đầu tháng 10. Chưa có tháng báo cáo tài chính mới đóng lại.",
    "Toàn bộ số tài chính THỰC TẾ tháng 7, 8 và 9/2026 — TCKT chưa phát hành.",
    "Nội dung hợp đồng môi giới VL–Song Cát, biên bản nghiệm thu 14/09 và các phụ lục — chỉ đọc qua thân email trao đổi, chưa mở file gốc để đối chiếu từng điều khoản và từng con số nghiệm thu.",
    "Xác nhận CĐT phê duyệt phí DVVH Q3 bằng văn bản và lệnh giải ngân — chưa quan sát được trong hộp thư đến 15/09.",
    "Các cảnh báo đỏ tồn đọng #1–#8 không có dữ liệu mới trong kỳ để cập nhật trạng thái đóng/mở."
  ];

  SEP.legal = "Hai nội dung cần lưu ý pháp lý trong kỳ: (a) khoản phí môi giới Song Cát — dù đã thống nhất thanh toán theo tỷ lệ hoàn thành thực tế, nếu khách thuê được chốt trước khi hợp đồng môi giới có hiệu lực (thuê 01/06 vs môi giới 10/06), việc ghi nhận “khách do Bên A giới thiệu” và chi phí tương ứng vẫn cần rà soát điều kiện Điều 3.2 và làm rõ thẩm quyền phê duyệt khác hợp đồng đã ký trước khi chi. " + AUG.legal;

  window.PERIODS.unshift(SEP);
})();


/* --- Biến động theo tháng: doanh thu, chi phí, lợi nhuận --------
   Nguồn: sheet PnL_Total. Tháng chưa có số liệu để null. */
window.MOM = [
  { m:"T1/26", dt:9873656325,  cp:6730168349, ln:3143487976, ns:5630109300 },
  { m:"T2/26", dt:9871816327,  cp:6921540282, ln:2950276045, ns:5609787193 },
  { m:"T3/26", dt:10233316079, cp:6323134208, ln:3910181871, ns:5638771169 },
  { m:"T4/26", dt:10822848295, cp:6651803854, ln:4171044441, ns:6122736596 },
  { m:"T5/26", dt:11078404901, cp:7035262968, ln:4043141933, ns:6507193693 },
  { m:"T6/26", dt:12615075689, cp:9143298992, ln:3471776697, ns:8599525692,
    note:"Chi phí gồm khoản gắn kết nội bộ 1.931.261.941 đ, ngoài kế hoạch" },
  { m:"T7/26", dt:null, cp:null, ln:null, ns:null, note:"TCKT chưa phát hành PnL tháng 7 — hạn 15/08/2026" }
];

window.MOM_CALLOUT = {
  level:"red",
  head:"Tháng 6: doanh thu cao nhất nửa năm nhưng lợi nhuận lại giảm",
  body:"Doanh thu tăng 13,9% (+1.536.670.788 đ) trong khi chi phí tăng 30,0% (+2.108.036.024 đ) — chi phí tăng nhanh gấp 2,2 lần doanh thu. Hệ quả: LNTT giảm 14,1%, biên LNTT rơi từ 36,5% xuống 27,5% (mất 9,0 điểm phần trăm) và tỷ lệ chi phí nhân sự trên doanh thu vọt từ 58,7% lên 68,2% — vượt ngưỡng cảnh báo 65%. Nếu loại khoản gắn kết nội bộ 1.931.261.941 đ thì chi phí T6 chỉ tăng 2,5% và biên LNTT đạt 42,8%, tỷ lệ CPNS/DT về 52,9%. Nói cách khác, toàn bộ mức sụt lợi nhuận tháng 6 đến từ một khoản chi ngoài kế hoạch, không phải từ hoạt động vận hành. Điểm cần theo dõi sang tháng 7: dòng tiền tháng 6 mới chi 921.240.000 đ cho khoản này, phần còn lại khoảng 1.010.021.941 đ đã ghi nhận chi phí nhưng chưa chi tiền."
};

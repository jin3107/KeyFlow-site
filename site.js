(function () {
  "use strict";

  // English lives in the HTML itself; only the Vietnamese table is needed here.
  var vi = {
    "nav.features": "Tính năng", "nav.gallery": "Hình ảnh", "nav.practice": "Luyện tập", "nav.start": "Bắt đầu",
    "cta.download": "Tải về", "cta.download.win": "Tải cho Windows", "cta.github": "Xem trên GitHub",
    "hero.eyebrow": "Studio biểu diễn piano & hiệu ứng sân khấu",
    "hero.title": "MIDI của bạn, trên <em>sân khấu hòa nhạc</em>.",
    "hero.lead": "Chơi, luyện tập và quay video piano chất lượng sản xuất. Nốt nhạc rơi đúng nhịp, tia lửa bừng sáng rồi nguội dần, bàn phím 88 phím được chiếu sáng bằng shader ray-tracing, tất cả vẽ trên GPU và không bao giờ làm chậm tín hiệu MIDI của bạn.",
    "hero.f1": "Miễn phí & mã nguồn mở", "hero.f2": "Windows 10 / 11", "hero.f3": "English & Tiếng Việt",
    "stats.fps": "FPS trên GPU", "stats.hdr": "HDR kèm bloom", "stats.presets": "preset sân khấu", "stats.keys": "phím ray-tracing",
    "feat.eyebrow": "Làm được gì", "feat.title": "Mọi thứ cho một video piano, trong một cửa sổ",
    "f1.t": "Sân khấu GPU Direct3D 11", "f1.d": "Vòng lặp vẽ độc lập với HDR 16-bit, bloom nhiều tầng và tới 24.000 hạt. Khung hình nặng chỉ làm giảm FPS, không bao giờ làm trễ MIDI.",
    "f2.t": "Bàn phím ray-tracing", "f2.d": "Ánh sáng GGX, softbox có vùng nửa tối thật, bóng đổ giữa các phím và ánh sáng màu hắt lại từ phím bạn bấm.",
    "f3.t": "Lửa, tia lửa & ánh sáng", "f3.d": "Tia lửa nóng sáng, ngọn lửa theo từng nốt, sóng va chạm và nhiều kiểu đường chạm, cùng nền cực quang, tinh vân và khói than hồng.",
    "f4.t": "Luyện tập biết lắng nghe", "f4.d": "Chơi theo, chờ bạn bấm đúng nốt, tập riêng một tay, lặp một đoạn bằng A-B và giảm tốc độ xuống 50%.",
    "f5.t": "Quay video một chạm", "f5.d": "MP4 (H.264 + AAC) đã có sẵn tiếng, AVI, hoặc chuỗi PNG 32-bit trong suốt cho Premiere, Resolve và OBS.",
    "f6.t": "Nhạc cụ của bạn, âm thanh của bạn", "f6.d": "Cắm đàn MIDI hoặc dùng phím máy tính. Kèm SoundFont Yamaha grand, reverb phòng hòa nhạc và đủ ba pedal.",
    "f7.t": "Nhập bản nhạc, xuất phong cách", "f7.d": "Mở file MIDI và MusicXML, chia sẻ cả phong cách bằng một dòng chữ và đổi giữa Concert Grand, Noir và Velvet Gold.",
    "f8.t": "Camera & nhận diện bàn tay", "f8.d": "Chèn webcam với tách phông xanh, và xem bàn tay đang ở phím nào, không cần tải mô hình nào.",
    "f9.t": "Hai ngôn ngữ, đổi tức thì", "f9.d": "Chuyển giữa English và Tiếng Việt không cần khởi động lại: mọi nhãn, hộp thoại và thông báo lỗi được vẽ lại ngay trong một khung hình.",
    "gal.eyebrow": "Hình ảnh", "gal.title": "Do chính ứng dụng vẽ ra", "gal.sub": "Mọi hình ở đây đều do Keyflow chụp trong CI, không phải ảnh dàn dựng.",
    "gal.bg": "Hình nền của riêng bạn", "gal.menu": "Menu Concert Grand", "gal.dock": "Bảng thiết kế sân khấu",
    "gal.presets": "Cả 14 preset dựng sẵn, engine phần mềm và GPU đặt cạnh nhau.",
    "sl.galaxy": "Galaxy Voyage: vệt cầu vồng trên nền vũ trụ",
    "sl.storm": "Electric Storm: vệt tốc độ và tia điện giữa các phím đang giữ",
    "sl.violet": "Neon Violet: sân khấu mặc định",
    "sl.bg": "Hình nền của riêng bạn sau bàn phím",
    "sl.menu": "Menu khởi động Concert Grand",
    "sl.dock": "Bảng thiết kế sân khấu: preset và mọi lớp hiệu ứng",
    "sl.theme": "Ba giao diện hòa nhạc, cùng giao diện bạn tự tạo",
    "sl.rec": "Quay video: MP4, AVI hoặc PNG trong suốt",
    "sl.practice": "Luyện tập: chơi theo, chờ nốt, từng tay",
    "sl.history": "Lịch sử luyện tập",
    "sl.all": "Xem cả 14 preset dựng sẵn, engine phần mềm và GPU đặt cạnh nhau",
    "pr.eyebrow": "Chế độ luyện tập", "pr.title": "Học một bản nhạc, từng nốt một",
    "pr.1": "Bản nhạc chờ bạn bấm đúng nốt rồi mới đi tiếp.",
    "pr.2": "Chỉ tay phải hoặc chỉ tay trái, đọc thẳng từ khuông nhạc MusicXML.",
    "pr.3": "Lặp bất kỳ đoạn nào bằng A-B và giảm tempo xuống 50%.",
    "pr.4": "Độ chính xác, chuỗi đúng liên tiếp và nhận xét nhịp ngay dưới sân khấu.",
    "st.eyebrow": "Bắt đầu", "st.title": "Chơi được ngay trong một phút",
    "st.1t": "Tải về", "st.1d": "Lấy bản ZIP chạy trực tiếp hoặc bộ cài ở bản phát hành mới nhất.",
    "st.2t": "Cắm đàn & mở app", "st.2d": "Nối đàn MIDI, hoặc chỉ cần bấm A W S E D F trên bàn phím máy tính.",
    "st.3t": "Chọn phong cách", "st.3d": "Chọn một preset trong Cài đặt, rồi bấm REC để làm video.",
    "req.t": "Yêu cầu hệ thống", "req.os": "Hệ điều hành", "req.os.d": "Windows 10 (22H2) hoặc Windows 11, 64-bit",
    "req.gpu": "Đồ họa", "req.gpu.d": "GPU Direct3D 11 (dự phòng WARP, rồi tới bộ vẽ WPF)",
    "req.midi": "MIDI", "req.midi.d": "Tùy chọn: bất kỳ đàn USB nào Windows nhận ra", "req.build": "Build từ mã nguồn",
    "st.note": "Ứng dụng chưa được ký số nên Windows SmartScreen có thể cảnh báo lần đầu: chọn “More info”, rồi “Run anyway”.",
    "cta.title": "Đưa âm nhạc của bạn lên sân khấu", "cta.docs": "Đọc tài liệu",
    "foot.credit": "© 2026 Yami · Neyu. Cộng tác: Jin.",
    "foot.product": "Keyflow trên GitHub"
  };

  var shots = document.querySelectorAll("img[data-shot]");
  var texts = document.querySelectorAll("[data-i18n]");
  var htmls = document.querySelectorAll("[data-i18n-html]");
  var buttons = document.querySelectorAll(".lang button");
  var english = new Map();

  texts.forEach(function (el) { english.set(el, el.innerHTML); });
  htmls.forEach(function (el) { english.set(el, el.innerHTML); });

  function setLanguage(lang) {
    var isVi = lang === "vi";
    document.documentElement.lang = isVi ? "vi" : "en";
    texts.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = isVi && vi[key] !== undefined ? vi[key] : english.get(el);
    });
    htmls.forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      el.innerHTML = isVi && vi[key] !== undefined ? vi[key] : english.get(el);
    });
    shots.forEach(function (img) {
      img.src = "previews/" + (isVi ? "vi" : "en") + "/" + img.getAttribute("data-shot") + ".png";
    });
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    try { localStorage.setItem("keyflow-site-lang", lang); } catch (e) { /* private mode: not worth failing over */ }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setLanguage(b.getAttribute("data-lang")); });
  });

  var saved = null;
  try { saved = localStorage.getItem("keyflow-site-lang"); } catch (e) { /* ignore */ }
  var wanted = saved || ((navigator.language || "").toLowerCase().indexOf("vi") === 0 ? "vi" : "en");
  if (wanted === "vi") setLanguage("vi");
  // The download buttons ship pointing at the v1.0.0 installer. When the GitHub API answers, they are moved to the
  // installer of the newest release, so the page does not need an edit for every version.
  var downloads = document.querySelectorAll("a[data-download]");
  if (downloads.length && window.fetch) {
    fetch("https://api.github.com/repos/lxmtuu/KeyFlow/releases/latest")
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (release) {
        if (!release || !release.assets) return;
        var setup = release.assets.find(function (a) { return /^Keyflow-Setup-.*\.exe$/i.test(a.name); });
        if (!setup) return;
        downloads.forEach(function (a) { a.href = setup.browser_download_url; });
      })
      .catch(function () { /* offline or rate-limited: the pinned link still works */ });
  }
  // Screenshot carousel: a native scroll-snap track (so touch swipe works for free) plus arrows, dots,
  // keyboard arrows, and a click on the picture that moves to the next one.
  var track = document.querySelector(".carousel .track");
  if (track) {
    var slides = track.children;
    var dots = document.querySelector(".carousel .dots");
    var current = 0;
    var go = function (i) {
      current = (i + slides.length) % slides.length;
      track.scrollTo({ left: slides[current].offsetLeft - track.offsetLeft, behavior: "smooth" });
    };
    for (var i = 0; i < slides.length; i++) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Picture " + (i + 1));
      (function (n) { dot.addEventListener("click", function () { go(n); }); })(i);
      dots.appendChild(dot);
    }
    var mark = function () {
      if (!track.clientWidth) return;   // not laid out yet (hidden tab / zero-width pane)
      var index = Math.round(track.scrollLeft / track.clientWidth);
      current = Math.max(0, Math.min(slides.length - 1, index));
      Array.prototype.forEach.call(dots.children, function (d, n) { d.setAttribute("aria-selected", String(n === current)); });
    };
    track.addEventListener("scroll", mark, { passive: true });
    document.querySelector(".carousel .prev").addEventListener("click", function () { go(current - 1); });
    document.querySelector(".carousel .next").addEventListener("click", function () { go(current + 1); });
    track.addEventListener("click", function (e) { if (e.target.tagName === "IMG") go(current + 1); });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); go(current + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(current - 1); }
    });
    window.addEventListener("resize", function () { track.scrollLeft = slides[current].offsetLeft - track.offsetLeft; mark(); });
    mark();
  }
})();

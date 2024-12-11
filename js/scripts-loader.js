// scripts-loader.js
const scripts = [
  "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
  "./js/footer.js",
  "./js/custom.js",
  "./js/bootstrap-submenu.js",
  "./js/aos.js",
  "./js/ready.js"
  
];

scripts.forEach(function(src) {
  let script;
  if (src.endsWith(".js")) {
    script = document.createElement("script");
    script.src = src;
  } else if (src.endsWith(".css")) {
    script = document.createElement("link");
    script.href = src;
    script.rel = "stylesheet";
  } else {
    return; // 跳過未知的文件類型
  }
  document.head.appendChild(script);
});

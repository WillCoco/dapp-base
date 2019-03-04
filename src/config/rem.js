(function(doc, win) {
  const docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      const clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      let max = 24;
      let min = 9.3125;
      let size = 20 * (clientWidth / 320);

      size = Math.min(size, max);
      size = Math.max(size, min);
      docEl.style.fontSize = size + 'px';
      console.log(docEl.style.fontSize, 'em= =====')
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

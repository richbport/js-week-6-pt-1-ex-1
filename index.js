function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.args(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

let scrollCount = 0;
function handleScroll() {
  scrollCount++;
  document.getElementById("scrollCount").textContent = scrollCount;
}
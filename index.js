// function throttle(func, limit) {
//     let inThrottle;
//     return function () {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => (inThrottle = false), limit);
//         }
//     };
// }

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    }
}

let scrollCount = 0;
function handleScroll() {
  scrollCount++;
  document.getElementById("scrollCount").textContent = scrollCount;
}

window.addEventListener("scroll", throttle(handleScroll, 200));
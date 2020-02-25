export default function scrollToTop() {
  const distance = document.documentElement.scrollTop || document.body.scrollTop;
    
  if (distance > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, distance - distance / 10);
  }
}
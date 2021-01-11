animate = () => {
    document.querySelectorAll('svg circle')
    .forEach((c,i) => c.setAttribute('cy', 50 + Math.sin(performance.now() / 1000 + i) * 25))
}
setInterval(animate,20);

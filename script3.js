const features = document.querySelectorAll('.feature');
const menu = document.querySelector('.menu');

features.forEach(feature => {
  feature.addEventListener('click', () => {
    const isActive = feature.classList.contains('active');
  
    if (!isActive) {
      document.querySelectorAll('.circle').forEach(circle => circle.classList.remove('active'));
      document.querySelectorAll('.line').forEach(line => line.classList.remove('active'));
      document.querySelectorAll('.text').forEach(text => text.style.display = 'none');
      
      const circle = feature.querySelector('.circle');
      const line = feature.querySelector('.line');
      const text = feature.querySelector('.text');
      
      circle.classList.add('active');
      line.classList.add('active');
      
      setTimeout(() => {
        text.style.display = 'block';
      }, 400);
      
 }});
});

features.forEach(feature => {
  feature.addEventListener('click', () => {
    if (!feature.classList.contains('active')) { 
      document.querySelectorAll('.feature').forEach(item => {
        item.classList.remove('active');
        item.style.height = '36px';
      });

      feature.classList.add('active');

      function animateHeight(element, targetHeight, duration) {
        const startHeight = parseFloat(element.style.height) || 36;
        const startTime = performance.now();

        function updateHeight(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const newHeight = startHeight + (targetHeight - startHeight) * progress;
          element.style.height = newHeight + 'px';

          if (progress < 1) {
            requestAnimationFrame(updateHeight);
          }
        }

        requestAnimationFrame(updateHeight);
      }

      animateHeight(feature, 130, 400);
    }
  });
});
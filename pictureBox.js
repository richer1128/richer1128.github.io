const handleScroll = () => {
  const lineBox = document.querySelector('.lineBox');
  const boxPosition = lineBox.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const imgBox = lineBox.querySelector('.imgBox');
  const firstImg = imgBox.querySelector('img:first-child');
  const otherImgs = imgBox.querySelectorAll('img:not(:first-child)');

  if (boxPosition < windowHeight) {
    // 隱藏其他圖片
    otherImgs.forEach(img => img.style.display = 'none');

    // 顯示第一張圖片在第一個位置
    firstImg.style.display = 'block';
  } else {
    // 顯示其他圖片
    otherImgs.forEach(img => img.style.display = 'block');

    // 隱藏第一張圖片
    firstImg.style.display = 'none';
  }
};
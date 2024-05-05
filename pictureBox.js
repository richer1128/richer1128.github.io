document.addEventListener("DOMContentLoaded", function() {
    // 等待DOM加載完成後執行
  
    // 獲取第一張圖片元素
    const firstImage = document.getElementById("firstImage");

      // 獲取LOGO元素
      const logo = document.querySelector('.logo');
  
      // 滾動到LOGO元素
      window.scrollTo({
          top: logo.offsetTop,
          behavior: 'smooth'
      });
  });
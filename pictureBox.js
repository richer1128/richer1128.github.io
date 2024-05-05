document.addEventListener("DOMContentLoaded", function() {
    // 等待DOM加載完成後執行
  
    // 獲取第一張圖片元素
    const firstImage = document.getElementById("firstImage");
  
    // 滾動到第一張圖片
    firstImage.scrollIntoView({ behavior: "smooth" });
  });
document.addEventListener("DOMContentLoaded", function() {
    const serviceTitles = document.querySelectorAll(".accordion-button");
  
    serviceTitles.forEach(function(title) {
      title.addEventListener("click", function() {
        this.classList.toggle("active");
      });
    });
  });
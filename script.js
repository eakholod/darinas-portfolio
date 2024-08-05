function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }
  function handleResize() {
    var menu = document.getElementById("dropdownMenu");
    if (window.innerWidth > 1023) {
      menu.style.display = "none";
    }
  }

  window.addEventListener("resize", handleResize);

  window.onload = function () {
    var menu = document.getElementById("dropdownMenu");
    menu.style.display = "none";
  };
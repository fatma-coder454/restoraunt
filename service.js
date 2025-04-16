window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// nav bar
function toggleMenu() {
    const navList = document.querySelector(".nav-item ul");
    
    if (navList) {
        navList.classList.toggle("show");
    } else {
        console.error("⚠️ خطأ: القائمة غير موجودة في HTML، تأكدي من الكلاس.");
    }
}

// arrow
// زر السهم للأعلى
const scrollTopBtn = document.getElementById("scrollTopBtn");

// إظهار الزر عند التمرير للأسفل
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// عند النقر على الزر، يتم التمرير إلى الأعلى بسلاسة
scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
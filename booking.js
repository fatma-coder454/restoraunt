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





//  form validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const datetime = document.getElementById("datetime").value.trim();
    const people = document.getElementById("select1").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !datetime) {
        alert("Please fill in your name, email, and reservation date.");
        return;
    }

    console.log({
        name,
        email,
        datetime,
        people,
        message
    });

    alert("Your table has been successfully booked! 😊");

    this.reset();
});


//لتشغيل الفيديو
document.getElementById("playVideoBtn").addEventListener("click", function() {
    let videoUrl = this.getAttribute("data-src");
    window.open(videoUrl, "_blank"); 
});

function setActive(element, contentId) {
    let links = document.querySelectorAll('.menu-content a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // إضافة الفئة 'active' للرابط النشط
    element.classList.add('active');

    // إخفاء جميع الأقسام
    let contents = document.getElementsByClassName('content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // إظهار القسم النشط
    document.getElementById(contentId).classList.add('active');
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
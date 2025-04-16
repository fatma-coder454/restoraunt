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

// العنصر الأول: العد إلى 15
let counterElement1 = document.getElementById("counter1");
let finalNumber1 = parseInt(counterElement1.innerText);
let currentNumber1 = 1;

function updateCounter1() {
    if (currentNumber1 <= finalNumber1) {
        counterElement1.innerText = currentNumber1;
        currentNumber1++;
        setTimeout(updateCounter1, 100); 
    }
}

// العنصر الثاني: العد إلى 50
let counterElement2 = document.getElementById("counter2");
let finalNumber2 = parseInt(counterElement2.innerText);
let currentNumber2 = 1;

function updateCounter2() {
    if (currentNumber2 <= finalNumber2) {
        counterElement2.innerText = currentNumber2;
        currentNumber2++;
        setTimeout(updateCounter2, 30); 
    }
}
// بدء العد في كلا العنصرين
updateCounter1();
updateCounter2();

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


// Testimonial Section
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".test-main");
    let items = Array.from(document.querySelectorAll(".test-item"));
    const dotsContainer = document.getElementById("carousel-dots");

    let currentIndex = 0;
    let totalItems = items.length;
    let totalDots = 5;


    let itemsPerDot = Math.ceil(totalItems / totalDots);

    // Set the width of each item based on the number of items per dot
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalDots; i++) {
        let dot = document.createElement("div");
        dot.classList.add("owl-dot");
        dot.addEventListener("click", () => goToSlide(i * itemsPerDot));
        dotsContainer.appendChild(dot);
    }

    let dots = document.querySelectorAll(".owl-dot");
    if (dots.length > 0) dots[0].classList.add("active");

    function goToSlide(index) {
        let itemWidth = items[0].offsetWidth + 20;
        let newTransform = -index * itemWidth;

        slider.style.transition = "transform 2s ease-in-out";
        slider.style.transform = `translateX(${newTransform}px)`;

        dots.forEach(dot => dot.classList.remove("active"));
        let dotIndex = Math.floor(index / itemsPerDot);
        if (dots[dotIndex]) dots[dotIndex].classList.add("active");

        currentIndex = index;
    }

    function autoplay() {
        let nextIndex = currentIndex + itemsPerDot;
        if (nextIndex >= totalItems) nextIndex = 0;
        goToSlide(nextIndex);
    }

    setInterval(autoplay, 10000);
    goToSlide(0);
});


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


// animation
document.querySelectorAll('section').forEach(el => el.classList.add('hidden'));


const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

hiddenElements.forEach(el => observer.observe(el));

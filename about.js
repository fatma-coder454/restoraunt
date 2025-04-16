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
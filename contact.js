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

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // منع إرسال الـ form بشكل تقليدي

    // الحصول على قيم الحقول
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // التحقق من تعبئة الحقول
    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // تخزين البيانات في الـ localStorage
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // إذا كانت هناك بيانات سابقة، نقوم بإضافتها للمصفوفة
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(formData);

    // حفظ البيانات في الـ localStorage
    localStorage.setItem('messages', JSON.stringify(messages));

    alert('Message sent successfully!');
    
    // إعادة تعيين الـ form بعد الإرسال
    document.getElementById('contact-form').reset();
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
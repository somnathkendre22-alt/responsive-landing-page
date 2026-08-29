// मोबाईल मेनू टॉगल करण्यासाठी
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// बटण क्लिक केल्यावर मेसेज दाखवण्यासाठी
function showAlert() {
    alert("हेलो! तुमची वेबसाइट यशस्वीरित्या तयार झाली आहे.");
}

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
const htmlEl = document.documentElement;
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
const mobileLinks = mobileMenu.getElementsByTagName('a');
for (let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}
const toggleTheme = () => {
    htmlEl.classList.toggle('dark');
    htmlEl.classList.toggle('light');
    if (htmlEl.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};
themeToggleBtn.addEventListener('click', toggleTheme);
themeToggleBtnMobile.addEventListener('click', toggleTheme);
// Check for saved theme preference
if (localStorage.getItem('theme') === 'light') {
    htmlEl.classList.remove('dark');
    htmlEl.classList.add('light');
} else {
    htmlEl.classList.remove('light');
    htmlEl.classList.add('dark');
}
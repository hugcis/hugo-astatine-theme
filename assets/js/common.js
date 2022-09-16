function updateMode() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}
function toggleMode() {
    if (localStorage.theme === 'dark') {
        // Whenever the user explicitly chooses light mode
        localStorage.theme = 'light';
    }
    else {
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark';
    }
    updateMode()
}
window.onload = updateMode();
function toggleMenu() {
    let navbar = document.getElementById("navbar-default");
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
    }
    else {
        navbar.classList.add("hidden");
    }
}

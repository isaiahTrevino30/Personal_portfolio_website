function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
/* The menu constant variable targets the following from index.html file: 
<div class="menu-links">
    <li> <a href="#about" onclick="toggleMenu()">About</a> </li>
    <li> <a href="#experience" onclick="toggleMenu()">Experience</a> </li> 
    <li> <a href="#projects" onclick="toggleMenu()">Projects</a> </li> 
    <li> <a href="#contact" onclick="toggleMenu()">Contact</a> </li> 
</div>
*/
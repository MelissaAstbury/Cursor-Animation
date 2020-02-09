let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li');

const cursor = (e) => {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    // console.log(`Y = ${e.pageY} X = ${e.pageX}`);
}

window.addEventListener('mousemove', cursor);

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add("nav-links-color"),
            mouseCursor.classList.add("link-grow");
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove("nav-links-color"),
            mouseCursor.classList.remove("link-grow");
    })
});



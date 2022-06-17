const contents = document.querySelectorAll('.content');

window.addEventListener('scroll', changePlace)

changePlace()

function changePlace(){
    const triggerBottom = window.innerHeight / 5 * 4

    contents.forEach(content => {
        const boxTop = content.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            content.classList.add('come')
        } else {
            content.classList.remove('come')
        }
    })
}
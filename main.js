const navopen = document.getElementById('open')
const navclose = document.getElementById('close')
const navlink = document.getElementsByClassName('navlink')
const menu = document.getElementsByClassName('menu')


navopen.addEventListener('click', () => {
    
})


navclose.addEventListener('click', () => {
    menu.style.right = '-100%'
})

navlink.forEach((x) => {
    x.addEventListener('click', () => {
        menu.style.right = '-100%';
        })
})
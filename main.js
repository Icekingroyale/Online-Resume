const navopen = document.getElementById('open')
const navclose = document.getElementById('close')
const navlink = document.getElementsByClassName('navlink')[0]
const menu = document.getElementsByClassName('menulink')[0]
// console.log(menu)


navopen.addEventListener('click', () => {
    menu.style.display = 'block'
    navopen.style.display = 'none'
    navclose.style.display = 'block'
})


navclose.addEventListener('click', () => {
    menu.style.display = 'none'
    navopen.style.display = 'block'
    navclose.style.display = 'none'
})


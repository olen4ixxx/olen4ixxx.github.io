// alert('Продолжая использовать данный сайт, вы соглашаетесь, что я красавчик')
// alert('By continuing to use the site, you agree that I am а dreamboat')
// const links = document.getElementById('links')
//
// links.style.color = 'blue'
// links.style.textAlign = 'center'
// links.style.backgroundColor = 'yellow'
document.body.style.backgroundImage = "url('img/bg1.gif')"
document.body.style.backgroundSize = "cover"
// document.body.style.backgroundSize = `${window.innerHeight/718*120}%`
document.body.style.backgroundRepeat = no-repeat
// let percentage = window.innerHeight/718
function detectMob() {
    return ((window.innerWidth < window.innerHeight))
}
if (detectMob()){
    document.body.style.backgroundImage = "url('img/bg1.gif')"
    document.body.style.backgroundSize = `${window.innerHeight/718*120}%`
    document.body.style.backgroundRepeat = no-repeat
}
// let detect = new MobileDetect(window.navigator.userAgent)
// console.log("Mobile: " + detect.mobile());       // телефон или планшет
// console.log(typeof detect.mobile())


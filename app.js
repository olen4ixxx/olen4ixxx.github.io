// alert('Продолжая использовать данный сайт, вы соглашаетесь, что я красавчик')
// alert('By continuing to use the site, you agree that I am а dreamboat')
// const links = document.getElementById('links')
//
// links.style.color = 'blue'
// links.style.textAlign = 'center'
// links.style.backgroundColor = 'yellow'
document.body.style.backgroundImage = "url('img/bg1.gif')"
function detectMob() {
    return ((window.innerWidth < window.innerHeight));
}
if (detectMob()){
    document.body.style.backgroundImage = "url('img/bg2.gif')"
    // document.body.style.backgroundSize = 400%
}
let detect = new MobileDetect(window.navigator.userAgent)
console.log("Mobile: " + detect.mobile());       // телефон или планшет
console.log(typeof detect.mobile())


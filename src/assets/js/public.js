let vw = document.documentElement.clientWidth
let oHtml = document.getElementsByTagName('html')[0]
vw = vw > 3840 ? 3840 : vw
oHtml.style.fontSize = vw / 16 + 'px'

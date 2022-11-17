const rubl=document.querySelector('.rubl')
const dollar=document.querySelector('.dollar')
const euro=document.querySelector('.euro')
const gbp=document.querySelector('.gbp')
const rubl2=document.querySelector('.rubl2')
const dollar2=document.querySelector('.dollar2')
const euro2=document.querySelector('.euro2')
const gbp2=document.querySelector('.gbp2')
const exchange1=document.querySelector('.exchange1')
const exchange2=document.querySelector('.exchange2')

rubl.addEventListener('click',hey)
function hey(e){
    e.target.classList.toggle('change')
    gbp.classList.remove('change')
    euro.classList.remove('change')
    dollar.classList.remove('change')
}

dollar.addEventListener('click',hey2)
function hey2(e){
    e.target.classList.toggle('change')
    gbp.classList.remove('change')
    euro.classList.remove('change')
    dollar.classList.remove('change')
}

gbp.addEventListener('click',hey3)
function hey3(e){
    e.target.classList.toggle('change')
    gbp.classList.remove('change')
    euro.classList.remove('change')
    dollar.classList.remove('change')
}
euro.addEventListener('click',hey4)
function hey4(e){
    e.target.classList.toggle('change')
    gbp.classList.remove('change')
    euro.classList.remove('change')
    dollar.classList.remove('change')
}



rubl2.addEventListener('click',hi)
function hey(e){
    e.target.classList.toggle('change')
    gbp2.classList.remove('change')
    euro2.classList.remove('change')
    dollar2.classList.remove('change')
}

dollar2.addEventListener('click',hi2)
function hey2(e){
    e.target.classList.toggle('change')
    gbp2.classList.remove('change')
    euro2.classList.remove('change')
    dollar2.classList.remove('change')
}

gbp2.addEventListener('click',hi3)
function hey3(e){
    e.target.classList.toggle('change')
    gbp2.classList.remove('change')
    euro2.classList.remove('change')
    dollar2.classList.remove('change')
}
euro2.addEventListener('click',hi4)
function hey4(e){
    e.target.classList.toggle('change')
    gbp2.classList.remove('change')
    euro2.classList.remove('change')
    dollar2.classList.remove('change')
}

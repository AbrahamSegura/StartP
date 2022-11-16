//modules

//helpers
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

//
const container = $('#container')

const item = $$('.nav-item')
const acerca = $('.Acerca')
const niveles = $('.Niveles')
const requisitos = $('.Requisitos')
const descagar = item[3]

//offsetTop => altura de objeto
const extractorName = (elem) => JSON.stringify(elem.className.slice(12))

const names = ["Acerca", "Niveles", "Requisitos"]

const listOfNames = {
    Acerca: acerca,
    Niveles: niveles,
    Requisitos: requisitos
}
item.forEach(i => i.addEventListener('click', e => {
    const elem = e.srcElement.childNodes[0].data
    names.map(el => {
        if (el === elem) {
            console.log(listOfNames[elem].offsetTop)
            window.scroll({
                top: listOfNames[elem],
                left: 0,
                behavior: 'smooth'
            })
        }
    })
}))

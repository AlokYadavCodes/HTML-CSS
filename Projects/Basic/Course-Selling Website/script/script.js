const courseSearchBar=document.querySelector('#course-search-bar')
const mainSearchBar=document.querySelector('#main-search-bar')
const cards=Array.from(document.querySelectorAll('.card'))
const description=document.querySelectorAll('.course-descp')
courseSearchBar.addEventListener("input" ,()=>{
    const inputValue=courseSearchBar.value.toUpperCase()
    for(let i=0; i<description.length; i++){
        if(!description[i].innerText.toUpperCase().includes(inputValue)){
            cards[i].classList.add('hide')
        } else{
            cards[i].classList.remove('hide')
        }
    }
})

// const coursesTitle=cards.map((card)=>{
//     const innerText=card.querySelector('h3').innerText.toUpperCase()
//     return innerText
// })
const mainSearchArea=document.querySelector('.main-search-area')
const mainSearchElement=document.querySelector('#main-search-bar')
mainSearchElement.addEventListener('input', ()=>{
    mainSearchArea.innerHTML=''
    const inputText=mainSearchElement.value.toUpperCase()
    if(!inputText){
        mainSearchArea.classList.add('hide')
        return
    }
    mainSearchArea.classList.remove('hide')
    cards.forEach((card)=>{
        if(card.querySelector('h3').innerText.toUpperCase().includes(inputText) && inputText){
            mainSearchArea.innerHTML+=`<div class="search-item">${card.querySelector('h3').innerText.slice(0,-6)}</div>`
        }
    })
})

mainSearchBar.addEventListener('blur', ()=>{
    mainSearchArea.classList.add('hide')
})
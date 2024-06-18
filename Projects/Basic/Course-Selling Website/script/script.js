const inputElement=document.querySelector('#course-search-bar')
const cards=document.querySelectorAll('.card')
const description=document.querySelectorAll('.course-descp')
inputElement.addEventListener("input" ,()=>{
    const inputValue=inputElement.value.toUpperCase()
    for(let i=0; i<description.length; i++){
        if(!description[i].innerText.toUpperCase().includes(inputValue)){
            cards[i].classList.add('hide')
        } else{
            cards[i].classList.remove('hide')
        }
    }
})

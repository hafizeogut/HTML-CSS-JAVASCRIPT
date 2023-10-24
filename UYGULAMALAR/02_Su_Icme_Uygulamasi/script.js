//değişmeeycek değişkenler
const liters = document.getElementById('listers')
const pertecentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

const smallCups = document.querySelectorAll('.cup-small')

smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',() =>highlightBigCups(idx))

})

function highlightBigCups(idx){
    if(idx===7 && smallCups[idx].classList.contains('full'))idx--;//küçük kaplarınn listesi full ise 

    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains)
    updateBigCups()
    
}


function updateBigCups(){

}


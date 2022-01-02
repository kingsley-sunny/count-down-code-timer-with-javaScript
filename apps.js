const number = document.querySelector('#number')
const addCount = document.querySelector('#addCount')
const lowerCount = document.querySelector('#lowerCount')

let newNum = 0


addCount.addEventListener('click', increaseCount)
lowerCount.addEventListener('click', decreaseCount)

function increaseCount(e){
    newNum+=1
    number.textContent = newNum
    if(number.textContent > 0){
        number.animate([{opacity:'0',}, {opacity:'1'}], {duration:250})
        number.style.color = 'green'
    } else if(number.textContent == 0){
        number.animate([{opacity:'0'},{opacity:'1'}], {duration:250})
        number.style.color = 'white'
    } else if(number.textContent < 0){
        number.animate([{opacity:'0'},{opacity:'1'}], {duration:250})
        number.style.color = 'red'
    }
}

function decreaseCount(e){
    newNum-=1 
    number.textContent = newNum
    if(number.textContent < 0){
        number.animate([{opacity:'0',}, {opacity:'1'}], {duration:250})
        number.style.color = 'red'
    } else if(number.textContent == 0){
        number.animate([{opacity:'0'},{opacity:'1'}], {duration:250})
        number.style.color = 'white'
    } else if(number.textContent > 0){
        number.animate([{opacity:'0'},{opacity:'1'}], {duration:250})
        number.style.color = 'green'
    }
}




const submit = document.querySelector('#submit');
const isCorrect = document.createElement('p');
const expression = document.querySelector('#expression');
const answer = document.querySelector('#answer')

const checkOperation = () => {

    const num1 = Math.floor(Math.random()*100+1);
    const num2 = Math.floor(Math.random()*9+1);
    let res;
    operation = Math.floor(Math.random()*3+1);
    
    if(operation === 1){            
        res = num1 + num2;
        expression.innerHTML = `${num1} + ${num2} = `;

    } else if(operation === 2 ) {   
        res = num1 - num2;
        expression.innerHTML = `${num1} - ${num2} = `;

    } else if (operation === 3) {  
        res = num1 * num2;
        expression.innerHTML = `${num1} * ${num2} = `;
 
    }   else {
            res = (num1 / num2).toFixed(2);
            expression.innerHTML = `${num1} / ${num2} = `;
    } 

    return parseInt(res);
}

let res = checkOperation()



submit.addEventListener('click', (e) => {

    e.preventDefault();
    
    if (parseInt(answer.value) == res){

        isCorrect.innerHTML = `${res} is correct!`
        answer.value = '';
        res = checkOperation()
       

    } else {

        isCorrect.innerHTML = (`Wrong, try again!`);   
        answer.style.backgroundColor = '#E35331';
        answer.style.color = '#EAF5FA';
    }

    document.querySelector('#result').appendChild(isCorrect);    
})

answer.addEventListener('input', () => {
    answer.style.backgroundColor = '#EBF8FF';
    answer.style.color = '#002233';
})


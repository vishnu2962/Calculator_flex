const btn = document.querySelectorAll('.btn-for');
const btn_AC = document.querySelector('.btn-AC');
const backSpace = document.querySelector('.btn-clear');
const equal = document.querySelector('.equal');
const div = document.querySelector('.screen');
const neg = document.querySelector('.btn-neg');

 exp = '';
 filter = ['+','-','÷','X'];

btn.forEach((button)=> {

    button.addEventListener('click',function(e) {
        let value = e.target.getAttribute('data-value');
        //let div = document.querySelector('.screen');

        // avoiding operators side by side occurence
        if (exp != '') {
            if (filter.includes(exp.slice(-1)) && filter.includes(value)){
                return value = '';
            }
        }

        // Eliminating the 0 value at index 0

        if (exp === '0' && !'+-X÷'.includes(value) ){
            exp = value;
            div.innerHTML = exp;
            console.log(exp);
        }
        else{
            exp +=value;
            div.innerHTML = exp;

        }
        
    })
});

neg.addEventListener('click', ()=>{

    if (exp != '') {
        exp = '('+'-'+exp+')';
    div.innerHTML = exp;
    }else{
        div.innerHTML='';
    }    
})

equal.addEventListener('click', ()=>{
    
    // replace the X => * and ÷ => /
    exp = exp.replace(/X/g, '*').replace(/÷/g,'/');

    try{
        if (exp != '') {
            //let div = document.querySelector('.screen');
        let result = eval(exp);
        console.log(result);
        exp = result;
        div.innerHTML = exp;
        exp = div.innerHTML;
        console.log(exp);
        }
        else {
            //let div = document.querySelector('.screen');
            div.innerHTML = '';
            exp = div.innerHTML;
        }
        
    }
    catch{
        //let div = document.querySelector('.screen');
        div.innerHTML = "Error";
        exp = '';
    }
});

btn_AC.addEventListener('click',function(){
    //let div = document.querySelector('.screen');
    exp = '';
    div.innerHTML = '';
});

backSpace.addEventListener('click', ()=>{
    //let div = document.querySelector('.screen');
    exp = exp.slice(0,-1);
    div.innerHTML = exp;
});



// Another approach for avoiding operators side by side occurence

// operator.forEach((op) => {
//     op.addEventListener('click', (e)=> {
//         let operator = e.target.getAttribute('data-value');

//         if (exp != '' && !"+-÷X".includes(exp.slice(-1))) {
//             exp +=operator;
//         }
        
//     })
// });

// hard coding  in these for every atcion i need to assign value manually so it is not preffered. replace this using data-value attribute and use forEach loop to assign value to each button.

// btn1.addEventListener('click',function(e){
    
//     let value = 1;
//     let value1 = e.target.getAttribute('data-value');
//     let div = document.querySelector('.screen');
//     div.innerHTML += value1;

// })
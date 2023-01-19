const screen=document.querySelector('.screen');

const clear=document.querySelector('.clear');
const clear_all=document.querySelector('.clear-all');
const sign_change=document.querySelector('.sign-change');

const num_list=document.querySelectorAll('.num');
const decimal=document.querySelector('.decimal');
const equal_to=document.querySelector('.equal-to');

const add=document.querySelector('.add');
const subtract=document.querySelector('.subtract');
const multiply=document.querySelector('.multiply');
const divide=document.querySelector('.divide');

let cl_flag,operand='',disp='',n1,n2,n3,decimal_count=0,equal_count=1;

//op-denotes the operator pressed
//n1- used to store the first operand in case of all operators.
//n2-used to store the second operand in case of addition and subtraction.
//n3 - used to store the second operand in case of multiplication and division.
//cl_flag indicates the block of code which was executed just before the current block of code is executed.
//decimal_count ensures that a decimal button responds only once when pressed simultaneously.
//equal_count ensures the calculator displays a new set of number if we press any number right after pressing the equal_to button.

num_list.forEach((num)=> {
    num.addEventListener('click',(e)=> {
        if(!op||(op && equal_count=='s')){
            cl_flag='i';
            disp+=e.target.textContent;
            screen.textContent=disp;
            n1=Number(disp);
            n2=0;
            n3=1;
        }
        else {
            if(op=='+'){
                disp+=e.target.textContent;
                n2=Number(disp);
                cl_flag='+wp'            //+wp-added numbers after pressing +
                equal_count=0;
                screen.textContent=n2;
                
           
            }
            else if(op=='-'){
                disp+=e.target.textContent;
                n2=Number(disp);
                cl_flag='-wp';          //-wp-added numbers after pressing -
                equal_count=0;
                screen.textContent=n2;
                
            }
            else if(op=='*') {
                disp+=e.target.textContent;
                n3=Number(disp);
                cl_flag='*wp';          //*wp-added numbers after pressing *
                equal_count=0;
                screen.textContent=n3;
                
            }
            else if(op=='/') {
                disp+=e.target.textContent;
                n3=Number(disp);
                cl_flag='/wp';          // /wp-added numbers after pressing /
                equal_count=0;
                screen.textContent=n3;
               
            }
        }
    })

})

//The + operator
add.addEventListener('click',()=> {
    equal_count=1;
    switch(op) {
        case '-':
            cl_flag='+p';             
            op='+';
            decimal_count=0;
            difference();
            break;

        case '*':
            cl_flag='+p';           
            op='+';
            decimal_count=0;
            product();
            break;

        case '/':
                cl_flag='+p';          
                op='+';
                decimal_count=0;
                qoutient();
                break;

        default:
            cl_flag='+p';            //+p-pressed a + operator and not anything afterwards
            op='+';
            decimal_count=0;
            sum();
        }
    })

function sum() {
        n1+=n2;
        n1=Math.floor(n1*1000)/1000;
        screen.textContent=n1;
        n2=0;
        n3=1;
        disp='';
     }

//The - operator
subtract.addEventListener('click',()=>{
    equal_count=1;
    switch(op) {
        case '+':
            cl_flag='-p';           
            op='-';
            decimal_count=0;
            sum();
            break;

        case '*':
            cl_flag='-p';           
            op='-';
            decimal_count=0;
            product();
            break;

        case '/':
            cl_flag='-p';           
            op='-';
            decimal_count=0;
            qoutient();
            break;

        default:
            cl_flag='-p';            //-p- pressed a - operator and not anything afterwards
            op='-';
            decimal_count=0;
            difference();
        }
    })

    function difference() {
        n1-=n2;
        n1=Math.floor(n1*1000)/1000;
        screen.textContent=n1;
        n2=0;
        n3=1;
        disp='';
     }
    
//The * operator
multiply.addEventListener('click',()=> {
    equal_count=1;
    switch(op) {
        case '+' :
            cl_flag='*p';            
            op='*';
            decimal_count=0;
            sum()
            break;

        case '-' :
            cl_flag='*p';            
            op='*';
            decimal_count=0;
            difference();
            break;

        case '/' :
            cl_flag='*p';           
            op='*';
            decimal_count=0;
            qoutient();
            break;

        default:
            cl_flag='*p';           //*p - pressed a * operator and not anything afterwards
            op='*';
            decimal_count=0;
            product();
        }
})

function product() {
    n1*=n3;
    n1=Math.floor(n1*1000)/1000;
    screen.textContent=n1;
    n2=0;
    n3=1;
    disp='';
 }

//The / operator
divide.addEventListener('click',()=> {
    equal_count=1;
    switch(op){
        case '+':
            cl_flag='/p';            
            op='/';
            decimal_count=0;
            sum();
            break;

        case '-' :
            cl_flag='/p';            
            op='/';
            decimal_count=0;
            difference();
            break;

        case '*' :
            cl_flag='/p';           
            op='/';
            decimal_count=0;
            product();
            break;

        default: {
            cl_flag='/p';           //  /p - pressed a / operator and not anything afterwards
            op='/';
            decimal_count=0;
            qoutient();
    }
    }
})

function qoutient() {
    if(n3==0) {
        alert('Invalid operation');
        window.location.reload();
    }
    else {
    n1/=n3;
    n1=Math.floor(n1*1000)/1000;
    screen.textContent=n1;
    n2=0;
    n3=1;
    disp='';
}
 }

 //The decimal button
 decimal.addEventListener('click', ()=>{
    decimal_count+=1;
    if(decimal_count==1){
    if(!screen.textContent) {
        decimal_count=0;
        return;
    }
    else if(cl_flag=='+p'||cl_flag=='-p'||cl_flag=='*p'||cl_flag=='/p'){
        decimal_count=0;
        return;
    }
    else if(cl_flag=='i'){
        disp+='.';
        screen.textContent=disp;
        n1=Number(disp);
        n2=0;
        n3=1;
    }
    else if(cl_flag=='+wp'||cl_flag=='-wp'){
        disp+='.';
        n2=Number(disp);
        screen.textContent=disp;
    }
    else if(cl_flag=='*wp'||cl_flag=='/wp'){
        disp+='.';
        n3=Number(disp);
        screen.textContent=disp;
    }
}
    else return;
})

//sign-change button
sign_change.addEventListener('click', ()=> {
    if(!screen.textContent) return;
    else if(cl_flag=='i') {
        n1*=-1;
        disp=n1;
        n2=0,
        n3=1;
        screen.textContent=disp;
    }
    else if(cl_flag=='+p'||cl_flag=='-p'||cl_flag=='*p'||cl_flag=='/p') return ;
    else if(cl_flag=='+wp'||cl_flag=='-wp'){
        n2*=-1;
        disp=n2;
        screen.textContent=n2;
    }
    else if(cl_flag=='*wp'||cl_flag=='/wp'){
        n3*=-1;
        disp=n3;
        screen.textContent=n3;
    }
})


//clear
clear.addEventListener('click',()=> {
    if(!screen.textContent) return;
    else if(cl_flag=='i'){
        let arr=disp.split('');
        let n=arr.pop();
        if(n=='.'){
            decimal_count=0;
        }
        disp=arr.join('');
        screen.textContent=disp;
        n1=Number(disp);
    }
    else if(cl_flag=='+p'||cl_flag=='-p'||cl_flag=='*p'||cl_flag=='/p') return ;
    else if(cl_flag=='+wp'||cl_flag=='-wp'){
        let arr=disp.split('');
        let n=arr.pop();
        if(n=='.'){
            decimal_count=0;
        }
        disp=arr.join('');
        screen.textContent=disp;
        n2=Number(disp);
    }
    else if(cl_flag=='*wp'||cl_flag=='/wp'){
        let arr=disp.split('');
        let n=arr.pop();
        if(n=='.'){
            decimal_count=0;
        }
        disp=arr.join('');
        screen.textContent=disp;
        n3=Number(disp);
    }
})

//equal_to button
equal_to.addEventListener('click',()=> {
    equal_count+=1;
    if(equal_count==1){
    if(!screen.textContent) {
        return;
    }
    else if(cl_flag=='i'||cl_flag=='+p'||cl_flag=='-p'||cl_flag=='*p'||cl_flag=='/p') {
        return;
    }
    else {
        switch(cl_flag){
            case '+wp':          
                op='+';
                decimal_count=0;
                equal_count='s';            //s-start over
                sum();
               
                break;

            case '-wp':
                op='-';
                decimal_count=0;
                equal_count='s';            //s-start over
                difference();
              
                break;

            case '*wp':
                op='*';
                decimal_count=0;
                equal_count='s';            //s-start over
                product();
              
                break;

            case '/wp':
                {
                    op='/';
                    decimal_count=0;
                    equal_count='s';  
                    qoutient();
                break;
        }
    }
}
}
    else return;
})

// clear_all button
clear_all.addEventListener('click',()=> {
    window.location.reload();
})

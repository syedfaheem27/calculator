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


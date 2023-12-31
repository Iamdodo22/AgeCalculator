"use strict";

// input 
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const dInvalid = document.querySelector('.d-invalid')
const mInvalid = document.querySelector('.m-invalid')
const yInvalid = document.querySelector('.y-invalid')
const label = document.querySelectorAll('.label')

const input = [dayInput, monthInput, yearInput]
const small = [dInvalid, mInvalid, yInvalid]

dayInput.addEventListener('input', (e)=>{
    if(dayInput.value > 31){
        dInvalid.textContent='not a valid date'
          for(let i=0; i<input.length; i++){
            input[i].style.borderColor='hsl(0, 100%, 67%)'
            label.forEach((e)=>{
                        e.style.color='hsl(0, 100%, 67%)'})
                    
          }
          
    }
    else if (dayInput.value === ''){
        dInvalid.textContent='this field is required'
        for(let i=0; i<input.length; i++){
            input[i].style.borderColor='hsl(0, 100%, 67%)'
            label.forEach((e)=>{
                        e.style.color='hsl(0, 100%, 67%)'})
                    
          }

    }
    else{
        dInvalid.textContent=''
        dayInput.style.borderColor=''
        for(let i=0; i<input.length; i++){
            input[i].style.borderColor=''
            label.forEach((e)=>{
                        e.style.color=''})
                    
          }

    }
    return;
})

monthInput.addEventListener('input', (e)=>{
    if(monthInput.value > 12){
        mInvalid.textContent='not a valid date'
        for(let i=0; i<input.length; i++){
            input[i].style.borderColor='hsl(0, 100%, 67%)'
            label.forEach((e)=>{
                        e.style.color='hsl(0, 100%, 67%)'})
                    
          }
    }
    else if (monthInput.value === ''){
        mInvalid.textContent='this field is required'
        for(let i=0; i<input.length; i++){
            input[i].style.borderColor='hsl(0, 100%, 67%)'
            label.forEach((e)=>{
                        e.style.color='hsl(0, 100%, 67%)'})
                    
          }
    }
    else{
        mInvalid.textContent=''
        for(let i=0; i<input.length; i++){
            input[i].style.borderColor=''
            label.forEach((e)=>{
                        e.style.color=''})
                    
          }
    }
    return;
})

yearInput.addEventListener('input', (e)=>{
    if(yearInput.value > 2023){
        yInvalid.textContent='must be in the past'
        for(let i=0; i<input.length; i++){
            input[i].style.borderColor='hsl(0, 100%, 67%)'
            label.forEach((e)=>{
                        e.style.color='hsl(0, 100%, 67%)'})
                    
          }
    }
    else if (yearInput.value === ''){
        yInvalid.textContent='this field is required'
        for(let i=0; i<input.length; i++){
            input[i].style.borderColor='hsl(0, 100%, 67%)'
            label.forEach((e)=>{
                        e.style.color='hsl(0, 100%, 67%)'})
                    
          }
    }
    else{
        yInvalid.textContent=''
        for(let i=0; i<input.length; i++){
            input[i].style.borderColor=''
            label.forEach((e)=>{
                        e.style.color=''})
                    
          }
    }
    return;
})


// output
const icon = document.querySelector('.icon');
const spanDate = document.querySelector('.s-day')
const spanMonth = document.querySelector('.s-month')
const spanYear = document.querySelector('.s-year')

////////////////////////////////



icon.addEventListener('click', (e)=>{
    const date = Date.now()
    let userdate = new Date(yearInput.value,monthInput.value-1,dayInput.value);
    userdate = userdate.getTime()
   const ageCalc = new Date(date - userdate)
    const userYear = ageCalc.getFullYear() -1970;
    const userMonth = ageCalc.getMonth();
    const userDate = ageCalc.getDate() -1;
   
    if(e){
        e.target.style.backgroundColor='black'
        spanDate.textContent = userDate;
        spanMonth.textContent = userMonth;
        spanYear.textContent = userYear;
    }
    else{e.target.style.backgroundColor=''}
})
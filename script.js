"use strict";

const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const icon = document.querySelector('.icon');

const spanDate = document.querySelector('.s-day')
const spanMonth = document.querySelector('.s-month')
const spanYear = document.querySelector('.s-year')
const label = document.querySelectorAll('.label');


const inputs = [day, month, year];
const span = [spanDate, spanMonth, spanYear];

   function updateSpan(e) {
     for(let i =0; i<inputs.length; i++){
     if(inputs[i].value === " "){
        span[i].textContent ='--'
     }
     else{span[i].textContent = inputs[i].value}
   }
   if(day.value > 31){
    document.querySelector('.d-invalid').classList.remove('hidden')
   }else{document.querySelector('.d-invalid').classList.add('hidden')}

   if(month.value > 12){
    document.querySelector('.m-invalid').classList.remove('hidden')
   }else{document.querySelector('.m-invalid').classList.add('hidden');
   }

   if(year.value > 2023){
    document.querySelector('.y-invalid').classList.remove('hidden')
   }else{document.querySelector('.y-invalid').classList.add('hidden')
}

    if (day.value > 31 || month.value > 12 || year.value >2023){
          label.forEach((e)=>{
        e.style.color='hsl(0, 100%, 67%)'})
    }else{   label.forEach((e)=>{
        e.style.color='hsl(0, 1%, 44%)'
    })}
}
   
   window.addEventListener('DOMContentLoaded',()=>{

    inputs.map((e)=>{
        e.addEventListener('input', updateSpan);
        e.addEventListener('focus', (e)=>{
            e.target.classList.toggle('active')
            icon.style.backgroundColor='black'
        })
        e.addEventListener('blur', (e)=>{
            e.target.classList.toggle('active')
            icon.style.backgroundColor='hsl(259, 100%, 65%)'
        })
        
    
       })

   })
   

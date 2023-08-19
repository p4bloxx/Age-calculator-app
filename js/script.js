const date = new Date(); //function for manage Date
const currYears = date.getFullYear(); //return current year (format 2XXX)
const currMonth = date.getMonth() + 1; //return current month, adjusted with + 1
const currDay = date.getDate(); //return current day

//Components
const day = document.getElementById('day');
const month = document.getElementById('month');
const years = document.getElementById('years');

const labDay = document.getElementById('labDay');
const labMonth = document.getElementById('labMonth');
const labYears = document.getElementById('labYears');

const errDay = document.getElementById('errDay');
const errMonth = document.getElementById('errMonth');
const errYears = document.getElementById('errYears');

const subBtn = document.getElementById('submit-btn');
const arrow = document.getElementById('arrow');

const resYears = document.getElementById('resYears');
const resMonth = document.getElementById('resMonth');
const resDay = document.getElementById('resDay');
let form = document.getElementById('form');


// to calculate age with user's input values
function calcAge () {
  form.addEventListener('input', (e) => {
    if (e.target === day && day.value !== 0) {
       
      if(day.value.length < 1 || day.value.length > 2) {
        day.classList.add('active-inp');
        labDay.classList.add('active-lab');
        errDay.classList.add('active-err');
        resDay.innerText = '--';

      }  else {
        day.classList.remove('active-inp');
        labDay.classList.remove('active-lab');
        errDay.classList.remove('active-err');
        resDay.innerText = '--';
      } 
  
    }  else if (e.target === month && month.value !== 0) {
      
        if(month.value.length < 1 || month.value.length > 2) {
          month.classList.add('active-inp');
          labMonth.classList.add('active-lab');
          errMonth.classList.add('active-err');
          resMonth.innerText = '--';

        }  else {
          month.classList.remove('active-inp');
          labMonth.classList.remove('active-lab');
          errMonth.classList.remove('active-err');
          resMonth.innerText = '--';
        }
      
    } else if (e.target === years && years.value !== 0) {
  
        if (years.value > currYears) {
          years.classList.add('active-inp');
          labYears.classList.add('active-lab');
          errYears.classList.add('active-err');
          errYears.innerText = 'Must be in the past';
          resYears.innerText = '--';
          
        }  else {
          years.classList.remove('active-inp');
          labYears.classList.remove('active-lab');
          errYears.classList.remove('active-err');
        }
     }
     
  });

    let resultDay = day.value;
    let resultMonth = month.value;
    let resultYears = years.value;

    //check if year is Bisestile or not
    if (!(resultYears % 400 == 0 || resultYears % 4 == 0 && resultYears % 100 != 0) && resultMonth == 2 && resultDay == 29) {
      console.log('ciao a tutti')
      day.classList.add('active-inp');
      labDay.classList.add('active-lab');
      errDay.classList.add('active-err');
      errDay.innerText = 'Must be a valid day';

      resDay.innerText = '--';
      resMonth.innerText = '--';
      resYears.innerText = '--';
      
    } else {
      day.classList.remove('active-inp');
      labDay.classList.remove('active-lab');
      errDay.classList.remove('active-err');
    }

    //check if different parameters are respected

    //if input values are empty
    if(resultDay === '' && resultMonth === '' && resultYears === '') {

      day.classList.add('active-inp');
      labDay.classList.add('active-lab');
      errDay.classList.add('active-err');
      errDay.innerText = 'This field is required'

      month.classList.add('active-inp');
      labMonth.classList.add('active-lab');
      errMonth.classList.add('active-err');
      errMonth.innerText = 'This field is required'

      years.classList.add('active-inp');
      labYears.classList.add('active-lab');
      errYears.classList.add('active-err');
      errYears.innerText = 'This field is required'

      resDay.innerText = '--';
      resMonth.innerText = '--';
      resYears.innerText = '--';

      //if number of days are correctly
    } else if(resultDay == 0 || resultDay > 31) {

      day.classList.add('active-inp');
      labDay.classList.add('active-lab');
      errDay.classList.add('active-err');
      errDay.innerText = 'Must be a valid day'

      resDay.innerText = '--';

      //if number of months are correctly
    } else if (resultMonth > 12 || resultMonth == 0) {

      month.classList.add('active-inp');
      labMonth.classList.add('active-lab');
      errMonth.classList.add('active-err');
      errMonth.innerText = 'Must be a valid month'

      resDay.innerText = '--';
      resMonth.innerText = '--';
      resYears.innerText = '--';
    
      //if number of days are correctly with months' end 31
    } else if ((resultMonth == 4 || resultMonth == 6 || resultMonth == 9 || resultMonth == 11) && resultDay > 30) {

      day.classList.add('active-inp');
      labDay.classList.add('active-lab');
      errDay.classList.add('active-err');
      errDay.innerText = 'Must be a valid day';

      resDay.innerText = '--';
      resMonth.innerText = '--';
      resYears.innerText = '--';

      //if number of days are correctly february
    } else if (resultMonth == 2 && resultDay > 29) {

        day.classList.add('active-inp');
        labDay.classList.add('active-lab');
        errDay.classList.add('active-err');
        errDay.innerText = 'Must be a valid day';

        resDay.innerText = '--';
        resMonth.innerText = '--';
        resYears.innerText = '--';
      
    }  else if (resultYears.length !== 4 || resultYears == 0){

      years.classList.add('active-inp');
      labYears.classList.add('active-lab');
      errYears.classList.add('active-err');
      errYears.innerText = 'Must be a valid year'

      resDay.innerText = '--';
      resMonth.innerText = '--';
      resYears.innerText = '--';

      //differents calc to result the correct age 
    } else if (resultMonth > 0 && resultMonth <= currMonth && resultDay > 0 && resultDay <= currDay && resultYears > 0 && resultYears < currYears) {
      resDay.innerText = currDay - resultDay;
      resMonth.innerText = currMonth - resultMonth;
      resYears.innerText = currYears - resultYears;

    } else if (resultMonth > currMonth && resultDay < currDay) {
      resYears.innerText = currYears - resultYears -1;
      resMonth.innerText = (12 - (resultMonth - currMonth));
      resDay.innerText = currDay - resultDay;

    } else if (resultDay > currDay && resultMonth < currMonth) {
      resYears.innerText = currYears - resultYears;
      resMonth.innerText = (currMonth - resultMonth) - 1;
      resDay.innerText = 30 - (resultDay - currDay);

    } else if (resultDay > currDay && resultMonth > currMonth) {
      resYears.innerText = currYears - resultYears -1;
      resMonth.innerText = (12 - (resultMonth - currMonth)) -1;
      resDay.innerText = 30 - (resultDay - currDay);

    } else if (resultDay > currDay && resultMonth == currMonth) {
      resYears.innerText = currYears - resultYears -1;
      resMonth.innerText = 12 - (resultMonth - currMonth) - 1;
      resDay.innerText = 30 - (resultDay - currDay);

    } else if (resultDay == currDay && resultMonth > currMonth) {
      resYears.innerText = currYears - resultYears -1;
      resMonth.innerText = 12 - (resultMonth - currMonth);
      resDay.innerText = resultDay - currDay;

    } else {
      day.classList.remove('active-inp');
        labDay.classList.remove('active-lab');
        errDay.classList.remove('active-err');

        month.classList.remove('active-inp');
          labMonth.classList.remove('active-lab');
          errMonth.classList.remove('active-err');
           
          years.classList.remove('active-inp');
          labYears.classList.remove('active-lab');
          errYears.classList.remove('active-err');
    }
}

//event listener to start function that calc age
document.addEventListener('click', (e) => {
  if (e.target === subBtn || e.target === arrow) {
      calcAge();
    }  
});
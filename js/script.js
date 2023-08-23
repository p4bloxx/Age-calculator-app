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

//function to check if input values are correct
function checkInput () { 
  form.addEventListener('input', (e) => {
     
    //check if day'values are valid or empty
      if(day.value.length > 2 || day.value > 31) {
  
        day.classList.add('active-inp');
        labDay.classList.add('active-lab');
        errDay.classList.add('active-err');
        errDay.innerText = 'Must be a valid day';
        resDay.innerText = '--';

        checkDay = false;
        
      } else if (day.value < 1) {
        day.classList.add('active-inp');
        labDay.classList.add('active-lab');
        errDay.classList.add('active-err');
        errDay.innerText = 'This field is required';

        checkDay = false;
  
      }  else {
        day.classList.remove('active-inp');
        labDay.classList.remove('active-lab');
        errDay.classList.remove('active-err');

        checkDay = true;
      }
      
      //check if year is leap or not
      if (!(years.value % 400 == 0 || years.value % 4 == 0 && years.value % 100 != 0) && month.value == 2 && day.value == 29) {
  
        day.classList.add('active-inp');
        labDay.classList.add('active-lab');
        errDay.classList.add('active-err');
        errDay.innerText = 'Must be a valid day';

        resDay.innerText = '--';
        resMonth.innerText = '--';
        resYears.innerText = '--';

        checkDay = false;
  
        //check if year's value are more high than current year
      } else  if (years.value > currYears) {
        years.classList.add('active-inp');
        labYears.classList.add('active-lab');
        errYears.classList.add('active-err');
        errYears.innerText = 'Must be in the past';

        resYears.innerText = '--';
        checkYears = false
        
      } else if (years.value < 1) {
  
        years.classList.add('active-inp');
        labYears.classList.add('active-lab');
        errYears.classList.add('active-err');
        errYears.innerText = 'This field is required';
        checkYears = false
  
      }  else if (years.value.length !== 4) {
        years.classList.add('active-inp');
        labYears.classList.add('active-lab');
        errYears.classList.add('active-err');
        errYears.innerText = 'Must be a valid year';
        checkYears = false
  
        resYears.innerText = '--';
        resDay.innerText = '--';
        resMonth.innerText = '--';
  
      } else {
  
        years.classList.remove('active-inp');
        labYears.classList.remove('active-lab');
        errYears.classList.remove('active-err');

        checkYears = true;
      } 
  
      //check if number of month is correct
      if (month.value.length > 2) {
  
        month.classList.add('active-inp');
        labMonth.classList.add('active-lab');
        errMonth.classList.add('active-err');
        errMonth.innerText = 'Must be a valid month';
        checkMonth = false;
      }
      
      //particularly in february
      if (month.value == 2 && day.value > 29) {
  
        day.classList.add('active-inp');
        labDay.classList.add('active-lab');
        errDay.classList.add('active-err');

        resDay.innerText = '--';
        resMonth.innerText = '--';
        resYears.innerText = '--';

        checkDay = false;
      }
      
      //check if month with 31 days and day's value are correct
      if(((month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) && day.value > 30)) {
        
        day.classList.add('active-inp');
        labDay.classList.add('active-lab');
        errDay.classList.add('active-err');
        errDay.innerText = 'Must be a valid day';

        resDay.innerText = '--';
        resMonth.innerText = '--';
        resYears.innerText = '--';

        checkDay = false;
      }
      
      
      if ((years.value == currYears && month.value > currMonth) && (month.value.length < 3) ) {
  
        month.classList.add('active-inp');
        labMonth.classList.add('active-lab');
        errMonth.classList.add('active-err');
        errMonth.innerText = 'Must be a in the past';
        checkMonth = false;
  
        resYears.innerText = '--';
        resDay.innerText = '--';
        resMonth.innerText = '--';
  
       } else {
        month.classList.remove('active-inp');
        labMonth.classList.remove('active-lab');
        errMonth.classList.remove('active-err');

        checkMonth = true;
       }
  
       if (years.value == currYears && month.value >= currMonth && day.value > currDay && day.value.length < 3 ) {
  
        day.classList.add('active-inp');
        labDay.classList.add('active-lab');
        errDay.classList.add('active-err');
        errDay.innerText = 'Must be in the past';
        checkDay = false
  
        resYears.innerText = '--';
        resDay.innerText = '--';
        resMonth.innerText = '--';
       }
  
       //check if month's value are correct
       if (month.value.length > 2 || month.value > 12) {
        month.classList.add('active-inp');
        labMonth.classList.add('active-lab');
        errMonth.classList.add('active-err');
        errMonth.innerText = 'Must be a valid month'

        checkMonth = false
  
      } else if (month.value < 1){
        month.classList.add('active-inp');
        labMonth.classList.add('active-lab');
        errMonth.classList.add('active-err');
        errMonth.innerText = 'This field is required'

        checkMonth = false
      }
  }) 
}


//to start checking input values
checkInput();
let checkDay;
let checkMonth;
let checkYears;

//check if three input's value are total empty
function isEmpty() {
  if (day.value === '' && month.value === '' && years.value === '') {

    day.classList.add('active-inp');
    labDay.classList.add('active-lab');
    errDay.classList.add('active-err');
    errDay.innerText = 'This field is required';
  
    month.classList.add('active-inp');
    labMonth.classList.add('active-lab');
    errMonth.classList.add('active-err');
    errMonth.innerText = 'This field is required'
  
    years.classList.add('active-inp');
    labYears.classList.add('active-lab');
    errYears.classList.add('active-err');
    errYears.innerText = 'This field is required';
  
    resDay.innerText = '--';
    resMonth.innerText = '--';
    resYears.innerText = '--';
   }
}


// to calculate age with user's input values
function calcAge () {
  let resultDay = day.value;
  let resultMonth = month.value;
  let resultYears = years.value;


 if (resultMonth > 0 && resultMonth <= currMonth && resultDay > 0 && resultDay <= currDay && resultYears > 0 && resultYears < currYears) {
    resDay.innerText = currDay - resultDay;
    resMonth.innerText = currMonth - resultMonth;
    resYears.innerText = currYears - resultYears;

  }  else if (resultMonth > currMonth && resultDay < currDay) {
    resYears.innerText = currYears - resultYears -1;
    resMonth.innerText = (12 - (resultMonth - currMonth));
    resDay.innerText = currDay - resultDay;

  } else if (resultDay > currDay && resultMonth < currMonth && resultYears < currYears) {
    resYears.innerText = currYears - resultYears;
    resMonth.innerText = (currMonth - resultMonth) - 1;
    resDay.innerText = 30 - (resultDay - currDay);

  } else if (resultDay > currDay && resultMonth > currMonth) {
    resYears.innerText = currYears - resultYears -1;
    resMonth.innerText = (12 - (resultMonth - currMonth)) -1;
    resDay.innerText = 30 - (resultDay - currDay);

  } else if (resultDay > currDay && resultMonth >= currMonth) {
    resYears.innerText = currYears - resultYears -1;
    resMonth.innerText = 12 - (resultMonth - currMonth) - 1;
    resDay.innerText = 30 - (resultDay - currDay);

  } else if (resultDay == currDay && resultMonth > currMonth) {
    resYears.innerText = currYears - resultYears -1;
    resMonth.innerText = 12 - (resultMonth - currMonth);
    resDay.innerText = resultDay - currDay;

  } else if (resultYears == currYears && resultMonth == currMonth && resultDay <= currDay){
    resYears.innerText = resultYears - currYears;
    resMonth.innerText = resultMonth - currMonth;
    resDay.innerText = currDay - resultDay;

  } else if (resultYears == currYears && resultMonth < currMonth && resultDay < currDay) {
    resYears.innerText = resultYears - currYears;
    resMonth.innerText = currMonth - resultMonth;
    resDay.innerText = currDay - resultDay;

  } else if (resultYears == currYears && resultMonth < currMonth && resultDay > currDay && resultMonth < 12) {
    resYears.innerText = resultYears - currYears;
    resMonth.innerText = (currMonth - resultMonth) - 1;
    resDay.innerText = 30 - (resultDay - currDay);
  }
}



//event listener to start function that calc age
document.addEventListener('click', (e) => {
  if ((e.target === subBtn || e.target === arrow) && (checkDay === true && checkMonth === true && checkYears === true)) {
        calcAge();
    } else {
      isEmpty()
    }
});
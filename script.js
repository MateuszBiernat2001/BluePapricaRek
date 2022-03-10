const toggleBtn = document.querySelector('.toggle-button');
const menu = document.querySelector('ul')
const firstInput = document.querySelector('.first-input')
const secondInput = document.querySelector('.second-input')
const resultArea = document.querySelector('.result')

/*Menu*/ 
const toggleMenu = () => {
  menu.classList.toggle('active')
  toggleBtn.classList.toggle('active-menu')
}

toggleBtn.addEventListener('click', toggleMenu)

/*Result*/ 
const calculate = () => {
  const a = firstInput.value;
  const b = secondInput.value;

  let result;

  result = 12*(a*b - a*b/5)

  console.log(result)
  resultArea.innerHTML = `${result.toFixed(2)} zł`;
}

const checkInputs = () => {
  if(firstInput.value !== '' && secondInput.value !== ''){
    calculate();
  }else{
    resultArea.textContent = '...'
  }
}

firstInput.addEventListener('change' , checkInputs)
secondInput.addEventListener('change' , checkInputs)

document.getElementById('submit-btn').addEventListener('click', function () {
  let weight = document.getElementById('weight-input').value
  let height = document.getElementById('height-input').value

  let bmi = Math.round(weight / (height * height))

  document.getElementById('bmi').innerHTML = `Your BMI index is: ${bmi}`

  if (bmi < 18) {
    document.getElementById('bmi-cat').innerHTML = 'Underweight'
  } else if (bmi < 24.9) {
    document.getElementById('bmi-cat').innerHTML = 'Healthy Weight'
  } else if (bmi < 29.9) {
    document.getElementById('bmi-cat').innerHTML = 'Overweight'
  } else if (bmi < 34.9) {
    document.getElementById('bmi-cat').innerHTML = 'cat : Obesity Phase 1'
  } else if (bmi < 39.9) {
    document.getElementById('bmi-cat').innerHTML = 'Obesity Phase 2'
  } else if (bmi < 40) {
    document.getElementById('bmi-cat').innerHTML = 'Obesity Dangerous'
  }
})

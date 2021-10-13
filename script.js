const containerFizzBuzz = document.getElementById("container-fizzbuzz");

for (let i = 1; i <= 100; i++) {

  let number = i;
  let bgColor = "_bg-blue";
  console.log(i)

  if (i % 3 === 0 && i % 5 === 0) {
    number = "frizzbuzz";
    bgColor = "_bg-red";
  }
  else if (i % 3 === 0) {
    number = "frizz";
    bgColor = "_bg-green";
  }
  else if (i % 5 === 0) {
    number = "buzz";
    bgColor = "_bg-yellow";
  }



  containerFizzBuzz.innerHTML += `
  <div class="_col-7 g-4">
    <div class="ratio ratio-1x1 ${bgColor}">
        <h3 class="d-flex align-items-center justify-content-center">${number}</h3>
    </div>
  </div>
  `;
}
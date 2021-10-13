const ul = document.querySelector("ul.list");

for (let i = 1; i < 101; i++) {
    let element;
    let x = document.querySelector("li.box");
    console.log(i);
    if (i % 3 == 0) {

        x.classList.add("fizz");
        element = `<li class="box box${i}">Fizz</li>`;
        console.log("Fizz");
    }

    else if (i % 5 == 0) {
        element = `<li class="box box${i}">Buzz</li>`;
        console.log("Fuzz");
    }

    else if (i % 3 == 0 && i % 5 == 0) {
        element = `<li class="box box${i}">FizzBuzz</li>`;
    }

    else {
        element = `<li class="box box${i}">${i}</li>`;
        console.log("Else");
    }

    ul.innerHTML += element;
}




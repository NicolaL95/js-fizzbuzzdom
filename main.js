const ul = document.querySelector("ul.list");

for (let i = 1; i < 101; i++) {
    let element;
    console.log(i);

    if (i % 3 == 0 && (i % 5 == 0) == false) {
        element = `<li class="box box${i}">Fizz</li>`;
        console.log(`box${i}`)
        ul.innerHTML += element;
        let x = document.getElementsByClassName(`box${i}`)[0];
        x.classList.add("fizz")
    }

    else if (i % 5 == 0 && (i % 3 == 0) == false) {
        element = `<li class="box box${i}">Buzz</li>`;
        ul.innerHTML += element;
        let x = document.getElementsByClassName(`box${i}`)[0];
        x.classList.add("fuzz")
    }

    else if (i % 3 == 0 && i % 5 == 0) {
        element = `<li class="box box${i}">FizzBuzz</li>`;
        ul.innerHTML += element;
        let x = document.getElementsByClassName(`box${i}`)[0];
        x.classList.add("fizzfuzz")
    }

    else {
        element = `<li class="box box${i}">${i}</li>`;
        ul.innerHTML += element;
    }


}




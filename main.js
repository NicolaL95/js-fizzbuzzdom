const ul = document.querySelector("ul.list");

for (let i = 1; i < 101; i++) {
    const element = `<li class="box box${i}">${i}</li>`;

    if (i % 3 == 0) {
        let x = document.querySelector("li.box");
        x.classList.add()
    }

    else if (i % 5 == 0) {

    }

    else if (i % 3 == 0 && i % 5 == 0) {

    }

    else {

    }
    ul.innerHTML += element;
}




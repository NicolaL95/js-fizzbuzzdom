const ul = document.querySelector("ul.list");

for (let i = 1; i < 101; i++) {
    const element = `<li class="box box${i}">${i}</li>`;
    ul.innerHTML += element;
}




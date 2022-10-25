const ar = [
    { Name: "Ali" },
    { Name: "Reza" },
    { Name: "Ahmad" },
    { Name: "Kian" },
    { Name: "Maryam" },
    { Name: "Sadegh" },
    { Name: "Atefeh" },
    { Name: "Hadi" },
    { Name: "Habib" },
    { Name: "Asghar" },
    { Name: "Bahman" },
    { Name: "Shahbaz" },
    { Name: "Sattar" },
    { Name: "Shahriar" },
    { Name: "Hosein" },
    { Name: "Mansoor" },
    { Name: "Akbar" },
    { Name: "Hamzeh" },
    { Name: "Hesam" },
    { Name: "Ghasem" },
    { Name: "Ezat" },
    { Name: "Abbas" },
]
let curent = 0;
let nofp = 3;
const pagination = document.getElementById('pagination');
const list = document.getElementById('list');




let pages = Math.ceil(ar.length / nofp);

for (let index = 0; index < pages; index++) {
    const item = document.createElement('button');
    item.innerText = index + 1;
    pagination.appendChild(item);

    item.addEventListener('click', () => {
        list.innerHTML = "";
        for (let i = index * nofp; i <= ((index + 1) * nofp) - 1; i++) {
            const li = document.createElement('div');
            li.classList.add('item');
            li.innerHTML = ar[i].Name;
            list.append(li);
        }
    })
}
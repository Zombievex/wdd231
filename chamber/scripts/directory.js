const url = "data/members.json";

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();

    console.table(data.companies);

    createCompanyCards(data.companies);
}

getCompanyData();


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const companyList = document.querySelector("#company-list");

gridButton.addEventListener("click", () => {
    companyList.classList.remove("list-view");
    companyList.classList.add("grid-view");
});

listButton.addEventListener("click", () => {
    companyList.classList.remove("grid-view");
    companyList.classList.add("list-view");
});


function createCompanyCards(companies) {
    const companyList = document.querySelector("#company-list");
    companyList.innerHTML = "";

    companies.forEach(company => {
        const card = document.createElement("section");
        card.classList.add("company");

        const header = document.createElement("div");
        header.classList.add("company-header");

        const name = document.createElement("h2");
        name.textContent = company.name;

        const tagline = document.createElement("p");
        tagline.textContent = company.description;

        header.appendChild(name);
        header.appendChild(tagline);

        const body = document.createElement("div");
        body.classList.add("company-body");

        const img = document.createElement("img");
        img.src = `images/${company.image}`;
        img.alt = company.name;
        img.loading = "lazy";

        const info = document.createElement("div");
        info.classList.add("company-info");

        const address = document.createElement("p");
        address.textContent = company.address;

        const phone = document.createElement("p");
        phone.textContent = company.phone;

        const website = document.createElement("a");
        website.textContent = "Visit Website";
        website.href = company.website;

        header.appendChild(name);
        header.appendChild(tagline);

        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(website);

        body.appendChild(img);
        body.appendChild(info);

        card.appendChild(header);
        card.appendChild(body);

        companyList.appendChild(card);
    });
}
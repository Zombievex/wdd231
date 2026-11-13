const spotlightPopup = document.querySelector("#spotlight");
const spotlightList = document.querySelector("#spotlight-list");
const closeSpotlight = document.querySelector("#close-spotlight");

async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Could not load businesses");
        }

        const data = await response.json();

        // Only Gold and Silver businesses
        const eligible = data.companies.filter(company =>
    company.membership === 2 || company.membership === 3
);

        // Randomize their order
        eligible.sort(() => Math.random() - 0.5);

        // Select two businesses
        const selected = eligible.slice(0, 2);

        spotlightList.replaceChildren();

        selected.forEach(company => {
            const card = document.createElement("div");
            card.classList.add("spotlight-business");

            const name = document.createElement("h3");
            name.textContent = company.name;

            const description = document.createElement("p");
            description.textContent = company.description;

            const website = document.createElement("a");
            website.href = company.website;
            website.textContent = "Visit Website";
            website.target = "_blank";
            website.rel = "noopener noreferrer";

            const image = document.createElement("img");
            image.src = `images/${company.image}`;
		    image.setAttribute("alt", `${company.name}`);
		    image.setAttribute("loading", "lazy");

            const phone = document.createElement("p");
            phone.textContent = company.phone;

            const address = document.createElement("p");
            address.textContent = company.address;

            const membership = document.createElement("p");
            if (company.membership === 2){
                membership.textContent = "Silver Member"
            };
            if (company.membership === 3){
                membership.textContent = "GOLD Member"
            };

            card.append(image, membership, name, description, phone, address, website);
            spotlightList.appendChild(card);
        });

        if (selected.length > 0) {
            spotlightPopup.showModal();
        }

    } catch (error) {
        console.error(error);
    }
}

closeSpotlight.addEventListener("click", () => {
    spotlightPopup.close();
});

loadSpotlights();
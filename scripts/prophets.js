const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);

    const data = await response.json();
    console.table(data.prophets);

    displayProphets(data.prophets);
}

getProphetData()



function displayProphets(prophets){
    cards.innerHTML = "";
	prophets.forEach(prophet => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let img = document.createElement("img");

		name.textContent = prophet.name;
		img.setAttribute("src", prophet.imageurl);
		img.setAttribute("alt", `${prophet.name}`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(img);

        cards.appendChild(card);
    });
}

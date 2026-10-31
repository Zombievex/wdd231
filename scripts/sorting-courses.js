const courses = [
    { name: "WDD 130", type: "WDD", credits: 2 },
    { name: "WDD 131", type: "WDD", credits: 2 },
    { name: "WDD 231", type: "WDD", credits: 2 },
    { name: "CSE 110", type: "CSE", credits: 2 },
    { name: "CSE 111", type: "CSE", credits: 2 },
];

createCourseCards(courses);

document.querySelector("#all").addEventListener("click", () => {
    createCourseCards(courses);
});

document.querySelector("#cse").addEventListener("click", () => {
    const filtered = courses.filter(course => course.type === "CSE");
    createCourseCards(filtered);
});

document.querySelector("#wdd").addEventListener("click", () => {
    const filtered = courses.filter(course => course.type === "WDD");
    createCourseCards(filtered);
});

function createCourseCards(filter){

	document.querySelector("#course-list").innerHTML = "";
	filter.forEach(course  => {
		const card = document.createElement("div");

        card.classList.add("course");
        card.textContent = course.name;

		document.querySelector("#course-list").appendChild(card);
    });
}
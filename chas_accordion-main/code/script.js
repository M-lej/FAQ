// A function that adds and remove the class "active" on the section you click on.

function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");
const accordionElement = document.querySelector(".accordion");
section1Element.addEventListener("click", toggle);
section2Element.addEventListener("click", toggle);
section3Element.addEventListener("click", toggle);

async function myJson() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const faq = await response.json();

  for (let index = 0; index < faq.length; index++) {
    const element = faq[index];
    console.log(element);
  }

  faq.forEach((post) => {
    const title = post.title;
    const body = post.body;

    let titleP = document.createElement("p");
    titleP.className = "question";
    titleP.addEventListener("click", toggle);

    let answerDiv = document.createElement("div");
    answerDiv.className = "answer";

    answerDiv.textContent = body;

    titleP.innerHTML = title;

    accordionElement.appendChild(titleP);
    accordionElement.appendChild(answerDiv);
  });
}
myJson();

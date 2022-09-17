
console.dir(document);
console.dir(document.getElementById("main-heading"));
const mainheading = document.getElementById("main-heading");
console.log(mainheading);


const mainheading1 = document.querySelector("#main-heading")
console.log(mainheading1);

const header = document.querySelector(".header")
console.log(header);

const navitem = document.querySelectorAll(".nav-item")
console.log(navitem);

const mainheading0 = document.getElementById("main-heading");
console.log(mainheading0.textContent);

mainheading.textContent = "choose your tasks"
console.log(mainheading.textContent);
// inner text will not give you the hide words

const mainheading8 = document.querySelector("div.headline h2")
console.log(mainheading8);

const mainheading9 = document.querySelector("div.headline h2")
console.log(mainheading9.style);

mainheading.style.backgroundColor = "white";
mainheading.style.border = "10px solid white";

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

const inputelement = document.querySelector(".form-todo input");
console.log(inputelement.getAttribute("type"));

link.setAttribute("href", "https://ibighit.com")
console.log(link.getAttribute("href"));

const navitems = document.getElementsByClassName("nav-item");
console.log(navitem[0]);

const navitems0 = document.getElementsByClassName("nav-item");
console.log(typeof navitems0[0]);

const navitems1 = document.querySelectorAll(".nav-item");
console.log(navitems1);

const navitems9 = document.getElementsByClassName("nav-item");
for (let i = 0; i < navitems9.length; i++) {
    // console.log(navitems9[i]);}
    const navitem = navitems[i];
    navitem.style.backgroundColor = "#kendrick"
    navitem.style.color = "black";
    navitem.style.fontWeight = "bold";
}

const headline = document.querySelector(".headline");
console.log(headline.innerHTML);

const rootnode = document.getRootNode();
console.log(rootnode.childNodes);

const htmlelementnode = rootnode.childNodes[0];
console.log(htmlelementnode);

const htmlelementnode8 = rootnode.childNodes[0];
console.log(htmlelementnode8.childNodes);
console.log(htmlelementnode.nextSibling);


// const rootnode0 = document.getRootNode();
// const htmlelementnode = rootnode0.childNodes[0]
// const headelementnode = htmlelementnode.childNodes[0];
// const textnode1 = htmlelementnode.childNodes[1];
// const bodyelementnode = htmlelementnode.childNodes[2];
// console.log(textnode1);


const h1 = document.querySelector("h1");
// 
const div = h1.parentNode;
div.style.color = "efeff";
div.style.backgroundColor = "grey"

const body = h1.parentNode.parentNode;
body.style.color = "efeff";
body.style.backgroundColor = "grey"

const title = headline.querySelector("h2");
console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container)

const container0 = document.querySelector(".container");
console.log(container0.childNodes);

const sectiontodo = document.querySelector(".section-todo");
console.log(sectiontodo)

const sectiontodo0 = document.querySelector(".section-todo");
console.log(sectiontodo0.classList);

sectiontodo.classList.add('bg-dark');

const ans = sectiontodo.classList.contains("container");
console.log(ans);

const todolist = document.querySelector(".todo-list");
console.log(todolist);
// const todolist1 = document.querySelector(".todo-list");
// console.log(todolist1.innerHTML);
// todolist.innerHTML += "<li>new todo</li>";
// todolist.innerHTML += "<li>teach me</li>";

const newtodoitem = document.createElement("li");
console.log(newtodoitem);


// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li);

// const listitems = document.querySelectorAll(".todo-list li");
// const sixthli = document.createElement("li");
// sixthli.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// // const listitems = ul.getElementsByTagName("li");
// ul.append("sixthli");
// console.log(listitems);

// const sectiontodo = document.querySelector(".section-todo");
const info = sectiontodo.getBoundingClientRect();
console.log(info);


// const btn = document.querySelector(".btn-headline");
// // console.dir(btn)
// // btn.onclick = function(){
// //     console.log("you clicked me !!!!!1");
// // }
// function clickme(){
//     console.log("you clicked me")
// }
// btn.addEventListener("click",clickme )





const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", function () {
    console.log("you clicked me !!")
    console.log("value of this")
    console.log(this)
})

const allbuttons = document.querySelectorAll(".my-buttons button");
console.log(allbuttons.length);

allbuttons.forEach(button => {
    button.addEventListener("click", (e) => {
        // console.log(e.target)
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "black";

    })
})
const mainbutton0 = document.querySelector(".btn-headline");
console.log(mainbutton0);
mainbutton0.addEventListener("mouseover", () => {
    console.log("mouseover has been activated !!");
});


// const body0 = document.body;

// body.addEventListener("keypress", (e) => {
//   console.log(e);
// });

const todoform = document.querySelector(".form-todo");
const todoinput = document.querySelector(".form-todo input[type='text']");
console.log(todoinput);
const todolist0 = document.querySelector(".todo-list")
// console.log(todoform);
todoform.addEventListener("submit", (e) => {
    e.preventDefault();
    const newtodotext = todoinput.value;
    const newli = document.createElement("li");
    const newliinnerhtml = `<span class="text">${newtodotext}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">done</button>
        <button class="todo-btn remove">remove</button>
    </div>`;
    newli.innerHTML = newliinnerhtml
    todolist0.append(newli);
    todoinput.value = "";
});

todolist0.addEventListener("click", (e) => {
    // check if user clicked on done button
    if (e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
});

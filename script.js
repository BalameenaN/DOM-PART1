var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

  //LAB1
//Part 1: Getting Started
//step1 --- set the element
const mainEl = document.querySelector("main");

//step2 ---- set the bgcolor
let bgColor = 'var(--main-bg)';
mainEl.style.backgroundColor = bgColor;

//step3---Set the content of mainEl
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//step4----Add a class of flex-ctr 
mainEl.classList.add("flex-ctr");
console.log(mainEl);

//PART 2:Creating a Menu Bar

// step1 ---- cache the element in a variable
const topMenuEl = document.querySelector("#top-menu");

//step2 ---Set the height
topMenuEl.style.height = "100%";

//step3 --- Set the background color
topMenuEl.style.backgroundColor = "#0e9aa7";

//step4 --- Add a class
topMenuEl.classList.add("flex-around");

//Part 3: Adding Menu Buttons

//step1 ---- Iterate over the entire menuLinks array
menuLinks.forEach((links) => {

  //step2---- Create an <a> element
  const anchorEl = document.createElement("a");

  // step3--- add an href attribute
  anchorEl.setAttribute("href", links.href);

  //step4-- Set the new element's content
  anchorEl.textContent = links.text;

  //step5-- Append the new element
  topMenuEl.append(anchorEl);
})
console.log(topMenuEl);

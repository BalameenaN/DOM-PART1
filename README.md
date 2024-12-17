# DOM-PART1

**Part 1: Getting Started**
Explore the existing structure of the provided CodeSandbox to familiarize yourself with important aspects such as current DOM structure, element IDs, and available CSS classes.
Take five minutes to familiarize yourself with CSS Custom Properties (variables) - they are an amazing addition to CSS. If you are familiar with using variables with SASS/LESS pre-processors, CSS Custom Properties are similar but far more powerful because they are dynamic (their values can be changed during runtime) - and they are built into the CSS language!
Start the project by building a main content element using the following steps:
Select and cache the <main> element in a variable named mainEl.
Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
Add a class of flex-ctr to mainEl.
Hint: Use the Element.classList API.

**Part 2: Creating a Menu Bar**
Next, create a blank menu bar that we can use to later add some interactivity to the page:
Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
Set the height of the topMenuEl element to be 100%.
Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
Add a class of flex-around to topMenuEl.

**Part 3: Adding Menu Buttons**
If this data was provided by an external source, it would allow that source to control how our menu is built. We would simply implement the logic, and allow the data to decide what displays. This is not typically done with menus, but it can be done with any DOM element.
To continue:
Iterate over the entire menuLinks array and for each "link" object:
Create an <a> element.
On the new element, add an href attribute with its value set to the href property of the "link" object.
Set the new element's content to the value of the text property of the "link" object.
Append the new element to the topMenuEl element.

function changeMode(size, weight, transform, background, color) {
    return function ()  {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}
function main () {
    const spooky = changeMode(9, bold, uppercase, pink, green);
    const darkMood = changeMode(12, bold, capitalize, black, white);
    const screamMode = changeMode(12, normal, lowercase, white, black);
    const body = document.body;
    //add paragraph to the body
    const para = document.createElement("p");
    const paraText = document.createTextNode("Welcome Holberton!");
    para.append(paraText);
    body.appendChild(para)
    //add button to the body
    const btnOne = document.createElement("button");
    const btnOneText = document.createTextNode("Spooky");
    btnOne.append(btnOneText);
    body.appendChild(btnOne)
    btnOne.addEventListener('click', function () {
        spooky();
    });
    //add button to the body
    const btnTwo = document.createElement("button");
    const btnTwoText = document.createTextNode("Spooky");
    btnTwo.append(btnTwoText);
    body.appendChild(btnOne)
    btnTwo.addEventListener('click', function () {
        darkMood();
    });
    //add button to the body
    const btnThree = document.createElement("button");
    const btnThreeText = document.createTextNode("Spooky");
    btnThree.append(btnThreeText);
    body.appendChild(btnOne)
    btnThree.addEventListener('click', function () {
        screamMode();
    });
}
main();
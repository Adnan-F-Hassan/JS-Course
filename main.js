let names = [
    'Amr',
    'Mariam',
    'Omar',
    'Nour',
    'Ahmed',
    'Layla',
    'Youssef',
    'Malak',
    'Zain',
    'Jana',
    'Karim',
    'Farida',
    'Adam',
    'Nada',
    'Malik',
    'Sarah',
    'Hamza',
    'Yasmin',
    'Mohamed',
    'Dina'
];

let ages = [
    '18 years old',
    '12 years old',
    '20 years old',
    '21 years old',
    '32 years old',
    '23 years old',
    '24 years old',
    '25 years old',
    '19 years old',
    '27 years old',
    '28 years old',
    '29 years old',
    '30 years old',
    '31 years old',
    '26 years old',
    '33 years old',
    '36 years old',
    '35 years old',
    '22 years old',
    '37 years old'
];

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

// create card
function element(names, ages) {
    // elements
    let card = document.createElement('div');
    let name = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    // content
    let head = document.createTextNode(names);
    let ageContent = document.createTextNode(ages);
    img.src = 'img.png';
    name.appendChild(head);
    age.appendChild(ageContent);

    // style
    card.style.width = '200px';
    card.style.backgroundColor = 'grey';
    card.style.padding = '5px';
    card.style.margin = '2px';
    card.style.borderRadius = '10px';
    card.style.boxShadow = '0 4px 8px rgba(32, 40, 107, 0.54)';
    card.style.display = 'inline-block';
    
    img.style.width = '100%';

    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
}

for (let i = 0; i < 20; i++) {
    element(names[i], ages[i]);
}
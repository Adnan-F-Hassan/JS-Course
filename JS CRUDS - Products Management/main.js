let title = document.getElementById('title');
let price = document.getElementById('price');
let ads = document.getElementById('ads');
let taxes = document.getElementById('taxes');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let create = document.getElementById('create');

let id; // global variable to be assiened in the update function and reused in the create function.

let mood = 'create'; // create or update
let searchMood = 'Title'; // title or category

// get total
function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +ads.value + +taxes.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    } else {
        total.innerHTML = '';
        total.style.background = 'rgb(70, 14, 10);';
    }
}

// Create products Array
let dataProduct;
if (localStorage.product != null) {
    dataProduct = JSON.parse(localStorage.product);
} else {
    dataProduct = [];
}

// create product
create.onclick = function () {
    let newProduct = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    }

    if (title.value != '' && 
        price.value != '' && 
        category.value != '' &&
        newProduct.count < 1000) {
        // create / update mood
        if (mood === 'create') {   
        // count
        if (newProduct.count > 1) {
        for (let i = 0; i < newProduct.count; i++) {
            dataProduct.push(newProduct);
        }
        } else {
            dataProduct.push(newProduct);
        }
        } else {
        dataProduct[id] = newProduct;
        mood = 'create';
        create.innerHTML = 'Create';
        count.style.display = 'block';
        }
        clearInputs();
    }
    // save localstorage
    localStorage.setItem('product', JSON.stringify(dataProduct));
    showData();
}

// clear inputs
function clearInputs() {
    title.value = '';
    price.value = '';
    ads.value = '';
    taxes.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}

// Read data
function showData() {
    let table = '';
    for (let i = 0; i < dataProduct.length; i++) {
        table += `
        <tr>
            <td>${i +1}</td>
            <td>${dataProduct[i].title}</td>
            <td>${dataProduct[i].price}</td>
            <td>${dataProduct[i].ads}</td>
            <td>${dataProduct[i].taxes}</td>
            <td>${dataProduct[i].discount}</td>
            <td>${dataProduct[i].total}</td>
            <td>${dataProduct[i].category}</td>
            <td><button onclick="updateData(${i})">Update</button></td>
            <td><button onclick="deleteData(${i})">Delete</button></td>
        </tr>`;
    }
    document.getElementById('tbody').innerHTML = table;
    let deleteAllBtn = document.getElementById('deleteAll');
    if (dataProduct.length > 0) {
        deleteAllBtn.innerHTML = `<button onclick="deleteAll()">Delete All (${dataProduct.length})</button>`;
    } else {
        deleteAllBtn.innerHTML = '';
    }
    getTotal();
}
showData();

// Delete item
function deleteData(i) {
    dataProduct.splice(i, 1);
    localStorage.product = JSON.stringify(dataProduct);
    showData();
}

// Delete All 
function deleteAll() {
    localStorage.clear();
    dataProduct.splice(0);
    showData();
}

// Update item
function updateData(i) {
    title.value = dataProduct[i].title;
    price.value = dataProduct[i].price;
    taxes.value = dataProduct[i].taxes;
    ads.value = dataProduct[i].ads;
    discount.value = dataProduct[i].discount;
    getTotal();
    category.value = dataProduct[i].category;
    count.style.display = 'none';
    create.innerHTML = 'Update';
    mood = 'update';
    id = i;
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}

// Search 
function getSearchMood(id) {
    let search = document.getElementById('search');
    if (id === 'searchTitle') {
        searchMood = 'Title';
    } else {
        searchMood = 'Category';
    }
    search.focus();
    search.placeholder = 'Search By ' + searchMood;
    search.value = '';
    showData();
}

function search(value) {
    let table = '';
    for (let i = 0; i < dataProduct.length; i++){
        if (searchMood === 'Title') {
            if (dataProduct[i].title.includes(value.toLowerCase())) {
                table += `
                <tr>
                    <td>${i +1}</td>
                    <td>${dataProduct[i].title}</td>
                    <td>${dataProduct[i].price}</td>
                    <td>${dataProduct[i].ads}</td>
                    <td>${dataProduct[i].taxes}</td>
                    <td>${dataProduct[i].discount}</td>
                    <td>${dataProduct[i].total}</td>
                    <td>${dataProduct[i].category}</td>
                    <td><button onclick="updateData(${i})">Update</button></td>
                    <td><button onclick="deleteData(${i})">Delete</button></td>
                </tr>`;
            }
        } else {
            if (dataProduct[i].category.includes(value.toLowerCase())) {
                table += `
                <tr>
                    <td>${i +1}</td>
                    <td>${dataProduct[i].title}</td>
                    <td>${dataProduct[i].price}</td>
                    <td>${dataProduct[i].ads}</td>
                    <td>${dataProduct[i].taxes}</td>
                    <td>${dataProduct[i].discount}</td>
                    <td>${dataProduct[i].total}</td>
                    <td>${dataProduct[i].category}</td>
                    <td><button onclick="updateData(${i})">Update</button></td>
                    <td><button onclick="deleteData(${i})">Delete</button></td>
                </tr>`;
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;
}

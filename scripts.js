const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const buttonReduceAll = document.querySelector(".reduce-all")
const buttonVeganFilter = document.querySelector(".vegan-filter")
let myLi = ''

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
return newValue
}

function showAll(productsArray) {
    myLi = ''
    productsArray.forEach(product => {
        myLi += `
        <li class="item-price">
            <img src=${product.src} alt="">
            <h3>${product.name}</h3>
            <p>${formatCurrency(product.price)}</p>
        </li>`
    })
    list.innerHTML = myLi
}


function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        //name: product.name ,
        price: product.price * 0.9,
        // vegan: product.vegan,
        // src: product.src
    }))

    // sprad operator - para fazer apenas uma operacao
    showAll(newPrices)
    console.log(newPrices)
}

function reduceAll() {
    const total = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `<li class="item-price"> 
            <p>O valor total <br> dos itens é: <br> ${formatCurrency(total)}</p>
        </li>`
}

function veganFilter() {
    const newList = menuOptions.filter(option => option.vegan === true)
    showAll(newList)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonReduceAll.addEventListener('click', reduceAll)
buttonVeganFilter.addEventListener('click', veganFilter)



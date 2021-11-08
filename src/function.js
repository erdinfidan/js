function addToCart(productName = "Elma", quantity) {
    console.log("Sepete Eklendi...! ürün :  " + productName + " adet : " + quantity)
}

addToCart("tv", 10)

let sayHello = () => {
    console.log("TEST")
}
sayHello()

let sayHello2 = function () {
    console.log("hello TEST2")
}

sayHello2()
function addToCart2(productName, quantity, unitPrice) {

}

addToCart2("elma", 5, 1)
addToCart2("muz", 13, 222)
addToCart2("çilek", 12313, 2)

function addToCart3(product) {
    console.log(JSON.stringify(product))
}
let product1 = {
    name: "elma",
    quantity: "15",
    unitPrice: "25"
}
addToCart3(product1)
let product2 = {
    name: "elma",
    quantity: "15",
    unitPrice: "25"
}
let product3 = {
    name: "elma",
    quantity: "15",
    unitPrice: "25"
}
product2 = product3
product3.name = "MUZ"
console.log(product3.name)
console.log(product2.name)

let sayi1 = 10
let sayi2 = 20

sayi1 = sayi2

sayi1 = 300
console.log(sayi2)



function addToCart4(products) {
    console.log(products)
}
let products = [
    {
        name: "tv",
        price: "15",
    },
    {
        name: "telephone",
        price: "13",
    },
    {
        name: "radio",
        price: "55",
    }
]

addToCart4(products)

function addTotal(y, x) {
    console.log("toplam :" + x + y)

}
addTotal(34, 5464)

let [ic, mar, kara,[a,b,c]] = [
    {
        name: "iç anadolu",
        population: "20M"
    },
    {
        name: "Marmara",
        population: "30M"
    },
    {
        name: "Karadeniz",
        population: "10M"
    },
    [
        ["Ankara","Konya","Sivas"],
        ["Bursa","Edirne","İzmit"],
        ["Samsun","Sinop","Ordu"],
    ]
]

console.log(ic)
console.log(mar)
console.log(a)




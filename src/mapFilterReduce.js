let cart= [
    {id:1,productName:"Telefon",quantity:3,unitePrice:4000},
    {id:2,productName:"PC",quantity:5,unitePrice:14000},
    {id:3,productName:"Çaycı",quantity:10,unitePrice:400},
    {id:4,productName:"Televizyon",quantity:3,unitePrice:5000},
    {id:5,productName:"Şarj Cihazı",quantity:6,unitePrice:40},
    {id:6,productName:"Kalem",quantity:7,unitePrice:50}

]
console.log("<ul>")
cart.map(x=>{
   console.log("<li>"+x.productName + ":"+x.unitePrice*x.quantity+"</li>") 
})
console.log("</ul>")

let total=cart.reduce((acc,product)=>acc+product.unitePrice,0)
console.log(total)


let cart1000=cart.filter(x=>x.unitePrice>1000)
console.log(cart1000)

total=cart1000.reduce((acc,product)=>acc+product.unitePrice*product.quantity,0)
console.log(total)






//function addCart(sepet) {    
//    sepet.push({id:7,productName:"Kitap",quantity:2,unitePrice:5000})
//}
//
//addCart(cart)
// console.log(cart)
//
// let sayi=10
//
// function subNum(num) {
//     num+=2
// }
// subNum(sayi)
// console.log(sayi)
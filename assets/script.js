//First, tell us your name
let yourName = "Marissa Turner" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let orderTotal = 0 // Total cookies


// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Listing elements to add and subtract cookies and to quantify cookie types
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let sugarQty = document.querySelector('#qty-sugar')
let quantityTotal = document.getElementById('qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listeners for Gingerbread plus and minus buttons
gbPlusBtn.addEventListener('click', function() {
    gb++ 
    gbQty.textContent = gb 
    orderTotal++
    quantityTotal.textContent = orderTotal
console.log(`The Gingerbread plus button was clicked!`)})

gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {
    gb-- }
    gbQty.textContent = gb
    if (gb > 0){
        orderTotal--
    }
    if (orderTotal > 0) 
    {
        orderTotal-- } 
    else (gb = 0)
    orderTotal = gb + cc + sugar
    quantityTotal.textContent = orderTotal
console.log(`The Gingerbread minus button was clicked!`)})


//Event listeners for cc plus and minus buttons
ccPlusBtn.addEventListener('click', function() {
    cc++
    ccQty.textContent = cc
    orderTotal++
    quantityTotal.textContent = orderTotal 
console.log(`The Chocolate chip plus button was clicked!`)})

ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
        cc-- }
        ccQty.textContent = cc
        if (cc > 0){
            orderTotal--
        }
        if (orderTotal > 0) 
        {
            orderTotal-- } 
        else (cc = 0)
        orderTotal = gb + cc + sugar
        quantityTotal.textContent = orderTotal
console.log(`The Chocolate chip minus button was clicked!`)})


//Event listeners for Sugar cookie plus and minus buttons
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    sugarQty.textContent = sugar
    orderTotal++
    quantityTotal.textContent = orderTotal 
console.log(`The Sugar cookie plus button was clicked!`)})

sugarMinusBtn.addEventListener('click', function(){
    if (sugar > 0) {
        sugar-- }
    sugarQty.textContent = sugar
    if (sugar > 0){
    orderTotal--
    }
    if (orderTotal > 0) {
    orderTotal-- }
    else (sugar = 0)
    orderTotal = (gb + cc + sugar)
    quantityTotal.textContent = orderTotal
console.log(`The Sugar cookie minus button was clicked!`)})


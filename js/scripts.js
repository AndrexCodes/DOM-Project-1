var display_total_price = document.getElementById('total_price')
console.log(display_total_price.innerHTML.length)

function getQuantityElement(element) {
    var parent_node = element.parentNode
    var children = parent_node.children
    return children[1]
}

function getProductPrice(element) {
    var parent_node = element.parentNode
    parent_node = parent_node.parentNode
    var children = parent_node.children
    return parseInt(children[2].innerHTML.split(' ')[0])
}

function IncreaseQuantity(element){
    var price = getProductPrice(element)
    var quantity_element = getQuantityElement(element)
    quantity_element.innerHTML = parseInt(quantity_element.innerHTML) + 1
    DisplayTotalCost(price, "add")
}

function DecreaseQuantity(element){
    var price = getProductPrice(element)
    var quantity_element = getQuantityElement(element)
    quantity_element.innerHTML = parseInt(quantity_element.innerHTML) - 1
    if(parseInt(quantity_element.innerHTML) < 0){
        quantity_element.innerHTML = 0
        DisplayTotalCost(0, "minus")
    }else{
        DisplayTotalCost(price, "minus")
    }
    
}

function DisplayTotalCost(amount, args){
    switch(args){
        case "add":
            display_total_price.innerHTML = `${parseInt(display_total_price.innerHTML.split(" ")[0]) + amount} $`
            break

        case "minus":
            display_total_price.innerHTML = `${parseInt(display_total_price.innerHTML.split(" ")[0]) - amount} $`
            break
    }
}

function DeleteItem(element){
    var parent_node = element.parentNode
    parent_node = parent_node.parentNode
    var price = parseInt(parent_node.children[2].innerHTML.split(" ")[0])
    var quantity = parseInt(parent_node.children[3].children[1].innerHTML)
    console.log(`price: ${price}`)
    console.log(`quantity: ${quantity}`)
    DisplayTotalCost((price * quantity), "minus")
    parent_node = parent_node.parentNode
    parent_node = parent_node.parentNode
    console.log(parent_node)
    parent_node.style.display = "none"
}

function LikeItem(element){
    if(element.style.color == "red"){
        element.style.color = "black"
    }else{
        element.style.color = "red"
    }
}
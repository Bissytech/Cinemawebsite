let iconcart = document.querySelector('.iconcart')

// the toggle effect
if(iconcart){
    iconCart.addEventListener('click', ()=>{
        body.classList.toggle('showCart')
    })
}
// to add product data to html


// there is need to initialize the app
const initApp = () =>{
    fetch('http://localhost:5500/products.json')
    .then(response => response.json())
    .then((data)=>
    listProducts = data)
    addDataToHTML()
}

const addDataToHTMl = ()=>{
    // the first div is set to none
    listProductHTML.innerHTML = ''
    if (listproducts.length>0 ){
listproducts.forEach((products)=>{
    //here we set up the div the way we want it to be
    
    let newdiv = document.createElement('div')
    // in the div you add a class
    newdiv.classList.add('item')

newdiv.innerHTML= `create the set up here and replave the content by their product.image and so on,
`
listProductHTML.appendChild(newdiv)
})
    }

}


const addToCart=(product_id)=>{
    let ada = carts.findIndex((value)=>(value.product_id === product_id);

    if (ada < 0) {
       carts.push({
        product_id:product_id,
        quantity: 1


       })
    }else{
        cart[ada].quantity += 1
    }
    

}
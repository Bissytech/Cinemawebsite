let iconCart = document.querySelector(".icon-cart");
let body = document.querySelector("body");
let close = document.querySelector(".close");
let listProductHTML = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
let iconCartSpan = document.querySelector(".icon-cart span");

let listProducts = [];
let carts = [];

// Toggle cart visibility
if (iconCart) {
  iconCart.addEventListener("click", () => {
    body.classList.toggle("showCart");
  });
}

if (close) {
  close.addEventListener("click", () => {
    body.classList.toggle("showCart");
  });
}

// Function to add product data to HTML
const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
     
       <img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">N${product.price}</div>
        <button class="addCart">Add To Cart</button>
     
       
      `;
      listProductHTML.appendChild(newProduct);
    });
  }
};

// Function to add to cart
const addToCart = (product_id) => {
  let positionThisProductInCart = carts.findIndex(
    (value) => value.product_id == product_id
  );

  if (positionThisProductInCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1,
    })
  } else {
    carts[positionThisProductInCart].quantity += 1;
  }
  console.log(carts);
  addCartToHTML();
  addCartToMemory();
};

// Function to save cart to local storage
const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(carts));
};

// Function to update cart HTML
const addCartToHTML = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = -2;
console.log(carts.length);

  if (carts.length > 0) {
    carts.forEach((cart) => {
      // totalQuantity = totalQuantity + cart.quantity;
    
      totalQuantity += cart.quantity;
      let positionProduct = listProducts.findIndex(
        (value) => value.id == cart.product_id
      );   

      if (positionProduct >= 0) {
        let info = listProducts[positionProduct];
        let newCart = document.createElement("div");
        newCart.classList.add("item");
        newCart.dataset.id = cart.product_id;

        newCart.innerHTML = `
        
          <div class="image">
            <img src="${info.image}" alt="">
          </div>
          <div class="name">${info.name}</div>
          <div class="totalPrice">N${info.price}</div>
          <div class="quantity">
            <span class="minus"><</span>
            <span>${cart.quantity}</span>
            <span class="plus">></span>
          </div>
        
        `;
        listCartHTML.appendChild(newCart);
      }
    });
  }
  iconCartSpan.innerText = totalQuantity;
};

// Event listener for adding products to cart
if (listProductHTML) {
  listProductHTML.addEventListener("click", (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains("addCart")) {
      let product_id = positionClick.parentElement.dataset.id;
      addToCart(product_id);
    }
  });
}

// Event listener for cart quantity changes
if (listCartHTML) {
  listCartHTML.addEventListener("click", (event) => {
    let positionClick = event.target;

    if (
      positionClick.classList.contains("minus") ||
      positionClick.classList.contains("plus")
    ) {
      let product_id = positionClick.parentElement.parentElement.dataset.id;
      let type = positionClick.classList.contains("plus") ? "plus" : "minus";
      changeQuantity(product_id, type);
    }
  });
}

// Function to change quantity
const changeQuantity = (product_id, type) => {
  let positionItemCart = carts.findIndex(
    (value) => value.product_id == product_id
  );

  if (positionItemCart >= 0) {
    switch (type) {
      case "plus":
        carts[positionItemCart].quantity += 1;
        break;
      case "minus":
        carts[positionItemCart].quantity -= 1;
        if (carts[positionItemCart].quantity <= 0) {
          carts.splice(positionItemCart, 1);
        }
        break;
    }
  }
  addCartToMemory();
  addCartToHTML();
};

// Initialize app
const initApp = () => {
  fetch("http://localhost:5500/products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
      console.log(listProducts);
      addDataToHTML();

      if (localStorage.getItem("cart")) {
        carts = JSON.parse(localStorage.getItem("cart"));
        addCartToHTML();

        
      }
    });
};

initApp();

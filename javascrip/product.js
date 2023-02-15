
const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-list');
const cartTotalValue = document.getElementById('cart-total-value');
const cartCountInfo = document.getElementById('cart-count-info');

const productHome = document.querySelector('.product-container');

let cartItemId = 1;

eventListeners();

// all event listeners
function eventListeners(){
  window.addEventListener('DOMContentLoaded', () => {
    loadJSON();
    loadCart();
  });
  //show/hide cart container
  document.getElementById('cart-btn').addEventListener
  ('click', () => {
    cartContainer.classList.toggle('show-cart-conatainer');
  });
  // add to cart
  productList.addEventListener('click', purchaseProduct);
  // productHome.addEventListener('click', addCardProduct);
  // delete from cart
  cartList.addEventListener('click', deleteProduct);
}

// update cart info
function updateCartInfo() {
  let cartInfo = findCartInfo();
  cartCountInfo.textContent = cartInfo.productCount;
  cartTotalValue.textContent = cartInfo.total;
}

// load product items content from Json file
function loadJSON() {
  fetch('../json/products.json')
  .then(reponse => reponse.json())
  .then(data => {
    let html = '';
    data.forEach(product => {
      html += `
        <div class="product-item">
					<div class="product-img">
						<img src="${product.imgSrc}" alt="">
						<button type="button" class="add-to-cart-btn">
							<i class="fas fa-shopping-cart"></i>Add To Cart
						</button>
					</div>

					<div class="product-content">
						<h3 class="product-name">${product.name}</h3>
						<span class="product-category">${product.category}</span>
						<p class="product-price">$${product.price}</p>
            <button type="button" class="detail-card-btn">
              <a href="${product.links}">Detail</a>
            </button>
					</div>
				</div>
      `;
    });
    productList.innerHTML = html;
    console.log(productList);
  });
  // .catch(error => {
  //   alert(`User live server or local server`);
  // });
}

// purchase product from the product list
function purchaseProduct(e) {
  if(e.target.classList.contains('add-to-cart-btn')){
    let product = e.target.parentElement.parentElement;
    getProductInfo(product);
  }
}

// get product info after add to cart button clicked
function getProductInfo(product) {
  let productInfo = {
    id: cartItemId,
    imgSrc: product.querySelector('.product-img img').src,
    name: product.querySelector('.product-name').textContent,
    category: product.querySelector('.product-category').textContent,
    price: product.querySelector('.product-price').textContent
  }
  cartItemId++; // increasing id for the cart item list
  addToCartList(productInfo);
  saveProductInStorage(productInfo);
}

// add the selected product to the cart list
function addToCartList(product) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.setAttribute('data-id', `${product.id}`);
  cartItem.innerHTML = `
    <img src="${product.imgSrc}" alt="">
    <div class="cart-item-info">
      <h3 class="cart-item-name">${product.name}</h3>
      <span class="cart-item-category">${product.category}</span>
      <span class="cart-item-price">${product.price}</span>
    </div>

    <button type="button" class="cart-item-del-btn">
      <i class="fas fa-times"></i>
    </button>
  `;
  cartList.appendChild(cartItem);
}

// save the product in the local storage
function saveProductInStorage(item) {
  let products = getProductFromStorage();
  products.push(item);
  localStorage.setItem('products', JSON.stringify(products));
  updateCartInfo();
}

// get all the products info if there is any in the local storage
function getProductFromStorage() {
  return localStorage.getItem('products') 
  ? JSON.parse(localStorage.getItem('products')) : [];
  // returns empty array if there isn't any product info
}

// load carts product
function loadCart(){
  let products = getProductFromStorage();
  if(products.length < 1){
    cartItemId = 1; // if there is no any product and increase local storage
  } else {
    cartItemId = products[products.length -1].id;
    cartItemId++; // else get the id of the last product and increase it by 1
  }
  products.forEach(product => addToCartList(product));

  // calculate and update UI of cart info
  updateCartInfo();
}

// calculate total price of the cart and other info
function findCartInfo(){
  let products = getProductFromStorage();
  let total = products.reduce((acc, product) => {
    let price = parseFloat(product.price.substr(1)); // removing dollar sign
    return acc += price;
  }, 0); // addding all the prices

  return{
    total: total.toFixed(2),
    productCount: products.length // geetting products count
  }
}

// delete product from cart list and local storage
function deleteProduct(e){
  let cartItem;
  if(e.target.tagName == "BUTTON"){
    cartItem = e.target.parentElement;
    cartItem.remove(); // this removes from the DOM only
  } else if(e.target.tagName == "I"){
    cartItem = e.target.parentElement.parentElement;
    cartItem.remove(); // this removes from the DOM only
  }

  let products = getProductFromStorage();
  let updateProducts = products.filter(product => {
    return product.id !== parseInt(cartItem.dataset.id);
  });
  // updating the products list after the delection 
  localStorage.setItem('products', JSON.stringify(updateProducts));

  updateCartInfo();
}

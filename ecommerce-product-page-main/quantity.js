let minusBtn = document.querySelector("#minus-btn");
let plusBtn = document.querySelector("#plus-btn");
let totalBtn = document.querySelector("#total-btn");
let totalInt = parseInt(document.querySelector("#total-btn").innerText);
let cartCount = document.querySelector(".cart-count");
let cartBody = document.querySelector(".cart-body");

let itemName = document.querySelector("h2").innerText;
let itemPrice = parseInt(document.querySelector("h3 span").innerText);

plusBtn.addEventListener('click', () => {
    totalInt += 1;
    totalBtn.innerText = totalInt;
    return totalInt;
});


minusBtn.addEventListener('click', () => {
    
    if (totalInt > 0) {
        totalInt -= 1;
        totalBtn.innerText = totalInt;
    } 
    return totalInt;
});

// Nav Cart Icon
$(".cart-icon").click(function() {
    $(".cart").toggle();
});

// Add to cart
let addCartCount = 0;

$("#add-cart").click(function(){
    addCartCount += totalInt;
    totalBtn.innerText = 0;
    totalInt = 0;
    cartCount.innerText = addCartCount;
    cartBody.innerHTML = addCart();
});

function addCart() {
    if (addCartCount == 0) {
        return `
        <div class="cart-empty">
            <p>Your Cart is empty</p>
        </div>
      `;
    } else {
        return `
        <div class="cart-main">
            <div class="cart-added-items">
                <img src="images/image-product-1-thumbnail.jpg" alt="shoe-thumbnail">
                <div class="name-price"> 
                    <p>${itemName}</p>
                    <p>$${itemPrice} x ${addCartCount} = <b>$${itemPrice * addCartCount}</b></p>
                </div> 
                <img class="icon-delete" src="images/icon-delete.svg" alt="delete-icon">
            </div>
            <button class="btn btn-primary btn-lg">Checkout</button>
        </div>
        `
    }
}

// Delete Cart
window.addEventListener('click', function(e) {
    if (e.target.className === 'icon-delete') {
      addCartCount = 0;
      cartCount.innerText = addCartCount;
      cartBody.innerHTML = addCart();
    }
  });


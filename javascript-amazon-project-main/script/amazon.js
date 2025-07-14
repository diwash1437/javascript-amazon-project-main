


// console.log(products);


//combine and all html together and put it in web page
let productHTML='';

products.forEach((product) => {

    //generate html
    productHTML = productHTML + ` 

        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary  js-add-to-cart-btn">
            Add to Cart
          </button>
        </div>`
    // console.log(product.name);
    // console.log(html);
})

// console.log(productHTML);


document.querySelector('.js-product-container').innerHTML = productHTML;

//make it interactive

// console.log(document.querySelectorAll('.js-add-to-cart-btn'));  //get all the button element  and down looping to get button element
document.querySelectorAll('.js-add-to-cart-btn')
.forEach((button) =>
{
    // console.log(button);
    button.addEventListener('click', ()=>{
    
    })
})
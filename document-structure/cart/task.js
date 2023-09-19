document.querySelectorAll(".product__quantity-control").forEach(control => {
    control.addEventListener("click", () => {
        const quantityValue = control.parentElement.querySelector(".product__quantity-value");
        let quantity = parseInt(quantityValue.innerText, 10);

        if (control.classList.contains("product__quantity-control_dec")) {
            if (quantity > 1) {
                quantity -= 1;
            }
        } else if (control.classList.contains("product__quantity-control_inc")) {
            quantity += 1;
        }

        quantityValue.innerText = quantity;
    });

});

document.querySelectorAll(".product__add").forEach(addBasket => {
    let parentElement = addBasket.closest(".product");
    let imageElement = parentElement.querySelector(".product__image");
    let cart = document.querySelector(".cart__products");
    let productId = parentElement.getAttribute('data-id');
    addBasket.active = false;

    addBasket.addEventListener("click", () => {
        const quantityValue = addBasket.parentElement.querySelector(".product__quantity-value");
        let quantity = parseInt(quantityValue.innerText, 10);

        if(!addBasket.active){
            addBasket.active = true;

            let newParentElement = parentElement.cloneNode(false);
            newParentElement.classList.remove("product");
            newParentElement.classList.add("cart__product");
            newParentElement.setAttribute('data-id', productId);
            cart.appendChild(newParentElement);

            let newImageElement = document.createElement("img");
            newImageElement.src = imageElement.src;
            newImageElement.classList.add("cart__product-image");
            newParentElement.appendChild(newImageElement);

            let newDiv = document.createElement("div");
            newDiv.classList.add("cart__product-count");
            newDiv.innerText = quantity;
            newParentElement.appendChild(newDiv);
        } else {
            let cartProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);
            if(cartProduct){
                let cartProductCount = cartProduct.querySelector('.cart__product-count');
                let currentCount = parseInt(cartProductCount.innerText, 10);
                cartProductCount.innerText = currentCount + quantity;
            }
        }
    });
});
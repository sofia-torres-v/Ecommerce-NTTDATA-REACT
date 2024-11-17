let cartCount = 0; // Contador global del carrito
const cartElement = document.querySelector("#cart-counter"); 

export function addToCart() {
    cartCount++; 
    cartElement.textContent = cartCount; 
    console.log('adding')
}

let cartCount: number = 0; 
const cartElement = document.querySelector<HTMLElement>("#cart-counter");

export function addToCart() {
    cartCount++; 

    // Verificación si el elemento existe
    if (cartElement) {
        cartElement.textContent = cartCount.toString(); 
    } else {
        console.error("El elemento no se encontró.");
    }
    console.log('adding');
}

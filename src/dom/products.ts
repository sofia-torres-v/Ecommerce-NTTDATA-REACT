import {addToCart} from './cart.js'
import { roundPercentage } from '../utils/format.js';
import { capitalizeFirstLetter } from '../utils/format.js';
import { Product } from '../types/product.js';

// Renderizar los productos en la card
// el nombre podr'ia ser m'as enfocado a lo que hace, en este caso renderAllProducts, data es muu general
export function renderAllData(products: Product[], container: HTMLElement): void {
    products.forEach((element) => {

        const card = document.createElement("div");
        card.classList.add("card");

        const divDiscount = document.createElement("div");
        divDiscount.classList.add("div-discount");
        card.appendChild(divDiscount);

        const textDiscount = document.createElement("p");
        textDiscount.classList.add("text-discount");
        textDiscount.textContent = `-${roundPercentage(element.discountPercentage)}%`;
        divDiscount.appendChild(textDiscount);

        const image = document.createElement("img");
        image.src = element.thumbnail;
        image.classList.add("card-img");
        card.appendChild(image);

        const title = document.createElement("h3");
        title.textContent = element.title;
        card.appendChild(title);

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");
        card.appendChild(cardInfo);

        const textPrice = document.createElement("p");
        textPrice.classList.add("text-price");
        textPrice.textContent = "Precio: S/";
        cardInfo.appendChild(textPrice);

        const spanPrice = document.createElement("span");
        spanPrice.classList.add("span-price");
        spanPrice.textContent = `${element.price}`;
        textPrice.appendChild(spanPrice);

        const contentCategorie = document.createElement("p");
        const textCategory = document.createElement("span");
        textCategory.classList.add("text-category");
        textCategory.textContent = "Categoría: ";
        contentCategorie.appendChild(textCategory);

        const spanCategory = document.createElement("span");
        spanCategory.classList.add("span-category");
        spanCategory.textContent = capitalizeFirstLetter(element.category);
        contentCategorie.appendChild(spanCategory);
        cardInfo.appendChild(contentCategorie);

         // Botón Agregar al carrito
        const buttonAdd = document.createElement("button");
        buttonAdd.classList.add("button-add");
        buttonAdd.textContent = "Agregar ";
        card.appendChild(buttonAdd);

        const iconCartButton = document.createElement("img");
        iconCartButton.classList.add("icon-cart-button");
        iconCartButton.src = "./src/assets/cart-button.png";
        buttonAdd.appendChild(iconCartButton);

          // Evento al botón de agregar
          buttonAdd.addEventListener("click", () => {
            addToCart();  // Actualizará el contador 
        });

        container.appendChild(card);
    });
}


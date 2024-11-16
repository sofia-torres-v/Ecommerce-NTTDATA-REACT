// Obtener todos los productos
export async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const dataProducts = await response.json();
        return mapperProducts(dataProducts.products);
    } catch (error) {
        console.error("Error al cargar toda la data:", error);
    }
}

// Obtener todas las categorias
export async function fetchCategories() {
    try {
        const response = await fetch("https://dummyjson.com/products/categories");
        const categoryProducts = await response.json();
        return mapperCategories(categoryProducts);
    } catch (error) {
        console.error("Error al cargar las categorías:", error);
    }
}

// Mapper para estructurar datos que necesito
function mapperProducts(products) {
    return products.map((product) => ({
        title: product.title,
        thumbnail: product.thumbnail,
        category: product.category,
        price: product.price,
    }));
}

// Mapper para categorías (API devuelve un objeto con más propiedades)
function mapperCategories(categories) {
    return categories.map((category) => category.slug);
}

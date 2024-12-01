import { ProductResponse } from "../../domain/product.domain";
import { AppState } from "../../domain/appState.domain";
import { AppActions } from "../../types/app-types";
import { appReducer } from "../appReducer";

describe("appReducer", () => {
  let initialState: AppState;

  beforeEach(() => {
    initialState = {
      products: [],
      categories: [],
    };
  });

  
  it("Debería guardar los productos cuando se despacha la acción SaveProducts", () => {
    const products: ProductResponse[] = [
      { 
        id: 1, 
        title: "Producto 1", 
        price: 100, 
        category: "Categoría 1", 
        thumbnail: "image1.jpg",
        discountPercentage: 10 
      },
      { 
        id: 2, 
        title: "Producto 2", 
        price: 200, 
        category: "Categoría 2", 
        thumbnail: "image2.jpg",
        discountPercentage: 20 
      }
    ];

    const action = {
      type: AppActions.SaveProducts,
      payload: products,
    };

    const newState = appReducer(initialState, action);

    expect(newState.products).toEqual(products);
    expect(newState.categories).toEqual(initialState.categories);
  });


  it("Debería guardar las categorías cuando se despacha la acción SaveCategories", () => {
    const categories = ["Categoría 1", "Categoría 2"];

    const action = {
      type: AppActions.SaveCategories,
      payload: categories,
    };

    const newState = appReducer(initialState, action);

    expect(newState.categories).toEqual(categories);
    expect(newState.products).toEqual(initialState.products);  
  });


  it("Debería lanzar un error si se despacha una acción no definida", () => {
    const action = {
      type: "UnknownAction",
      payload: {},
    };

    expect(() => appReducer(initialState, action as any)).toThrowError("No hay action disponible");
  });
});
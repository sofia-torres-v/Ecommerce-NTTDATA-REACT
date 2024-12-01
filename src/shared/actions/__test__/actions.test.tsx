import { fetchCategories, fetchProducts } from "../../../services/api/product.service";
import { mapperCategories, mapperProducts } from "../../../services/mappers/product.mapper";
import { loadProductsAndCategories } from "../appActions";
import { AppActions } from "../../../types/app-types";

jest.mock("../../../services/api/product.service", () => ({
  fetchProducts: jest.fn(),
  fetchCategories: jest.fn(),
}));

jest.mock("../../../services/mappers/product.mapper", () => ({
  mapperProducts: jest.fn(),
  mapperCategories: jest.fn(),
}));

describe("loadProductsAndCategories", () => {
  it("Debería obtener productos y categorías y despachar las acciones correctas", async () => {
    const mockDispatch = jest.fn();
    const mockProducts = [{ id: 1, name: "Product 1" }];
    const mockCategories = [{ id: 1, name: "Category 1" }];
    const mappedProducts = [{ id: 1, name: "Mapped Product 1" }];
    const mappedCategories = [{ id: 1, name: "Mapped Category 1" }];

    // Configuración de los mocks
    (fetchProducts as jest.Mock).mockResolvedValue(mockProducts);
    (fetchCategories as jest.Mock).mockResolvedValue(mockCategories);
    (mapperProducts as jest.Mock).mockReturnValue(mappedProducts);
    (mapperCategories as jest.Mock).mockReturnValue(mappedCategories);

    await loadProductsAndCategories(mockDispatch);

    expect(fetchProducts).toHaveBeenCalled();
    expect(fetchCategories).toHaveBeenCalled();
    expect(mapperProducts).toHaveBeenCalledWith(mockProducts);
    expect(mapperCategories).toHaveBeenCalledWith(mockCategories);

    // Verificar que el dispatch fue llamado con las acciones correctas
    expect(mockDispatch).toHaveBeenCalledWith({
      type: AppActions.SaveProducts,
      payload: mappedProducts,
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: AppActions.SaveCategories,
      payload: mappedCategories,
    });
  });

  it("Debería manejar los errores de manera adecuada", async () => {
    const mockDispatch = jest.fn();
    const error = new Error("API error");

    // Configurar el mock para que falle
    (fetchProducts as jest.Mock).mockRejectedValue(error);
    console.error = jest.fn(); // Mock de console.error

    await loadProductsAndCategories(mockDispatch);

    expect(console.error).toHaveBeenCalledWith(
      "Error al cargar productos y categorías:",
      error
    );
  });
});

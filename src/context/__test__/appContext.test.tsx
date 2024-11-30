import { render, screen } from "@testing-library/react";
import { GlobalAppProvider, useGlobalAppState } from "../../context/AppContext";

const TestComponent = () => {
  const state = useGlobalAppState();
  return <h1>{state.products.length}</h1>;  // Muestra el número de productos
};

describe('GlobalAppProvider', () => {
  it('debería proporcionar el estado global correctamente', () => {
    render(
      <GlobalAppProvider>
        <TestComponent />
      </GlobalAppProvider>
    );

    // Verificar que el número de productos es 3 (según el estado mockeado)
    expect(screen.getByRole('heading')).toHaveTextContent("3");
  });

  it('debería lanzar un error si se usa useGlobalAppState fuera del proveedor', () => {
    const TestComponentOutsideProvider = () => {
      useGlobalAppState(); 
      return null;
    };

    expect(() => render(<TestComponentOutsideProvider />)).toThrow(
      "useGlobalAppState debe usarse dentro de AppStateContext"
    );
  });
});

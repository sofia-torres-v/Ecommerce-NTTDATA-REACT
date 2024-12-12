// el test debe simiular el comportamiento de un provider, modificando los datos que recibe o ejecutando las acciones
import { render, screen, fireEvent } from "@testing-library/react";
import { GlobalAppProvider, useGlobalAppDispatch } from "../../context/AppContext";
import { AppActions } from "../../types/app-types";

// Componente de prueba que dispara la acción SaveProducts cuando se hace clic en el botón
const TestComponentDispatch = () => {
  const dispatch = useGlobalAppDispatch();

  return (
    <button onClick={() => dispatch({ type: AppActions.SaveProducts, payload: [{ id: 1, name: "Product 1" }] })}>
      Dispatch SaveProducts
    </button>
  );
};


describe("Contexto GlobalAppProvider", () => {
  it("Debería disparar una acción SaveProducts cuando se hace clic en el botón", () => {
    render(
      <GlobalAppProvider>
        <TestComponentDispatch />
      </GlobalAppProvider>
    );
    const button = screen.getByRole("button", { name: /dispatch saveproducts/i });
    fireEvent.click(button);
  });
});

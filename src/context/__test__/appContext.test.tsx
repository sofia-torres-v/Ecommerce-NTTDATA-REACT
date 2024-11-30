import { render, screen, fireEvent } from "@testing-library/react";
import { GlobalAppProvider, useGlobalAppDispatch } from "../../context/AppContext";
import { AppActions } from "../../types/app-types";


const TestComponentDispatch = () => {
  const dispatch = useGlobalAppDispatch();

  return (
    <button onClick={() => dispatch({ type: AppActions.SaveProducts, payload: [{ id: 1, name: "Product 1" }] })}>
      Dispatch SaveProducts
    </button>
  );
};

describe("GlobalAppProvider", () => {
  it("debería disparar una acción SaveProducts cuando se hace clic en el botón", () => {
    render(
      <GlobalAppProvider>
        <TestComponentDispatch />
      </GlobalAppProvider>
    );

    const button = screen.getByRole("button", { name: /dispatch saveproducts/i });
    fireEvent.click(button);

  });
});

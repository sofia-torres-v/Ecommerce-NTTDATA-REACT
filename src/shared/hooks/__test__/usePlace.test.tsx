import { render, screen } from "@testing-library/react";
import useDistricts from "../usePlace";

jest.mock("../../../mocks/district.json", () => ({
  districts: [
    { id: 1, name: "Puente Piedra", isCapital: false },
    { id: 2, name: "Lince", isCapital: false },
    { id: 3, name: "Macdalena", isCapital: false },
  ],
}));

// Componente de prueba 
const TestComponent = () => {
  const { districtNames } = useDistricts();
  return (
    <div>
      {districtNames.map((name) => (
        <span key={name}>{name}</span>
      ))}
    </div>
  );
};

describe("Hook useDistricts ", () => {
  it("Debería devolver los nombres de los distritos correctos", () => {
    render(<TestComponent />);
    
    expect(screen.getByText("Puente Piedra")).toBeInTheDocument();
    expect(screen.getByText("Lince")).toBeInTheDocument();
    expect(screen.getByText("Macdalena")).toBeInTheDocument();
  });
});

// useDistricts.test.tsx
import { render, screen } from "@testing-library/react";
import useDistricts from "../usePlace";


// Simular los datos de district.json
jest.mock("../../../mocks/district.json", () => ({
  districts: [
    { id: 1, name: "Puente Piedra", isCapital: false },
    { id: 2, name: "Lince", isCapital: false },
    { id: 3, name: "Macdalena", isCapital: false },
  ],
}));

// Componente de prueba que usa el hook
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

describe("useDistricts Hook", () => {
  it("debe devolver los nombres de los distritos correctos", () => {
    render(<TestComponent />);
    
    // Verificar que los nombres de los distritos se muestren correctamente
    expect(screen.getByText("Puente Piedra")).toBeInTheDocument();
    expect(screen.getByText("Lince")).toBeInTheDocument();
    expect(screen.getByText("Macdalena")).toBeInTheDocument();
  });
});

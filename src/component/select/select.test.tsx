import { render, screen, fireEvent } from '@testing-library/react';
import Select from './Select';  

describe('Componte Select', () => {
  const mockOnChange = jest.fn();
  test('Renderizar select', () => {
    const options = ['Opcion 1', 'Opcion 2', 'Opcion 3'];
    render(
      <Select
        options={options}
        value="Option 1"
        onChange={mockOnChange}
      />
    );
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });



  test('calls onChange when an option is selected', () => {
    const options = ['Opcion 1', 'Opcion 2', 'Opcion 3'];
    render(
      <Select
        options={options}
        value="Option 1"
        onChange={mockOnChange}
      />
    );
    // Simular seleccionar una opción diferente
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Opcion 2' } });
    expect(mockOnChange).toHaveBeenCalledWith('Opcion 2');
  });


  test('renders placeholder when provided', () => {
    const options = ['Opcion 1', 'Opcion 2', 'Opcion 3'];
    render(
      <Select
        options={options}
        value="Option 1"
        onChange={mockOnChange}
        placeholder="Select an option"
      />
    );
    // placeholder muestra opción deshabilitada
    const placeholderOption = screen.getByText('Select an option');
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toBeDisabled();
  });


  test('does not render placeholder if not provided', () => {
    const options = ['Opcion 1', 'Opcion 2', 'Opcion 3'];
    render(
      <Select
        options={options}
        value="Opcion 1"
        onChange={mockOnChange}
      />
    );
    const placeholderOption = screen.queryByText('Selecciona una opcion');
    expect(placeholderOption).toBeNull();
  });


  test('renders select with an empty value when no value is provided', () => {
    const options = ['Opcion 1', 'Opcion 2', 'Opcion 3'];
    render(
      <Select
        options={options}
        value={""} 
        onChange={mockOnChange}
        placeholder="Select an option"
      />
    );
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue(""); 
  });
});

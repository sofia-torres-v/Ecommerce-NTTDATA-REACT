import { render, screen, fireEvent } from '@testing-library/react';
import Select from '../Select';

describe('Componente Select', () => {
  const mockOnChange = jest.fn();
  test('Debería renderizar el componente select con las opciones correspondientes', () => {
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


  test('Debería llamar a onChange cuando se selecciona una opción', () => {
    const options = ['Opcion 1', 'Opcion 2', 'Opcion 3'];
    render(
      <Select
        options={options}
        value="Option 1"
        onChange={mockOnChange}
      />
    );
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Opcion 2' } });
    expect(mockOnChange).toHaveBeenCalledWith('Opcion 2');
  });


  test('Debería renderizar el placeholder cuando se le proporciona', () => {
    const options = ['Opcion 1', 'Opcion 2', 'Opcion 3'];
    render(
      <Select
        options={options}
        value="Option 1"
        onChange={mockOnChange}
        placeholder="Select an option"
      />
    );
    const placeholderOption = screen.getByText('Select an option');
    expect(placeholderOption).toBeInTheDocument();
    expect(placeholderOption).toBeDisabled();
  });


  test('No Debería renderizar el placeholder si no se le proporciona', () => {
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


  test('Debería renderizar el select con un valor vacío cuando no se proporciona valor', () => {
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

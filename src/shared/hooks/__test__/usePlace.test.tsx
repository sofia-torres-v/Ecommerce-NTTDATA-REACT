import { renderHook, waitFor } from "@testing-library/react";
import { usePlaces } from "../usePlace";

global.fetch = jest.fn();
(global.fetch as jest.Mock) = jest.fn();

describe('usePlaces hook', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();  
  });

  it('should return districts when the fetch is successful', async () => {
    const mockDistricts = [
      { name: 'District 1' },
      { name: 'District 2' },
    ];

    // Configura el mock de fetch para devolver una respuesta exitosa
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockDistricts, 
    });

    // Usa el hook renderHook para renderizar el hook
    const { result } = renderHook(() => usePlaces());

    // Espera a que se resuelva el estado
    await waitFor(() => expect(result.current.districts).toHaveLength(2));

    expect(result.current.districts).toEqual(['District 1', 'District 2']);
    expect(result.current.error).toBeNull(); 
  });

  it('should set error if fetch fails', async () => {
    // Configura el mock de fetch para simular un error en la llamada
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Error' }),
    });

    // Usa el hook renderHook para renderizar el hook
    const { result } = renderHook(() => usePlaces());

    // Espera a que se resuelva el estado
    await waitFor(() => expect(result.current.error).toBe("Hubo un error al obtener los distritos"));

    expect(result.current.districts).toHaveLength(0);
    expect(result.current.error).toBe("Hubo un error al obtener los distritos");
  });
});

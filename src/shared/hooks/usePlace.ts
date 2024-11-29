import { useState, useEffect } from "react";
import { District } from "../../services/api/districtApi";
import { mapDistrictsNames } from "../../services/mappers/districtMapper";

export function usePlaces() {
  const [districts, setDistricts] = useState<string[]>([]); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch("/src/mocks/district.json");
        if (!response.ok) {
          throw new Error("No se pudo obtener los distritos");
        }
        const data: District[] = await response.json(); 
        const districtNames = mapDistrictsNames(data);
        
        // Guardamos solo los nombres de los distritos en el estado
        setDistricts(districtNames);
      } catch (err) {
        setError("Hubo un error al obtener los distritos");
      }
    };

    fetchDistricts();
  }, []);

  return { districts, error };
}

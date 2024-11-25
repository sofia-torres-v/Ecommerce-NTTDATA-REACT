import { useState, useEffect } from "react";

interface District {
  name: string;
}

export function usePlaces() {
  const [districts, setDistricts] = useState<District[]>([]);  // Aquí definimos que el estado es un array de objetos de tipo 'District'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch("/src/mocks/district.json");


        if (!response.ok) {
          throw new Error("No se pudo obtener los distritos");
        }
        const data = await response.json();
        setDistricts(data);  // Aquí asignamos los datos del JSON
        setLoading(false);
      } catch (err) {
        setError("Hubo un error al obtener los distritos.");
        setLoading(false);
      }
    };

    fetchDistricts();
  }, []);

  return { districts, loading, error };
}

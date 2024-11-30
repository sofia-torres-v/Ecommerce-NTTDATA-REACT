export interface District {
  id: number;
  name: string;
}

export async function fetchDistricts(): Promise<District[]> {
  const response = await fetch("/src/mocks/district.json");
  if (!response.ok) {
    throw new Error("No se pudo obtener los distritos");
  }
  const data = await response.json();
  return data;
}
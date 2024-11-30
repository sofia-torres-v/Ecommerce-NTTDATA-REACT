import { District } from "../../services/api/districtApi"; 

export function mapDistrictsNames(districts: District[]): string[] {
  return districts.map((district) => district.name);
}

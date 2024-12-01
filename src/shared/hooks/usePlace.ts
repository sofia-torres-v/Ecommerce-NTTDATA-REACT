import districtsData from "../../mocks/district.json";

const useDistricts = () => {

  const districtNames = districtsData.districts.map((district) => district.name);

  return { districtNames };
};

export default useDistricts;

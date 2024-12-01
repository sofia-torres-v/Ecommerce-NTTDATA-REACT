import { roundPercentage } from "../formatPrice";

describe('roundPercentage', () => {
  it('debe redondear el valor y agregar el símbolo %', () => {
    expect(roundPercentage(10.5)).toBe('11%'); // Redondeo hacia arriba
    expect(roundPercentage(10.4)).toBe('10%'); // Redondeo hacia abajo
    expect(roundPercentage(-10.5)).toBe('-10%');
    expect(roundPercentage(-10.4)).toBe('-10%'); 
  });
});
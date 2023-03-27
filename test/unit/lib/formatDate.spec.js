import { formatDate } from '../../../src/lib/formatDate'

describe('lib/formatDate', () => {
  it('Should format date correctly',() => {
    // ARRANGE
    const unformattedDate = '2022-12-12';
    const formattedDate = 'December 12, 2022'
    // ACT & ASSERT
    expect(formatDate(unformattedDate)).toEqual(formattedDate);
  });
  it('Should show an error message when the received date is invalid', () => {
        // ARRANGE
        const date = 'wrong date';
        const result = 'Invalid Date'
        // ACT & ASSERT
        expect(formatDate(date)).toEqual(result);
  })
})
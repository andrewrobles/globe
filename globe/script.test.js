const { expect } = require('@jest/globals');
const parse = require('./script');

test('parse raw text', () => {
  const rawText = `Latitude,Longitude,Altitude
  30,-150,100`

  const actual = parse(rawText)
  const expected = [
    {
      latitude: 30,
      longitude: -150,
      altitude: 100
    }
  ]

  expect(actual).toStrictEqual(expected);
});
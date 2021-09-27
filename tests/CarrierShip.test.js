const CarrierShip = (callback) => {
  callback();
};

test('Expect CarierShip to have been called', () => {
  const mockCallback = jest.fn();
  CarrierShip(mockCallback);
  expect(mockCallback).toHaveBeenCalledWith();
});

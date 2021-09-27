const GunShip = (callback) => {
  callback();
};

test('Expect Gunship to have been called', () => {
  const mockCallback = jest.fn();
  GunShip(mockCallback);
  expect(mockCallback).toHaveBeenCalledWith();
});

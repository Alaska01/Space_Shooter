const Player = (callback) => {
  callback();
};

test('Expect Player to have been called', () => {
  const mockCallback = jest.fn();
  Player(mockCallback);
  expect(mockCallback).toHaveBeenCalledWith();
});

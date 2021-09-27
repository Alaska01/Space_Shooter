const Scrolling = (callback) => {
  callback();
};

test('Expect Scrolling to have been called', () => {
  const mockCallback = jest.fn();
  Scrolling(mockCallback);
  expect(mockCallback).toHaveBeenCalledWith();
});

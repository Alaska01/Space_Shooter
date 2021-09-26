const ChaserShip = (callback) => {
    callback();
  };
  
  test('Expect ChaserShip to have been called', () => {
    const mockCallback = jest.fn();
    ChaserShip(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith();
  });
  
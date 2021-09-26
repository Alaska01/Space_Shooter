const PlayerLaser = (callback) => {
    callback();
  };
  
  test('Expect PlayerLaser to have been called', () => {
    const mockCallback = jest.fn();
    PlayerLaser(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith();
  });
  
const EnemyLaser = (callback) => {
    callback();
  };
  
  test('Expect EnemyLaser to have been called', () => {
    const mockCallback = jest.fn();
    EnemyLaser(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith();
  });
  
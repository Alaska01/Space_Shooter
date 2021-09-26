const Entity = (callEntity) => {
    callEntity();
  };
  
  test('Expect CarierShip to have been called', () => {
    const mockCallback = jest.fn();
    Entity(mockCallback);
    expect(mockCallback).toHaveBeenCalledWith();
  });
  
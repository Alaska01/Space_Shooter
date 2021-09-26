import { getBoard, postScore } from '../src/Scenes/api/api';

const output = {
  result: [
    {
      user: 'TEST',
      score: 805,

    },
  ],
};

const output2 = {
  result: [
    {
      user: 'ss',

    },
  ],
};
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(output),
}));

describe('Returns a Json Object from API', () => {
  it('The Data is an object', async () => {
    const data = await getBoard();
    expect(data).toBe(output);
  });

  it('The Data is an object', async () => {
    const data = await getBoard();
    expect(typeof data).toBe('object');
  });

  it('The Data is an object', async () => {
    const data = await postScore();
    expect(data).toBe(output);
  });

  it('The Data is an object', async () => {
    const data = await getBoard();
    expect(typeof data).toBe('object');
  });
});

describe('Fails to return a Json Object from API', () => {
  it('The Score input is absent', async () => {
    const data = await getBoard();
    expect(data).not.toBe(output2);
  });

  it('The Score input is absent', async () => {
    const data = await postScore();
    expect(data).not.toBe(output2);
  });
});
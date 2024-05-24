import request from 'supertest';
import app from '../app';
import items from '../fakeDb';

let item = { name: 'silly', price: 200 };

beforeEach(() => {
  items.push(item);
});

afterEach(() => {
  items.length = 0;
});

describe('GET /items', () => {
  test('Gets a list of items', async () => {
    const response = await request(app).get('/items');
    const { items } = response.body;
    expect(response.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});
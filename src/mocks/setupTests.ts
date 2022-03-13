import '@testing-library/jest-dom/extend-expect';

import { mswServer } from './server/mswServer';

beforeAll(() => {
  mswServer.listen();
});

afterAll(() => {
  mswServer.close();
});

afterEach(() => {
  mswServer.resetHandlers();
});

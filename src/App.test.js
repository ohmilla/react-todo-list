import { render } from '@testing-library/react';
import App from './App';

// smoke test
test('renders without crashing', () => {
  render(<App />);
});

// snapshop test
test ('matches snapshot', () => {
  const {asFragment} = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
})

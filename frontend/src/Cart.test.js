import { render, screen } from '@testing-library/react';
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';


test('Rendering Cart Component', () => {
  render(<Router><Cart /></Router>);
  const t1 = screen.getByTestId("cartComp");
  expect(t1).toBeInTheDocument();
});

test('test 2 for Cart', () => {
    render(<Router><Cart /></Router>);
    const t2 = screen.getByTestId("cartComp");
    expect(t2).toHaveTextContent('Product');
  });

  test('test 3 for Cart', () => {
    render(<Router><Cart /></Router>);
    const t3 = screen.getByTestId("cartComp");
    expect(t3).toHaveTextContent('Price');
  });

  test('test 4 for Cart', () => {
    render(<Router><Cart /></Router>);
    const t4 = screen.getByTestId("cartComp");
    expect(t4).toHaveTextContent('Quantity');
  });

  test('test 5 for Cart', () => {
    render(<Router><Cart /></Router>);
    const t5 = screen.getByTestId("cartComp");
    expect(t5).toHaveTextContent('Total');
  });

  test('test 6 for Cart', () => {
    render(<Router><Cart /></Router>);
    const t6 = screen.getByTestId("cartComp");
    expect(t6).toHaveTextContent('Remove');
  });

  test('test 7 for Cart', () => {
    render(<Router><Cart /></Router>);
    const t7 = screen.getByTestId("cartComp");
    expect(t7).toHaveTextContent('Cart Totals');
  });

  test('test 8 for Cart', () => {
    render(<Router><Cart /></Router>);
    const t8 = screen.getByTestId("cartComp");
    expect(t8).toHaveTextContent('Total');
  });

  test('test 9 for Cart', () => {
    render(<Router><Cart /></Router>);
    const t9 = screen.getByTestId("cartComp");
    expect(t9).toHaveTextContent('Proceed To Checkout');
  });
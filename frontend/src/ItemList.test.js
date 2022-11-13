import { render, screen } from '@testing-library/react';
import ItemList from './components/Items/ItemList';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

test('Rendering Product List', () => {
  render(<Router><ItemList /></Router>);
  const t1 = screen.getByTestId("itemListComp");
  expect(t1).toBeInTheDocument();
});

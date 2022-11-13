import { render, screen } from '@testing-library/react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

test('Rendering Navbar Component', () => {
  render(<Router><Navbar /></Router>);
  const t1 = screen.getByTestId("NavbarComp");
  expect(t1).toBeInTheDocument();
});

test('test 2 for Nav Bar', () => {
    render(<Router><Navbar /></Router>);
    const t2 = screen.getByTestId("NavbarComp");
    expect(t2).toHaveTextContent('armoire');
  });

  test('test 3 for Nav Bar', () => {
    render(<Router><Navbar /></Router>);
    const t3 = screen.getByTestId("NavbarComp");
    expect(t3).toHaveTextContent('Home');
  });

  test('test 4 for Nav Bar', () => {
    render(<Router><Navbar /></Router>);
    const t4 = screen.getByTestId("NavbarComp");
    expect(t4).toHaveTextContent('Shop');
  });

  test('test 5 for Nav Bar', () => {
    render(<Router><Navbar /></Router>);
    const t5 = screen.getByTestId("NavbarComp");
    expect(t5).toHaveTextContent('Services');
  });

  test('test 6 for Nav Bar', () => {
    render(<Router><Navbar /></Router>);
    const t6 = screen.getByTestId("NavbarComp");
    expect(t6).toHaveTextContent('Blog');
  });

  test('test 7 for Nav Bar', () => {
    render(<Router><Navbar /></Router>);
    const t7 = screen.getByTestId("NavbarComp");
    expect(t7).toHaveTextContent('Contact us');
  });

  



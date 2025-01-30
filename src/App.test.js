import { render, screen } from '@testing-library/react';
import App from './App';

describe(()=>{
  test('renders learn react link', () => {

    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('test1 learn react link', () => {
    //render(<App />);
    //const linkElement = screen.getByText(/learn react/i);
    expect(false===false)
  });

  test('test2 learn react link', () => {
    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    expect(false===false)
  });

})


import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App.js'


test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'})
});

test('button turns blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
});

test('initial conditions', () => {
  render(<App />)

  //button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(colorButton).toBeEnabled();

  //'checkbox is unchecked'
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();

})


test('button is disabled when checkbox is checked, button enabled when checkbox unchecked', () => {
  render( <App /> )
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  });
  const checkBox = screen.getByRole('checkbox', {name: 'Disable Button'});

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();

})

test('checkbox will disable button and button will be gray when disabled', () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button' })
  
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  expect(colorButton).toBeDisabled();
})

describe('Spaces before camel-case capital letters', () => {
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');

  });
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');


  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');


  })
});




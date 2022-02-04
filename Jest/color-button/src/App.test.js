import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
});

test('button turns blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton.textContent).toBe('Change to red')
});

test('initial conditions', () => {
  render(<App />)

  //button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled();

  //'checkbox is unchecked'
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();

})


test('button is disabled when checkbox is checked, button enabled when checkbox unchecked', () => {
  render( <App /> )
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue'
  });
  const checkBox = screen.getByRole('checkbox', {name: 'Disable Button'});

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();

})

test('checkbox will disable button and button will be gray when disabled', () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button' })
  
  fireEvent.click(checkBox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  expect(colorButton).toBeDisabled();
})




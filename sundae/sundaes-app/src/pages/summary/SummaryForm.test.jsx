import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import SummaryForm from "./SummaryForm.jsx";


test('Initial Conditions', () => {
    render(<SummaryForm />)
    
    const checkbox = screen.getByRole('checkbox', { name: "I agree to Terms and Conditions" })
    
    expect(checkbox).not.toBeChecked

    const confirmButton = screen.getByRole('button', { name: /confirm order/i })
    expect(confirmButton).toBeDisabled
});

test('Checkbox enables button', () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', { name: "I agree to Terms and Conditions" })
    userEvent.click(checkbox)
    const confirmButton = screen.getByRole('button', { name: /confirm order/i })
    expect(confirmButton).toBeEnabled

    userEvent.click(checkbox)
    expect(confirmButton).toBeDisabled
})

test('Popover response to hover', async () => {
    //popover starts hidden
    render(<SummaryForm />)
    
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i)

    expect(nullPopover).not.toBeInTheDocument

    //appears with mouseover
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    userEvent.hover(termsAndConditions)

   const popover  = screen.queryByText(/no ice cream will actually be delivered/i)
    expect(popover).toBeInTheDocument

     //disappears when we mouse out
    userEvent.unhover(termsAndConditions)
    await waitForElementToBeRemoved(() =>  screen.queryByText(/no ice cream will actually be delivered/i))


})
import { render, screen } from '@testing-library/react'
import SummaryForm from '../summary/SummaryForm'
import userEvent from '@testing-library/user-event'

test('Initial conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    
    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', { name: /confirm order/i })
    expect(confirmButton).toBeDisabled();
})

test('Checkbox disables button on the first click and enables on the second click', () => {
    render(<SummaryForm />);
    
    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const confirmButton = screen.getByRole('button', { name: /confirm order/i });

   userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();

})

test('Popover response to hover', () => {
    //popover is hidden when page loads
    render(<SummaryForm/>)
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);

    expect(nullPopover).not.toBeInTheDocument();

    //popover appears with mouse over

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

     //popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    const nullPopoverAgain = screen.queryByText(/no ice cream will actually be delivered/i);

    expect(nullPopoverAgain).not.toBeInTheDocument();





   


})



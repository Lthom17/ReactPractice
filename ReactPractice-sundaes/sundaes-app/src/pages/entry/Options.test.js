import { render, screen } from '@testing-library/react'

import Options from '../Options'

test('Displays image for each scoop from the server', () => {
    render(<Options optionType='scoops' />);

    const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((element) => element.altText);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});
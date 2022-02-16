import { render, screen } from '@testing-library/react'

import Options from './Options'

test('Displays image for each scoop from the server', async () => {
    render(<Options optionType='scoops' />);

    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(3);

    const altText = scoopImages.map((element) => element.altText);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop', 'Strawberry scoop']);
});
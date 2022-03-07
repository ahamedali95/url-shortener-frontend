import React from 'react';
import { screen, render, RenderResult } from '@testing-library/react';
import App from '../../components/App';

describe('App Component', () => {
    let componet: RenderResult;

    beforeEach(() => {
        componet = render(<App />);
    });

    it('should render application logo', () => {
        expect(screen.getByText('URL Shortener') as HTMLHeadingElement).toBeInTheDocument();
    });
});
import React from 'react';
import { screen, render, RenderResult, fireEvent } from '@testing-library/react';
import UrlEntry, {UrlEntryProps} from '../../components/UrlEntry';

describe('UrlEntry Component', () => {
    let componet: RenderResult;
    const mockHandleChange: jest.Mock = jest.fn();
    const mockHandleClickMock: jest.Mock = jest.fn();
    const properties: UrlEntryProps = {
        handleChange: mockHandleChange,
        handleClick: mockHandleClickMock,
        value: '',
        detailsLoading: false
    };
    const getComponent = (properties: UrlEntryProps): JSX.Element => {
        return <UrlEntry {...properties} />;
    };

    beforeEach(() => {
        componet = render(getComponent(properties));
    });

    it('should render the subtitle and description', () => {
        expect(screen.getByText('Paste the url to be shortened') as HTMLHeadingElement).toBeInTheDocument();
        expect(screen.getByText('Use this URL Shortener tool to shorten your URL so it is easy to remember. Give it a try!') as HTMLHeadingElement).toBeInTheDocument();
    });

    it('should render an entry field to enter url', () => {
        expect(screen.getByLabelText('urlEntry').querySelector('input') as HTMLInputElement).toBeInTheDocument();
    });

    it('should render a button to submit url entered and should be in disabled state', () => {
        const shortenUrlBtn = screen.getByRole('button', { name: 'Shorten URL' }) as HTMLButtonElement;

        expect(shortenUrlBtn).toBeInTheDocument();
        expect(shortenUrlBtn).toBeDisabled();
    });


    it('should handle scenario when invalid url is provided', async () => {
        componet.rerender(getComponent({ ...properties, value: 'https://www.google.' }));
        const urlSubmitBtn = screen.getByRole('button', { name: 'Shorten URL' }) as HTMLButtonElement;

        expect(screen.getByText('Invalid entry') as HTMLParagraphElement).toBeInTheDocument();
        expect(urlSubmitBtn).toBeDisabled();

        componet.rerender(getComponent({ ...properties, value: 'https://www.google.com' }));

        expect(screen.queryByText('Invalid entry') as HTMLParagraphElement).not.toBeInTheDocument();
        expect(urlSubmitBtn).toBeEnabled();
    });

    it('should disabled submit button when url submission in progress', () => {
        componet.rerender(getComponent({ ...properties, value: 'https://www.google.com', detailsLoading: true }));

        expect(screen.getByRole('button', { name: 'Shorten URL' }) as HTMLButtonElement).toBeDisabled();
    });

    it('should call ~mockHandleChange~ when url entry is done', () => {
        fireEvent.change(screen.getByLabelText('urlEntry').querySelector('input') as HTMLInputElement, { target: { value: 'hello' } });

        expect(mockHandleChange).toHaveBeenCalledWith('hello');
    });

    it('should call ~mockHandleClick~ when submit button is clicked', () => {
        componet.rerender(getComponent({ ...properties, value: 'https://www.google.com', detailsLoading: false }));
        fireEvent.click(screen.getByRole('button', { name: 'Shorten URL' }) as HTMLButtonElement);

        expect(mockHandleClickMock).toHaveBeenCalled();
    });
});
import React from 'react';
import { screen, render, RenderResult, fireEvent } from '@testing-library/react';
import DetailsSection, {DetailsSectionProps} from "../../components/DetailsSection";

describe('DetailsSection Component', () => {
    let componet: RenderResult;
    const properties: DetailsSectionProps= {
        data: null,
        loading: true,
        errorMessage: 'Something wrong!'
    };
    const getComponent = (properties: DetailsSectionProps): JSX.Element => {
        return <DetailsSection {...properties} />;
    };

    beforeEach(() => {
        componet = render(getComponent(properties));
    });

    it('should handle loading state', () => {
        expect(screen.getByRole('progressbar') as HTMLProgressElement).toBeInTheDocument();
    });

    it('should render data during success state', () => {
        componet.rerender(getComponent({
            ...properties,
            loading: false,
            data: {
                _id: 'hx0apl',
                shortUrl: 'http://localhost:8080/hx0apl',
                longUrl: 'https://www.google.com/search?q=react+testing+library+renders+without+crashing&rlz=1C5CHFA_enUS995US995&ei=mpUlYvb4I_WlptQPx8-EqAQ&oq=react+testing+library+renders+w&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BQgAEJECOg4ILhCxAxCDARDUAhCRAjoICC4QgAQQsQM6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToICC4QsQMQgwE6CwguEIAEEMcBEKMCOhEILhCABBCxAxCDARDHARDRAzoECAAQQzoHCC4Q1AIQQzoKCAAQsQMQgwEQQzoQCC4QsQMQgwEQxwEQ0QMQQzoOCC4QgAQQsQMQxwEQowI6CgguEMcBENEDEEM6DgguEIAEELEDEIMBENQCOgcIABCxAxBDOggIABCABBCxAzoECAAQDUoECEEYAEoECEYYAFAAWKsgYOsoaABwAXgBgAHdAogBlhSSAQgxOC4zLjIuMZgBAKABAcABAQ&sclient=gws-wiz'
            }
        }));

        expect(screen.getByLabelText('shortUrlDisplay').querySelector('input') as HTMLInputElement).toBeDisabled();
        expect(screen.getByRole('button', { name: 'Copy URL' } ) as HTMLButtonElement).toBeInTheDocument();

        //should copy short url to clipboard
        Object.assign(window.navigator, {
            clipboard: {
                writeText: jest.fn().mockImplementation(() => Promise.resolve()),
            },
        });

        fireEvent.click(screen.getByRole('button', { name: 'Copy URL' } ));
        expect(window.navigator.clipboard.writeText)
            .toHaveBeenCalledWith('http://localhost:8080/hx0apl');
    });

    it('should render error during failure state', () => {
        componet.rerender(getComponent({
            ...properties,
            loading: false
        }));

        expect(screen.getByText('Something wrong!') as HTMLDivElement).toBeInTheDocument;
    });
});
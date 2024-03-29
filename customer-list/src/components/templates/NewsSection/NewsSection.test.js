import React from "react";
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, {query} from "./NewSection";
import { renderWithProviders} from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);

describe('New Section', ()=>{
    afterEach(() => {
        mock.reset();
    })


    it('displays error when the article are not loged correctly', async ()=>{
        mock.onPost('https://graphql.datocms.com/', {query}).reply(500);
        renderWithProviders(<NewsSection />);
        await screen.findByText(/Sorry/);
    })

    it('display the articles', async ()=>{
        mock.onPost('https://graphql.datocms.com/', {query}).reply(200, {
            data: {
                allArticles:[{id:1, title: 'Test', category: 'Test', content: 'Test'}]
            },
        });
        renderWithProviders(<NewsSection />);
        await screen.findAllByText(/Test/);
    });
});
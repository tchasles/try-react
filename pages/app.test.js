import React from 'react';
import {
    render,
    screen,
    waitForElementToBeRemoved
} from '@testing-library/react';

import Videos from '../components/Videos';
import Home from "./index";


describe('Videos', () => {
    test('renders Videos component', async() => {
        render(Home());
        await waitForElementToBeRemoved(() => screen.getByText('Loading...')).then(() =>
            expect(document.getElementsByClassName("poster").length).toEqual(16),
        )
    });
});


describe('Funzone', () => {
    test('Funzone check if response is correct', async() => {
        render( <Videos tags={"Funzone"} similar={false}/>);
        await waitForElementToBeRemoved(() => screen.getByText('Loading...')).then(() =>
            expect(screen.getAllByText("Funzone").length > 0).toBeTruthy(),
        );
    });
});

describe('Testimoniales', () => {
    test('Testimoniales  check if response is correct', async() => {
        render( <Videos tags={"Testimoniales"} similar={false}/>);
        await waitForElementToBeRemoved(() => screen.getByText('Loading...')).then(() =>
            expect(screen.getAllByText("Testimoniales").length > 0).toBeTruthy(),
        );
    });
});
import React from 'react';
import {
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved
} from '@testing-library/react';

import Videos from '../components/Videos';
import Navigation from '../components/Navigation';
import Poster from '../components/Poster';
import Video from '../components/Video';
import Home from "./index";
import {wait} from "next/dist/build/output/log";
import Detail from "./video/[tag]/[id]";
import VideoTag from "./videotag/[tag]";


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

describe('Detail', () => {
    test('check if video component is correct', async() => {
        render( Detail({tag:"", id: "3e5bb9ff-298e-4573-b5a9-d18c84a04447"}));
        await waitForElementToBeRemoved(() => screen.getByText('Loading...')).then(() =>
            expect(screen.getAllByText("Testimoniales").length > 0).toBeTruthy(),
        );
    });
});
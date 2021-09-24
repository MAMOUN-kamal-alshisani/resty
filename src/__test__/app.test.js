import React from "react";

import { render,fireEvent,waitFor,screen} from "@testing-library/react";

import '@testing-library/jest-dom';
import App from '../app';

describe('react app', ()=>{

it('should load and display defualt data',async()=>{

    render(<App/>)
})



})



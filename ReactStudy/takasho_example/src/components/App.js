import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {Header} from "./ui/Header";
import {ExampleDraggable} from "./ui/moveable_objects/example_draggable"
import theme from './theme/Theme'

export const App = () => {
    const [loadingState, setloadingState] = useState(true);

    useEffect(() => {

    });

    return (
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Header/>
              <div>Takasho</div>
              <Switch>
              </Switch>
            <ExampleDraggable/>
            </BrowserRouter>
          </ThemeProvider>
    );
}

export default App;


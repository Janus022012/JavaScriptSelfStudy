import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {Header} from "./ui/Header";
import theme from './theme/Theme'

export const App = () => {
    return (
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Header/>
              <div>Takasho</div>
              <Switch>
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
    );
}

export default App;


import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "@material-ui/styles";
import {Header} from "./ui/Header";
import theme from './ui/Theme'

export let App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Switch>
                        {/*exactはURLが部分一致ではなく、完全一致により遷移する設定を示す。*/}
                    <Route exact path="/" component={() => <div>home</div>}/>
                    <Route exact path="/services" component={() => <div>services</div>}/>
                    <Route exact path="/customsoftware" component={() => <div>customsoftware</div>}/>
                    <Route exact path="/mobileapps" component={() => <div>mobileapp</div>}/>
                    <Route exact path="/websites" component={() => <div>website</div>}/>
                    <Route exact path="/revolution" component={() => <div>revolution</div>}/>
                    <Route exact path="/contact" component={() => <div>contact</div>}/>
                    <Route exact path="/estimate" component={() => <div>estimate</div>}/>
                    <Route exact path="/about" component={() => <div>about</div>}/>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;

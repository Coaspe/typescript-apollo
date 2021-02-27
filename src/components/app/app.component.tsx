import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import '../../common/styles';
import './app.component.css';

import Header from '../header/header.component';
import About from '../../pages/about/about.page';
import Home from '../../pages/home/home.page';
import client from '../../common/apollo-client';


const App : React.FC = () => {
    return(
        // ApolloProvider로 wrap 하므로써 어디에서든 사용이 가능하다.
        <ApolloProvider client={client}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
        
    );
}

export default App;
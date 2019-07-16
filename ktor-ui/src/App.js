import React, {Component} from 'react';

import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <br/>
                    <Routes/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
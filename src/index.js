import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2'; 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={'/page1'} element={<Page1 />}/>
                <Route path={'/page2'} element={<Page2 />}/>
                <Route path={'/'} element={<App />}/>
            </Routes>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();

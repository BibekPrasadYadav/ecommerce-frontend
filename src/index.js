import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux"
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { Auth0Provider } from '@auth0/auth0-react';
import UserOptions from './components/Header/UserOptions';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <Auth0Provider
  //   domain="dev-ctugy4rmzjdt11zs.us.auth0.com"
  //   clientId="NIwGeVCj9c0B5nNVPby6j6uwOMStPjNN"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>
  //   </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalStyle from './components/GlobalStyle';
import { CartProvider } from './context/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle>
            <CartProvider>
                <App />
            </CartProvider>
        </GlobalStyle>
    </React.StrictMode>,
);

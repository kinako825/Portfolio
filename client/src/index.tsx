import ReactDOM from 'react-dom/client';
// import React from 'react';
import App from './App';



const root = document.getElementById('root');
if (root) {
    const rootElement = ReactDOM.createRoot(root);
    rootElement.render(<App />);
} else {
    console.error('Root element not found');
}



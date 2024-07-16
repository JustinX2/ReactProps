import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './FirstComponent';
import NamedComponent from './NamedComponent';

function App(){
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Sally" />
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
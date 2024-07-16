import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

function App(){
    return(
        <div>
            <Tweet
                username="catperson99"
                name="Cat Person"
                date={new Date().toDateString()}
                message="I'm a cat person."
            />
            <Tweet
                username="dogperson99"
                name="Dog Person"
                date={new Date().toDateString()}
                message="I'm a dog person."
            />
            <Tweet
                username="birdperson99"
                name="Bird Person"
                date={new Date().toDateString()}
                message="I'm a bird person."
            />
        </div>
    );
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
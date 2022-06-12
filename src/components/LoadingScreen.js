import React from 'react';
import "../styles/loading-screen.css"

const LoadingScreen = () => {
    return (
        <div className='overlay'>
            <div class="lds-hourglass"></div>
        </div>
    );
};

export default LoadingScreen;
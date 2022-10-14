/*
    About: Main Home Page
*/

import * as React from 'react';

// Routing
import { useNavigate } from 'react-router-dom';

// My Components
import Button from '../../components/general/Button';


// Components
const Home = () => {
    // Navigate
    const navigate = useNavigate();

    return (
        <div className='home-container disable-gutters'>
            <h1 className='home-title disable-gutters'>
                Your Language Library Catalogue
            </h1>
            <p className='home-subtitle'>
                Language learning through immersion, the fun way!
            </p>
            <Button title="Start Here" onClick={() => navigate('/start')} />
        </div>
    )
};


export default Home;
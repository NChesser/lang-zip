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
        <div className='home-container'>
            <h1>
                Welcome To This Amazing App
            </h1>
            <h3>
                Lots Cool Stuff Here
            </h3>
            <Button title="Start Here" onClick={() => navigate('/start')} />
        </div>
    )
};


export default Home;
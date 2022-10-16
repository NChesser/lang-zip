/*
    About: Main Home Page
*/

import * as React from 'react';

// Routing
import { useNavigate } from 'react-router-dom';

// Helper Modules
import { sample, random } from 'lodash';

// My Components
import Button from '../../components/general/Button';


type FireflyProps = {
    id: number
}


const colors = ['red', 'green', 'blue'];


const Firefly = ({ id }: FireflyProps) => {

    const fireflyId = `firefly-${id}`;





    return (
        <div id={`firefly-${id}`} className='firefly' />
    )
}


// Components
const Home = () => {
    // Navigate
    const navigate = useNavigate();

    // // Effects
    // React.useEffect(() => {
    //     let firefly = document.getElementById('firefly-1');

    //     setInterval(() => {
    //         const newColor = sample(colors);
    //         const topRandom = random(0, 1600);
    //         const leftRandom = random(0, 1600);
    //         console.log("🚀 ~ file: Home.tsx ~ line 52 ~ setInterval ~ leftRandom", leftRandom)

    //         firefly?.setAttribute('style', `background-color: ${newColor}; margin-top: ${topRandom}; margin-left: ${leftRandom};`);
    //     }, 2000);

    // }, []);


    return (
        <div className='home-container disable-gutters'>
            <Firefly id={1} />
            <h1 className='home-title disable-gutters'>
                Your Language Library Catalogue
            </h1>
            <p className='home-subtitle'>
                Language learning through immersion a.k.a. the fun way!
            </p>
            <Button title="Start Here" onClick={() => navigate('/start')} />
        </div>
    )
};


export default Home;
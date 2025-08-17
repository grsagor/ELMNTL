import React from 'react';
import RotatingText from '../components/RotatingText';
import CardSlider from '../components/CardSlider';
import CTA1 from '../components/CTA1';
import CTA2 from '../components/CTA2';
import CTA3 from '../components/CTA3';

const Home = () => {
    return (
        <div>
            <RotatingText/>
            <CardSlider />
            <CTA1 />
            <CTA2 />
            <CTA3 />
        </div>
    );
};

export default Home;
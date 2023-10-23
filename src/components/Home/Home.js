import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
   const countries = useLoaderData()
   
    return (
        <div>
            <h2>Home Component</h2>
        </div>
    );
};

export default Home;
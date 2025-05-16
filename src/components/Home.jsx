import React from 'react';
import Banner from './Banner';
import Features from './Features';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const Coffees = useLoaderData()
    console.log(Coffees)
    return (
        <div>
         <div className=''> 
             <Banner></Banner>
             </div>
         <div>
            <Features></Features>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-20'>
            {
                Coffees.map(coffee=> <CoffeeCard
                key={coffee._id}
                coffee = {coffee}
                ></CoffeeCard>)
            }
         </div>
        </div>
    );
};

export default Home;
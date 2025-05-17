import React, { useState } from 'react';
import Banner from './Banner';
import Features from './Features';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData()

    // console.log(Coffees)
    const [coffees, setCoffees] = useState(initialCoffees)
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
                coffees.map(coffee=> <CoffeeCard
                key={coffee._id}
                coffee = {coffee}
                coffees = {coffees}
                setCoffees ={setCoffees}
                ></CoffeeCard>)
            }
         </div>
        </div>
    );
};

export default Home;
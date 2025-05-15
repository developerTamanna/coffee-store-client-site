import React from 'react';

const Banner = () => {
    return (
        <div>
      <section className="relative">
  <img
    src="https://i.postimg.cc/BXkwDNmq/12.jpg"
    alt="Banner"
    className="w-full h-[500px] object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] to-[#00000033] flex flex-col justify-center items-center text-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Would you like a Cup of Delicious Coffee?
    </h1>
    <p className="max-w-2xl mb-6 text-sm md:text-base">
      It’s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment! Enjoy the beautiful moments and make them memorable.
    </p>
    <button className="bg-[#e3b577] hover:bg-[#d8a654] text-black font-semibold px-6 py-2 rounded">
      Learn More
    </button>
  </div>
</section>


        </div>
    );
};

export default Banner;
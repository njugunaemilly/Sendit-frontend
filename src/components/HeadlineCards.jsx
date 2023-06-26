import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Ensuring Your Convenience</p>
          <p className='px-2'>
At Sendit Couriers, we understand that your time is valuable, and that's why we have designed our services to provide you with seamless and hassle-free courier solutions. </p>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src="https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>InterContinental Shipping</p>
          <p className='px-2'>Coming Soon</p>

        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        //   src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          src ='https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver All Over Nairobi</p>
          <p className='px-2'>
At Sendit Couriers, we take pride in our extensive coverage of Nairobi, ensuring that we deliver to every corner of this vibrant city.</p>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
        //   src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          src="https://images.pexels.com/photos/14167593/pexels-photo-14167593.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
import React from 'react';

const Header = () => {
  return (
    <div className='w-full font-display text-4xl text-[#9F9F9F] items-center hidden mt-2 h-20 bg-transparent lg:flex justify-between px-20'>
      <div>designbucket</div>
      <div className='flex gap-10'>
        <div>work</div>
        <div>about me </div>
        <div>startup</div>
      </div>
    </div>
  );
};

export default Header;

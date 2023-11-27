import React from 'react';

const HeadlineCard = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
                    <p className='font-bold text-2xl px-2 pt4'>sun's out ,bogo out's</p>
                    <p className='px-2'>through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 w-[90px] font-bold'>order-now</button>
                </div>
                <img 
                  className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
                    <p className='font-bold text-2xl px-2 pt4'>new restraurants</p>
                    <p className='px-2'>load daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 w-[90px] font-bold'>order-now</button>
                </div>
                <img 
                  className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl  text-white'>
                    <p className='font-bold text-2xl px-2 pt4'>we deserve dessert too</p>
                    <p className='px-2'>tasty treat</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 w-[90px] font-bold'>order-now</button>
                </div>
                <img 
                  className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=600
                '/>
            </div>
        </div>
    );
}

export default HeadlineCard;

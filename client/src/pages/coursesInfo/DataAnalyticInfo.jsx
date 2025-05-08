import React from 'react';
import { HiringCompanies } from '../Home';

const DataAnalyticInfo = () => {
    return (
        <div className="w-full">
            <div className='flex items-center justify-center flex-col'>
                <div>
                    <img src="./images/purple_black.svg" alt="" draggable="false" />
                </div>
                <div className='mt-20 sm:mt-5'>
                    <img src="./images/purple_black1.svg" alt="" draggable="false" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl md:text-5xl text-center mt-10 font-[agrandir] border-8 border-orange-500 lg:w-2/5 m-auto'>Top Hiring Companies</h1>
                <HiringCompanies />
            </div>
            <div className='flex items-center justify-center'>
                <img src="./images/3dimage.svg" alt="" draggable="false" />
            </div>
        </div>
    );
};

export default DataAnalyticInfo;
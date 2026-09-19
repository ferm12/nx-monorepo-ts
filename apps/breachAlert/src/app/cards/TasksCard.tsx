import React from 'react';

export default function TasksCard(){
    return (
        <div className='border-2 border-black w-5xl'>
            <h2 className="border-gray-200 bg-gray-400"> Upcoming Tasks</h2>
            <div>
                <ul>
                    <li>Call frank @ 10am</li>
                    <li>Prepare important customer report</li>
                    <li>1:1 meeting with Josh</li>
                    <li>Draft strategy for q3</li>
                </ul>
            </div>
        </div>
    );
}
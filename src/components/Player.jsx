import { UserRound } from 'lucide-react';
import { Flag } from 'lucide-react';

const Player = ({player,handleChoosePlayer}) => {
    const {name,country,position,foot,price,img} = player
    return (
        <div className='border border-gray-300 p-5 rounded-2xl space-y-4'>
            <div><img className="h-75 rounded-3xl" src={img} alt="" /></div>
            <div className='flex gap-2 items-center'><UserRound className='text-gray-800' fill='currentColor'></UserRound> <p className='font-bold'>{name}</p></div>
            <div className='flex justify-between items-center border-b border-gray-300  pb-4'>
                <span className='flex gap-2'>
                    <Flag className='text-gray-500' fill='currentColor'></Flag>
                    <span className='font-medium text-gray-500 '>{country}</span>
                </span>
                <span className='bg-gray-100 py-2.5 px-4 rounded-lg font-medium text-gray-800'>{position}</span>
            </div>
           
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>{foot}-footed</p>
                <p className='text-gray-500 font-medium'>{foot}-footed</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Price: ${price}</p>
                <button onClick={()=>handleChoosePlayer(player)} className='px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 active:bg-white'>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;
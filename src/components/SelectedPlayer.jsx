import { Trash } from 'lucide-react';
const SelectedPlayer = ({player}) => {
    const {name,img,position} = player
    return (
        <div className="border border-gray-300 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-6">
                <div>
                    <img className="w-20 rounded-2xl" src={img} alt="" />
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-gray-500 font-medium">{position}</p>
                </div>
            </div>
            <div>
                <Trash className='cursor-pointer' color='#F14749'></Trash>
            </div>
        </div>
    );
};

export default SelectedPlayer;
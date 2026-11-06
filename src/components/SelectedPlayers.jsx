import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({setActive,selected}) => {
    
    
    return (
        <div className="mt-22">
            <div className="flex justify-between items-center mb-12 ">
                <div> 
                    <h3 className="text-sm md:text-xl font-bold">Selected players</h3>
                </div>
                <div className="flex">
                    <button onClick={()=>setActive('available')} className="border-2 px-2 md:px-7 text-xs md:text-lg py-1 md:py-3.5 text-gray-500 font-medium border-gray-300  rounded-l-xl">Available</button>
                    <button onClick={()=>setActive('selected')} className="px-2 md:px-7 text-xs md:text-lg py-1 md:py-3  font-bold  bg-[#E7FE29] rounded-r-xl">Selected({selected.length})</button>
                </div>
            </div>  
            <div className="grid grid-cols-1 gap-6">
                {
                    selected.map(player => <SelectedPlayer key={player.id} player={player}></SelectedPlayer>)
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;
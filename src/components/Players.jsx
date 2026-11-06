import { useEffect, useState } from "react";
import Player from "./Player";

const Players = ({selected,handleChoosePlayer,setActive}) => {
    const [players,setPlayers] = useState([])
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    return (
        <div className="mt-22">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h3 className="text-sm md:text-xl font-bold">Available players</h3>
                </div>
                <div className="flex">
                    <button onClick={()=>setActive('available')} className="px-2 md:px-7 text-xs md:text-lg py-1 md:py-3.5 font-bold bg-[#E7FE29] rounded-l-xl">Available</button>
                    <button onClick={()=>setActive('selected')} className="px-2 md:px-7 text-xs md:text-lg py-1 md:py-3 text-gray-500 font-medium border-2 border-gray-300 rounded-r-xl">Selected({selected.length})</button>
                </div>
            </div>       
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                 {
                    players.map(player => <Player handleChoosePlayer={handleChoosePlayer} key={player.id} player={player}></Player>)
                 }
            </div>     
        </div>
    );
};

export default Players;
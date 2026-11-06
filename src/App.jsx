import { ToastContainer, toast } from "react-toastify";
import './App.css'
import Header from "./components/Header";
import { useState } from "react";
import Banner from "./components/Banner";
import Players from "./components/Players";
import SelectedPlayers from "./components/SelectedPlayers";
function App() {
  const [amount,setAmount] = useState(0)
  const [selected,setSelected] = useState([])
  const [active,setActive] = useState('available')

  const handleDelete = player => {
    const newSelected = selected.filter(p => p.id !== player.id)
    toast.success('Player removed Successfully')
    setSelected(newSelected)
  }
  const handleClaim = () => {
     setAmount(amount + 1000000)
      setTimeout(() => toast.success('Credit added to your account'),350)
  }
  const handleChoosePlayer = player => {
     const alreadySelected = selected.find(p => p.id === player.id)
     if(player.price > amount){
      return toast.warning('You dont have enough money!')
     }
     if(selected.length > 7){
     return toast.warning('Maximum selected players reached!')
     }
     if(alreadySelected){
      return toast.warning('This player is already selected!')
     }
     else{
      setAmount(amount - player.price)
      setSelected([...selected,player])
      toast.success(`${player.name} is selected successfully`)
     }
  }
  return (
    <>
      <Header amount={amount}></Header>
      <main className="w-11/12 mx-auto">
        <Banner handleClaim={handleClaim}></Banner>
        {active === 'available'? <Players setActive={setActive} handleChoosePlayer={handleChoosePlayer} selected={selected}></Players>:<SelectedPlayers handleDelete={handleDelete} selected={selected} setActive={setActive}></SelectedPlayers>}
      </main>
         
      <ToastContainer  position="top-center" />
    </>

  )
}

export default App

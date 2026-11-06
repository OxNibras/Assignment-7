import logo from '../assets/logo.png'
import { Menu } from 'lucide-react';
const Header = ({amount}) => {
    return (
        <header className=' sticky top-0 shadow backdrop-blur-2xl'>
            <nav className='md:flex md:justify-between md:items-center w-11/12 mx-auto'>
                <div className='hidden md:flex'>
                    <img className=' w-27' src={logo} alt="" />
                </div>
                <div className='flex gap-0 justify-between  md:gap-17'>
                    <div className='md:flex pt-4'>
                        <ul className='hidden md:flex gap-13 text-gray-500 font-medium'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Fixture</a></li>
                            <li><a href="">Players</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                        <Menu  className='flex md:hidden'/>
                    </div>
                    <div className=' md:border-2 md:border-gray-300 md:py-4 md:px-5 rounded-xl flex justify-center items-center font-semibold'>
                       <span>{amount} Coin 🪙</span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
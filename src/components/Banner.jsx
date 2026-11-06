import bg from '../assets/bg-shadow.png'
import football from '../assets/banner.png'
const Banner = ({handleClaim}) => {
    return (
        <div  style={{backgroundImage: `url(${bg})`}}  className="bg-black w-10/12 mx-auto text-center space-y-5 py-5 px-6 md:px-0 md:py-10 rounded-3xl mt-5">
            <img  className='md:w-96 w-60 mx-auto '  src={football} alt="" />
            <h1 className='text-white  text-2xl md:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Football Team</h1>
            <p className='text-gray-400 font-medium'>Beyond Borders and Beyond Limits</p>
         <button onClick={handleClaim} class="group rounded-2xl border border-lime-400/40 bg-[#1a1a1a] p-1 transition-colors hover:border-lime-400 hover:bg-lime-400">
  <div class="rounded-xl bg-[#d4e830] px-8 py-3 text-lg font-extrabold text-black transition-colors group-hover:bg-[#e2f547] group-active:bg-lime-400/40">
    Claim Free Credit
  </div>
</button>
        </div>
    );
};

export default Banner;
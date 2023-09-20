import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      {/** ==== footer start ==  */}
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make<br/> quality product ?
            </h2>
            <a href="mailto:chamithshirantha99@gmail.com">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
            <i class="ri-mail-line"></i>Hire me</button></a>
          </div>
          <div className='w-full sm:w-1/2'>
          <p className='text-gray-300 leading-7 mt-4 sm:mt-10'>
          I create amazing solutins for my clients, contact us to learn how I can help.
          </p>
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>
                Follo Me:
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href="https://www.linkedin.com/in/chamith-shirantha-08123819a" className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noreferrer">
                <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='https://github.com/chamithshirantha'className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noreferrer"><i class="ri-github-fill"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='https://www.facebook.com/profile.php?id=100009966936605&mibextid=avESrC'className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noreferrer"><i class="ri-facebook-circle-line"></i></a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'>
                <a href='#instgram'className='text-gray-300 font-[500] text-[18px]' target="_blank" rel="noreferrer"><i class="ri-instagram-line"></i></a>
              </span>
            </div>
          </div>
        </div>
        {/** ==== footer top start ==  */}
        <div>
          <ul className='flex items-center justify-center gap-10 mt-10'>
            <li><a className='text-gray-400 font-[600]' href='#about'>About</a></li>
            <li><a className='text-gray-400 font-[600]' href='#services'>Services</a></li>
            {/* <li><a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a></li> */}
            <li><a className='text-gray-400 font-[600]' href='#contact'>Contact</a></li>
          </ul>
        </div>
        {/** ==== footer top end ==  */}
        {/** ==== footer bottom ==  */}
        <div className='bg-[#1b1e29] py-5 mt-14'>
          <div className='container'>
            <div className='flex items-center justify-center sm:justify-between'>
              <div className='hidden sm:block'>
                <div className='flex items-center gap-[10px]'>
                 
                 
                </div>
              </div>
              <div>
                <p className='text-gray-400'>Copyright {year} developed by chamith - All right reserved</p>
              </div>
            </div>
          </div>
        </div>
        
        {/** ==== footer bottom end ==  */}
      </div>
    </footer>
  )
}

export default Footer;

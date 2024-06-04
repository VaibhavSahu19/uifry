import React, { useEffect, useState } from 'react';

function Hero() {
  const [data, setData] = useState(null);

  function fetchData() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Error fetching data', error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!data || !data.hero) {
    return <div>Loading...</div>;
  }

  return (
    <section className='flex flex-col md:flex-row justify-center items-center'>
      <div className='flex flex-col justify-start items-start gap-[20px]'>
        <h2 className='text-[48px] font-bold'>{data.hero.headline}</h2>
        <p className='text-[24px] text-[#a6a4a4]'>{data.hero.subheadline}</p>
        <div className='flex justify-center items-start gap-[20px]'>
          <a
            className='flex justify-center items-center gap-[10px] text-white bg-black px-[25px] py-[10px] rounded-[6px]'
            href={data.hero.ctaButtons[0].link}
          >
            {data.hero.ctaButtons[0].text}
            <img src="/Images/right-arrow.svg" alt="right arrow" />
          </a>
          <a className='flex px-[25px] py-[10px]' href={data.hero.ctaButtons[1].link}>
            {data.hero.ctaButtons[1].text}
          </a>
        </div>
        <div className='w-[80%]'>
          <img className='h-[100%]' src="/Images/hero-img1.png" alt="hero-img1" />
        </div>
      </div>
      <div className='relative w-[400px] h-[600px]'>
        <img className='absolute' src="/Images/hero-img2.png" alt="background rings" />
        <img className='absolute w-[80%] left-[120px] top-[100px]' src="/Images/iphone3.png" alt="iphone3" />
        <img className='absolute left-[60px] top-[40px]' src="/Images/iphone2.png" alt="iphone2" />
        <img className='absolute' src="/Images/iphone1.png" alt="iphone1" />
      </div>
    </section>
  );
}

export default Hero;
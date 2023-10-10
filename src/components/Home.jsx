
import React from 'react';


function Home() {
  return (
    <>
    <div className="container-fluid px-0">
    <div className="banner">
      <img src="./images/banner.jpg" alt="Banner" className='banner_img'/>
      <div className="banner-content">
        <h1 className='Banner_text'>Centered Text</h1>
        <p className='Banner_content'>Your banner text goes here.</p>
        <div className="banner-buttons">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Home;

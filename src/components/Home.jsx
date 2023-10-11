import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="ban_sec">
        <div className="container-fluid px-0">
          <div className="ban_img">
            <img src="images/banner.jpg" alt="banner" border="0" />
            <div className="ban_text">
              <strong>
                <span>Transforming Ideas into IT Excellence</span>
                <br />
              </strong>
              <p>
                Unlocking the Power of Technology. Tailored IT Solutions for
                Your Success. <br />
                Experience Seamless Innovation and Efficiency with Us Today.
              </p>
              <Link to="/">
                <button className="bn632-hover bn27">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section_services">
        <h2 className="text-center mt-4 fw-bold">Services</h2>
        <p className="services_text">
          We can help you bring your product to life - whether it's a Minimum
          Viable Product, UX/UI Services or help to scale your company.
        </p>
        <div className="ag-format-container">
          <div className="ag-courses_box">
            <div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  UI/Web
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  UX/UI Web-Design
                </div>
              </a>
            </div>

            <div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
				Mobile Design
                </div>
              </a>
            </div>
            <div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">Graphic Design</div>
              </a>
            </div>
            <div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">Motion Design</div>
              </a>
            </div>
            <div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  Front-end development&#160;+ jQuery&#160;+ CMS
                </div>
              </a>
            </div>
            <div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">Digital Marketing</div>
              </a>
            </div>
            <div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">Interior Design</div>
              </a>
            </div>
			<div className="ag-courses_item">
              <a href="/" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  SEO & Google Analytics
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

	  <section className="section_services">
        <h2 className="text-center mt-4 fw-bold">Global brands trust Company Name</h2>
        <div className="slider">
	<div className="slide-track mt-4">
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
		</div>
		<div className="slide">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
		</div>
	</div>
</div>
      </section>
    </>
  );
}
export default Home;

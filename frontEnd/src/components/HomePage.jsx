import React from "react";
import "animate.css";
import { Element, scroller } from "react-scroll";

const HomePage = () => {
  const scrollToText = () => {
    scroller.scrollTo("text-section", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div>
      {/* Main Container / Top Container */}
      <div
        className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: `url('https://image.cnbcfm.com/api/v1/image/106881166-16207395582021-05-11t041148z_538144810_rc2fdn9egqcr_rtrmadp_0_israel-palestinians-jerusalem.jpeg?v=1620748160&w=929&h=523&vtcrop=y')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn">
            Donate Now
          </h1>
          <button className="px-8 py-3 bg-blue-500 rounded-full hover:bg-blue-600 text-white text-lg font-medium transition duration-300 animate__animated animate__fadeIn">
            Donate Now
          </button>
        </div>
      </div>

      <div className="py-10 px-4 bg-slate-100 ">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center rounded-xl p-5 shadow-lg hover:shadow-md hover:shadow-right-md hover:shadow-bottom-md hover:shadow-left-md">
          <div className="w-full md:w-1/2">
            <Element name="text-section">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-semibold text-blue-800 mb-6 animate__animated">
                  Our Impact
                </h2>
                <p className="text-gray-700 text-lg mb-6 animate__animated">
                  Discover how we've made a difference. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <div className="border-t border-gray-300 w-1/2 mb-6"></div>
                <button
                  onClick={scrollToText}
                  className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 text-white text-lg font-medium transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </Element>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/11556009/pexels-photo-11556009.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Impact Image"
                  className="object-cover h-64 w-full transform scale-100 hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-4 bg-slate-100">
        <div className="max-w-screen-xl mx-auto flex flex-row-reverse flex-wrap items-center rounded-xl p-5 shadow-lg hover:shadow-md hover:shadow-right-md hover:shadow-bottom-md hover:shadow-left-md">
          <div className="w-full md:w-1/2">
            <Element name="text-section">
              <div className="text-center md:text-left ml-10">
                <h2 className="text-4xl font-semibold text-blue-800 mb-6 animate__animated">
                  Our Impact
                </h2>
                <p className="text-gray-700 text-lg mb-6 animate__animated">
                  Discover how we've made a difference. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <div className="border-t border-gray-300 w-1/2 mb-6"></div>
                <button className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 text-white text-lg font-medium transition duration-300">
                  Learn More
                </button>
              </div>
            </Element>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Impact Image"
                  className="object-cover h-64 w-full transform scale-100 hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-4 bg-slate-100 ">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center rounded-xl p-5 shadow-lg hover:shadow-md hover:shadow-right-md hover:shadow-bottom-md hover:shadow-left-md">
          <div className="w-full md:w-1/2">
            <Element name="text-section">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-semibold text-blue-800 mb-6 animate__animated">
                  Our Impact
                </h2>
                <p className="text-gray-700 text-lg mb-6 animate__animated">
                  Discover how we've made a difference. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <div className="border-t border-gray-300 w-1/2 mb-6"></div>
                <button className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 text-white text-lg font-medium transition duration-300">
                  Learn More
                </button>
              </div>
            </Element>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYI46ChNkM1SchqBJUm-VUhPP6_OPjZ9j8g&usqp=CAU"
                  alt="Impact Image"
                  className="object-cover h-64 w-full transform scale-100 hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-4 bg-slate-100">
        <div className="max-w-screen-xl mx-auto flex flex-row-reverse flex-wrap items-center rounded-xl p-5 shadow-lg hover:shadow-md hover:shadow-right-md hover:shadow-bottom-md hover:shadow-left-md">
          <div className="w-full md:w-1/2">
            <Element name="text-section">
              <div className="text-center md:text-left ml-10">
                <h2 className="text-4xl font-semibold text-blue-800 mb-6 animate__animated">
                  Our Impact
                </h2>
                <p className="text-gray-700 text-lg mb-6 animate__animated">
                  Discover how we've made a difference. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
                <div className="border-t border-gray-300 w-1/2 mb-6"></div>
                <button
                  onClick={scrollToText}
                  className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 text-white text-lg font-medium transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </Element>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://cdn.pixabay.com/photo/2018/11/21/12/14/gaza-3829414_640.jpg"
                  alt="Impact Image"
                  className="object-cover h-64 w-full transform scale-100 hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[50%] flex flex-col justify-center items-center py-[55px] shadow-xl ">
        <div className="w-[80%] h-[250px] md:h-[150px] bg-blue-600  flex flex-col md:flex-row  justify-center items-center text-center rounded-xl mb-5">
          <h1 className="text-lg font-semibold text-black md:pr-10">
            "Your donation today is a lifeline for those in need, helping to
            create a brighter tomorrow."
          </h1>
          <button className="m-5 p-5 md:m-0 md:p-0 md:w-[150px] md:h-[80px]  text-white bg-green-600  hover:bg-red-500 rounded-lg text-xl font-bold">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

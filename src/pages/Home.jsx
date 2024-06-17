import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/Background.png';
import profileImage from '../assets/profile.png';
import instagramIcon from '../assets/instagram.png';
import telegramIcon from '../assets/telegram.png';
import linkedInIcon from '../assets/linkedin.png';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [instagramCount, setInstagramCount] = useState(0);
  const [telegramCount, setTelegramCount] = useState(0);
  const [linkedInCount, setLinkedInCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count % 1000000 === 0 ? (count / 1000000).toFixed(0) : (count / 1000000).toFixed(1)) + 'M';
    } else if (count >= 1000) {
      return (count % 1000 === 0 ? (count / 1000).toFixed(0) : (count / 1000).toFixed(1)) + 'K';
    } else {
      return count;
    }
  };

  useEffect(() => {
    if (inView) {
      const instagramTarget = 2500;
      const telegramTarget = 50000;
      const linkedInTarget = 29000;
      const duration = 1500;
      let start = 0;
      const increment = 50;
      const counter = setInterval(() => {
        start += increment;
        setInstagramCount(Math.min(Math.ceil((start / duration) * instagramTarget), instagramTarget));
        setTelegramCount(Math.min(Math.ceil((start / duration) * telegramTarget), telegramTarget));
        setLinkedInCount(Math.min(Math.ceil((start / duration) * linkedInTarget), linkedInTarget));
        if (start >= duration) {
          clearInterval(counter);
        }
      }, increment);
      return () => clearInterval(counter);
    }
  }, [inView]);

  const slides = [
    {
      name: "John Doe",
      handle: "@tnpofficer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget erat congue, sed interdum ligula porttitor.",
      image: profileImage,
    },
    {
      name: "Jane Smith",
      handle: "@jane_smith",
      description: "Praesent consequat sapien sit amet turpis auctor, at consequat orci malesuada. Curabitur lacinia.",
      image: profileImage,
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const handlePrev = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
    setSlideDirection('left');
  };

  const handleNext = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    setSlideDirection('right');
  };

  return (
    <>
      <style>
        {`
          .button {
            background-color: #2a415f;
            color: white;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem; /* Adjust font size */
            cursor: pointer;
          }

          .slide-container {
            width: 100%;
            height: 30rem;
            overflow: hidden; /* Hide overflowing content */
            position: relative;
          }

          .slide {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to bottom, transparent, white);
            transition: transform 0.5s ease-in-out;
          }

          .slide-enter {
            transform: translateX(${slideDirection === 'left' ? '-100%' : '100%'});
          }

          .slide-enter-active {
            transform: translateX(0%);
          }

          .slide-leave {
            transform: translateX(0%);
          }

          .slide-leave-active {
            transform: translateX(${slideDirection === 'left' ? '100%' : '-100%'});
          }
        `}
      </style>

      <div
        className="bg-cover bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '200vh' }}
      >
        <div className="instructors-container h-screen flex flex-col justify-center items-center">
          <div className="w-full md:w-[65rem] h-[30rem] flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-white">
            <div className="w-full md:w-[90%] pt-8 flex">
              <div className='w-[53rem]'>
              <h2 className="text-2xl md:text-4xl font-bold text-[#2a415f] mb-4">Our Instructors</h2>
              <p className="text-base md:text-lg text-[#2a415f] mb-8">Learn from our Experienced and Dedicated instructors</p>

              </div>
              <div className="flex justify-end items-center w-full px-4 md:px-8">
                <button onClick={handlePrev} className="text-[#2a415f] text-xl md:text-3xl p-2 button">←</button>
                <button onClick={handleNext} className="ml-2 md:ml-4 text-[#2a415f] text-xl md:text-3xl p-2 button">→</button>
              </div>
            </div>
            <div className="w-full h-[5%] flex justify-center items-center">
              <hr className="w-full md:w-[95%] my-4 md:my-8 border-[#2a415f] border-t" />
            </div>
            <div className="slide-container">
              {slides.map((slide, index) => (
                <div key={index} className={`slide ${index === currentSlide ? 'slide-enter-active' : 'slide-leave-active'}`}>
                  <div className="flex flex-col md:flex-row w-full justify-center items-center">
                    <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                      <img src={slide.image} alt="Instructor" className="h-24 w-24 md:h-48 md:w-48 object-cover rounded-full" />
                    </div>
                    <div className="w-full md:w-1/2 p-4 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-[#2a415f] mb-2">{slide.name}</h3>
                      <p className="text-base text-[#2a415f] mb-4">{slide.handle}</p>
                      <p className="text-sm md:text-base text-[#2a415f]">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-[20rem]">
          <h1 className="text-2xl md:text-4xl font-bold text-[#2a415f] mb-4 md:mb-8">Testimonials</h1>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 h-auto md:h-[20rem]">
            <div className="bg-white w-full md:w-1/4 rounded-lg p-4 h-full bg-gradient-to-b from-[#e4f4ff] to-[#fdf7da] ">
              <div className="flex items-center justify-between">
                <img src={profileImage} alt="Profile" className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover" />
                <div className='w-full'>
                  <h4 className="text-[#2a415f] ml-2 md:ml-4 font-medium">Learner Name</h4>
                </div>
              </div>
              <p className="text-[#2a415f] mt-2 md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="bg-white w-full md:w-1/4 rounded-lg p-4 h-full bg-gradient-to-b from-[#e4f4ff] to-[#fdf7da] ">
              <div className="flex items-center justify-between">
                <img src={profileImage} alt="Profile"             className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover" />
                <div className='w-full'>
                  <h4 className="text-[#2a415f] ml-2 md:ml-4 font-medium">Learner Name</h4>
                </div>
              </div>
              <p className="text-[#2a415f] mt-2 md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="bg-white w-full md:w-1/4 rounded-lg p-4 h-full bg-gradient-to-b from-[#e4f4ff] to-[#fdf7da] ">
              <div className="flex items-center justify-between">
                <img src={profileImage} alt="Profile" className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover" />
                <div className='w-full'>
                  <h4 className="text-[#2a415f] ml-2 md:ml-4 font-medium">Learner Name</h4>
                </div>
              </div>
              <p className="text-[#2a415f] mt-2 md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <footer ref={ref} className="bg-[#2a415f] text-white text-center py-4 md:py-8 mt-8 md:mt-16">
          <div className="text-xl md:text-3xl font-bold mb-2 md:mb-4">VAST COMMUNITY OF STUDENTS</div>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="bg-[#2a415f] rounded-full border-2 border-white p-2 flex items-center">
              <p className="text-sm md:text-base text-white mr-2">{formatCount(instagramCount)}+</p>
              <img src={instagramIcon} alt="Instagram" className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="bg-[#2a415f] rounded-full border-2 border-white p-2 flex items-center">
              <p className="text-sm md:text-base text-white mr-2">{formatCount(telegramCount)}+</p>
              <img src={telegramIcon} alt="Telegram" className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div className="bg-[#2a415f] rounded-full border-2 border-white p-2 flex items-center">
              <p className="text-sm md:text-base text-white mr-2">{formatCount(linkedInCount)}+</p>
              <img src={linkedInIcon} alt="LinkedIn" className="h-6 w-6 md:h-8 md:w-8" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
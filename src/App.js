import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import './App.css';

// 슬라이드 데이터 배열 - 이미지, 버튼 텍스트, 설명 포함
const slides = [
  {
    image: require('./img/product1.png'),
    buttonText: 'View Product 1',
    description: 'This is a high-quality fiber used in various applications, providing strength and durability.',
  },
  {
    image: require('./img/product2.png'),
    buttonText: 'View Product 2',
    description: 'Our premium fiber offers exceptional resistance to wear and tear, ideal for industrial use.',
  },
  {
    image: require('./img/product3.png'),
    buttonText: 'View Product 3',
    description: 'Engineered for flexibility and resilience, this fiber is perfect for both fashion and function.',
    isSpecial: true, // 3번째 상품에 대한 특수 스타일을 적용하기 위한 플래그
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

function App() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const nextSlide = () => {
    setCurrentIndex([currentIndex === slides.length - 1 ? 0 : currentIndex + 1, 1]);
  };

  const prevSlide = () => {
    setCurrentIndex([currentIndex === 0 ? slides.length - 1 : currentIndex - 1, -1]);
  };

  const selectSlide = (index) => {
    const dir = index > currentIndex ? 1 : -1;
    setCurrentIndex([index, dir]);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true, // 마우스 드래그도 가능하게 설정
  });

  return (
    <div className="App" {...handlers}>
      <header className="header">
        <div className="logo-container">
          <img src={require('./img/DHLogo.png')} alt="Logo" className="logo" />
          <span className="logo-text">DH TEXTILE</span>
        </div>
        <nav className="nav">
          <ul className="menu-text">
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
          </ul>
          <img src={require('./img/menu_black.png')} alt="Menu" className="menu-icon" />
        </nav>
      </header>

      <section className="slides">
        <div className="slider-wrapper">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={slides[currentIndex].image}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="slide-img"
            />
          </AnimatePresence>
          <motion.button
            className={`view-product-btn ${slides[currentIndex].isSpecial ? 'special-btn' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert(`Clicked: ${slides[currentIndex].buttonText}`)}
          >
            {slides[currentIndex].buttonText}
          </motion.button>
          <motion.p
            className={`description ${slides[currentIndex].isSpecial ? 'special-description' : ''}`}
          >
            {slides[currentIndex].description}
          </motion.p>
        </div>
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => selectSlide(index)}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p></p>
      </footer>
    </div>
  );
}

export default App;
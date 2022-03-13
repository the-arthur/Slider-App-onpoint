import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Slide1 from './components/Slide1/Slide1';
import Slide2 from './components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';
import label from './img/label.png'


function App() {


  const [slideState, setSlideState] = useState(0)

  const [touchStart, setTouchStart] = useState(null)

  const [touchEnd, setTouchEnd] = useState(null)

  const slideToRight = () => {
    setSlideState(-100);
  }

  const slideToHome = () => {
    setSlideState(0);
  }

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        if (slideState > -200) {
          setSlideState(slideState - 100)
        }
      } else {
        if (slideState < 0) {
          setSlideState(slideState + 100)
        }
      }
    }
  }


  return (
    <div className="App">
      <div className="view_container">
        <NavBar slideToHome={slideToHome} />
        <div
          className="slides_container"
          style={{ left: `${slideState}%` }}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
        >
          <Slide1 slideToRight={slideToRight} />
          <Slide2 />
          <Slide3 />
        </div>
        <img className="label" src={label} alt="" />
      </div>
    </div>
  );
}


export default App;

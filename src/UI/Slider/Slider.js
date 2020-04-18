import React,{useState} from 'react';
import './Slider.scss';
import ImgComp from './ImgComp';
import i1 from '../../Assets/e.jpg';
import i2 from '../../Assets/c.jpg';
import i3 from '../../Assets/a.jpeg';

function Slider () {
    //array of components to show inside Slider
    let slideArr = [
        <ImgComp src={i2}
            data="Slide 1"/>,
        <ImgComp src={i1}
            data="Slide 2"/>,
        <ImgComp src={i2}
            data="Slide 3"/>,
        <ImgComp src={i3}
            data="Slide 4"/>,
        <ImgComp src={i1}
            data="Slide 5"/>,
        <ImgComp src={i2}
            data="Slide 6"/>,
        <ImgComp src={i3}
            data="Slide 7"/>,
            <ImgComp src={i2}
            data="Slide 8"/>,
        <ImgComp src={i1}
            data="Slide 9"/>,
        <ImgComp src={i2}
            data="Slide 10"/>];
    const [x,setX] = useState(0)
    const goLeft = () => {
        console.log(x);
        (x=== 0)?setX(-100*(slideArr.length - 3)):setX(x + 100);
    }
    const goRight = () => {
        console.log(x);
        (x=== -100*(slideArr.length - 3))?setX(0):setX(x - 100);
    }
    return(
        <div className="slider">
        {slideArr.map((item, index) => {
            return(
            <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                {item}
            </div>
            )
        })}
        <button id="goLeft" onClick={goLeft}><i className="fas fa-chevron-left"></i></button>
        <button id="goRight" onClick={goRight}><i className="fas fa-chevron-right"></i></button>
        </div>
    )
    
}

export default Slider;
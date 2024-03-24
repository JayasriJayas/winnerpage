import React from 'react'
import '../App.css';
import imagec from '../img/imagec.jpg';
import couldbu3 from '../img/couldbu3.jpg';

export default function Winner() {
  return (
    <div>
        <div className="video-container">
                    <video autoPlay muted loop id="video-background">
                        <source src="purblue.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="content">
                    <span style={{ '--i': 1 }}><img src={imagec} alt="" /></span>
                    <span style={{ '--i': 2 }}><img src={couldbu3} alt="" /></span>
                    <span style={{ '--i': 3 }}><img src={imagec} alt="" /></span>
                    <span style={{ '--i': 4 }}><img src={couldbu3} alt="" /></span>
                    <span style={{ '--i': 5 }}><img src={imagec} alt="" /></span>
                    <span style={{ '--i': 6 }}><img src={couldbu3} alt="" /></span>
                </div>
                <div className="winners-text">Winners</div>
                <div className="additional-text">Leave your marks, inspire others</div>
    </div>
  )
}

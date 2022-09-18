import React from "react";
import "./reviews.css";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useState } from "react";
import {reviews} from "./local-data"

function Reviews() {


  const [img, setImg] = useState(reviews[0].img);
  const [name, setName] = useState(reviews[0].name);
  const [job, setJob] = useState(reviews[0].job);
  const [text, setText] = useState(reviews[0].text);
  const [currentIndex, setCurrentIndex] = useState(0)


  const showPerson = () => {
    const item = reviews[currentIndex];
    setImg(item.img);
    setName(item.name);
    setJob(item.job);
    setText(item.text);
  };

  const nextPerson = () => {
    if (currentIndex === reviews.length - 1) {
      setCurrentIndex(0);
    }
    else {
        setCurrentIndex(currentIndex + 1)
    }
    showPerson();
    
  };
 
  const prevPerson = () => {
    if (currentIndex === 0) {
      setCurrentIndex(reviews.length - 1)
    }
    else{setCurrentIndex(currentIndex - 1)}
    showPerson();
  };

  const randPerson = () => {
    setCurrentIndex(Math.floor(Math.random() * reviews.length));
    showPerson();
  };

  return (
    <>
      <main>
        <section className="review__container">
          <div className="review__title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          {/* review */}
          <article className="review">
            <div className="img__container">
              <img src={img} id="person-img" alt="" />
            </div>
            <h4 id="author">{name}</h4>
            <p id="job">{job}</p>
            <p id="info">{text}</p>
            {/* prev next buttons */}
            <div className="button__container">
              <button className="prev__btn" onClick={prevPerson}>
                <FcPrevious/>
              </button>
              <button className="next__btn" onClick={nextPerson}>
                <FcNext/>
              </button>
            </div>
            {/* random button */}
            <button className="random__btn" onClick={randPerson}>
              Surprise Me!
            </button>
          </article>
        </section>
      </main>
    </>
  );
}

export default Reviews;

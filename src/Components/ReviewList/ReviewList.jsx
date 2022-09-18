import React, { useState, useEffect } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import Review from "../Review/Review";

import { reviews } from "./local-data";

import "./review-list.css";

function ReviewList() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [img, setImg] = useState(reviews[currentIndex].img);
  const [name, setName] = useState(reviews[currentIndex].name);
  const [job, setJob] = useState(reviews[currentIndex].job);
  const [text, setText] = useState(reviews[currentIndex].text);

  useEffect(() => {
    const item = reviews[currentIndex];
    setImg(item.img);
    setName(item.name);
    setJob(item.job);
    setText(item.text);
  }, [currentIndex]);

  const nextPerson = () => {
    if (currentIndex === reviews.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevPerson = () => {
    if (currentIndex === 0) {
      setCurrentIndex(reviews.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const randPerson = () => {
    setCurrentIndex(Math.floor(Math.random() * reviews.length));
  };

  return (
    <>
      <main className="review-list">
        <section className="review-list__container">
          <div className="review-list__title">
            <h2>our reviews</h2>
            <div className="review-list__underline"></div>
          </div>
          {/* review */}
          <Review img={img} name={name} job={job} text={text} />
          <div className="review-list__button-container">
            <div>
              <button className="review-list__prev-btn" onClick={prevPerson}>
                <FcPrevious />
              </button>
              <button className="review-list__next-btn" onClick={nextPerson}>
                <FcNext />
              </button>
            </div>
            <button className="review-list__random-btn" onClick={randPerson}>
              Surprise Me!
            </button>
          </div>
          {/* random button */}
        </section>
      </main>
    </>
  );
}

export default ReviewList;

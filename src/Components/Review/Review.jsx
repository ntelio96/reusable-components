import React from "react";
import "./review.css";

function Review({ img, name, job, text }) {
  return (
    <article className="review">
      <div className="review__img-container">
        <img src={img} className="review__person-img" alt="" />
      </div>
      <h4 className="review__author">{name}</h4>
      <p className="review__job">{job}</p>
      <p className="review__info">{text}</p>
    </article>
  );
}

export default Review;

import "./reviews.css";
import {FcNext, FcPrevious} from 'react-icons/fc'
import photo1 from "./review-photo/no-photo.png"

import React from 'react'

function Reviews() {
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
                <img src={photo1} id="person-img" alt="" />
            </div>
            <h4 id="author">Sara Jones</h4>
            <p id="job"></p>
            <p id="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores vel id ab a, praesentium minus repellat sit ipsum dolorem qui, possimus ullam incidunt!</p>
            {/* prev next buttons */}
            <div className="button__container">
                <button className="prev__btn">
                    <FcPrevious/>
                </button>
                <button className="next__btn">
                    <FcNext></FcNext>
                </button>
                {/* random button */}
                <button className="random__btn">Surprise Me!</button>
            </div>
        </article>
    </section>
</main>
    </>
  )
}

export default Reviews

import React from "react";
import "./reviews.css";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useState } from "react";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "Web Developer",
      img: "https://www.google.lt/imgres?imgurl=https%3A%2F%2Ffaces-img.xcdn.link%2Fimage-lorem-face-6511.jpg&imgrefurl=https%3A%2F%2Floremfaces.com%2F&tbnid=yVNtVHgtqtx39M&vet=12ahUKEwidg6H-l576AhVGposKHZTMDZ4QMygyegQIARBH..i&docid=cCxhNCTHEwkn1M&w=1024&h=1024&q=people%20faces%20img&hl=en&ved=2ahUKEwidg6H-l576AhVGposKHZTMDZ4QMygyegQIARBHZ",
      text: "Lorem ipsum dolor sit amet. Ut quia labore est neque voluptatem et voluptatem suscipit. Voluptatem consequuntur non accusamus laudantium nam quod galisum qui quia perspiciatis aut consequuntur vero.",
    },
    {
      id: 2,
      name: "David Foss",
      job: "Web Designer",
      img: "https://www.google.lt/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1507003211169-0a1dd7228f2d%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffaces&tbnid=Q0R8SgCcJZYbBM&vet=12ahUKEwidg6H-l576AhVGposKHZTMDZ4QMygSegUIARCBAg..i&docid=pzitk7yUTyP4HM&w=1000&h=1500&q=people%20faces%20img&hl=en&ved=2ahUKEwidg6H-l576AhVGposKHZTMDZ4QMygSegUIARCBAg",
      text: "Lorem ipsum dolor sit amet. Est veritatis labore ea aliquid repudiandae et quam tenetur et repellendus officiis. Aut dolorem pariatur et repellendus nobis sed maxime esse.",
    },
    {
      id: 3,
      name: "Anna Johnson",
      job: "Managing Director",
      img: "https://www.google.lt/imgres?imgurl=https%3A%2F%2Fychef.files.bbci.co.uk%2F976x549%2Fp066ssf8.jpg&imgrefurl=https%3A%2F%2Fwww.bbc.com%2Ffuture%2Farticle%2F20180510-why-our-facial-expressions-dont-reflect-our-feelings&tbnid=OsW_tubDwWKj0M&vet=12ahUKEwidg6H-l576AhVGposKHZTMDZ4QMygoegUIARC9Ag..i&docid=x5N8TB5x3wV7qM&w=976&h=549&q=people%20faces%20img&hl=en&ved=2ahUKEwidg6H-l576AhVGposKHZTMDZ4QMygoegUIARC9Ag",
      text: "Lorem ipsum dolor sit amet. In quia recusandae ut voluptatem quisquam sed quia iure. At necessitatibus sequi est obcaecati expedita ut internos nemo est voluptas reiciendis sed dolore fugiat ut itaque ipsum qui illum quia.",
    }
  ];

  const [img, setImg] = useState(reviews[0].img);
  const [name, setName] = useState(reviews[0].name);
  const [job, setJob] = useState(reviews[0].job);
  const [text, setText] = useState(reviews[0].text);

  let currentItem = 0;


  const showPerson = () => {
    const item = reviews[currentItem];
    setImg(item.img);
    setName(item.name);
    setJob(item.job);
    setText(item.text);
  };

  const nextPerson = () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  };

  const prevPerson = () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson();
  };

  const randPerson = () => {
    currentItem = Math.floor(Math.random() * reviews.length);
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

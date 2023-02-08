import { useState } from "react";
import "./accordion.css";
import image from "../../assets/accordion.png";
function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordion-section">
      <h1 className="text-white text-3xl mt-4 pt-14 pl-2 md:pl-4 lg:pl-8">
        Check out these frequently asked questions to see if we have a match
      </h1>
      <div className="wrapper">
        <div className="imagg">
          {/* Putting the image beside the accordion*/}
          <img src={image} alt="accordion-banner"></img>
        </div>
        <div className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "How can I be a part of your project?",
    answer:
      "You can join our club when the application process opens and take part in a variety of the initiatives we work on all year long.",
  },
  {
    question: "What if we don't know the skills for the project?",
    answer:
      "You will be trained with the required skills before working on the projects, so the only prior skills needed would be the enthusiasm and the ability to learn.",
  },
  {
    question: "What if I have an idea but no direction on how to implement it?",
    answer:
      "You may contact us through our personal website, linkedin profile, gmail or discord server, to discuss your idea and we will assist you in putting your ideas into action.",
  },
  {
    question: "What kinds of project do you take on?",
    answer:
      "We take up a variety of projects, ranging from full stack web development to custom app/software development.",
  },
  {
    question: "What kinds of events do you conduct?",
    answer:
      "we conduct a diverse range of events, from hackathons, codeathons, workshops and even competitive programming competitions.",
  },
  {
    question: "Are the projects exclusive to club members?",
    answer:
      "No, a majority of the projects are open to the club chapter and those with an interest can participate, some projects are reserved only for the club members.",
  },
];

export default Accordion;

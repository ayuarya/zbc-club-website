import React, { useState } from "react";

import "./about.css";
import Navbar from "../../components/navbar/navbar";
import Marquee from "react-fast-marquee";
import Contact from "../../components/contact/Contact";

import {
  leftrect,
  rightrect,
  projectrect,
  toprect,
  rect1,
  rect2,
  rect3,
  rect4,
  services,
  goal1,
  goal2,
  goal3,
  goal4,
  react,
  nodejs,
  gatsby,
  cpp,
  java,
  javascript,
  aws,
  azure,
  python,
  dotnet,
  git,
  gradle,
  devops,
  docker,
  gbq,
  spark,
  kafka,
  homeassistant,
  awsiot,
  iothub,
  keras,
  tf,
  sklearn,
  pytorch,
  android,
  ios,
  flutter,
  reactnative,
  photoshop,
  illustrator,
  figma,
  xd,
  line,
} from "../../assets";

import Footer from "../../components/footer/Footer";

const About = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Navbar />
      <div className={toggle ? "show-contact" : "hide-contact"}>
        <Contact toggle={setToggle} />
      </div>

      <div className="h-screen bg-white about-us__hero">
        <h3>Zero Bugs Club</h3>
        <div className="hero__images">
          <img src={leftrect} alt="left-rect" />
          <div className="hero__ideas">
            <p>
              Turning and bringing <b>ideas</b> into <b>amazing</b> product
              through latest technical frameworks
            </p>
            <div className="hero__line" />
          </div>
          <button className="git-purple-btn" onClick={() => setToggle(true)}>
            Get in Touch
          </button>
          <img src={rightrect} alt="" />
        </div>
      </div>

      <div className="we-are-creative">
        <section id="creatives-about-us">
          <div>
            <h3>
              <span>02 /</span> ABOUT
            </h3>
            <h1>
              We are <span>Creatives</span>.
            </h1>
          </div>
          <div>
            <img className="hidden lg:block" src={toprect} alt="" />
            <p>
              Zero Bugs Club (ZBC) is a community of student programming
              enthusiasts who love to push the boundaries of the coding world
              and learn in the process.
            </p>
            <p>
              We use a product-oriented approach while exposing students to
              contemporary frameworks and technologies. Having worked on several
              micro projects, events, hackathons and workshops, we have
              enlightened several young programmers by changing the programming
              environment one line at a time.
            </p>
          </div>
        </section>
        <section id="marquee-section-about">
          <Marquee className="marquee-about-us" gradient={false} speed={70}>
            Idea<span className="marquee-dot"></span>Work
            <span className="marquee-dot"></span>Think
            <span className="marquee-dot"></span>Design
            <span className="marquee-dot"></span>Develop
            <span className="marquee-dot"></span>Create
            <span className="marquee-dot"></span>
          </Marquee>
        </section>
      </div>

      <div className="projects-section">
        <div className="projects-header">
          <div>
            <img src={projectrect} alt="" />
            <h3>Abhay Arora</h3>
            <h4>President</h4>
          </div>
          <div>
            <h3 className="text-lg">
              <span>03 /</span> Projects
            </h3>
            <h1 className="text-4xl my-3">
              “We <b>craft</b> products that help people to solve their{" "}
              <b>problems</b>”
            </h1>
          </div>
        </div>
        <div className="all-projects">
          <div>
            <h3>
              <a href="https://shaheen-subah.github.io/fight-covid/about.html">
                Fight Covid
              </a>
            </h3>
            <h4>Covid related information</h4>
            <img src={rect1} alt="" />
          </div>
          <div>
            <h3>
              <a href="https://www.sdsgems.co.in/">SDS Gems Project</a>
            </h3>
            <h4>Website for gem dealers</h4>
            <img src={rect2} alt="" />
          </div>
          <div>
            <h3>Project Name 3</h3>
            <h4>Project Type</h4>
            <img src={rect3} alt="" />
          </div>
          <div>
            <h3>Project Name 4</h3>
            <h4>Project Type</h4>
            <img src={rect4} alt="" />
          </div>
        </div>
      </div>

      <section className="services-section">
        <div>
          <h4>
            <span className="text-gray-400">04 / </span>Services
          </h4>
          <h3 className="text-4xl my-4">
            “Helping you grow by acquiring new skills while you are with us”
          </h3>
          <button className="border-white border-solid border px-2.5 rounded-lg py-1">
            Let's Talk
          </button>
        </div>
        <img src={services} alt="" />
        <img src={rect4} alt="" />
        <h3 className="text-4xl">
          “We have enlightened several young programmers by changing the
          programming environment one line at a time”
        </h3>
      </section>

      <section className="goals-and-tools text-white-100 my-20">
        <div className="goals-div">
          <h3 className="text-3xl my-10 font-bold">Our Goals</h3>
          <div className="goal-header-grid">
            <div className="goals-headers flex">
              <img src={goal1} alt="" />
              <div>
                <h3 className="font-bold text-left text-2xl">Innovation</h3>
                <p className="text-left">
                  Our club is filled with passionate and enthusiastic coders who
                  constantly find creative and innovative ways to build new
                  projects.
                </p>
              </div>
            </div>
            <div className="goals-headers flex">
              <img src={goal2} alt="" />
              <div>
                <h3 className="font-bold text-left text-2xl">Excellence</h3>
                <p className="text-left">
                  The efforts taken by the zestful young minds in each project
                  ensures that each project is unique and is filled with
                  creative ideas and implementations.
                </p>
              </div>
            </div>
            <div className="goals-headers flex">
              <img src={goal3} alt="" />
              <div>
                <h3 className="font-bold text-left text-2xl">Exposure</h3>
                <p className="text-left">
                  The variety and the amount of industry level projects taken up
                  and accomplished by the club gives great exposure to the
                  actual industry and its nuances.
                </p>
              </div>
            </div>
            <div className="goals-headers flex">
              <img src={goal4} alt="" />
              <div>
                <h3 className="font-bold text-left text-2xl">Inspire</h3>
                <p className="text-left">
                  To inspire beginners as well as advanced coders to take up
                  grueling challenges to improve themselves and learn more and
                  more every time they succeed or fail.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-3xl my-10 font-bold">Our Tools</h3>

          <div className="all-tools">
            <h3>Frontend &amp; Build</h3>
            <div>
              <img src={react} alt="react" />
              <img src={nodejs} alt="nodejs" />
              <img src={gatsby} alt="gatsby" />
            </div>
          </div>

          <div className="all-tools">
            <h3>Software Engineering</h3>
            <div>
              <img src={cpp} alt="cpp" />
              <img src={java} alt="java" />
              <img src={javascript} alt="javascript" />
              <img src={aws} alt="aws" />
              <img src={azure} alt="azure" />
              <img src={dotnet} alt="dotnet" />
              <img src={python} alt="python" />
            </div>
          </div>

          <div className="all-tools">
            <h3>DevOps</h3>
            <div>
              <img src={docker} alt="docker" />
              <img src={git} alt="git" />
              <img src={devops} alt="devops" />
              <img src={gradle} alt="gradle" />
            </div>
          </div>

          <div className="all-tools">
            <h3>Big Data</h3>
            <div>
              <img src={gbq} alt="gbq" />
              <img src={spark} alt="spark" />
              <img src={kafka} alt="kafka" />
            </div>
          </div>

          <div className="all-tools">
            <h3>Internet of Things (IoT)</h3>
            <div>
              <img src={awsiot} alt="awsiot" />
              <img src={iothub} alt="iothub" />
              <img src={homeassistant} alt="homeassistant" />
            </div>
          </div>

          <div className="all-tools">
            <h3>Machine Learning &amp; Artificial Intelligence</h3>
            <div>
              <img src={keras} alt="keras" />
              <img src={tf} alt="tf" />
              <img src={sklearn} alt="sklearn" />
              <img src={pytorch} alt="pytorch" />
            </div>
          </div>

          <div className="all-tools">
            <h3>Mobile Development</h3>
            <div>
              <img src={android} alt="android" />
              <img src={ios} alt="ios" />
              <img src={flutter} alt="flutter" />
              <img src={reactnative} alt="reactnative" />
            </div>
          </div>

          <div className="all-tools design-tools mb-10">
            <h3>Design Tools</h3>
            <div>
              <img src={xd} alt="xd" />
              <img src={figma} alt="figma" />
              <img src={photoshop} alt="photoshop" />
              <img src={illustrator} alt="illustrator" />
            </div>
          </div>
        </div>
      </section>

      <section className="our-workflow px-[5%] py-[5%]">
        <div className="font-bold text-lg md:text-4xl lg:text-5xl">
          <h3>Our Workflow</h3>
        </div>
        <div className="flex my-10 workflow-divs justify-between items-start w-full">
          <div className="workflows">
            <div className="flex items-center">
              <span className="workflow-number">1</span>
              <h3>Preparation</h3>
            </div>
            <div className="workflow-points relative mx-0">
              <div className="absolute left-3 top-0">
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
              </div>
            </div>
            <ul className="ml-9">
              <li className="mt-7">Filling out the brief</li>
              <li className="mt-7">Initial Analysis</li>
              <li className="mt-7">Client Kick-off</li>
              <li className="mt-7">Planning</li>
            </ul>
          </div>

          <div className="workflows">
            <div className="flex items-center">
              <span className="workflow-number">2</span>
              <h3>Design</h3>
            </div>
            <div className="workflow-points relative mx-0">
              <div className="absolute left-3 top-0">
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
              </div>
            </div>
            <ul className="ml-9">
              <li className="mt-7">Gathering the Content</li>
              <li className="mt-7">Wireframing</li>
              <li className="mt-7">Style Exploration</li>
              <li className="mt-7">Creating Hi-Fi concept</li>
              <li className="mt-7">Developer Review</li>
            </ul>
          </div>

          <div className="workflows">
            <div className="flex items-center">
              <span className="workflow-number">3</span>
              <h3>Development</h3>
            </div>
            <div className="workflow-points relative mx-0">
              <div className="absolute left-3 top-0">
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
              </div>
            </div>
            <ul className="ml-9">
              <li className="mt-7">Project Setup</li>
              <li className="mt-7">UI Development</li>
              <li className="mt-7">Design Review</li>
              <li className="mt-7">CMS Connection</li>
              <li className="mt-7">QA Review</li>
            </ul>
          </div>

          <div className="workflows">
            <div className="flex items-center">
              <span className="workflow-number">4</span>
              <h3>Handover</h3>
            </div>
            <div className="workflow-points relative mx-0">
              <div className="absolute left-3 top-0">
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
                <img src={line} alt="line" className="m-0" />
                <span className="list-dot"></span>
              </div>
            </div>
            <ul className="ml-9">
              <li className="mt-7">Hosting Setup</li>
              <li className="mt-7">Deployment</li>
              <li className="mt-7">Digital Assets Transfer</li>
              <li className="mt-7">Launch</li>
              <li className="mt-7">Party!🎉</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

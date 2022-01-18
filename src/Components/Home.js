import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import Maquette from "./Maquette";

function Home() {
  return (
    <>
      {" "}
      <section className="barner container-fluide">
        {/*                    Nav                           */}
        <nav>
          <div className="logo-box">
            <img src="images/LeetCode_logo_rvs.png" className="logo-img" />
            <span>LeetCode</span>
          </div>
          <div className="nav-link">
            <ul>
              <li>
                <a href="#" className="nav-link-item premium">
                  Premium
                </a>
              </li>
              <li>
                <a href="#explore" className="nav-link-item">
                  Explore
                </a>
              </li>
              <li>
                <a href="#product" className="nav-link-item">
                  Product
                </a>
              </li>
              <li>
                <a href="#developer" className="nav-link-item">
                  Developer
                </a>
              </li>
              <li>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <a href="#" className="nav-link-item">
                    Sign in
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/*                           Contenu de la barniere                    */}

        <div className="content-barner container">
          <div className="content-barner-left col-md-6 col-sm-0 col-xs-0 ">
            <Maquette />
          </div>
          <div className="content-barner-right col-md-6 col-sm-12 ">
            <h1>A New Way to Learn</h1>
            <p>
              LeetCode is the best platform to help you enhance your skills,
              expand your knowledge and prepare for technical interviews.
            </p>
            <button>Create Account</button>
          </div>
        </div>
      </section>
      {/*                    start-exporing                    */}
      <section id="explore">
        <div className="container-start-exporing">
          <div className="col-md-6 col-sm-12 col-xs-12 start-exporing-left">
            <div className="title">
              <h2>Start Exploring</h2>
              <div className="losange losange-style">
                <div className="losange-box-icon">
                  <i class="fas fa-graduation-cap"></i>
                </div>
              </div>
            </div>
            <p>
              Explore is a well-organized tool that helps you get the most out
              of LeetCode by providing structure to guide your progress towards
              the next step in your programming career
            </p>
            <h6>Get started </h6>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 start-exporing-right"></div>
        </div>
      </section>
      {/*                 Section avec font noir tranparent */}
      <section className="dev-box" id="product">
        <div className="container box-dev-container">
          <div className="col-md-6 col-sm-12 col-xs-12 box-left">
            <div className="titre-trois-hexagone triple">
              <div className="losange losange-style1">
                <div className="losange-box-icon">2150+ </div>
              </div>
              <div className="losange losange-style2">
                <div className="losange-box-icon">
                  <i class="fa fa-users"></i>{" "}
                </div>
              </div>
              <div className="losange losange-style3">
                <div className="losange-box-icon">
                  <i class="fas fa-trophy"></i>{" "}
                </div>
              </div>
            </div>
            <h2>Questions, Community & Contests</h2>
            <p>
              Over 2150 questions for you to practice. Come and join one of the
              largest tech communities with hundreds of thousands of active
              users and participate in our contests to challenge yourself and
              earn rewards.
            </p>
            <h6>View Questions </h6>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 box-right">
            <div className="titre-deux-hexagone">
              <div className="losange losange-style4">
                <div className="losange-box-icon">
                  <i class="fas fa-briefcase"></i>{" "}
                </div>
              </div>
              <div className="losange losange-style5">
                <div className="losange-box-icon">
                  <i class="fa fa-building"></i>{" "}
                </div>
              </div>
            </div>
            <h2 style={{ color: "rgb(183, 137, 43)" }}>
              Companies & Candidates
            </h2>
            <p>
              Not only does LeetCode prepare candidates for technical
              interviews, we also help companies identify top technical talent.
              From sponsoring contests to providing online assessments and
              training, we offer numerous services to businesses.
            </p>
            <h6>Business Opportunities </h6>
          </div>
        </div>

        {/*  Section developpeur */}

        <section className="developpeur" id="developer">
          <div className="container developpeur-box">
            <div className="losange losange-style6">
              <div className="losange-box-icon">
                <i class="fas fa-trophy"></i>{" "}
              </div>
            </div>
            <h2>Developer</h2>
            <p>
              We now support 14 popular coding languages. At our core, LeetCode
              is about developers. Our powerful development tools such as
              Playground help you test, debug and even write your own projects
              online.
            </p>
          </div>
        </section>

        {/* Section           de l'edituer de code       */}
        <section className="editor">
          <div className="container">
            <div className="row">
              <div className="editor-box col-md-9 col-sm-12 col-xs-12">
                <div className="editor-box-header">
                  <div className="langage-box">
                    <p>C++</p>
                    <p>Java</p>
                    <p>Python</p>
                  </div>
                  <div className="operattion-box">
                    <button className="btn btn-copy">
                      <i class="fas fa-paste"></i>Copy
                    </button>
                    <button className="btn btn-success btn-run">
                      {" "}
                      <i class="far fa-play-circle"></i> Run
                    </button>
                    <button className="btn btn-dark btn-Playground">
                      <img
                        src="images/LeetCode_Playground.png"
                        className="Playground-icon"
                        alt="icone de playground"
                      ></img>
                      Playground
                    </button>
                  </div>
                </div>
                <div className="editor-box-contain">
                  <div className="editor-box-contain-left-bar">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                  </div>
                </div>
              </div>
              <div className="editor-box-syntaxe-choice col-md-3 col-sm-12 col-xs-12">
                <div className="editor-box-syntaxe-choice-list">
                  <p>
                    <i class="fa fa-code" aria-hidden="true"></i> Linked List
                  </p>
                  <p>
                    <i class="fa fa-code" aria-hidden="true"></i> Binary Tree
                  </p>
                  <p>
                    <i class="fa fa-code" aria-hidden="true"></i> Fibonacci{" "}
                  </p>
                </div>
                <p style={{ color: "rgba(0, 136, 204, 0.7)" }}>
                  Create Playground{" "}
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <div className="red-losange">
        <div className="losange losange-style7">
          <div className="losange-box-icon">
            <img
              src="images/sf.png"
              alt="pont"
              className="images-pont-rouge"
            ></img>
          </div>
        </div>
        <h2>
          Made with <i class="fas fa-heart hearth"></i> in SF
        </h2>
        <p>
          At LeetCode, our mission is to help you improve yourself and land your
          dream job. We have a sizable repository of interview resources for
          many companies. In the past few years, our users have landed jobs at
          top companies around the world.
        </p>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 logo-container">
            <div className="logo">
              <img src="images/logo/facebook.svg" alt="logo"></img>
            </div>
            <div className="logo">
              <img src="images/logo/leap-motion.svg" alt="logo"></img>
            </div>
            <div className="logo">
              <img src="images/logo/apple.svg" alt="logo"></img>
            </div>
            <div className="logo">
              <img src="images/logo/uber.svg" alt="logo"></img>
            </div>

            <div className="logo">
              <img src="images/logo/squarespace.svg" alt="logo"></img>
            </div>

            <div className="logo">
              <img src="images/logo/jet.svg" alt="logo"></img>
            </div>

            <div className="logo">
              <img src="images/logo/intel.svg" alt="logo"></img>
            </div>

            <div className="logo">
              <img src="images/logo/amazon.svg" alt="logo"></img>
            </div>

            <div className="logo">
              <img src="images/logo/bank-of-america.svg" alt="logo"></img>
            </div>

            <div className="logo">
              <img src="images/logo/pinterest.svg" alt="logo"></img>
            </div>

            <div className="logo">
              <img src="images/logo/cisco.svg" alt="logo"></img>
            </div>

            <div className="logo">
              <img src="images/logo/stripe.svg" alt="logo"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 passionate-section">
            <div className="border-passionate-section"></div>
            <p className="border-passionate-section-text">
              If you are passionate about tackling some of the most interesting
              problems around, we would love to hear from you.
            </p>
            <p className="passionate-section-link">
              Join Our team <i class="fa fa-angle-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </section>
      {/*  Footer  */}
      {/* &nbsp;|&nbsp; &nbsp;|&nbsp; &nbsp;|&nbsp; */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="footer-container">
              <div className="footer-left">
                <p>Copyright © 2021 LeetCode</p>
              </div>
              <div className="footer-right">
                <p>
                  <a href="#"> Help Center</a> &nbsp;|&nbsp;
                </p>

                <p>
                  <a href="#">Students</a> &nbsp;|&nbsp;
                </p>
                <p>
                  <Link to="/term">Terms</Link> &nbsp;|&nbsp;
                </p>
                <p>
                  <Link to="/privacy">Privacy Policy United States</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

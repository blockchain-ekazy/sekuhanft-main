import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./Home.css";

// import $ from "jquery";

import Logo from "./Imgs/Logo.PNG";
import ImgA from "./Imgs/A.png";
import ImgB from "./Imgs/B.png";
import ImgC from "./Imgs/C.png";
import ImgD from "./Imgs/D.png";
import ImgE from "./Imgs/E.png";
import ImgF from "./Imgs/F.png";
import ImgG from "./Imgs/G.png";
import ImgH from "./Imgs/H.png";
import ImgI from "./Imgs/I.png";

import WImg1 from "./Imgs/WATER/1.png";
import WImg2 from "./Imgs/WATER/2.png";
import WImg3 from "./Imgs/WATER/3.png";
import WImg4 from "./Imgs/WATER/6.png";

import FImg1 from "./Imgs/FIRE/1.png";
import FImg2 from "./Imgs/FIRE/2.png";
import FImg3 from "./Imgs/FIRE/3.png";

import EImg1 from "./Imgs/EARTH/1.png";
import EImg2 from "./Imgs/EARTH/2.png";
import EImg3 from "./Imgs/EARTH/3.png";

import AImg1 from "./Imgs/AIR/1.png";
import AImg2 from "./Imgs/AIR/2.png";
import AImg3 from "./Imgs/AIR/3.png";

import Video from "./Imgs/Video/VideoM.mp4";

export default function Home() {
  window.addEventListener("load", videoScroll);
  window.addEventListener("scroll", videoScroll);

  function videoScroll() {
    if (document.querySelectorAll("video[autoplay]").length > 0) {
      var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll("video[autoplay]");

      for (var i = 0; i < videoEl.length; i++) {
        var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

        if (
          videoClientRect <= windowHeight - videoHeight * 0.5 &&
          videoClientRect >= 0 - videoHeight * 0.5
        ) {
          thisVideoEl.play();
        } else {
          thisVideoEl.pause();
        }
      }
    }
  }

  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };

  const properties = {
    // transitionDuration: 1,
    duration: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    canSwipe: true,
    indicators: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="Sara">
      <header class="main-header ">
        <div class="container px-2">
          <nav class="navbar  navbar-expand-lg main-nav py-3 px-0">
            <a class="navbar-brand" href="/">
              <img src={Logo} alt="SEKUYA Nft"></img>
              <span className="mx-2 w-100 text-dark font-weight-bold">
                Sekuya NFT
              </span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar icon-bar-1"></span>
              <span class="icon-bar icon-bar-2"></span>
              <span class="icon-bar icon-bar-3"></span>
            </button>
            <div class="collapse navbar-collapse text-center" id="mainMenu">
              <ul class="navbar-nav ml-auto text-uppercase f1 align-items-center">
                <li
                  className="mb-3 mt-2"
                  data-toggle="collapse"
                  data-target="#mainMenu"
                  aria-controls="mainMenu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a href="#home" class="text-dark">
                    Story
                  </a>
                </li>
                <li
                  className="mb-2"
                  data-toggle="collapse"
                  data-target="#mainMenu"
                  aria-controls="mainMenu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <a className="text-dark" href="#about">
                    Trailer
                  </a>
                </li>
                <li className="mb-3 text-center">
                  <div className="text-center">
                    <button className="btn BtnCntHead ">
                      {" "}
                      <a className="text-white" href="/mint">
                        Connect
                      </a>
                    </button>
                  </div>
                </li>
                <li className="py-2 m-0 mr-md-3">
                  <i class="fa-brands fa-instagram p-2 ico"></i>
                  <i class="fa-brands fa-twitter p-2 mx-2 icoT"></i>
                  <i class="fa-brands fa-telegram p-2 icoD"></i>
                  {/* <i class="fa-brands fa-telegram"></i> */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- /.container --> */}
      </header>

      <div className="container-fluid p-0 Top">
        <div className="text-center pt-5 mt-5">
          <h1 className="mt-5 text-dark pt-1">The Legends of Sekuya</h1>
          <h3>100 Ultra Rare NFT</h3>
        </div>

        <div className="home_meet_team_slider py-5">
          <div
            className="home_meet_team_inner slick-slide slick-active"
            tabIndex="-1"
            role="option"
            aria-describedby="slick-slide01"
            style={{ width: 282 }}
            data-slick-index="1"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={FImg1} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>Visionary</h3> */}
              {/* <h4>CO-FOUNDER</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="0"
            role="option"
            aria-describedby="slick-slide02"
            style={{ width: 282 }}
            data-slick-index="2"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={WImg1} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>Jelena</h3> */}
              {/* <h4>BLOCKCHAIN EXPERT</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="2"
            role="option"
            aria-describedby="slick-slide03"
            style={{ width: 282 }}
            data-slick-index="3"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={AImg1} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>Dreamer</h3> */}
              {/* <h4>DESIGNER</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="3"
            role="option"
            aria-describedby="slick-slide04"
            style={{ width: 282 }}
            data-slick-index="4"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={EImg1} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>Collab</h3> */}
              {/* <h4>DESIGNER</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="4"
            role="option"
            aria-describedby="slick-slide05"
            style={{ width: 282 }}
            data-slick-index="5"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={FImg2} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>sabirpro</h3> */}
              {/* <h4>Developer</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="5"
            role="option"
            aria-describedby="slick-slide05"
            style={{ width: 282 }}
            data-slick-index="5"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={WImg2} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>sabirpro</h3> */}
              {/* <h4>Developer</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="7"
            role="option"
            aria-describedby="slick-slide07"
            style={{ width: 282 }}
            // data-slick-index="7"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={ImgB} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>sabirpro</h3> */}
              {/* <h4>Developer</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="8"
            role="option"
            aria-describedby="slick-slide08"
            style={{ width: 282 }}
            // data-slick-index="7"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={ImgC} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>sabirpro</h3> */}
              {/* <h4>Developer</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="9"
            role="option"
            aria-describedby="slick-slide09"
            style={{ width: 282 }}
            // data-slick-index="7"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={ImgD} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>sabirpro</h3> */}
              {/* <h4>Developer</h4> */}
            </div>
          </div>
          <div
            className="home_meet_team_inner  slick-slide slick-active"
            tabIndex="10"
            role="option"
            aria-describedby="slick-slide10"
            style={{ width: 282 }}
            // data-slick-index="7"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={ImgE} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>sabirpro</h3> */}
              {/* <h4>Developer</h4> */}
            </div>
          </div>
        </div>

        <div className="text-center" id="home">
          {/* <MintBtn/> */}
          <button className="btn BtnCntHead ">
            {" "}
            <a className="text-white" href="/mint">
              Connect
            </a>
          </button>
        </div>
      </div>

      <div className="container-fluid bgyellow mt-5 py-5">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="font-weight-bold pb-3">The Story</h1>
            <p>
              After the new earth restoration, 96 legends were born from the
              power of 4 mighty Sekuya. They were put to sleep inside statue
              around the realms, waiting for new chosen Sekuyans with pure and
              brave heart to wake them and giving the ultimate power for the
              Sekuyans. <br />
              <br />
              Now, it's your chance to get the ultimate power and rule Sekuya
              Multiverse.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 bgyellow2">
        <div className="container">
          <div className="text-white text-center">
            <h1 className="font-weight-bold">Ultimate Power</h1>
            <div className="row py-5">
              <div className="col-6 col-md-3 text-center text-white">
                <h1 className="font-weight-bold display-3">100</h1>
                <h4 className="">
                  Limited <br />
                  Collection
                </h4>
              </div>
              <div className="col-6 col-md-3 text-center text-white">
                <h1 className="font-weight-bold display-3">10%</h1>
                <h4 className="">
                  Rewards
                  <br />
                  back to holders
                </h4>
              </div>
              <div className="col-6 col-md-3 text-center text-white">
                <h1 className="font-weight-bold display-3">2%</h1>
                <h4 className="">
                  Lifetime <br />
                  Royalty
                </h4>
              </div>
              <div className="col-6 col-md-3 text-center text-white">
                <h1 className="font-weight-bold display-3">0.8</h1>
                <h4 className="">
                  Eth <br />
                  Mint Price
                </h4>
              </div>
            </div>
            <div className="text-center text-white ">
              <h1 className="pb-2">Multiverse Use Case</h1>
              <p>
                {" "}
                Sekuya portals game entrance fee as passive income
                <br /> Exclusive land NFTs (must hold during distribution)
                <br />
                Branding as landmark inside Sekuya Multiverse <br />
                Playable Sekuya character skin
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contaienr-fluid">
        <div className="row mx-0">
          <div className="col-md-3 p-0 ">
            <img className="w-100" src={ImgF}></img>
          </div>
          <div className="col-md-3 text-white bg-brown">
            <div className="description p-4">
              <h1>Earth Domain</h1>
              <p>
                The largest and most diverse domain in the multivorso with
                mountainous, forested, grassland, desert, to vast megacity.
              </p>
            </div>
          </div>

          <div className="col-md-3 p-0 ">
            <img className="w-100" src={ImgG}></img>
          </div>
          <div className="col-md-3 text-white bg-Water">
            <div className="description p-4">
              <h1>Water Domain </h1>
              <p>
                Adapted from 2 poles as a balance North and South. Its
                topography include island, Iceberg and underwater world with
                ancient architechture.
              </p>
            </div>
          </div>
        </div>

        <div className="row mx-0">
          <div className="col-md-3 p-0 ">
            <img className="w-100" src={ImgH}></img>
          </div>
          <div className="col-md-3 text-white bg-Sky">
            <div className="description p-4">
              <h1>Sky Domain</h1>
              <p>
                The largest and most diverse domain in the multivorso with
                mountainous, forested, grassland, desert, to vast megacity.
              </p>
            </div>
          </div>

          <div className="col-md-3 p-0 ">
            <img className="w-100" src={ImgI}></img>
          </div>
          <div className="col-md-3 text-white bg-Fire">
            <div className="description p-4">
              <h1>Fire Domain </h1>
              <p>
                The volcanic archipelago with tundra and rocky landscape, there
                will be Dragons and futuristic city.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="about">
        <div className=" text-center py-5">
          <h1 className="py-5 text-dark">Watch Trailer</h1>
          <div class="video-wrap">
            <video
              controls
              autoplay="true"
              muted
              playsinline
              loop
              // poster="http://placehold.it/350x350"
            >
              <source src={Video}></source>
              {/* <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg"></source> */}
              {/* Your browser does not support HTML5 video. */}
            </video>
          </div>
          <a href="https://sekuya.io/" target="_blank">
            <h2 className="text-warning py-5 font-weight-bold">
              Visit Sekuya Main Site
            </h2>
          </a>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="text-center py-3 col-12 font-weight-bold">
            <small className="font-weight-bold">© 2022 Sekuya Multiverse</small>
          </div>
        </div>
      </div>
    </div>
  );
}

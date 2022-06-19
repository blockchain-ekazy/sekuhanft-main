import React from "react";
import Logo from "./Imgs/Logo.PNG";

// import "./Home.css";
import "./Collection.css";

import MintBtn from "./mintbtn";
import Mintbtn2 from "./Mint";

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

import Web3 from "web3";
import Abtn from "./Abtn";

export default function Collection() {
  return (
    <div className="SaraColl">
      <header class="main-header  ">
        <div class="container">
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
                  <a
                    href="#home"
                    class="text-dark "
                    style={{ fontSize: "12px" }}
                  >
                    Mint Now
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-dark" href="#collection">
                    {/* <h2> {props.data} </h2> */}
                    Collection
                  </a>
                </li>
                <li className="mb-3 text-center">
                  <div className="text-center">
                    <Abtn />
                    {/* <button className="btn BtnCntHead">Connect</button> */}
                  </div>
                </li>
                <li className="py-2">
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
      <a id="home"></a>
      <div className="container-fluid Top">
        <div
          className="text-center py-5 mt-5"
          style={{ backgroundColor: "#d5ac1e" }}
        >
          <h1 className="mt-5 text-white pt-1">The Legends of Sekuya</h1>
          <h3 className="text-white">100 Ultra Rare NFT</h3>
        </div>

        <div className="home_meet_team_slider pb-5">
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
            aria-describedby="slick-slide06"
            style={{ width: 282 }}
            data-slick-index="6"
            aria-hidden="true"
          >
            <div className="home_meet_team_img">
              <img src={WImg2} title="" alt="" width="100%" />
            </div>
            <div className="home_meet_team_text">
              {/* <h3>Robyan</h3> */}
              {/* <h4>CO-FOUNDER</h4> */}
            </div>
          </div>
        </div>

        <div className="text-center">
          <MintBtn />
          <a id="about"></a>
          {/* <button className="btn BtnCnt">Connect</button> */}
        </div>
        <div className="text-center py-3">
          <h2 className="font-weight-bold text-white">My Collection</h2>
        </div>
      </div>
      <a id="collection"></a>
      <Mintbtn2 />
    </div>
  );
}

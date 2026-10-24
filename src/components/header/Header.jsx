import React from 'react'
import "./Header.css"
import { SIGN_ASSET_URL, SIGN_ASSET_SOURCE } from "../../data/SignImageData";

const Header = () => {
  return (
    <div className="signlang__header section__padding gradient__bg" id="home">

    <div className="signlang__header-content">
      <h1 className="gradient__text">Increase your Cognitive Brain Power with SLR.</h1>
      <p>
      It has been proven in studies that learning sign language keeps you on your feet as you age and also increase your thinking power.Also learning sign language will help you communicate with 72  Million Speakers worldwide. So Test out our tool, Learn and Practice Sign Language and Have Fun
      </p>

    </div>
    <div className="signlang__header-image">
      <img src={SIGN_ASSET_URL} alt='ASL alphabet hand signs' />
      <a href={SIGN_ASSET_SOURCE} target="_blank" rel="noreferrer">ASL alphabet source</a>
    </div>
  </div>
  )
}

export default Header
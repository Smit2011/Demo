import React from "react";
import "./Sentences.css";
import {
  SIGN_ASSET_SOURCE,
  SIGN_ASSET_URL,
  sentenceExamples,
} from "../../data/SignImageData";

const fingerspell = (word) => word.replace(/[^A-Z]/gi, "").split("");

const Sentences = () => (
  <section className="signlang_sentences section__padding" id="sentences">
    <div className="signlang_sentences-heading">
      <p className="section-kicker">Guided practice</p>
      <h1 className="gradient__text">Build a sentence, one sign at a time</h1>
      <p>
        These examples show the word sequence to practice with the shared ASL
        alphabet reference. The current MediaPipe model recognizes individual
        gestures, so sentence recognition is not claimed here.
      </p>
    </div>
    <div className="signlang_sentence-list">
      {sentenceExamples.map(({ sentence, words }) => (
        <article className="signlang_sentence" key={sentence}>
          <h2>{sentence}</h2>
          <div className="signlang_sentence-words">
            {words.map((word) => (
              <div className="signlang_sentence-word" key={word}>
                <strong>{word}</strong>
                <div className="signlang_sentence-letters">
                  {fingerspell(word).map((letter, index) => (
                    <span key={`${word}-${letter}-${index}`}>{letter}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <img src={SIGN_ASSET_URL} alt={`ASL alphabet reference for ${sentence}`} />
        </article>
      ))}
    </div>
    <a
      className="signlang_sentences-source"
      href={SIGN_ASSET_SOURCE}
      target="_blank"
      rel="noreferrer"
    >
      Hand-sign source and attribution: Wikimedia Commons, Asl alphabet gallaudet.svg
    </a>
  </section>
);

export default Sentences;
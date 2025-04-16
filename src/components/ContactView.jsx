import React, { useState } from "react";
import linkedinIcon from "../imgs/linkedin.svg";
import blueskyIcon from "../imgs/bluesky.svg";
import githubIcon from "../imgs/github.svg";
// import apiSource

function ContactView(
  {
    // Props
  }
) {
  // State declarations
  // Functions
  // Render
  return (
    <div>
      <div className="px-5 py-5 my-5 text-center shadow-lg">
        <h1>Contact Me</h1>
        <p>
          Interested in working together? Please email me or connect on any of
          the listed platforms.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:jacobbrowning90@gmail.com">
            jacobbrowning90@gmail.com
          </a>
        </p>

        <a
          href="https://www.linkedin.com/in/jacob-browning-4163346a/"
          target="_blank"
          className="mx-2"
        >
          <img src={linkedinIcon} alt="linkedin logo" />
        </a>
        <a
          href="https://bsky.app/profile/jakebrowning.bsky.social"
          target="_blank"
          className="mx-2"
        >
          <img src={blueskyIcon} alt="bluesky logo" />
        </a>
        <a
          href="https://github.com/JakeBrowning90"
          target="_blank"
          className="mx-2"
        >
          <img src={githubIcon} alt="github logo" />
        </a>
      </div>
    </div>
  );
}

export default ContactView;

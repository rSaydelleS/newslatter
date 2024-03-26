"use client";

import Image from "next/image";
import IconSuccess from "../../public/assets/icon-success.svg";
import "./styles.css";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function SubmitPage(props) {
  const [back, setBack] = useState(false);

  const toPage = () => {
    setBack(true);
  };

  if (back === true) {
    redirect("/");
  }

  return (
    <>
      <main className="all">
        <div className="content">
          <div>
            <Image src={IconSuccess} alt="Checkimage" />
          </div>
          <div className="maintext">
            <h1>
              Thanks for
              <br /> subscribing
            </h1>
          </div>
          <div className="text">
            <p>
              A confirmation email has benn sent to <br />
              <b>ash@loremcompany.com</b>. Please open it and click
              <br />
              the buttoninside to confirm your subscription
            </p>
          </div>
          <div>
            <button className="btnback" onClick={() => toPage()}>
              Dismiss message
            </button>
          </div>
        </div>
        <div className="modal"></div>
      </main>
    </>
  );
}

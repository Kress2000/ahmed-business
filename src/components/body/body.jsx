import React from "react";
import { useState } from "react";
import styles from "./body.module.scss";
import Footer from "../Footer/Footer";

export default function Body() {
  const [showPopup, setShowPopUp] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");

  const HandlePopUp = () => {
    setShowPopUp(true);
  };
  const closePopuP = () => {
    setShowPopUp(false);
  };
  const handleStartedSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    function getFirstAndLastName(fullName) {
      const words = fullName.split(" ");
      const firstName = words[0];
      const lastName = words.length > 1 ? words.slice(1).join(" ") : "";
      return { firstName, lastName };
    }
    const emailSent = document.querySelector(".emailSent").value;
    const fullnameSent = document.querySelector(".fullname").value;
    const { first, lastName } = getFirstAndLastName(fullnameSent);
    var raw = JSON.stringify({
      email: emailSent,
      fname: first,
      lname: lastName,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://ahmadibusiness.de/emailServe.php", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        closePopuP();
      })
      .catch((error) => console.log("error", error));
  };
  const handleEmailChange = (e) => {
    setEmail(e.value);
  };
  const handleNameChange = (e) => {
    setFullName(e.value);
  };

  return (
    <div id={styles.body}>
      {showPopup && (
        <div className="popup">
          <div className="popup-form">
            <div className="closeBtn" onClick={closePopuP}>
              <img src="/images/closbtn.svg" alt="close btn" />
            </div>
            <div className="title">
              Jetzt die brandneue Strategie zum online Geld verdienen sichern!
            </div>
            <div className="sub-opacity">
              Trage jetzt deinen Namen und deine beste E-Mailadresse in das
              Formular ein und klicke auf "Jetzt kostenlos anmelden" um die
              brandneue Strategie zum online Geld verdienen vor allen anderen zu
              erhalten!
            </div>
            <form
              className="formdata"
              action="#"
              onSubmit={handleStartedSubmit}
            >
              <input
                type="text"
                name="fullname"
                value={fullname}
                onChange={handleNameChange}
                placeholder="Vor- und Zuname"
                className="inputField fullname"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email addresse"
                className="inputField middlbtn emailSent"
                required
              />
              <label htmlFor="check" className="checkLabel">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  // value={}
                  onChange={() => setChecked((pre) => !pre)}
                  className={checked ? "checked" : "notChecked"}
                  required
                />
                Ich möchte Nachrichten zum Thema "Online Geld verdienen"
                erhalten absenden
              </label>
              <input type="submit" className="submit" value="Absenden" />
            </form>
          </div>
        </div>
      )}
      <div className="body_part">
        <div className="intro">
          <div className="box1">
            <div className="title">
              Perfekt für Anfänger geeignet- Brandneue Strategie zum Online Geld
              verdienen!
            </div>
            <div className="sub_title">
              Wie du in den nächsten 6 Wochen von zu Hause aus dein eigenes
              Online-Business startest und dir damit ohne Vorwissen ein 4- bis
              5- stelliges Monatseinkommen im Internet aufbauen
              <br />
              und dadurch endlich ein Leben in finanzieller, zeitlicher und
              geografischer Freiheit führen kannst!
            </div>
            <div className="btns_intro">
              <div className="btns blue" onClick={HandlePopUp}>
                Hier klicken
              </div>
            </div>
          </div>
          <div className="footerLg">
            <Footer />
          </div>
        </div>
        <div className="about">
          <div className="ahmed">
            <div className="ahmeed_bg"></div>
            <div className="info">
              <div className="description">
                Es ist besser mit drei kleinen schritten das Ziel zu erreichen,
                als sich bei einem Großen Sprung die Beine zu brechen
              </div>
            </div>
            <div className="info middle">
              <div className="description">
                Es ist nicht gut genug zu denken, dass dein Leben sich eines
                Tages ändern wird.
              </div>
            </div>
            <div className="bottom">
              <div className="info">
                <div className="description">
                  Erlog kommt dann, wenn du tust was du liebst.
                </div>
              </div>
            </div>
            <div className="footerMd">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <div className="svg_line"></div>
    </div>
  );
}

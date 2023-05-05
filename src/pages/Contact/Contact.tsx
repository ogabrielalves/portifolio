import style from "./Contact.module.scss";

import { BoxContact } from "../../components/atoms/BoxContact";
import { NavBar } from "../../components/atoms/NavBar";

function Contact() {
  return (
    <>
      <NavBar />
      <div className={style.container}>
        <BoxContact type="GitHub" />
        <BoxContact type="LinkedIn" />
        <BoxContact type="Email" />
        <BoxContact type="WhatsApp" />
      </div>
    </>
  );
}

export default Contact;

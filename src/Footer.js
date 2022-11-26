import React from "react";
import { Redes } from "./components/footer/Redes";

const Footer = () => {

  const year = new Date().getFullYear();
  const companyName = "Tu Profesional";
  const sobreNos = "La aplicación perfecta para buscar al profesional que necesites de la manera más rápida y eficaz."
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          {/* <div className="col-md-4 d-flex align-items-center"> */}
            {/* <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></a> */}
            <p className="col-md-4 mb-0 text-muted">
              &copy; {year} {companyName}
            </p>
            <br/>
            <p className="text-muted col-md-5">
              {sobreNos}
            </p>
          {/* </div> */}
            <Redes />
        </footer>
      </div>
    </div>
  );
};

export default Footer;

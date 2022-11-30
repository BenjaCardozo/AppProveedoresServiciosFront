import React from "react";
import "./ContactoConProveedor.css";
import { useEffect } from "react";


const ContactoConElProveedor = () => {
  const Swal = require("sweetalert2");
  const mostrarAlerta = ()=> {
      Swal.fire({
        title: "Estas seguro que quieres Cancelar?",
        text: "No vas a recuperar lo escrito.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        cancelButtonText: "Volver",
        confirmButtonText: "Si, quiero Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Borrado!", "Acción exitosa");
        }
      });
  }

  return (
    <>
      <main>
        <div className="body">
          <h1 className="titulo">
            <strong>Solicitar Trabajo</strong>
          </h1>
          <br />

          <div className="inpts " align="center">
            <label for="barrio" className="cols-sm-2 control-label">
              <h4>Confirmar Barrio</h4>
            </label>
            <br />
            <div className="cols-sm-10">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-envelope fa" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="barrio"
                  id="barrio"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="inpts" align="center">
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea2 cols-sm-2"
                className="form-label"
              >
                <h4>Describe brevemente el trabajo que necesitas</h4>
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </div>
          </div>

          <div className="botones ">
            <button type="button" className="btn btn-success solicitar">
              Solicitar
            </button>
            <button
              type="button"
              className="btn btn-danger cancelar"
              onClick={mostrarAlerta}
            >
              Cancelar
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactoConElProveedor;

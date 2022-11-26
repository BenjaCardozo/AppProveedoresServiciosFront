import React from "react";
import { API_PROVEEDORES } from "./../../constants/Api.constant";

function RegistroForm() {
  return (
    /*<div>
      <div className="container">
        <form className="row">
          <div className="col-12">
            <label for="nombreInput" className="">
              Nombre Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreInput"
              placeholder="Juan Perez"
            />
          </div>

          <div className="col-12">
            <label for="emailInput" className="form-label">
              Correo Electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="ejemplo@email.com"
            />
          </div>

          <div className="col-12">
            <label for="passwordInput" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Contraseña"
            />
          </div>

          <div className="col-12">
            <label for="passwordInput2" className="form-label">
              Repetir Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput2"
              placeholder="Repetir Contraseña"
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Barrio
            </label>
            <select id="inputState" className="form-select">
              <option selected></option>
              <option></option>
            </select>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </form>
      </div>
    </div>*/

    <div class="container mt-5 mb-5">
      <div class="row justify-content-center" >
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <form class="row gy-2 gx-3 align-items-center" method="post" action="#">
                <div class="form-group">
                  <label for="name" class="cols-sm-2 control-label">
                    Your Name
                  </label>
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-user fa" aria-hidden="true"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email" class="cols-sm-2 control-label">
                    Your Email
                  </label>
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-envelope fa" aria-hidden="true"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="username" class="cols-sm-2 control-label">
                    Username
                  </label>
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-users fa" aria-hidden="true"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        name="username"
                        id="username"
                        placeholder="Enter your Username"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="cols-sm-2 control-label">
                    Password
                  </label>
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        placeholder="Enter your Password"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="confirm" class="cols-sm-2 control-label">
                    Confirm Password
                  </label>
                  <div class="cols-sm-10">
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        name="confirm"
                        id="confirm"
                        placeholder="Confirm your Password"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group ">
                  <button
                    type="submit"
                    class="btn btn-primary btn-l btn-block login-button"
                  >
                    Register
                  </button>
                </div>
                <div class="login-register">
                  <a href="index.php">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroForm;

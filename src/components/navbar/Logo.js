import "./Logo.css";
export function Logo() {
  return (
    <div class="appLogo">
      <a
        href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img className="bi App-logo" height="32" src="TuProfesional.png"></img>
      </a>
    </div>
  );
}

export default Logo;

import "./Buscador.css"

export function Buscador() {
    return (<div id="buscador">
        <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Buscar" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">
    <svg className="icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="Icon"><g><path d="m10 3.5c-3.587 0-6.5 2.913-6.5 6.5s2.913 6.5 6.5 6.5 6.5-2.913 6.5-6.5-2.913-6.5-6.5-6.5zm0 1c3.036 0 5.5 2.464 5.5 5.5s-2.464 5.5-5.5 5.5-5.5-2.464-5.5-5.5 2.464-5.5 5.5-5.5z"/><path d="m20.354 19.646-5.759-5.758c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l5.758 5.759c.196.195.512.195.708 0 .195-.196.195-.512 0-.708z"/></g></g></svg>
    </button>
  </div>
  </div>)
}

export default Buscador;

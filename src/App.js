import './App.css';

function App() {
  return (
      <div id="wrapper">
        <section className="intro">
          <header>
            <h1>Hospital</h1>
            <p>Conocenos</p>
            <ul className="actions">
              <li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
            </ul>
          </header>
          <div className="content">
            <span className="image fill" data-position="center"><img src="https://www.economiadigital.es/wp-content/uploads/2020/10/hospital-quiron-barcelona-1-1-1000x665.jpeg" alt=""/></span>
          </div>
        </section>

        <section id="first">
          <header>
            <h2>Registrarse</h2>
          </header>
          <div className="content">
            <p>Para tener mayor conocimiento de nosotros, lo invitamos a registrarse.</p>
              <center><button className="button primary" onClick={()=> {window.location.href="/#/src/componets/LooL"}}>Registrarse</button></center>
          </div>
        </section>
      </div>
  );
}

export default App;

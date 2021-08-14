import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
<header>
<i className="fas fa-book-open"></i><h1>DICTIONARY</h1>
</header>
<Search />
   <footer>
      <div className="container">
        <div className="row p-3">
          <div className="col-sm-6 d-flex align-items-center justify-content-center">
            <p className="m-0">Coded by Sofia Paiva</p>
          </div>
          <div className="col-sm-6">
            <span className="social-icons d-flex justify-content-center">
                 <a
                href="https://github.com/sofiapaiva90/dictionary-react-project"
                target="_blank"
                rel="noreferrer"
                title="See Sofia's GitHub"
                ><i className="fab fa-github"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/sofiapaiva/"
                target="_blank"
                rel="noreferrer"
                title="See Sofia's Linkedin"
                ><i className="fab fa-linkedin pe-3"></i
              ></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
      </div>
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App(props) {
  return (
    <div className="container-fluid">
      <div className='row bg-dark p-4'>
        <div className='col'>
          <div className="card bg-dark border border-dark-subtle">
            <div className="card-body">
              <h5 className="card-title text-light"><i className="fa-regular fa-clock"></i></h5>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card bg-dark border border-dark-subtle">
            <div className="card-body">
              <h5 className="card-title text-light">{props.digitFive}</h5>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card bg-dark border border-dark-subtle">
            <div className="card-body">
              <h5 className="card-title text-light">{props.digitFour}</h5>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card bg-dark border border-dark-subtle">
            <div className="card-body">
              <h5 className="card-title text-light">{props.digitThree}</h5>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card bg-dark border border-dark-subtle">
            <div className="card-body">
              <h5 className="card-title text-light">{props.digitTwo}</h5>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card bg-dark border border-dark-subtle">
            <div className="card-body">
              <h5 className="card-title text-light">{props.digitOne}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

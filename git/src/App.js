import logo from './logo.svg';
import './App.css';
import { Reg } from './pages/reg';

function App(props) {
  console.log(props.data);
  function fetchData(vendor)
  {
    console.log(vendor);

  }
  return (

    <div>
   <Reg fetch={fetchData} />
    </div>
  );
}

export default App;

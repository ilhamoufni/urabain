
import Navbar from "./Components/navbar";
import './App.css';
import Intro from"./Components/intro";
import LoginForm from "./Components/loginform";
// import Table from "./Components/ptable";


function App() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <LoginForm />
        {/* <Table /> */}
        </div>
    );
  }
  
  export default App;

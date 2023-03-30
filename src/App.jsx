// import "./App.css"
// import Home from "./components/Home";
// import Todo from "./components/Todo";
import Calender from "./pages/Calender";
import Homepage from "./pages/Homepage";
import Todaypage from "./pages/Todaypage";
import TodoPage from "./pages/TodoPage";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   {/* <div className="home">
    //     <Home />
    //     </div>
    //     <div className="todo">
    //         <Todo />
    //     </div> */}
    // </div>
          <Routes>
            <Route exact path="/" element={<Homepage / >} />
            <Route path ="/todo" element={<TodoPage />} />
            <Route path ="/today" element={<Todaypage/>} />
            <Route path ="/calender" element={<Calender/>} />

          </Routes>
    
  );
}

export default App;

import Home from "./pages/home/Home";
import Teams from "./pages/teams/Teams";
import Stats from "./pages/Stats/Stats";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" >
        <Route index element={<Home/>}/>
        <Route path="teams" element={<Teams/>}/>
          <Route path="stats" element={<Stats/>}>
          
        <Route path=":userId" element={<Single/>}/>
        <Route path="new" element={<New/>}/>
          </Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

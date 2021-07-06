import "./App.css";
import Homepage from "./Components/homepage/homepage";
import Addpage from "./Components/Addpage/addpage";
import Card from "./Components/card/card";
import EditNote from "./Components/EditNote";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/" component={Card} />
        <Route exact path="/addnote" component={Addpage} />
        <Route exact path="/editnote" component={EditNote} />
      </div>
    </Router>
  );
}

export default App;

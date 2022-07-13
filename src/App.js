import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import Body from "./Components/Body/Body";
import SideNav from "./Components/SideNav/SideNav";
import { fetchFood } from "./Redux/features/foodsSlice";
import { fetchOrder } from "./Redux/features/orderSlice";
import { BrowserRouter as Router } from 'react-router-dom'
import Alert from "./Components/Alert/Alert";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFood())
    dispatch(fetchOrder())
  }, [])
  return (
    <div className="App ">
      <div className="row">
        <Router>
          <SideNav />
          <Body />
        </Router>
      </div>
      <Alert />
    </div>
  );
}

export default App;

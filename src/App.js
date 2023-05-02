import TopMenu from "./components/TopMenu";
import BottomMenu from "./components/BottomMenu";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return <>
    <BrowserRouter>
      <TopMenu/>
      <BottomMenu/>
    </BrowserRouter>
  </>
}



export default App;

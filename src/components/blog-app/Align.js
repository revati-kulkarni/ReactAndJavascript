import Intro1 from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import { Footer } from "./Footer";
import Nav from "./Nav";
import "../App.css";


export default function Align() {
  return (
    <div className="align">
      <Nav />
      <Intro1></Intro1>
      <Intro2></Intro2>
      <Intro3></Intro3>
      <Footer></Footer>
    </div>
  );
}

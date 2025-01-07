import Education from "./Education";
import Skillset from "./SkillSet";
import "./App.css";
import ColorChange from "./ColorChange";
import MyForm from "./forms/Form";
import Square from "./tic-tac-toe/Square";
import Align from "./blog-app/Align";

function App() {
  return (
    <>
      <h1 className="App-header">WELCOME TO MY PROFILE</h1>
      <table className="MyApp">
        <h5>Change Color Tab</h5>
        <ColorChange className="Color"></ColorChange>
        <h3>Heres some Blog Post Customization trial</h3>
        <Align className="align"></Align>
        <h3>
          Hi my name is {user.name} and I work as {user.role}
        </h3>
        <h5>Skills</h5>
        <Skillset></Skillset>
        <h5>Education</h5>
        <Education></Education>
        <h5>Input Form</h5>
        <MyForm className="Form"></MyForm>
        <h5>TicTacToe</h5>
        <Square className="TicTacToe"></Square>
      </table>
    </>
  );
}
const user = {
  name: "Revati",
  role: "Backend Developer",
};

export default App;

import Education from "./Education";
import Skillset from "./SkillSet";
import "./App.css";
import ColorChange from "./ColorChange";
import MyForm from "./forms/Form";
import Square from "./tic-tac-toe/Square";

function App() {
  return (
    <>
      <table className="MyApp">
        <th className="App-header">
          <h1>WELCOME TO MY PROFILE</h1>
        </th>

        <h3>
          Hi my name is {user.name} and I work as {user.role}
        </h3>
        <h5>Skills</h5>
        <Skillset></Skillset>
        <h5>Education</h5>
        <Education></Education>
        <h5>Input Form</h5>
        <MyForm className="Form"></MyForm>
        <h5>Change Color Tab</h5>
        <ColorChange className="Color"></ColorChange>
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

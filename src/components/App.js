import Education from "./Education";
import Skillset from "./SkillSet";
import "./App.css";
import ColorChange from "./ColorChange";
import MyForm from "./forms/Form";

function App() {
  return (
    <>
    <div className="MyApp">
      <header className="App-header">
        <h1>WELCOME TO MY PROFILE</h1>
      </header>
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
      </div>
  </>
  );
}
const user = {
  name: "Revati",
  role: "Backend Developer",
};

export default App;

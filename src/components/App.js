import Education from "./Education";
import Skillset from "./SkillSet";

function App() {
  return (
    <div className="MyApp">
      <header className="App-header">
        <h1>WELCOME TO MY PROFILE</h1>
        <h3>
          Hi my name is {user.name} and I work as {user.role}
        </h3>
        <br></br>
        <h4>Skills</h4>
        <Skillset></Skillset>
        <h4>Education</h4>
        <Education></Education>
      </header>
    </div>
  );
}
const user = {
  name: "Revati",
  role: "Backend Developer",
};

export default App;

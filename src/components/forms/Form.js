import { useState } from "react";

export default function MyForm() {
  const [showForm, setFormShow] = useState(false);
  const handleClick = () => {
    setFormShow(true);
  };
  return (
    <>
      <button onClick={handleClick}>Click To See Form</button>
      {showForm && <InputForm></InputForm>}
    </>
  );
}
function InputForm() {
  return (
    <form>
      <li>
        Name <input name="query" />
      </li>
      <li>
        Age <input></input>
      </li>
      <li>
        Gender <input type="radio" id="male" name="gender" />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" />
        <label for="female">Female</label>
      </li>
      <button type="submit">Submit</button>
    </form>
  );
}

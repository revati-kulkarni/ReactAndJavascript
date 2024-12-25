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
      <button type="submit">Search</button>
    </form>
  );
}

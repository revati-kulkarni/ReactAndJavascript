import "./App.css";

const schools = [
  {
    id: 1,
    name: "MIT Abad",
    course: "B.Tech",
  },
  {
    id: 2,
    name: "CDAC Pune",
    course: "PG-Diploma",
  },
];
let schoolname = [];
for (let e = 0; e < schools.length; e++) {
  schoolname.push(
    <li key={e}>
      {schools[e].name}: {schools[e].course}
    </li>
  );
}
function Education() {
  return <ol className="Education">{schoolname}</ol>;
}
export default Education;

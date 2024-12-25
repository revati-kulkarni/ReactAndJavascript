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
for (let e of schools) {
  <ol key={e.id}>
    {schoolname.push(`${e.name}: ${e.course}`)};{schoolname.push(<br></br>)};
  </ol>;
}
function Education() {
  return <li> {schoolname}</li>;
}
export default Education;

const skills = [
  { id: 1, title: "NodeJs" },
  { id: 2, title: "PostgreSQL" },
  { id: 3, title: "Javascript" },
  { id: 4, title: "Typescript" },
];
let listItems = [];
for (let e = 0; e < skills.length; e++) {
  let item = <li key={skills[e].id}>{skills[e].title}</li>;
  listItems.push(item);
}

function Skillset() {
  return <ol>{listItems}</ol>;
}

export default Skillset;

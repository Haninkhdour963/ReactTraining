
import "./MyFirstComponentStyle.css"
const x = 10;

const person = {
  name: "Heno",
  email: "heno@gmail.com"
};

const elStyle = {
  backgroundColor: "red",
  fontSize:"33px",
  boxShadow:"0px 20px 10px white"
};

function SayHello() {
  return "👋 "; // Removed alert (not suitable in render), replaced with return
}

function MyFirstComponent() {
  return (
    <div>
      <h1 className={"active redBg"}>{x + x * 782} {SayHello()}Hello world x</h1>
      <h1 style={elStyle}>Name: {person.name}</h1>
      <h1  style={elStyle}>Email: {person.email}</h1>
      <h2 style={{ backgroundColor: "red",
  fontSize:"33px",
  boxShadow:"0px 20px 10px pink"}}>Hi</h2>
  <h2 className={person.name=="Heno"?"redBg":"greenBg"}>Check Me </h2>
    </div>
  );
}

export default MyFirstComponent;

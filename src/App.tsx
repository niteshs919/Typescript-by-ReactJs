import "./App.css";
import { Button } from "./components/Button";
import { Button2 } from "./components/Button2";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { ThemeContextProvider } from "./components/State/UseContext/First/ThemeContext";
import { Counter } from "./components/State/UseReducer/Counter";
import { Counter2 } from "./components/State/UseReducer/Counter2";
import { LoggedIn } from "./components/State/UseState/LoggedIn";
import { User } from "./components/State/UseState/User";
import { Status } from "./components/Status";
import { Box } from "./components/State/UseContext/First/Box";
import { List } from "./components/generics props/List";
function App() {
  const personName = {
    first: "Nitesh",
    last: "Sikarwar",
  };

  const nameList = [
    {
      first: "Nitesh",
      last: "Sikarwar",
    },
    {
      first: "Nitesh",
      last: "Sikarwar",
    },
    {
      first: "Nitesh",
      last: "Sikarwar",
    },
  ];

  const handleClickButton = () => {
    console.log("Button Clicked !!!!");
  };

  return (
    <div className="App">
      <Greet name="nitesh sikarwar" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <br /> <br /> <br />
      <PersonList name={nameList} />
      <Status status="loading" />
      <Heading>Heading from App </Heading>
      <Oscar>
        <Heading>Heading from Oscar Components</Heading>
      </Oscar>
      <Greet name="One props will not pass" isLoggedIn={true} />
      <Button handleClick={handleClickButton} />
      <Button2
        handleClick={(event, id) => {
          console.log("new button 2 ", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(e) => {
          console.log(e);
        }}
      />
      <Container style={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User />
      <Counter />
      <Counter2 />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <User />
      <List
        items={["a", "b", "c", "d", "e"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4, 5, 6]} onClick={(item) => console.log(item)} />
    </div>
  );
}

export default App;

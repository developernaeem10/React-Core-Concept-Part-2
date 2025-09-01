import "./App.css";
import Counter from "./counter";
import Batsman from "./Batsman";
import Users from "./users";
import Friends from "./Friends";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}

function App() {

  const friendsPromise = fetchFriends()
  function handleClick() {
    alert("Clicked");
  }
  const newclick = () => {
    alert("Hello Click 3");
  };

  const addNewNum = (num) => {
    const add = num + 10;
    alert(add);
  };

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<p>Loading...</p>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<p>Friends are Loading...</p>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function justClick() {
          alert("Clicked 2");
        }}
      >
        Click Me 2
      </button>
      <button onClick={newclick}>Click Me 3</button>
      <button onClick={() => alert("Click Me 4")}>Click Me 4</button>

      <button onClick={() => addNewNum(25)}>Click Me 5</button>
    </>
  );
}

export default App;

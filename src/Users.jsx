import { useEffect, useState } from "react";
import Person from "./Person";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((person) => (
        <Person person={person} />
      ))}
    </div>
  );
}

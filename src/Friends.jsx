import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="box">
      <h3>Friends:{friends.length} </h3>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </div>
  );
}
export default Friends;

/**
 * state declare for to hold data
 * set useState initial value is empty array
 * use effect with dependency array
 * use fetch to load data
 * set loaded data to the state
 *
 *
 * **/

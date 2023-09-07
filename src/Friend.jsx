export default function Friend({ friend }) {
  console.log(friend);
  const { name, email, id, username, phone } = friend;
  return (
    <div className="friend">
      <h5>User Id: {id}</h5>
      <h4>Name: {name}</h4>
      <h5>User Name: {username}</h5>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
}

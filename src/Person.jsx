export default function Person({ person }) {
  const { id, name, username } = person;
  const personStyle = {
    border: "2px solid rebeccapurple",
    marginBottom: "20px",
    borderRadius: "20px",
    padding: "15px",
  };
  return (
    <div style={personStyle}>
      <h4>Person Id: {id}</h4>
      <h4>Person Name: {name}</h4>
      <h6>Person Username: {username}</h6>
    </div>
  );
}

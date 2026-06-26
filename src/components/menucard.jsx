function MenuCard({ item, addToOrder }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px auto",
        width: "250px",
        textAlign: "center"
      }}
    
    >
      <img
        src={item.image}
        alt={item.name}
        width="220"
        height="150"
      />

      <h3>{item.name}</h3>

      <p>₹{item.price}</p>

      <button onClick={addToOrder}>
        Add Order
      </button>
    </div>
  );
}

export default MenuCard;
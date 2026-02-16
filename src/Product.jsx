function Product({ name, addOn }) {
  return (
    <div >
      <p>{name}</p>
      <button onClick={addOn}>Add to Cart</button>
    </div>
  );
}

export default Product;



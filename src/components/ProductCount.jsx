function ProductCount({ quantity, setQuantity }) {
  return (
    <div className="inline-flex text-sm shadow-md">
      <button
        className={
          "flex items-center justify-center w-6 h-6 bg-gray-300" +
          (quantity === 1 ? " opacity-50 cursor-not-allowed" : "")
        }
        disabled={quantity === 1}
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </button>
      <div className="flex items-center justify-center w-10">{quantity}</div>
      <button
        className="flex items-center justify-center w-6 h-6 bg-gray-300"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}

export default ProductCount;

function SummaryItem({item}) {
  return (
    <>
      <div className="summary-item">
        <p>{item.productName} </p>
        <p>₹{item.totalPrice}</p>
      </div>
    </>
  );
}

export default SummaryItem;
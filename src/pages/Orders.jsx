
const Orders = () => {
  return (
    <div className="orders">
      <h2>Orders</h2>
        <table className="orders_table">
            <thead>
            <tr>
                <th>DATE</th>
                <th>PAID</th>
                <th>RECIPIENT</th>
                <th>PRODUCTS</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>2023-07-20</td>
                <td>$100.00</td>
                <td>John Doe</td>
                <td>Product A, Product B</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Orders

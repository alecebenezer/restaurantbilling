function Report() {
  return (
    <div>
      <h1>Sales Report</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Orders</th>
            <th>Revenue</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>20-06-2026</td>
            <td>25</td>
            <td>₹4500</td>
          </tr>

          <tr>
            <td>21-06-2026</td>
            <td>30</td>
            <td>₹5200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Report;
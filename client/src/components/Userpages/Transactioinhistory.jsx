import React, { useState, useEffect } from 'react';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Simulated transaction data for demonstration
    const sampleTransactions = [
      { id: 1, date: '2023-06-01', description: 'Payment from Client A', amount: 5000 },
      { id: 2, date: '2023-06-02', description: 'Online Purchase', amount: -1000 },
      { id: 3, date: '2023-06-03', description: 'Utility Bill Payment', amount: -200 },
      { id: 4, date: '2023-06-04', description: 'Salary Deposit', amount: 10000 },
      { id: 5, date: '2023-06-05', description: 'Transfer to Savings', amount: -3000 },
    ];

    setTransactions(sampleTransactions);
    setFilteredTransactions(sampleTransactions);
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    filterTransactions(searchTerm);
  };

  const filterTransactions = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter(
        (transaction) =>
          transaction.description.toLowerCase().includes(searchTerm) ||
          transaction.date.includes(searchTerm)
      );
      setFilteredTransactions(filtered);
    }
  };

  return (
    <div>
      <h2>Transaction History</h2>
      <input
        type="text"
        placeholder="Search by description or date..."
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{transaction.date}</td>
              <td style={{ padding: '10px' }}>{transaction.description}</td>
              <td style={{ padding: '10px' }}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

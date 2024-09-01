import React, { useState, useEffect } from 'react';

const LoanStatusTracking = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const response = await fetch('http://localhost:5173/loans'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLoans(data);
      } catch (error) {
        console.error('Error fetching loan data:', error);
      }
    };

    fetchLoanData();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Loan Status Tracking</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Applied On</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.trackingId}</td>
              <td>{loan.status}</td>
              <td>${loan.amount}</td>
              <td>{new Date(loan.appliedOn).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
};

export default LoanStatusTracking;

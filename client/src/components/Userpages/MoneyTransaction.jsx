import React, { useState } from 'react';

const MoneyTransaction = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderAccountNumber: '',
    senderBank: '',
    senderIFSC: '',
    senderBranch: '',
    senderPhoneNumber: '',
    receiverName: '',
    receiverAccountNumber: '',
    receiverBank: '',
    receiverIFSC: '',
    receiverBranch: '',
    receiverPhoneNumber: '',
    amount: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform client-side validation if needed
      if (
        !formData.senderName ||
        !formData.senderAccountNumber ||
        !formData.senderBank ||
        !formData.senderIFSC ||
        !formData.senderBranch ||
        !formData.senderPhoneNumber ||
        !formData.receiverName ||
        !formData.receiverAccountNumber ||
        !formData.receiverBank ||
        !formData.receiverIFSC ||
        !formData.receiverBranch ||
        !formData.receiverPhoneNumber ||
        !formData.amount
      ) {
        throw new Error('Please fill out all fields.');
      }

      const response = await fetch('http://localhost:5173/transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessage(data.message); // Assuming the server responds with a success message
      setError('');
      setFormData({
        senderName: '',
        senderAccountNumber: '',
        senderBank: '',
        senderIFSC: '',
        senderBranch: '',
        senderPhoneNumber: '',
        receiverName: '',
        receiverAccountNumber: '',
        receiverBank: '',
        receiverIFSC: '',
        receiverBranch: '',
        receiverPhoneNumber: '',
        amount: '',
      });
    } catch (error) {
      console.error('Error performing transaction:', error);
      setMessage('');
      setError('Failed to perform transaction. Please try again later.');
    }
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      fontSize: '24px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '16px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007BFF',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    successMessage: {
      color: 'green',
      marginTop: '10px',
      textAlign: 'center',
    },
    errorMessage: {
      color: 'red',
      marginTop: '10px',
      textAlign: 'center',
    },
    formContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
    column: {
      flex: '1',
      padding: '0 10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Money Transaction</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div style={styles.formContainer}>
          {/* Sender Details */}
          <div style={styles.column}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Sender Name:</label>
              <input
                style={styles.input}
                type="text"
                name="senderName"
                value={formData.senderName}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Sender Account Number:</label>
              <input
                style={styles.input}
                type="text"
                name="senderAccountNumber"
                value={formData.senderAccountNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Sender Bank:</label>
              <input
                style={styles.input}
                type="text"
                name="senderBank"
                value={formData.senderBank}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Sender IFSC Code:</label>
              <input
                style={styles.input}
                type="text"
                name="senderIFSC"
                value={formData.senderIFSC}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Sender Branch:</label>
              <input
                style={styles.input}
                type="text"
                name="senderBranch"
                value={formData.senderBranch}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Sender Phone Number:</label>
              <input
                style={styles.input}
                type="text"
                name="senderPhoneNumber"
                value={formData.senderPhoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Receiver Details */}
          <div style={styles.column}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Receiver Name:</label>
              <input
                style={styles.input}
                type="text"
                name="receiverName"
                value={formData.receiverName}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Receiver Account Number:</label>
              <input
                style={styles.input}
                type="text"
                name="receiverAccountNumber"
                value={formData.receiverAccountNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Receiver Bank:</label>
              <input
                style={styles.input}
                type="text"
                name="receiverBank"
                value={formData.receiverBank}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Receiver IFSC Code:</label>
              <input
                style={styles.input}
                type="text"
                name="receiverIFSC"
                value={formData.receiverIFSC}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Receiver Branch:</label>
              <input
                style={styles.input}
                type="text"
                name="receiverBranch"
                value={formData.receiverBranch}
                onChange={handleChange}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Receiver Phone Number:</label>
              <input
                style={styles.input}
                type="text"
                name="receiverPhoneNumber"
                value={formData.receiverPhoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Transaction Amount */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Amount:</label>
          <input
            style={styles.input}
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Transfer Money
        </button>
      </form>

      {/* Display Messages */}
      {message && <p style={styles.successMessage}>{message}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default MoneyTransaction;

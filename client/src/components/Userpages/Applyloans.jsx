import React, { useState } from 'react';

const Applyloans = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    purpose: '',
    interestRate: '',
    loanTenure: ''
  });

  const [emi, setEmi] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., sending data to the server
    console.log('Form submitted:', form);
  };

  const calculateEMI = (amount, rate, tenure) => {
    const monthlyRate = rate / (12 * 100);
    const months = tenure * 12;
    const emiValue = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return emiValue.toFixed(2);
  };

  const handleEmiCalculation = () => {
    const calculatedEMI = calculateEMI(form.amount, form.interestRate, form.loanTenure);
    setEmi(calculatedEMI);
  };

  const styles = {
    container: {
      maxWidth: '400px',
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
      marginBottom: '10px'
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Apply for Loans</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="amount">Loan Amount</label>
          <input
            style={styles.input}
            type="number"
            id="amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="purpose">Purpose</label>
          <input
            style={styles.input}
            type="text"
            id="purpose"
            name="purpose"
            value={form.purpose}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="interestRate">Interest Rate (% per annum)</label>
          <input
            style={styles.input}
            type="number"
            step="0.01"
            id="interestRate"
            name="interestRate"
            value={form.interestRate}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="loanTenure">Loan Tenure (years)</label>
          <input
            style={styles.input}
            type="number"
            id="loanTenure"
            name="loanTenure"
            value={form.loanTenure}
            onChange={handleChange}
            required
          />
        </div>
        <button style={styles.button} type="button" onClick={handleEmiCalculation}>Calculate EMI</button>
        {emi && (
          <div>
            <h2>Estimated Monthly EMI: {emi}</h2>
          </div>
        )}
        <button style={styles.button} type="submit">Apply</button>
      </form>
    </div>
  );
};

export default Applyloans;

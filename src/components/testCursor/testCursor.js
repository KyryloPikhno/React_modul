import React from 'react';

const TestCursor = () => {
  // Generate 1000 rows of mock data
  const generateData = () => {
    const data = [];
    for (let i = 1; i <= 1000; i++) {
      data.push({
        id: i,
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        age: Math.floor(Math.random() * 50) + 18 // Random age between 18 and 67
      });
    }
    return data;
  };

  const tableData = generateData();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestCursor;

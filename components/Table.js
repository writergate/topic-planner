import { useState } from 'react';

export default function Table() {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John Doe', selected: false },
    { id: 2, name: 'Jane Smith', selected: false },
    { id: 3, name: 'Bob Johnson', selected: false },
  ]);

  const handleCheckboxChange = (id) => {
    setTableData((prevTableData) =>
      prevTableData.map((data) =>
        data.id === id ? { ...data, selected: !data.selected } : data
      )
    );
  };

  return (
    <table>
      <tbody>
        {tableData.map((data) => (
          <tr key={data.id}>
            <td>
              <input
                type="checkbox"
                checked={data.selected}
                onChange={() => handleCheckboxChange(data.id)}
              />
            </td>
            <td>{data.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
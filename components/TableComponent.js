  /*
import { useEffect, useState } from 'react';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

function TableComponent() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new DynamoDBClient({ region: 'us-east-1' }); // create a DynamoDB client with your preferred region
        const command = new ScanCommand({ TableName: 'topic-template' }); // define a scan command for the table you want to fetch data from
        const response = await client.send(command); // send the command to DynamoDB
        setData(response.Items); // update the state with the fetched data
      } catch (error) {
        console.error(error);
        <a>wrong</a>
      }
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
*/
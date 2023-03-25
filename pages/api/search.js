import { DynamoDB } from 'aws-sdk';

const dynamoDB = new DynamoDB.DocumentClient();

export default async function handler(req, res) {
  const { searchTerm } = req.body;

  const params = {
    TableName: 'topic-template',
    KeyConditionExpression: 'searchKey = :searchTerm',
    ExpressionAttributeValues: {
      ':searchTerm': searchTerm
    }
  };

  try {
    const { Items } = await dynamoDB.query(params).promise();
    res.status(200).json({ results: Items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while searching the database.' });
  }
}

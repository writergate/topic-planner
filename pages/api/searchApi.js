const handler = async(req, res) => {

    const method = 'GET';
    const {keyword} = req.query;
    const url = `https://tgi5925rh9.execute-api.us-east-1.amazonaws.com/prod/search?searchString=${keyword}`;
    const option = {
        method: method,
        headers: {
            'x-api-key': 'l8gOym14lu1fqC68Q7VxW1MqjqanRGqG58Mtl6ph'
        },
        

    }

    // Set up CORS headers with options
    try{
            const response = await fetch(url,option);
            const finalData = await response.json();
            return res.status(200).json(finalData);
          } catch (error) {
             console.error(error)
             return res.status(error.status || 500).end(error.message);
        }
}
  
export default handler;
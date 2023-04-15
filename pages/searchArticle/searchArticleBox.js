import React,{ useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ArticleCard from '../../components/articleCard';



function SearchArticleBox(props) {

        const url = `/api/searchApi?keyword=${props.keyword}`;
        const method = 'GET';
        const [data, setData] = useState([]);

        const option = {
            method: method,
            headers: {
                'x-api-key': 'l8gOym14lu1fqC68Q7VxW1MqjqanRGqG58Mtl6ph'
            },
            
        }

        useEffect(() => {
            const fetchData = async () => {
            try{
                    const response  = await fetch(url,option);
                    const finalData = await response.json();
                    setData(finalData);
                    
            }catch(error){

                    console.error(error);
            }
           
          }
          fetchData()
          
        }, [props.keyword]) 

        console.log(data);

        return (
            <div style={{marginTop:'20px', width:'100%'}}>
                <Grid sx={{ flexGrow: 1 }}>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center" spacing={3}>
                        {data.map((item) => (
                            <Grid key={item.productId} item>
                                <ArticleCard name={item.productName} />
                            </Grid>
                        ))}
                        </Grid>
                    </Grid>
                        </Grid>
                
            </div>
            
        );
}

export default SearchArticleBox;
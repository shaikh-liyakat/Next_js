import axios from 'axios';
import { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products') // Assuming you have an API route at /api/data
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, [data,error]);

  console.log(data);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;
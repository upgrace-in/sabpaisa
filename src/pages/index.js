import { useEffect, useState } from 'react';
import { makeAPICall } from '../lib/sabpaisa';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeAPICall('https://stage-securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1');
        setData(response);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

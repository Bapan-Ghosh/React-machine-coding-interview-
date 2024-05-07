import { useEffect, useState } from "react";

export default function App() {
  const [apidata, setApidata] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setApidata(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

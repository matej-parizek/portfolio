import { useEffect, useState } from "react";
import ResultReposponse from "./dto/Result.Response"
require('dotenv').config();

const auth = {
  headers: {
    'Authorization': `token ${process.env.REACT_APP_TOKEN}`
  }
}
const FetchPortfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const username = process.env.REACT_APP_USERNAME
  const fetchRepository = async (urls) => {
    try {
      const results = await Promise.all(
        urls.map(async (it) => {
          const url = it.url;
          const response = await fetch(url, auth);
          const item = await response.json();
          return new ResultReposponse(item.url, item.name);
        })
      );
      setLoading(false)
      setData(results.filter((it)=> it.name!==`${username}`));
    } catch (error) {
      console.error('Error fetching repository data:', error);
    }
  };

  // Použití useEffect pro načtení dat při načtení komponenty
  useEffect(() => {
    setData(
      fetch(`https://api.github.com/users/${username}/repos`, auth
      )
        .then(it => it.json())
        .then(it => {
          fetchRepository(it)
        })
        .catch())
  }, [])
  console.log(data)

  return (
    <div className="todo">
      <h1>Data from Multiple APIs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item.name)}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FetchPortfolio
import { useEffect, useState } from "react";

const auth = {
  headers: {
    'Authorization': `token `
  }
}
const FetchPortfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)


  const fetchRepository = (urls) => {
    const limit = Promise.all([
      urls.map((it) => {
        const url = it.url
        fetch(url, auth)
          .then(item => item.json())
          .then(item => {
            return item
          })
      })
    ])

    console.log(limit)
  }

  // Použití useEffect pro načtení dat při načtení komponenty
  useEffect(() => {
    setData(
      fetch(`https://api.github.com/users/matej-parizek/repos`, auth
      )
        .then(it => it.json())
        .then(it => {
          fetchRepository(it)
        })
        .catch())
  }, [])
  console.log(data)

  return (
    <div>
      <h1>Data from Multiple APIs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FetchPortfolio
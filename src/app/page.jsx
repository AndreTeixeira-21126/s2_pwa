async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')


  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

  return <main>{
    data.title}</main>
}
import axios from 'axios'
import { useEffect, useState } from 'react'

const RenderData = () => {
  const [data, setData] = useState()
  const fetchData = async()=>{
  const response = await axios.post("http://localhost:3000/sendData", {
  username: "dev",
  password: "123456"
});
  setData(response.data)
  console.log("data fetched");
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  console.log(data)
    return (
    <div>{data?.msg}</div>
  )
}

export default RenderData
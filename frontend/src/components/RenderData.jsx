import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const RenderData = () => {
  const [data, setdata] = useState()
  
  const fetchData = async()=>{
  const response = await axios.get('http://localhost:3000')
  console.log(response.data.msg);
  setdata(response.data.msg)
  }

  useEffect(() => {  
    fetchData();
    
  }, [])
  
    return (
    <div className='text-white'>{data}</div>)
  
}

export default RenderData
import axios from 'axios'

const RenderData = () => {
    
  const response = axios.get('http://localhost:3000')
  const data = response.data
    console.log(data)
    return (
    <div>{data}</div>
  )
}

export default RenderData
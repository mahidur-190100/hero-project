import React from 'react'
import { useLoaderData } from 'react-router'

const Installation = () => {
    const data = useLoaderData();
    console.log(data)
  return (
    <div>
     MY install page connect done
    </div>
  )
}

export default Installation
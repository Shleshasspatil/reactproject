import { getRoles } from '@testing-library/react'
import React from 'react'

export const File2 = (props) => {
    if (props.courseDetails.courseAvail==true)
    {
  return (
    <>
        <h1 style={{color:'green'}}>{props.courseDetails.courseName}</h1>
        <h2 style={{color:'crimson'}}>{props.courseDetails.courseDuration}</h2>
        <button style={{color:"green"}}>Available</button>
        </>
  )
}
else{
    return (
        <>
            <h1>{props.courseDetails.courseName}</h1>
            <h2>{props.courseDetails.courseDuration}</h2>
            <button style={{color:"red"}}>not Available</button>
            </>
      ) 
}
}


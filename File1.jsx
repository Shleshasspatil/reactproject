import React from 'react'
import { File2 } from './File2';

 const File1 = () => {
  return (
    <File2 courseDetails ={{
        courseAvail:true,
        courseName :"java full stack",
        courseDuration:"6 months"
    }}/>
  )
}
export default File1

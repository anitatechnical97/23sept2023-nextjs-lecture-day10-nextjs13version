import React from 'react'
import B from './B'

export default function A(props) {
    console.log("helloi");
  return (
    <React.Fragment>
         <div>A Component {props.message}</div>
         <B></B>
    </React.Fragment>
  )
}

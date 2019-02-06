import React from "react";
import './Mark.css'

export default function Mark(props) {
  return (
    <span className="redbold">{props.children}</span>
  )
}
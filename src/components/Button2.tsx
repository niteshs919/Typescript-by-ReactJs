import React from "react"

type ButtonProps2 = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>,id:number) => void
}
export const Button2 = (props: ButtonProps2) => {
  return (
    <button onClick={event=>props.handleClick(event,1)}>Button</button>
  )
}

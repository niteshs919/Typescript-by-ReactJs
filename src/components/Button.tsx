
type ButtonProps = {
    handleClick: () => void
}
export const Button = (props: ButtonProps) => {
  return (
    <div onClick={props.handleClick}>Button</div>
  )
}

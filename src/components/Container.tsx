import React from "react";

type ContainerProps = {
  style: React.CSSProperties;
};
export const Container = (props: ContainerProps) => {
  return (
    // <div style={{border: '1px solid black' , padding: '1rem'}}>Container Text</div>
    <div style={props.style}>Container Text</div>
  );
};

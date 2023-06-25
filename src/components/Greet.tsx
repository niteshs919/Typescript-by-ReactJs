type GreetProps = {
  name: string;
  messageCount?: number;// ? It is not required props
  isLoggedIn: boolean; 
};
export const Greet = (props: GreetProps) => {
  const {  messageCount = 1 } = props; // if props not come then it will set this Default value
  return (
    <>
      <div>
        Greet components name :{props.name} 
        <br />
        Greet components messageCount :{messageCount}
      </div>
      <br />
      <br />
      <br />
      Greet components isLoggedIn :{props.isLoggedIn == true ? "true" : "false"}
    </>
  );
};

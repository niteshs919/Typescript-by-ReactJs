type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: PersonListProps) => {
  console.log(props);
  return (
    <>
      {/* <div>PersonList 1</div>
      <div>PersonList 2</div>
      <div>PersonList 3</div> */}
      {props.name.map((value) => {
        return (
          <>
            <h1 key={value.first}>
              {value.first} {value.last}
            </h1>
          </>
        );
      })}
    </>
  );
};

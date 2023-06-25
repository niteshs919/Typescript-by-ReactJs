type PersonName = {
  name: {
    first: string;
    last: string;
  };
};
export const Person = (props: PersonName) => {
    const { name} = props
  return <div>Person name {name.first + " " + name.last}</div>;
};

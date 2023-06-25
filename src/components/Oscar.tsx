type OscarProps = {
  children: React.ReactNode;
};
export const Oscar = (props: OscarProps) => {
  return (
    <>
      <div>Oscar Component</div>
      <h1>{props.children}</h1>
    </>
  );
};

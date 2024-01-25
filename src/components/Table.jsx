const Table = ({ children }) => {
  return (
    <div role="table" className="border rounded-md  bg-white">
      {children}
    </div>
  );
};

export default Table;

const Header = ({ children }) => {
  return (
    <header
      className="grid grid-cols-6 gap-10  px-6 py-4 uppercase bg-[#f9fafb]"
      role="row"
    >
      {children}
    </header>
  );
};

const Row = ({ children }) => {
  return (
    <div
      className="px-6 py-4 border-b grid grid-cols-6 gap-10 items-center"
      role="row"
    >
      {children}
    </div>
  );
};

const Body = ({ data, render }) => {
  if (data.length === 0) return <div>No data</div>;

  return (
    <div className=" text-sm" role=" rowgroup">
      {data.map(render)}
    </div>
  );
};

const Footer = ({ children }) => {
  return (
    <footer className=" px-6 py-4  gap-4 items-center bg-[#f9fafb]  ">
      {children}
    </footer>
  );
};

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

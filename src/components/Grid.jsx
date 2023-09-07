const Grid = ({ children }) => {
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-10 mx-auto mt-20 w-fit md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default Grid;

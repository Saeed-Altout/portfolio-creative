const Wrapper = ({ children, styles }) => {
  return (
    <div
      className={`container relative w-full h-full mx-auto px-6 md:px-12 ${styles}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;

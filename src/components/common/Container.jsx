import { tag } from "../../app/style";
const Container = ({ children, styles }) => {
  return <div className={`${tag.container} ${styles}`}>{children}</div>;
};

export default Container;

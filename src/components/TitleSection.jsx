import { text } from "@/app/style";
import { useStateContext } from "@/contexts/ContextProvider";

const TitleSection = ({ title, subTitle, styles }) => {
  const { currentTheme } = useStateContext();
  return (
    <div className={`${styles} max-w-5xl mx-auto`}>
      <h3
        className={text.headSection}
        style={{
          color: currentTheme,
        }}
      >
        {title}
      </h3>
      <p className={text.subHeadSection}>{subTitle}</p>
    </div>
  );
};

export default TitleSection;

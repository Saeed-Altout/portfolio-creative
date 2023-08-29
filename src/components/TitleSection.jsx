const TitleSection = ({ title, subTitle, styles }) => {
  return (
    <div className={styles}>
      <h3 className="py-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
        {title}
      </h3>
      <p className="text-base text-gray-400">{subTitle}</p>
    </div>
  );
};

export default TitleSection;

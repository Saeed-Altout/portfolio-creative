import { ButtonScroll, Container } from "@/components";
import { flex, tag, text } from "@/app/style";
import { useStateContext } from "@/contexts/ContextProvider";
const Hero = () => {
  const { currentTheme } = useStateContext();
  return (
    <section className={`${tag.section}`}>
      <Container
        styles={`${flex.center} h-full max-w-5xl mx-auto flex-col gap-5`}
      >
        <h1 className={text.titleHero}>
          Find yor
          <span
            className="mx-1"
            style={{
              color: currentTheme,
            }}
          >
            Dream
          </span>
          & Find your
          <span
            className="mx-1"
            style={{
              color: currentTheme,
            }}
          >
            Self
          </span>
        </h1>
        <p className={text.subTitleHero}>
          Product Designer and Visual Developer in SF. I specialize in UI/UX
          Design, Responsive Web Design, and Visual Development.
        </p>
      </Container>
      <ButtonScroll href={"#services"} />
    </section>
  );
};

export default Hero;

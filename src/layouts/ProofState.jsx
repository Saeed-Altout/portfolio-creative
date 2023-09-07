import { flex, tag, text } from "@/app/style";
import { Container } from "@/components";
import { states } from "@/constants";
const ProofState = () => {
  return (
    <section className={tag.section}>
      <Container>
        <div className={`${flex.center} flex-col gap-10 md:flex-row`}>
          {states.map((state) => (
            <div key={state.id} className={`${flex.center} gap-2`}>
              <h1
                className={text.h1}
                style={{
                  color: state.color,
                }}
              >
                {state.state}
              </h1>
              <h4 className={text.h4}>{state.name}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProofState;

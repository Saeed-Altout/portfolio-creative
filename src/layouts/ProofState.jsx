import { Wrapper } from "@/components";
import { states } from "@/constants";
const ProofState = () => {
  return (
    <section className="relative py-10">
      <Wrapper styles="flex flex-wrap justify-center items-center gap-20">
        {states.map((state) => (
          <div key={state.id} className="flex items-center justify-start gap-2">
            <span
              className="text-4xl font-bold"
              style={{
                color: state.color,
              }}
            >
              {state.state}
            </span>
            <span className="text-base font-semibold">{state.name}</span>
          </div>
        ))}
      </Wrapper>
    </section>
  );
};

export default ProofState;

import { states } from "@/constants";
const ProofState = () => {
  return (
    <div className="mx-auto my-20 max-w-7xl">
      <div className="container flex flex-col items-center justify-center gap-10 shadow-xl md:flex-row">
        {states.map((state) => (
          <div
            key={state.id}
            className="flex flex-col items-center justify-center py-10"
          >
            <h4
              className="text-4xl font-semibold"
              style={{
                color: state.color,
              }}
            >
              {state.state}
            </h4>
            <p className="text-xl font-medium">{state.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofState;

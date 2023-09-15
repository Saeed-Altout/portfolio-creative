import Image from "next/image";
import { services } from "@/constants";
const Services = () => {
  return (
    <section id="services">
      <div className="container">
        {/* Title Section */}

        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold capitalize text-primary md:text-5xl">
            Provide Services
          </h2>
          <p>
            Transforming ideas into Powerfull Solution: Our Expert Development
            Services.
          </p>
        </div>

        {/* Grid Services */}

        <div className="grid grid-flow-row grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center gap-3 py-10 text-center rounded-lg shadow-lg"
            >
              <Image
                src={service.icon}
                alt="Icon Service"
                className="w-16 h-16 transition cursor-pointer hover:scale-110"
              />
              <h2
                className="text-2xl font-medium"
                style={{
                  color: service.color,
                }}
              >
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

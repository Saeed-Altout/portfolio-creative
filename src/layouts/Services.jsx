import Image from "next/image";
import { services } from "@/constants";
import { flex, tag, text } from "@/app/style";
import { Container, Grid, TitleSection } from "@/components";
const Services = () => {
  return (
    <section className={tag.section} id="services">
      <Container>
        <TitleSection
          title="Provide Services"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers eiusmod."
        />

        <Grid>
          {services.map((service, key) => (
            <div
              key={key}
              className={`${flex.center} flex-col gap-2 sm:max-w-md p-10 text-center duration-300 ease-in-out bg-white dark:bg-dark border-2 rounded-lg border-gray-50 hover:border-gray-100 dark:border-darker dark:hover:border-dark`}
            >
              <div className="mb-5 h-18 w-18">
                <Image
                  src={service.icon}
                  alt="Icon Services"
                  className="object-contain w-full h-full "
                />
              </div>
              <h2
                className={text.h2}
                style={{
                  color: service.color,
                }}
              >
                {service.title}
              </h2>
              <p className={text.p}>{service.descr}</p>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;

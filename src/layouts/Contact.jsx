import { TitleSection, Wrapper } from "@/components";
import { useStateContext } from "@/contexts/ContextProvider";

const Contact = () => {
  const { loading, form, formRef, handleSubmit, handleChange } =
    useStateContext();
  return (
    <section className="relative py-40" id="contact">
      <Wrapper styles="flex flex-col md:flex-row justify-between items-center gap-10">
        <TitleSection
          styles="text-center md:text-left"
          title="Contact Us & Get In Touch"
          subTitle="You are free to use this template for any purpose. You are not
        allowed to redistribute the downloadable ZIP file of Tale SEO
        Template on any other template website. Please contact us. Thank
        you."
        />
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-4xl gap-12 p-5 duration-300 ease-in-out shadow-lg md:p-10 md:order-1"
        >
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={form.name}
            placeholder="First Name"
            className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none bg-sky-50 placeholder:text-black"
          />
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={form.surname}
            placeholder="Last Name"
            className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none bg-sky-50 placeholder:text-black"
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={form.email}
            placeholder="E-mail"
            className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none bg-sky-50 placeholder:text-black"
          />
          <input
            onChange={handleChange}
            type="text"
            name="subject"
            value={form.subject}
            placeholder="Subject"
            className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none bg-sky-50 placeholder:text-black"
          />
          <textarea
            rows={5}
            onChange={handleChange}
            type="textarea"
            name="message"
            value={form.message}
            placeholder="Message"
            className="w-full px-5 py-3 duration-300 ease-in-out rounded-lg outline-none bg-sky-50 placeholder:text-black"
          />

          <input
            type="submit"
            value={loading ? "Sending..." : "Send Message Now"}
            className={`bg-primary text-base hover:bg-opacity-90 w-full py-3 rounded-lg outline-none duration-300 ease-in-out cursor-pointer text-white font-medium`}
          />
        </form>
      </Wrapper>
    </section>
  );
};

export default Contact;

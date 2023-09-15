"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Input from "@/components/Input";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_iekjdtw",
        "template_y7cmfug",
        {
          from_name: form.name,
          to_name: "Saeed Altout",
          from_email: form.email,
          to_email: "saeedaltoutpro@gmail.com",
          message: form.message,
        },
        "ZoU7F7pOMJtRx8-ji"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will back to you as soon as possible. ");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="container">
        {/* Title Section */}

        <div className="max-w-4xl text-center lg:text-left">
          <h2 className="text-4xl font-bold capitalize text-primary md:text-5xl">
            Contact Us & Get In Touch
          </h2>
          <p>
            Thank you for looking at my website 💗, and I hope you are happy
            with it. If you like our work, please do not hesitate to contact us
            and request, and we promise that we will respond as soon as
            possible.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-20 mt-20 lg:flex-row ">
          <img alt="Contact Us" src="contact.png" className="max-w-md" />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-4xl gap-10 p-5 transition bg-white shadow-lg "
          >
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              label="Name"
            />
            <Input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              label="E-mail"
            />

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="block w-full px-6 pt-6 pb-1 text-black rounded-md appearance-none bg-purple-50 text-md focus:outline-none focus:ring-0 peer invalid:border-b-1"
            />

            <button
              type="submit"
              className="px-6 py-3 ml-auto text-base font-medium text-white transition rounded-lg outline-none cursor-pointer w-fit hover:bg-hoverPrimary bg-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

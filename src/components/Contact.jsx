import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-ds-secondary-bg p-8 rounded-2xl' // Updated container background
      >
        <p className={`${styles.sectionSubText} text-ds-text-secondary`}>Get in touch</p> {/* Updated text color */}
        <h3 className={`${styles.sectionHeadText} text-ds-text-primary`}>Contact.</h3> {/* Updated text color */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-ds-text-primary font-medium mb-4'>Your Name</span> {/* Updated text color */}
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-ds-primary-bg py-4 px-6 placeholder:text-ds-text-secondary text-ds-text-primary rounded-lg outline-none border-none font-medium' // Updated input styles
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-ds-text-primary font-medium mb-4'>Your email</span> {/* Updated text color */}
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-ds-primary-bg py-4 px-6 placeholder:text-ds-text-secondary text-ds-text-primary rounded-lg outline-none border-none font-medium' // Updated input styles
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-ds-text-primary font-medium mb-4'>Your Message</span> {/* Updated text color */}
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-ds-primary-bg py-4 px-6 placeholder:text-ds-text-secondary text-ds-text-primary rounded-lg outline-none border-none font-medium' // Updated input styles
            />
          </label>

          <button
            type='submit'
            className='bg-ds-accent py-3 px-8 rounded-xl outline-none w-fit text-ds-text-primary font-bold shadow-md shadow-ds-highlight' // Updated button styles
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

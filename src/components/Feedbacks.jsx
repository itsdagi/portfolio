import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-ds-secondary-bg p-10 rounded-3xl xs:w-[320px] w-full' // Updated card background
  >
    <p className='text-ds-accent font-black text-[48px]'>"</p> {/* Updated quote color */}

    <div className='mt-1'>
      <p className='text-ds-text-primary tracking-wider text-[18px]'>{testimonial}</p> {/* Updated text color */}

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-ds-text-primary font-medium text-[16px]'> {/* Updated text color */}
            <span className='text-ds-accent'>@</span> {name} {/* Updated @ color */}
          </p>
          <p className='mt-1 text-ds-text-secondary text-[12px]'> {/* Updated text color */}
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-ds-primary-bg rounded-[20px]`}> {/* Updated main background */}
      <div
        className={`bg-ds-secondary-bg rounded-2xl ${styles.padding} min-h-[300px]`} // Updated header section background
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-ds-text-secondary`}>What others say</p> {/* Added text color */}
          <h2 className={`${styles.sectionHeadText} text-ds-text-primary`}>Testimonials.</h2> {/* Added text color */}
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

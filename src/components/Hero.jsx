import { motion } from "framer-motion";

import { styles } from "../styles";
// No need to import the image since it's in the public folder

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-ds-accent' /> {/* Updated circle color */}
          <div className='w-1 sm:h-80 h-40 bg-ds-accent' /> {/* Updated line color, removed violet-gradient */}
        </div>

        <div className="bg-ds-secondary-bg rounded-[20px] p-6 max-w-3xl"> {/* Updated text container background */}
          <h1 className={`${styles.heroHeadText} text-ds-text-primary`}> {/* Updated h1 text color */}
            👋🏽, I'm <span className='text-ds-accent'>Dagim</span><br className='sm:block hidden' />
            <span className='text-ds-text-primary lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[30px] lg:leading-[70px] mt-2'>Data Scientist & AI Enthusiast</span> {/* Added tagline */}
          </h1> 
          <p className={`${styles.heroSubText} mt-2 text-ds-text-secondary`}> {/* Changed text color to secondary for subtext */}
          I develop data-driven solutions, machine learning models, <br className='sm:block hidden' />
          and interactive data visualizations.
          </p>
        </div>
      </div>

      {/* Replace ComputersCanvas with the image */}
      <div className='absolute inset-0 top-[430px] flex justify-end items-center pr-10'>
        <img
          src="/developer-pic-2.png"
          alt="Developer"
          className="w-[500px] h-auto object-contain rounded-lg"
        />
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-ds-accent flex justify-center items-start p-2'> {/* Updated border color */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-ds-accent mb-1' // Updated motion div color
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

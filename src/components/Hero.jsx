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
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            👋🏽, I'm <span className='text-[#915EFF]'>Dagim </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A data scientist and develop ML models, <br className='sm:block hidden' />
            perform data analysis, create insights, and<br className='sm:block hidden' /> integrate LangChain for building 
            powerful AI-driven<br className='sm:block hidden' /> applications.
          </p>
        </div>
      </div>

      {/* Replace ComputersCanvas with the image */}
      <div className='absolute inset-0 top-[200px] flex justify-end items-center pr-10'>
        <div className="max-w-[500px] w-full">
          <img
            src="/developer-pic-2.png"
            alt="Developer"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

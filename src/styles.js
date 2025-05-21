const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-ds-text-primary lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2", // Updated text color
  heroSubText:
    "text-ds-text-secondary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2", // Updated text color & added mt-2 for spacing

  sectionHeadText:
    "text-ds-text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]", // Updated text color
  sectionSubText:
    "sm:text-[18px] text-[14px] text-ds-text-secondary uppercase tracking-wider", // Updated text color
};

// New heroSubText content: "I develop data-driven solutions, machine learning models, and interactive data visualizations."
// This will be applied by changing the text directly in Hero.jsx for the paragraph using styles.heroSubText
// For heroHeadText, the name is already in Hero.jsx. The tagline "Data Scientist & AI Enthusiast" will be added in Hero.jsx.

export { styles };

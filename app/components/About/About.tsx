
export const About = () => {

  const aboutClasses = [
    "m-t-1em",
    "font-sans-2",
    "font-size-2",
    "color-text-primary"
  ].join(' ');

  const divClasses = [
    "mx-w-200mm",
    "m-b-1em",
    "l-h-fibem"
  ].join(' ');

  return (
    <div className={aboutClasses}>
      <div className={divClasses}>
        I work at Lunchbox Inc. as a Software Engineer on the Innovation Team.
      </div>
      <div className={divClasses}>I am interested in design systems, web3 and user experiences.</div>
      <div className={divClasses}>I am currently living in Austin, TX.</div>
    </div>
  );
};

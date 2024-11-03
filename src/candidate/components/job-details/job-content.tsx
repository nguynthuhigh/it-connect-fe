import IconRedDot from '../../assets/svg/icon_Reddot.svg';

const JobMainContent = () => {
  const topReasons = [
    "Working in a professional environment",
    "Unlimited bonus according to work performance",
    "Fully insured according to country regulations"
  ];

  const jobDescription = [
    "Working in a professional environment",
    "Unlimited bonus according to work performance",
    "Fully insured according to country regulations"
  ];

  const skillsAndExperience = [
    "Experience in ReactJS, NextJS, JavaScript",
    "Familiar with front-end development",
    "Good communication skills"
  ];

  const whyLoveWorkingHere = [
    "Experience in ReactJS, NextJS, JavaScript",
    "Familiar with front-end development",
    "Good communication skills"
  ];

  return (
    <div className="p-5">
      <div className="p-5 border bg-white rounded-lg shadow-md mb-5">

        <section className="mb-4 pb-3 border-dashed border-b">
          <h3 className="text-lg font-bold mb-2">Top 3 reasons to join us</h3>
          <ul className="pl-3 mb-2 list-disc">
            {topReasons.map((reason, index) => (
              <li key={index} className="mb-2 flex gap-2">
                <img src={IconRedDot} alt="Red dot icon" />
                {reason}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-4 pb-3 border-dashed border-b">
          <h3 className="text-lg font-bold mb-2">Job description</h3>
          <ul className="pl-3 mb-2 list-disc">
            {jobDescription.map((desc, index) => (
              <li key={index} className="mb-2 flex gap-2">
                <img src={IconRedDot} alt="Red dot icon" />
                {desc}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-4 pb-3 border-dashed border-b">
          <h3 className="text-lg font-bold mb-2">Your skills and experience</h3>
          <ul className="pl-3 mb-2 list-disc">
            {skillsAndExperience.map((skill, index) => (
              <li key={index} className="mb-2 flex gap-2">
                <img src={IconRedDot} alt="Red dot icon" />
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-2">Why you'll love working here</h3>
          <ul className="pl-3 mb-2 list-disc">
            {whyLoveWorkingHere.map((reason, index) => (
              <li key={index} className="mb-2 flex gap-2">
                <img src={IconRedDot} alt="Red dot icon" />
                {reason}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
};

export default JobMainContent;

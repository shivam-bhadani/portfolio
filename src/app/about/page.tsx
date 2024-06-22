import SkillSection from "./SkillSection";
import AboutAvatarSVG from "./aboutAvatarSVG";
import { IoIosStar } from "react-icons/io";

const About = () => {
  const ACHIEVEMENTS = [
    "Achieved Highest Rating of 1766 (Expert) on Codeforces",
    "Global Rank 156 in Codeforces Round 875 (Div. 2)",
    "Global Rank 527 in Codeforces Round 865 (Div. 2)",
    "Achieved Highest Rating of 2029 (5 Star) on CodeChef",
    "Global Rank 617 (India Rank 411) in Google Kickstart Round G 2022",
    "Guardian (Max Rating 2315) in leetcode",
  ];

  return (
    <div className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[60%] flex flex-col justify-center px-8">
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi Everyone, I am Shivam Bhadani from Jharkhand, India. I have done
            my graduation from IIT Kanpur.
          </p>
          <div className="mt-8 text-sm md:text-base">
            <p>Some of my competitive programming achievements are:</p>
          </div>
          <ul>
            {ACHIEVEMENTS.map((achievement, key) => (
              <li key={key} className="flex gap-3 md:item-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[40%]">
          <AboutAvatarSVG className="w-[100%]" />
        </div>
      </div>
      <div className="my-10">
        <SkillSection />
      </div>
    </div>
  );
};

export default About;

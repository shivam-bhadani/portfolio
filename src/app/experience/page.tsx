import { Box } from "@/components/ui/moving-border";
import { experiences } from "@/data";
import { TbPointFilled } from "react-icons/tb";

const Experience = () => {
  return (
    <div>
      <div>
        {experiences.map((experience, key_exp) => (
          <Box
            key={`exp_${key_exp}`}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.5rem"
            className="bg-white dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-10 flex flex-col"
            containerClassName="m-auto w-[900px] max-w-[90%] h-auto mt-4 md:mt-10"
          >
            <div className="w-[100%] md:px-6 px-1">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">{experience.company}</h2>
                <div>
                  {experience.joining_date} - {experience.ending_date}
                </div>
              </div>
              {experience?.role && <h5 className="mt-3 italic">{experience.role}</h5>}
              <ul>
                {experience.work.map((work_point, key_work) => (
                  <li
                    key={`work_${key_work}`}
                    className="mt-4 flex items-center gap-3"
                  >
                    <TbPointFilled size="1.4rem" />
                    <div>{work_point}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Experience;

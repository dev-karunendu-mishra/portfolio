import { skills } from "@/constants/appConstants";
import React from "react";
import { Rate } from "antd";

const Skills = () => {
  return (
    <>
      <div className="divider divider-start prose mb-12">
        <h1>My Skills</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xxl:grid-cols-3 gap-4 items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-2 justify-center"
          >
            <div
              className="radial-progress"
              style={{
                "--value": (skill.rating * 100) / 5,
              }}
              role="progressbar"
            >
              {(skill.rating * 100) / 5} %
            </div>
            <div>
              <div>{skill.skill}</div>
              <div>
                <Rate allowHalf disabled defaultValue={Number(skill.rating)} />
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
};

export default Skills;

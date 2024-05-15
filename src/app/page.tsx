"use client";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import { skills } from "@/constants/appConstants";

import Image from "next/image";
import { useState } from "react";
import { FaDownload, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [profileData, setProfileData] = useState(null);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-2">
        <div className="avatar w-250 h-446 mask mask-squircle">
          <Image
            height={446}
            width={250}
            src="/profile_picture_2.jpg"
            alt="Profile picture"
            className="object-top cursor-pointer hover:scale-110 transition-all"
          />
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">
            {"Karunendu"} {"Mishra"}
          </h1>
          <p className="mb-2">
            <strong>Contact Info : </strong> +91-8808527577,
            dev.karunenedu.mishra@gmail.com
          </p>
          <p className="text-gray-600 mb-4">
            {
              "Experienced Full Stack Developer | Expert in React, Node.js, Express.js | Web Development, API Integration, DevOps | MongoDB, MySQL, AWS | Java | Java Spring Boot | Python | Fast API | Git | Github"
            }
          </p>
          {/* Add other profile information */}
        </div>
        <div
          className="flex flex-row items-center justify-center
         gap-2"
        >
          <div>
            <a
              href="https://www.linkedin.com/in/karunendu-mishra-59049b79/"
              target="_blank"
              className="flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white rounded-lg px-6 py-2"
            >
              <FaLinkedin />
              Connect with Me
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/10bzOqLpNCxm3p3_-ZstA4gSUZi-bz0tO/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-800 text-white rounded-lg px-6 py-2"
            >
              <FaDownload />
              Resume
            </a>
          </div>
        </div>
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Timeline timelineStyle="styleTwo" />
      </div>
    </div>
  );
}

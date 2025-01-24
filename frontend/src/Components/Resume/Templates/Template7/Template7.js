import React , { forwardRef } from "react";
import styles from "./Template7.module.css";

const Template7 = ({ information, sections, activeColor }) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExp: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [], // Replacing Certifications
    achievements: information[sections.achievement]?.details || [], // Replacing Languages
    summary: information[sections.summary]?.detail || "",
  };

  return (
    <div className={styles.resume} style={{ "--theme-color": activeColor }}>
      {/* Left Panel */}
      <div className={styles.leftPanel}>
        {/*adding profile picture*/}
        {info.basicInfo.profilePicture && (
          <div
            className={styles.photo}
            style={{
              backgroundImage: `url(${info.basicInfo.profilePicture})`,
            }}
          ></div>
        )}
        {info.basicInfo.profilePicture && (
     <div
        className={styles.photo}
    style={{
      backgroundImage: `url(${info.basicInfo.profilePicture})`,
    }}
  ></div>
)}
        <div className={styles.contact}>
          <h3>Contact</h3>
          {info.basicInfo.email && <p>{info.basicInfo.email}</p>}
          {info.basicInfo.phone && <p>{info.basicInfo.phone}</p>}
          {info.basicInfo.address && <p>{info.basicInfo.address}</p>}
          {info.basicInfo.linkedin && (
            <p>
              LinkedIn:{" "}
              <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
                {info.basicInfo.linkedin}
              </a>
            </p>
          )}
          {info.basicInfo.github && (
            <p>
              GitHub:{" "}
              <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                {info.basicInfo.github}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <h1>{info.basicInfo.name}</h1>
        <h2>{info.basicInfo.title}</h2>
        <div className={styles.about}>
          <h3>About Me</h3>
          <p>{info.summary}</p>
        </div>
        <div className={styles.projects}>
          <h3>Projects</h3>
          <ul>
            {info.projects.map((project, index) => (
              <li key={index}>{project.title}</li>
            ))}
          </ul>
        </div>
        <div className={styles.achievements}>
          <h3>Achievements</h3>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className={styles.education}>
          <h3>Education</h3>
          <ul>
            {info.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.title}</strong>
                <br />
                {edu.college} | {edu.startDate} - {edu.endDate}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.workExperience}>
          <h3>Work Experience</h3>
          {info.workExp.map((work, index) => (
            <div key={index} className={styles.job}>
              <p>
                <strong>{work.title}</strong> | {work.companyName}
              </p>
              <p>
                {work.startDate} - {work.endDate}
              </p>
              <ul>
                {work.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template7;

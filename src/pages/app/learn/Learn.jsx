import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom

function Learn() {
  const { courseId } = useParams();
  const courseDetails = coursesData.find((course) => course.id === courseId);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to={`/courses/${courseId}`}>
          <h2 className={style.back}>{"<<"}</h2>
        </Link>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{courseDetails.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {
              /*Task4: List of Chapters must be rendered here  */
              courseDetails.chapters.map((chapter, i) => (
                <NavLink
                  to={`chapter/${chapter.chapter}`}
                  key={i}
                  style={({ isActive }) => {
                    return { color: isActive ? "var(--clr-accent)" : "" };
                  }}
                >
                  <div className={style.chapterId}>{chapter.title}</div>
                </NavLink>
              ))
            }
          </ul>
        </div>

        <div className={style.courses}>
          {/**Task5:  Chapter Details Must be rendered here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Learn;

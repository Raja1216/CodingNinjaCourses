import React from "react";
import styles from "./Chapter.module.css";
import coursesData from "../../../data/courses.json";
import { useParams } from "react-router-dom";

function Chapter() {
  const { courseId,chapterId } = useParams();
  const courseDetails = coursesData.find((course) => course.id === courseId);
  const chapterData = courseDetails.chapters.find((chap) => String(chap.chapter) === chapterId);
  return (
    <div>
      <h1>{chapterData.title}</h1>
      <h2>{chapterData.description}</h2>
      <p className={styles.para}>{chapterData.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src=""
          title="React Video"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;

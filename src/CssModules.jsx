import React from "react";
import styles from "./CssModules.module.scss"; // .module.scss 파일 임포트

export const CssModules = () => {
  return (
    <div className={styles.container}>
      {" "}
      {/* 스타일 적용 */}
      <p className={styles.title}>CSS Modules입니다</p> {/* 스타일 적용 */}
      <button className={styles.button}>버튼</button> {/* 스타일 적용 */}
    </div>
  );
};

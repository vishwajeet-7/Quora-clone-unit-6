import React from "react";
import styles from "./AnswerParent.module.css";
import QuoraHeader from "../../QuoraHeader/QuoraHeader";
import AnswerLeft from "../AnswerLeft/AnswerLeft";
import Answer from "../Answer/Answer";
import AnswerRight from "../AnswerRight/AnswerRight";

function AnswerParent() {
  return (
    <div className={styles.answerParent}>
      <QuoraHeader />
      <div className={styles.answerParent__contents}>
        <div className={styles.answerParent__content}>
          <AnswerLeft />
          <Answer />
          <AnswerRight />
        </div>
      </div>
    </div>
  );
}

export default AnswerParent;

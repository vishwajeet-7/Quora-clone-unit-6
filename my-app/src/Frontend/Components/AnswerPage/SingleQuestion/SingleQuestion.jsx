import styles from "./SingleQuestion.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import AnswerPopup from "../AnswerPopup/AnswerPopup";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function SingleQuestion({}) {
  const pathParams = useParams();
  const [question, setQuestion] = useState({});
  const [anspopup, setAnsPopup] = useState(false);

  const data = useSelector((storeData) => {
    return storeData.questions.filter((el) => {
      return el.id == pathParams.id;
    });
  });

  useEffect(() => {
    setQuestion(data[0]);
  }, []);

  return (
    <div className={styles.SingleQuestion}>
      <div className={styles.questionDiv}>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className={styles.credentialDiv}
        >
          <img
            src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
            alt="avatar"
            style={{ width: "50px", borderRadius: "50%" }}
          />
          <div style={{ padding: "10px", borderRadius: "20px" }}>
            <h4>Username</h4>
            <button
              style={{
                backgroundColor: "white",
                color: "grey",
                padding: "5px",
                borderRadius: "20px",
                border: "1px solid grey",
                display: "flex",
                alignitems: "center",
                flexwrap: "wrap",
              }}
            >
              Choose Credential <KeyboardArrowRightIcon />
            </button>
          </div>
        </div>
        <b>
          <h2>{question.question}</h2>
        </b>

        <div className={styles.buttonsDiv}>
          <div className={styles.leftButtons}>
            <button>Follow</button>
            <button>Request</button>
          </div>
        </div>
        <div className={styles.innerDiv}>
          <p>People are searching for an answer to this question.</p>
          <button
            onClick={() => {
              setAnsPopup(true);
            }}
          >
            Answer
          </button>
        </div>
        <div className={styles.answers}>
          {data[0].no_of_answers === 0 ? (
            <div>
              <i class="fa-solid fa-pen"></i>
              <span>This question does not have any answers yet.</span>
            </div>
          ) : (
            <div>
              <p>Your Answers</p>
              <ul>
                {data[0].answers.map((el, i) => {
                  return <li key={i}>{el}</li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      {anspopup ? (
        <AnswerPopup ques_id={question.id} setAnsPopup={setAnsPopup} />
      ) : (
        ""
      )}
    </div>
  );
}

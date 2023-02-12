import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./AnswerPopup.module.css";
import { useDispatch } from "react-redux";
import answerThunkActionCreater from "../../../Redux/Answer/answerThunkAction";
import { questions } from "../../../Api/Url";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AbcIcon from "@mui/icons-material/Abc";
import FilterIcon from "@mui/icons-material/Filter";
import InfoIcon from "@mui/icons-material/Info";

export default function AnswerPopup({ ques_id, setAnsPopup }) {
  const dispatch = useDispatch();
  const ansRef = useRef();
  const question = useSelector((storeData) => {
    return storeData.questions.filter((el) => {
      return el.id === ques_id;
    });
  });

  let postAnswer = () => {
    let answers = question[0].answers;
    let newAnswer = ansRef.current.value;
    answers.push(newAnswer);
    let no_of_answers = answers.length;

    let obj = {
      answers,
      no_of_answers,
    };

    fetch(`${questions}/${ques_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(answerThunkActionCreater(`${questions}`));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.AnswerPopup}>
      <span
        className={styles.cancelBtn}
        onClick={() => {
          setAnsPopup(false);
        }}
      >
        <CloseIcon />
      </span>
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={styles.credentialDiv}
      >
        <img
          src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
          alt="avatar"
          style={{ height: "40px", borderRadius: "50%" }}
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
      <div>
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          placeholder="Write your answer"
          ref={ansRef}
        ></textarea>
      </div>
      <div className={styles.bottomDiv}>
        <div>
          <span>
            <AbcIcon />
          </span>
          <span>
            <FilterIcon />
          </span>
        </div>
        <div>
          <span>
            <InfoIcon />
          </span>
          <button onClick={postAnswer}>Post</button>
        </div>
      </div>
    </div>
  );
}

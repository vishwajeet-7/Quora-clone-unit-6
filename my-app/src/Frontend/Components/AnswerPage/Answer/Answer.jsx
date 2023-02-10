import styles from "./Answer.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../../../Api/Url";
import answerThunkActionCreater from "../../../Redux/Answer/answerThunkAction";
import Question from "../Question/Question";
import StarIcon from "@mui/icons-material/Star";
function Answer() {
  const dispatch = useDispatch();
  const data = useSelector((storeData) => {
    return storeData.questions;
  });

  useEffect(() => {
    dispatch(answerThunkActionCreater(`${questions}`));
  }, [dispatch]);
  return (
    <div className={styles.middle}>
      <div className={styles.heading}>
        <span>
          <i class="fa-duotone fa-star"></i>
        </span>
        <p>Questions for you</p>
      </div>
      <div className={styles.questions}>
        {data.map((el) => {
          return (
            <Question
              key={el.id}
              id={el.id}
              question={el.question}
              no_of_answers={el.no_of_answers}
              last_followed={el.last_followed}
              followed_by={el.followed_by}
            />
          );
        })}
      </div>
      <div className={styles.moreDiv}>
        <div>
          More <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className={styles.addTopics}>
        <div>
          <h3>Add 5 topics you know about</h3>
          <p>You'll get better questions if you add more specific topics.</p>
          <button>Add topics</button>
        </div>
        <div>
          <img
            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.static_about_page.light_mode.GatherAroundAQuestion_LM.png-26-a377318c55ce1d10.png"
            alt="topics"
          />
        </div>
      </div>
    </div>
  );
}
export default Answer;

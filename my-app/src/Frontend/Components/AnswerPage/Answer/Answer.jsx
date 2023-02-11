import styles from "./Answer.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questions } from "../../../Api/Url";
import answerThunkActionCreater from "../../../Redux/Answer/answerThunkAction";
import Question from "../Question/Question";
import StarIcon from "@mui/icons-material/Star";
import QuoraHeader from "../../QuoraHeader/QuoraHeader";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Answer() {
  const dispatch = useDispatch();
  const data = useSelector((storeData) => {
    return storeData.questions;
  });

  useEffect(() => {
    dispatch(answerThunkActionCreater(`${questions}`));
  }, [dispatch]);
  return (
    <div className={styles.answerParent}>
      <QuoraHeader />
      <div className={styles.answerParent__contents}>
        <div className={styles.answerParent__content}>
          {/* left Side of the Page */}
          <div className={styles.left}>
            <h3>Questions</h3>
            <ul>
              <li>Questions for you</li>
              <li>Answer requests</li>
              <li>Drafts</li>
            </ul>
          </div>

          {/* Middle of the Page */}
          <div className={styles.middle}>
            <div className={styles.heading}>
              <span>
                <StarIcon
                  style={{ backgroundColor: "#b92b27", color: "white" }}
                />
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
              <div>More</div>
              <ExpandMoreIcon />
            </div>
            <div className={styles.addTopics}>
              <div>
                <h3>Add 5 topics you know about</h3>
                <p>
                  You'll get better questions if you add more specific topics.
                </p>
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

          {/* Right Side of the Page */}
          <div className={styles.right}>
            <h3>
              Topics you know about <EditIcon />
            </h3>
            <div className={styles.noTopicMessage}>
              <img
                src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png"
                alt="postbox"
              />
              <p>No topics yet</p>
              <p>
                You'll get better questions if you add more specific topics.
              </p>
              <button>Add Topics</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Answer;

import styles from "./Question.module.css";
import { Link } from "react-router-dom";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import EditOffIcon from "@mui/icons-material/EditOff";
import RateReviewIcon from "@mui/icons-material/RateReview";

export default function Question({
  id,
  question,
  no_of_answers,
  last_followed,
  followed_by,
}) {
  return (
    <div className={styles.Question}>
      <h3>
        <Link to={`${id}`}>{question}</Link>
      </h3>
      <span>
        {no_of_answers === 0 ? "No answers yet" : `Answers ${no_of_answers}`}
      </span>
      <span>Last followed {last_followed}</span>
      <div className={styles.buttonsDiv}>
        <button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Link to={`${id}`}>Answer</Link>

            <RateReviewIcon />
          </div>
        </button>
        <button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            Follow
            <FollowTheSignsIcon />
            <span>{followed_by}</span>
          </div>
        </button>
        <button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            Pass
            <EditOffIcon />
          </div>
        </button>
      </div>
    </div>
  );
}

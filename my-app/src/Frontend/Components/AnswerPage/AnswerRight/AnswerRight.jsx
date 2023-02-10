import styles from "./AnswerRight.module.css";
import EditIcon from "@mui/icons-material/Edit";
function AnswerRight() {
  return (
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
        <p>You'll get better questions if you add more specific topics.</p>
        <button>Add Topics</button>
      </div>
    </div>
  );
}
export default AnswerRight;

import styles from "./AnswerLeft.module.css";
function AnswerLeft() {
  return (
    <div className={styles.left}>
      <h3>Questions</h3>
      <ul>
        <li>Questions for you</li>
        <li>Answer requests</li>
        <li>Drafts</li>
      </ul>
    </div>
  );
}
export default AnswerLeft;

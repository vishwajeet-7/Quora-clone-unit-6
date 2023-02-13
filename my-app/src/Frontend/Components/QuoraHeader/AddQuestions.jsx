import React from "react";
import Avatar from "../Avatar/Avatar";
import Public from "@material-ui/icons/PeopleAltOutlined";
import Expand from "@material-ui/icons/ExpandMore";
import "./AddQuestions.css";
import { closeModal } from "../../Redux/Actions/Action";
import { useDispatch } from "react-redux";

const AddQuestions = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal_wrap">
      <div className="Modal_title">
        <h5>Ask Questions</h5>
        <h5>Create Questions</h5>
      </div>
      <div className="modal_info">
        <Avatar className="avatar" />
        <div className="modal_scop">
          <Public />
          <p>Public</p>
          <Expand />
        </div>
      </div>
      <div className="modal_field">
        <input
          type="text"
          placeholder='Start your question with "What","How","Why",etc.'
        />
        <input
          type="text"
          placeholder="Optional iclude a link that gives context"
        />
      </div>
      <div className="modal_button">
        <button className="cancel" onClick={() => dispatch(closeModal(false))}>
          Cancel
        </button>
        <button type="submit" className="add">
          Add Question
        </button>
      </div>
    </div>
  );
};

export default AddQuestions;

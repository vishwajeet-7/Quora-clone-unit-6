import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function PopupGfg() {
  return (
    <div>
      <Popup trigger={<span> 🕀 Create a Space</span>} modal nested>
        {(close) => (
          <div className="modal">
            <div>
              <button
                style={{ border: "none", backgroundColor: "white" }}
                onClick={() => close()}
              >
                ☓
              </button>
            </div>
            <div className="content">
              <div style={{ padding: "20px" }}>
                <h3>Create a Space</h3>
                <p>
                  Share your interests, curate content, host discussions, and
                  more.
                </p>

                <label>
                  Name<span style={{ color: "red" }}>*</span>{" "}
                </label>
                <p style={{ font: "small-caption" }}>
                  This can be changed in Space settings.
                </p>
                <input
                  style={{
                    width: "500px",
                    height: "30px",
                    border: "1px solid blue",
                  }}
                  type="text"
                  placeholder="Your Space Is Here"
                />
                <br />
                <label>Brief description</label>
                <p style={{ font: "small-caption" }}>
                  Include a few keywords to show people what to expect if they
                  join.
                </p>
                <input
                  style={{
                    width: "500px",
                    height: "30px",
                    border: "1px solid blue",
                  }}
                  type="text"
                />
                <button
                  style={{
                    color: "white",
                    backgroundColor: "blue",
                    border: "none",
                    padding: "5px",
                    width: "80px",
                    height: "35px",
                    borderRadius: "15px",
                    fontWeight: "bold",
                    margin: "20px 500px 0 0",
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}

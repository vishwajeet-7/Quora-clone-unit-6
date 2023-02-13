import Modal from "react-responsive-modal";
import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "./QuoraHeader.css";
import "react-responsive-modal/styles.css";
import AddQuestions from "./AddQuestions";
import Dropdown from "./Dropdown/Dropdown";
import DropTop from "./DropTop/DropTop";
import DropInfo from "./DropInfo/DropInfo";
import Toggle from "./Toggle/Toggle";
import { closeModal, handleTheme, openModal } from "../../Redux/Actions/Action";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PaymentPage from "../PaymentPage/PaymentPage";

const QuoraHeader = () => {
  const isModalOpen = useSelector((store) => store.themereducer.isModal);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.themereducer.theme);
  const [open, setOpen] = useState(false);
  const [payOpen, setPayOpen] = useState(false);

  const Close = <CloseIcon />;
  const details = [
    {
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path
              d="M7 4.5h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3l-3.5 4v-4H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Zm13 8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v2l-2-2h-2"
              stroke="#666"
            ></path>
            <g fill="#666">
              <circle cx="8" cy="10.5" r="1"></circle>
              <circle cx="11" cy="10.5" r="1"></circle>
              <circle cx="14" cy="10.5" r="1"></circle>
            </g>
          </g>
        </svg>
      ),
      text: "Messages",
    },
    {
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9.5 17 5v12L3 12.5v-3Zm4.853 4.56L9.5 19H7l-1.947-5.84 2.8.9ZM19.5 7.5l2-1-2 1Zm0 3.5H22h-2.5Zm0 3.5 2 1-2-1ZM8 10.4l6-1.9-6 1.9Z"
            stroke="#666"
            fill="none"
          ></path>
        </svg>
      ),
      text: "Create ad",
    },
    {
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 4v16m3.75-13H9.625C8.175 7 7 8.12 7 9.5S8.175 12 9.625 12h3.75C14.825 12 16 13.12 16 14.5S14.825 17 13.375 17H7"
            stroke="#666"
            fill="none"
          ></path>
        </svg>
      ),
      text: "Monetization",
    },
    {
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12h3v8H5v-8Zm5.5-8h3v16h-3V4ZM16 7h3v13h-3V7Z"
            stroke="#666"
            fill="none"
          ></path>
        </svg>
      ),
      text: "Your contents & stats",
    },
    {
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#666" fill="none">
            <path d="m10.501 16-5.499 4L5 8h11v12z"></path>
            <path d="M8 5.923V5h11v12l-.997-.725"></path>
          </g>
        </svg>
      ),
      text: "Bookmarks",
    },
    {
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.743 10.757h0a1.5 1.5 0 0 1 0 2.122l-5.728 5.727-2.756.638.635-2.76 5.727-5.727a1.5 1.5 0 0 1 2.122 0Zm-3.182 1.061 2.121 2.121M9 19H5V5h13v3M8 9h7m-7 3h5.5M8 15h2.5"
            stroke="#666"
            fill="none"
          ></path>
        </svg>
      ),
      text: "Drafts",
    },
    {
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12.889h2.444a6.668 6.668 0 0 1 6.667 6.667V22h1.778v-2.444a6.668 6.668 0 0 1 6.667-6.667H22V11.11h-2.444a6.668 6.668 0 0 1-6.667-6.667V2H11.11v2.444a6.668 6.668 0 0 1-6.667 6.667H2v1.778Z"
            fill="#636466"
          ></path>
        </svg>
      ),
      text: "Try Quora+",
    },
  ];
  const menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div
      className="qHeader"
      style={
        theme === "dark"
          ? { backgroundColor: "#262626" }
          : { backgroundColor: "white" }
      }
    >
      <div className="qHeader-content">
        <div className="qHeader-logo">
          <svg width="87px" height="60px" viewBox="0 0 202 115">
            {/* <g stroke="none"   class="logo_fill"> */}
            <path
              style={
                theme === "dark" ? { fill: "red" } : { fill: "var(--red)" }
              }
              d="M24.4,31.9 C37.1,31.9 49.1,41.8 49.1,56.2 C49.1,64.3 45.3,70.9 39.9,75.3 C41.5,77.9 43.5,79.7 45.9,79.7 C48.7,79.7 49.9,77.5 50.1,75.7 L50.1,75.7 L53.7,75.7 C53.9,78.1 52.7,87.3 42.7,87.3 C36.5,87.3 33.3,83.7 30.9,79.7 C28.9,80.1 26.7,80.5 24.5,80.5 C12.2,80.5 0,70.6 0,56.2 C0,41.8 12.2,31.9 24.4,31.9 Z M114.1,42.8 C124.3,42.8 132.5,50 132.6,60.7 C132.6,72 124.3,79.4 114.1,79.4 C104.2,79.4 95.6,71.9 95.6,60.7 C95.6,49.8 104.1,42.8 114.1,42.8 Z M181.4,42.8 C190.4,42.8 196,45.2 196,54.2 L196,54.2 L196,69.6 C196,72 196.8,73.2 198.8,73.2 C199.8,73.2 200.6,72.8 201,72.6 L201,72.6 L201.9,74.4 C201.1,75.8 198.5,78.4 193.7,78.4 C189.5,78.4 186.9,76.4 186.5,73.2 L186.5,73.2 L186.3,73.2 C184.3,76.8 180.7,79.2 175.5,79.2 C169.3,79.2 165.5,76 165.5,70.2 C165.5,58.8 181.4,62 186,54.4 L186,54.4 L186,52.6 C186,47.2 183.8,46 181.4,46 C174.2,46 177.4,54.4 171,54.4 C167.8,54.4 166.6,52.6 166.6,50.4 C166.6,46.2 171.8,42.8 181.4,42.8 Z M67.6,43.6 L67.6,67 C67.6,71.4 69.8,73.4 73,73.4 C75.6,73.4 78.4,72.2 79.8,69.4 L79.8,50 C79.8,48 79.2,47.2 77,47.2 L74.6,47.2 L74.6,43.6 L89.8,43.6 L89.8,69.3 C89.8,71.7 90.6,72.9 93.4,72.9 L93.8,72.9 L93.8,76.7 L80.2,78.9 L80.2,73.8 L80,73.8 C77.4,77.1 73.6,79.1 68.6,79.1 C62.4,79.1 57.8,75.9 57.8,67.3 L57.8,50 C57.8,48 57,47.2 54.8,47.2 L52.6,47.2 L52.6,43.6 L67.6,43.6 Z M157.9,43 C161.1,43 163.7,44.8 163.7,48.4 C163.7,51 162.5,53.6 158.9,53.6 C155.9,53.6 155.3,50.8 152.7,50.8 C150.5,50.8 148.7,53 148.7,56.2 L148.7,70.4 C148.7,73.6 149.5,74.6 153.1,74.6 L155.1,74.6 L155.1,78.4 L133.5,78.4 L133.5,74.7 L134.9,74.7 C138.5,74.7 138.9,73.7 138.9,70.5 L138.9,50 C138.9,48 137.9,47.2 135.7,47.2 L133.7,47.2 L133.7,43.6 L147.5,43.6 L148.1,50.8 L148.5,50.8 C149.9,45.6 154.1,43 157.9,43 Z M24.5,35.8 C15.3,35.8 11.3,42.7 11.3,56.1 C11.3,69.5 15.3,76.4 24.5,76.4 C26.2,76.4 27.7,76 28.9,75.6 C27.1,71.4 24.7,67.4 20.1,67.4 C19.3,67.4 18.5,67.6 17.7,68 L17.7,68 L16.3,65.2 C18.3,63.5 21,62.2 24.7,62.2 C30.5,62.2 33.5,65 35.9,68.6 C37.3,65.6 37.9,61.4 37.9,56.1 C37.9,42.7 33.9,35.8 24.5,35.8 Z M114.1,46.2 C109.3,46.2 106.5,51 106.5,60.6 C106.5,70.4 109.3,75.4 114.1,75.4 C119.3,75.4 121.3,70.4 121.5,60.6 C121.7,51.1 119.3,46.2 114.1,46.2 Z M185.9,58.6 C182.7,62.1 175.3,62.6 175.3,69 C175.3,72.2 177.3,74 179.9,74 C184.3,74 185.9,70.2 185.9,66 L185.9,66 Z"
            ></path>
            {/* </g> */}
          </svg>
        </div>
        <div className="qHeader_icons">
          <NavLink activeClassName="active" to="/">
            <div className="qHeader_icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.02 11.46L12.63 2.45999C12.34 2.17999 11.89 2.17999 11.6 2.44999L1.99 11.45C1.77 11.66 1.69 11.99 1.8 12.27C1.91 12.56 2.19 12.74 2.5 12.74H5.25V20.49C5.25 20.9 5.59 21.24 6 21.24H9.62C10.03 21.24 10.37 20.9 10.37 20.49V16.36C10.37 15.43 11.09 14.67 12 14.62H12.12C13.08 14.62 13.87 15.4 13.87 16.37V20.5C13.87 20.91 14.21 21.25 14.62 21.25H18C18.41 21.25 18.75 20.91 18.75 20.5V12.75H21.5C21.81 12.75 22.08 12.56 22.2 12.28C22.32 12 22.24 11.67 22.02 11.46Z"
                  fill="#666666"
                ></path>
              </svg>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/following">
            <div className="qHeader_icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.46001 9.04001C6.26001 9.04001 5.29001 8.07001 5.29001 6.87001C5.29001 5.67001 6.26001 4.70001 7.46001 4.70001C8.66001 4.70001 9.63001 5.67001 9.63001 6.87001C9.63001 8.07001 8.65001 9.04001 7.46001 9.04001ZM7.46001 6.20001C7.09001 6.20001 6.79001 6.50001 6.79001 6.87001C6.79001 7.24001 7.09001 7.54001 7.46001 7.54001C7.83001 7.54001 8.13001 7.24001 8.13001 6.87001C8.13001 6.50001 7.83001 6.20001 7.46001 6.20001Z"
                  fill="#666666"
                ></path>
                <path
                  d="M18.41 7.39001H12.22C11.81 7.39001 11.47 7.05001 11.47 6.64001C11.47 6.23001 11.81 5.89001 12.22 5.89001H18.41C18.82 5.89001 19.16 6.23001 19.16 6.64001C19.16 7.05001 18.82 7.39001 18.41 7.39001Z"
                  fill="#666666"
                ></path>
                <path
                  d="M18.41 14.72H12.22C11.81 14.72 11.47 14.38 11.47 13.97C11.47 13.56 11.81 13.22 12.22 13.22H18.41C18.82 13.22 19.16 13.56 19.16 13.97C19.16 14.38 18.82 14.72 18.41 14.72Z"
                  fill="#666666"
                ></path>
                <path
                  d="M18.41 18.38H12.22C11.81 18.38 11.47 18.04 11.47 17.63C11.47 17.22 11.81 16.88 12.22 16.88H18.41C18.82 16.88 19.16 17.22 19.16 17.63C19.16 18.04 18.82 18.38 18.41 18.38Z"
                  fill="#666666"
                ></path>
                <path
                  d="M18.41 11.06H12.22C11.81 11.06 11.47 10.72 11.47 10.31C11.47 9.9 11.81 9.56 12.22 9.56H18.41C18.82 9.56 19.16 9.9 19.16 10.31C19.16 10.72 18.82 11.06 18.41 11.06Z"
                  fill="#666666"
                ></path>
                <path
                  d="M7.44999 11.23L7.81999 11.87L8.18999 12.51H7.44999H6.71999L7.08999 11.87L7.44999 11.23ZM7.44999 9.73001C6.90999 9.73001 6.41999 10.02 6.14999 10.48L5.77999 11.12L5.40999 11.76C5.13999 12.22 5.13999 12.8 5.40999 13.26C5.68999 13.72 6.17999 14 6.71999 14H7.45999H8.19999C8.73999 14 9.22999 13.71 9.49999 13.25C9.76999 12.79 9.76999 12.21 9.49999 11.75L9.12999 11.11L8.75999 10.47C8.48999 10.02 7.98999 9.73001 7.44999 9.73001Z"
                  fill="#666666"
                ></path>
                <path
                  d="M8.81001 19.07H6.10001C5.69001 19.07 5.35001 18.73 5.35001 18.32V15.61C5.35001 15.2 5.69001 14.86 6.10001 14.86H8.81001C9.22001 14.86 9.56001 15.2 9.56001 15.61V18.32C9.56001 18.73 9.22001 19.07 8.81001 19.07ZM6.85001 17.57H8.06001V16.36H6.85001V17.57Z"
                  fill="#666666"
                ></path>
                <path
                  d="M18.5 21.75H5.5C3.71 21.75 2.25 20.29 2.25 18.5V5.5C2.25 3.71 3.71 2.25 5.5 2.25H18.5C20.29 2.25 21.75 3.71 21.75 5.5V18.5C21.75 20.29 20.29 21.75 18.5 21.75ZM5.5 3.75C4.54 3.75 3.75 4.54 3.75 5.5V18.5C3.75 19.46 4.54 20.25 5.5 20.25H18.5C19.46 20.25 20.25 19.46 20.25 18.5V5.5C20.25 4.54 19.46 3.75 18.5 3.75H5.5Z"
                  fill="#666666"
                ></path>
              </svg>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/answer">
            <div className="qHeader_icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.45 6.28001C20.45 5.55001 20.17 4.87001 19.65 4.35001C18.62 3.32001 16.83 3.32001 15.8 4.35001L5.17 14.98C5.09 15.06 5.03 15.16 4.99 15.27L3.6 19.46C3.51 19.73 3.58 20.03 3.78 20.23C3.92 20.37 4.11 20.45 4.31 20.45C4.39 20.45 4.47 20.44 4.55 20.41L8.74 19.01C8.85 18.97 8.95 18.91 9.03 18.83L19.65 8.21001C20.16 7.69001 20.45 7.01002 20.45 6.28001ZM18.59 7.15001L8.09 17.65L6.33 18.24L5.77 17.68L6.35 15.92L16.85 5.42001C17.31 4.96001 18.12 4.96001 18.58 5.42001C18.81 5.65001 18.94 5.96001 18.94 6.29001C18.94 6.62001 18.82 6.92001 18.59 7.15001Z"
                  fill="#636466"
                ></path>
                <path
                  d="M20.5 11.75C20.09 11.75 19.75 12.09 19.75 12.5V19.75H12.5C12.09 19.75 11.75 20.09 11.75 20.5C11.75 20.91 12.09 21.25 12.5 21.25H20.5C20.91 21.25 21.25 20.91 21.25 20.5V12.5C21.25 12.09 20.91 11.75 20.5 11.75Z"
                  fill="#636466"
                ></path>
                <path
                  d="M4.25 11.5V4.25H11.5C11.91 4.25 12.25 3.91 12.25 3.5C12.25 3.09 11.91 2.75 11.5 2.75H3.5C3.09 2.75 2.75 3.09 2.75 3.5V11.5C2.75 11.91 3.09 12.25 3.5 12.25C3.91 12.25 4.25 11.91 4.25 11.5Z"
                  fill="#636466"
                ></path>
              </svg>
            </div>
          </NavLink>
          <NavLink activeClassName="active" to="/spaces">
            <div className="qHeader_icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7 9.25C16.75 9.25 15.98 9.52 15.37 9.92C15.8 10.23 16.18 10.6 16.49 11.01C16.83 10.85 17.23 10.75 17.7 10.75C19.48 10.75 20.25 12.12 20.25 12.81V20.25H17.55V21C17.55 21.26 17.5 21.51 17.41 21.75H21C21.41 21.75 21.75 21.41 21.75 21V12.81C21.75 11.32 20.34 9.25 17.7 9.25Z"
                  fill="#666666"
                ></path>
                <path
                  d="M17.7 2.73C16.77 2.73 15.95 3.16 15.4 3.82C15.78 4.26 16.07 4.77 16.25 5.34C16.42 4.7 17 4.23 17.69 4.23C18.52 4.23 19.19 4.9 19.19 5.73C19.19 6.56 18.52 7.23 17.69 7.23C17.19 7.23 16.75 6.98 16.48 6.61C16.48 6.65 16.49 6.69 16.49 6.74C16.49 7.3 16.38 7.83 16.19 8.32C16.63 8.58 17.14 8.74 17.69 8.74C19.34 8.74 20.69 7.39 20.69 5.74C20.69 4.09 19.35 2.73 17.7 2.73Z"
                  fill="#666666"
                ></path>
                <path
                  d="M7.5 6.73C7.5 6.69 7.51 6.65 7.51 6.6C7.24 6.98 6.8 7.23 6.3 7.23C5.47 7.23 4.8 6.56 4.8 5.73C4.8 4.9 5.47 4.23 6.3 4.23C6.99 4.23 7.57 4.7 7.74 5.34C7.93 4.77 8.22 4.26 8.6 3.82C8.04 3.16 7.23 2.73 6.3 2.73C4.65 2.73 3.3 4.08 3.3 5.73C3.3 7.38 4.65 8.73 6.3 8.73C6.85 8.73 7.36 8.57 7.8 8.31C7.61 7.81 7.5 7.28 7.5 6.73Z"
                  fill="#666666"
                ></path>
                <path
                  d="M12 3.73C10.35 3.73 9 5.08 9 6.73C9 8.38 10.35 9.73 12 9.73C13.65 9.73 15 8.38 15 6.73C15 5.08 13.65 3.73 12 3.73ZM12 8.23C11.17 8.23 10.5 7.56 10.5 6.73C10.5 5.9 11.17 5.23 12 5.23C12.83 5.23 13.5 5.9 13.5 6.73C13.5 7.56 12.83 8.23 12 8.23Z"
                  fill="#666666"
                ></path>
                <path
                  d="M6.45 21V20.25H3.75V12.81C3.75 12.11 4.52 10.75 6.3 10.75C6.79 10.75 7.18 10.86 7.5 11.01C7.81 10.6 8.19 10.23 8.63 9.92C7.97 9.49 7.17 9.25 6.3 9.25C3.66 9.25 2.25 11.32 2.25 12.81V21C2.25 21.41 2.59 21.75 3 21.75H6.59C6.5 21.51 6.45 21.26 6.45 21Z"
                  fill="#666666"
                ></path>
                <path
                  d="M7.95 21C7.95 21.41 8.29 21.75 8.7 21.75H15.3C15.71 21.75 16.05 21.41 16.05 21V13.91C16.05 12.42 14.64 10.35 12 10.35C9.36 10.35 7.95 12.42 7.95 13.91V21ZM9.45 13.91C9.45 13.21 10.22 11.85 12 11.85C13.78 11.85 14.55 13.22 14.55 13.91V20.25H9.45V13.91Z"
                  fill="#666666"
                ></path>
              </svg>
            </div>
          </NavLink>
          <div className="qHeader_icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.86 14.93L20.48 14.54C20.22 14.27 19.98 14 19.76 13.73C19.57 13.49 19.4 13.27 19.26 13.07C19.07 12.79 18.99 12.62 18.96 12.55C18.93 12.46 18.81 12.1 18.73 11.12C18.68 10.5 18.66 9.8 18.67 9.12C18.67 9.05 18.67 8.97 18.67 8.87C18.66 5.22 15.67 2.25 11.99 2.25C8.30999 2.25 5.31999 5.23 5.31999 8.89V9.11C5.32999 9.81 5.30999 10.51 5.25999 11.12C5.17999 12.09 5.06999 12.46 5.02999 12.54C4.99999 12.62 4.91999 12.78 4.72999 13.06C4.58999 13.26 4.42999 13.48 4.22999 13.72C4.01999 14 3.77999 14.27 3.51999 14.54L3.27999 14.79C3.22999 14.84 3.17999 14.89 3.15999 14.91C2.76999 15.28 2.54999 15.79 2.54999 16.32V17.1C2.54999 17.96 3.24999 18.65 4.10999 18.65H8.21999C8.56999 20.41 10.13 21.75 12 21.75C13.87 21.75 15.43 20.42 15.78 18.65H19.89C20.75 18.65 21.45 17.95 21.45 17.1V16.32C21.44 15.78 21.22 15.26 20.86 14.93ZM12 20.25C10.97 20.25 10.1 19.58 9.77999 18.65H14.22C13.9 19.58 13.03 20.25 12 20.25ZM19.88 17.15L4.05999 17.1V16.32C4.05999 16.2 4.10999 16.08 4.22999 15.97L4.60999 15.59C4.88999 15.29 5.15999 14.99 5.39999 14.7C5.62999 14.42 5.81999 14.16 5.98999 13.92C6.18999 13.62 6.33999 13.34 6.43999 13.11C6.58999 12.72 6.69999 12.1 6.76999 11.25C6.81999 10.59 6.83999 9.85 6.82999 9.08V8.9C6.82999 6.06 9.15999 3.75 12.01 3.75C14.86 3.75 17.19 6.05 17.19 8.87V9.08C17.18 9.83 17.2 10.58 17.25 11.24C17.32 12.08 17.42 12.71 17.58 13.1C17.67 13.34 17.82 13.61 18.03 13.91C18.19 14.15 18.39 14.41 18.62 14.69C18.86 14.98 19.13 15.28 19.41 15.58L19.82 15.99C19.91 16.08 19.96 16.19 19.96 16.32L19.88 17.15Z"
                fill="#666666"
              ></path>
            </svg>
          </div>
          <div>
            <div
              className="qHeader_input"
              style={
                theme == "dark"
                  ? {
                      backgroundColor: "var(--darkMode)",
                      border: "1px solid grey",
                    }
                  : { backgroundColor: "white" }
              }
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm10.45 2.95L16 16l4.95 4.95Z"
                    stroke="#666"
                    fill="none"
                  ></path>
                </svg>
              </div>
              <input type="text" placeholder="Search Questions" />
            </div>
          </div>
        </div>
        <div className="qHeader-Rem">
          <div className="qHeader-rem">
            <button
              style={
                theme == "dark"
                  ? {
                      backgroundColor: "var(--darkMode)",
                      color: "var(--grey)",
                      border: "1px solid grey",
                    }
                  : { backgroundColor: "white" }
              }
              onClick={() => setPayOpen(true)}
            >
              Try Quora+
            </button>
            <Modal
              open={payOpen}
              closeIcon={Close}
              onClose={() => setPayOpen(false)}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay: {
                  height: "auto",
                },
              }}
            >
              <PaymentPage />
            </Modal>
          </div>
          <div className="qHeader-rem">
            <div className="menu-container" ref={menuRef}>
              <div className="qHeader-rem" onClick={() => setOpen(!open)}>
                <img
                  src="https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png"
                  alt="avatar"
                />
              </div>
              <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                <DropTop />
                <ul>
                  {details.map((ele, idx) => {
                    return <Dropdown img={ele.img} text={ele.text} key={idx} />;
                  })}
                </ul>
                <DropInfo />
              </div>
            </div>
          </div>
          <div
            className="qHeader-rem toggle-wrap"
            style={
              theme == "dark"
                ? {
                    backgroundColor: "var(--darkComp)",
                    border: "1px solid grey",
                  }
                : { backgroundColor: "white" }
            }
            onClick={() => {
              if (theme === "light") {
                dispatch(handleTheme("dark"));
              } else {
                dispatch(handleTheme("light"));
              }
            }}
          >
            <Toggle />
          </div>
          <div className="qHeader-rem">
            <button
              className="last"
              onClick={() => dispatch(openModal(true))}
              style={
                theme === "dark"
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "var(--red)" }
              }
            >
              Add Questons
            </button>
            <Modal
              open={isModalOpen}
              closeIcon={Close}
              onClose={() => dispatch(closeModal(false))}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay: {
                  height: "auto",
                },
              }}
            >
              <AddQuestions />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoraHeader;

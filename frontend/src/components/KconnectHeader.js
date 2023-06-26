import React, { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlined from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlined from "@material-ui/icons/AssignmentTurnedInOutlined";
import { ExpandMore, NotificationsOutlined, PeopleAltOutlined, Public, Search} from "@material-ui/icons";
import { Button, Input } from '@material-ui/core';
import { Avatar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import './css/KconnectHeader.css'
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css"
import axios from "axios";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Opportunity from "./Opportunity";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function KconnectHeader() {

const [isModalOpen,setIsModalOpen]=useState(false);
const [inputUrl,setInputUrl]=useState("")
const [question, setQuestion] = useState("")
const Close=(<CloseIcon/>)
const dispatch = useDispatch();
const user = useSelector(selectUser);



const handleSubmit = async() => {
  if (question !== "") {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      questionName: question,
      questionUrl: inputUrl,
      user: user
    };
    await axios
      .post("/api/questions", body, config)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
       window.location.href = "/";
      })
      .catch((e) => {
        console.log(e);
        alert("Error in adding question");
      });
  }
}

const handleLogout = () => {
  if (window.confirm("Are you sure to logout ?")) {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        console.log("Logged out");
      })
      .catch(() => {
        console.log("error in logout");
      });
  }
};


    return (
      
      <div className="kHeader">
      <div className="kHeader-content">
      <div className="kHeader__logo">
      <img src="https://cdn.dribbble.com/users/3959351/screenshots/14708277/media/01bebf72598b023d1d209cf78e8f5e0e.gif" alt="logo"></img>
      </div>
      <div className="kHeader__icons">
      <div className="kHeader__icon"><a href="/"><HomeIcon/></a></div>
      <div className="kHeader__icon"><a href="/job"><NotificationsOutlined/></a></div>
      <div className="kHeader__icon"><a href="/about"><AssignmentTurnedInOutlined/></a></div>
      <div className="kHeader__icon"><a href="/contact"><PeopleAltOutlined/></a></div>
      </div>
    
      <div className="kHeader__Rem">
        <span onClick={handleLogout}><Avatar src={user?.photo}/></span>
        
      </div>
      <Button onClick={()=>setIsModalOpen(true)}>Add Question</Button>
      <Modal
      open={isModalOpen}
      closeIcon={Close}
      onClose={()=>setIsModalOpen(false)}
      closeOnEsc
      center
      closeOnOverlayClick={false}
      styles={{
        overlay:{
          height:"auto",
        },
      }}
      >
        <div className="modal__title">
          <h5>Add Question</h5>
          <h5>Share Link</h5>
        </div>
        <div className="modal__info">
          <Avatar src={user?.userName} className="avatar"/>
          <div className="modal__scope">
            <PeopleAltOutlined/>
            <p>Public</p>
            <ExpandMore/>
          </div>
        </div>
        <div className="modal__Field">
          <Input
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
          type="text" placeholder="Start your question with 'What', 'How', 'Why',etc."/>
          <div style={{
            display:"flex",
            flexDirection:"column"
          }}>
            <input type="text" 
            value={inputUrl}
            onChange={(e)=>setInputUrl(e.target.value)}
            style={{
              margin:"5px 0",
              border:"1px solid lightgray",
              padding:"10px",
              outline: "2px solid #000",
            }}
            placeholder="Optional: include a link that gives context"/>
           {
            inputUrl !=="" && (<img 
            style={{
              height:"40vh",
              objectFit:"contain",
            }}
            src={inputUrl} alt="displayimage"/>
           )}
           
          </div>
        </div>
        <div className="modal__buttons">
          <button className="cancle" onClick={()=> setIsModalOpen(false)}>
            Cancel
          </button>
          <button onClick={handleSubmit} type="submit" className="add">
            Add Question
          </button>
        </div>
      </Modal>
      </div>
      </div>
    );
  }

  export default KconnectHeader;
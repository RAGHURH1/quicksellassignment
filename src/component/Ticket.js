import React from "react";
import "./Ticket.css";
import Profileicon from "./Profileicon";
import {FcLowPriority} from "react-icons/fc";
export default function Ticket(props) {
  return (
    <div className="card">
      <div className="cardbody">
        <div className="id">
          <span>{props.item.id}</span>
        </div>
        <div className="title">
          <span className="titlecontent">
          {props.item.title}
          </span>
        </div>
        <div className="tag-element">
          <div className="priority-icon">
            <FcLowPriority />
          </div>
          <div className="tag">
            <div className="greycircle"></div>
            <span className="tag-content">{props.item.tag[0]}</span>
          </div>
        </div>
      </div>
      <Profileicon />
    </div>
  );
}

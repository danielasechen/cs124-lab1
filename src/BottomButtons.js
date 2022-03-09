import "./BottomButtons.css";
import {useState} from "react";

function BottomButtons(props) {

    return <div className="buttons">
        <button type="radio" className={
            props.isHideCompleted ? "bottom_button_reg" : "bottom_button_new"
        } id="show_uncomplete"
                onClick={props.onToggleCompletedItems}
                onMouseOver={props.onMouseOver}
                onMouseOut={props.onMouseOut} >
            {props.isHideCompleted ? "Show All" : "Show Only Uncomplete"}</button>
        <button type="radio" className="bottom_button" id="clear_complete"
                onClick={props.onClearCompletedItems} >
            Clear All Completed</button>
    </div>;
}

export default BottomButtons;
import "./Buttons.css";
import {useState} from "react";

function Buttons(props) {
    // const [showOnlyUncomplete, setShowOnlyUncomplete] = useState(false);

    return <div className="buttons">
        <button type="radio" className="bottom_button" id="show_uncomplete"
                onClick={event=>props.clickedShowOnlyUncomplete()} >
            Show Only Uncomplete</button>
        <button type="radio" className="bottom_button" id="clear_complete">Clear All Completed</button>
    </div>;
}

export default Buttons;
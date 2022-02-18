import "./Buttons.css";

function Buttons() {
    return <div className="buttons">
        <button type="radio" className="bottom_button" id="show_uncomplete">Show Only Uncomplete</button>
        <button type="radio" className="bottom_button" id="clear_complete">Clear All Completed</button>
    </div>;
}

export default Buttons;
import plusIcon from "../assets/plus-icon.png"
import "./Sidebar.css"
import {useState} from "react";

function Sidebar() {

	const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"]

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="sidebar">
			<div>Sidebar</div>
			<img src={plusIcon} alt="plus icon" onClick={() => setIsOpen(!isOpen)}/>
			<ul className={`sidebar_list ${isOpen ? "sidebar_list-active" : ""}`}>
				{
					colors.map((item, index) => (
						<li key={index} className="sidebar_list-item" style={{backgroundColor: item}}/>
					))
				}
			</ul>
		</div>
	)
}

export default Sidebar;
import React, { useRef, useState } from "react";
import "./recent_div.css";
// import menuicon from "./assets/assets";
const Recent_div = () => {
	const [state, setState] = useState("recent-div");
	let [temp, setTemp] = useState(3);
	return (
		<div className={state}>
			<div
				className='menu'
				title='Expand menu'
				onClick={() => {
					if (temp % 2 == 0) {
						setState("recent-div");
						setTemp(3);
					} else {
						setState("recent-div-open");
						setTemp(4);
					}
				}}
			>
				<i className='bi bi-list'></i>
			</div>
			<div className='new-chat' title='New chat'>
				<i className='bi bi-plus'></i>
				{state == "recent-div-open" ? <span>New chat</span> : null}
			</div>

			<div className='recent-list'>
				{state == "recent-div-open" ? <span>Recent</span> : null}
			</div>
			<div className='down-btn'>
				<div className='setting' title='Settings'>
					<i className='bi bi-gear'></i>
					{state == "recent-div-open" ? <span>Settings</span> : null}
				</div>
				<div className='activity' title='Gemini Apps Activity'>
					<i className='bi bi-arrow-counterclockwise'></i>
					{state == "recent-div-open" ? <span>Activity</span> : null}
				</div>
				<div title='Help'>
					<i className='bi bi-question-circle'></i>
					{state == "recent-div-open" ? <span>Help</span> : null}
				</div>
				<div title='Gem manager'>
					<i className='bi bi-gem'></i>
					{state == "recent-div-open" ? <span>Gem manager</span> : null}
				</div>
			</div>
		</div>
	);
};

export default Recent_div;

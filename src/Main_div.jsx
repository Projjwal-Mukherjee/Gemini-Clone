import React, { useContext, useState } from "react";
import "./main_div.css";
import logo from "./assets/google-gemini-icon.svg";
import user_icon from "./assets/user.avif";
import SendIcon from "./assets/sendicon.png";
import loader from "./assets/loader.gif";
import { Context } from "./context/Context";
const Main_div = () => {
	const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);
	const [tempInput, setTempinput] = useState("");
	return (
		<div className='main-div'>
			<div className='parent-heading'>
				<h2 className='heading'>
					<span>
						Gemini <i className='bi bi-caret-down-fill' />
					</span>
					<p className='version'>2.0 Flash</p>
				</h2>
			</div>
			<div className='user-icon'>
				<img src={user_icon} alt='user icon' title='User' />
			</div>
			{showResult == false ? (
				<>
					<div className='mid-text'>
						<h1>
							<span>Hello, Projjwal</span>
						</h1>
					</div>
				</>
			) : (
				<div className='result'>
					<div className='ques-div'>
						<p className='question'>{tempInput}</p>
					</div>
					<div className='ans-div'>
						{loading == true ? (
							<div className='loading-div'>
								<img
									src={loader}
									alt='loading-anime'
									className='loading-animation'
								/>
							</div>
						) : null}

						<img src={logo} alt='logo' className='main-div-logo' />
						{loading == true ? (
							<p className='answer'>Just a sec...</p>
						) : (
							<p className='answer'>{resultData.replaceAll("*", "\n\n")}</p>
						)}
					</div>
					{loading == true ? null : (
						<p className='reaction'>
							<i className='bi bi-hand-thumbs-up'></i>
							<i className='bi bi-hand-thumbs-down'></i>
							<i className='bi bi-arrow-clockwise'></i>
							<i className='bi bi-share'></i>
							<i className='bi bi-three-dots-vertical'></i>
						</p>
					)}
				</div>
			)}

			<div className='input-section'>
				<div className='add-image'>
					<i
						className='fa-regular fa-image'
						title='Add image'
						style={{ color: "#ffffff" }}
					/>
				</div>
				<input
					type='text'
					placeholder='Ask Gemini'
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<div className='send-image'>
					{input == "" ? (
						<img
							width='72'
							height='72'
							src='https://img.icons8.com/forma-regular-filled/72/FFFFFF/microphone.png'
							alt='microphone'
							title='Use microphone'
						/>
					) : (
						<img
							src={SendIcon}
							alt=''
							title='Submit'
							onClick={() => {
								onSent();
								setTempinput(input);
							}}
						/>
					)}
				</div>
			</div>
			<p className='warning'>Gemini can make mistakes, so double-check it</p>
		</div>
	);
};

export default Main_div;

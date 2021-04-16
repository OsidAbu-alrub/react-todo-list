import React, { useEffect, useState } from "react";
import Button from "./../Button/Button";
import TextField from "./../TextField/TextField";
import "./style.css";

function Task({ handleDescriptionChange, id, taskTitle, task }) {
	const [description, setDescription] = useState(() => task);
	const [editVal, setEditVal] = useState(() => task);
	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = (e) => {
		if (e.target.type === "textarea") return;
		setIsEditing((prevState) => !prevState);
		setEditVal(description);
	};
	return (
		<div className="task-container" onDoubleClick={toggleEdit}>
			<h2 className="task-title">{taskTitle}</h2>
			<p className="task">
				Description
				<span style={{ display: !isEditing ? "block" : "none" }}>
					{description}
				</span>
			</p>

			{isEditing && (
				<div>
					<TextField
						area
						value={editVal}
						style={{
							margin: "0.5em 0px",
							marginBottom: "1em",
							padding: "0.5em",
							fontSize: "2rem",
							width: "100%",
						}}
						onChange={(e) => setEditVal(e.target.value)}
					/>

					<Button
						center
						handleClick={() => {
							setIsEditing(false);
							setDescription(editVal);
							handleDescriptionChange(id, editVal);
						}}
					>
						Save Changes
					</Button>
				</div>
			)}
		</div>
	);
}

export default Task;

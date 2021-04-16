import React, { useEffect } from "react";
import "./style.css";
import Task from "./../Task/Task";

function TaskList({ tasks, handleDescriptionChange }) {
	useEffect(() => {}, [tasks]);
	return (
		<div className="task-list">
			<h1 className="task-list-title">Tasks</h1>
			<h2 className="task-list-edit-hint">
				*double click task to edit it*
			</h2>

			{tasks.length ? (
				tasks.map((task, index, array) => (
					<Task
						key={task.id}
						id={task.id}
						taskTitle={task.taskTitle}
						task={task.task}
						handleDescriptionChange={handleDescriptionChange}
					/>
				))
			) : (
				<h2>No tasks have been added yet!</h2>
			)}
		</div>
	);
}

export default TaskList;

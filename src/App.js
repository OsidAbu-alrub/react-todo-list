import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import TextField from "./components/TextField/TextField";
import Label from "./components/Label/Label";
import Button from "./components/Button/Button";
import TaskList from "./components/TaskList/TaskList";
import "./app.css";
const TAG = "TASKS";
function App() {
	const [taskTitle, setTaskTitle] = useState("");
	const [task, setTask] = useState("");
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const [tasks, setTasks] = useState(() => {
		return JSON.parse(window.localStorage.getItem(TAG)) || [];
	});
	const handleClick = (event) => {
		if (!taskTitle || !task) {
			setIsError(true);
			return;
		}
		// const taskArray = JSON.parse(window.localStorage.getItem(TAG));
		const obj = {
			id: uuidv4(),
			taskTitle,
			task,
		};
		setTaskTitle("");
		setTask("");
		setTasks((prevState) => [...prevState, obj]);
		setIsSuccess(true);
	};

	const handleDescriptionChange = (id, newDescription) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, task: newDescription } : task
			)
		);
	};

	useEffect(() => {
		window.localStorage.setItem(TAG, JSON.stringify(tasks));
	}, [tasks]);

	useEffect(() => {
		setTimeout(() => setIsSuccess(false), 5000);
	}, [isSuccess]);
	return (
		<Router>
			<div className="root">
				<form action="#" autoComplete="off" style={{ padding: "2em" }}>
					<Label htmlFor="taskTitleField">
						Task Title
						<TextField
							id="taskTitleField"
							placeholder="e.g. Eggs"
							value={taskTitle}
							onChange={(e) => setTaskTitle(e.target.value)}
						></TextField>
					</Label>
					<Label htmlFor="taskField">
						Task
						<TextField
							id="taskField"
							placeholder="e.g. Go buy eggs"
							area
							value={task}
							onChange={(e) => setTask(e.target.value)}
						></TextField>
					</Label>
					<Button center handleClick={handleClick}>
						Add
					</Button>
					{isError && (
						<p
							style={{
								color: "red",
								textAlign: "center",
								fontSize: "2rem",
								margin: 0,
								marginTop: "1em",
							}}
						>
							Make sure to fill out all fields*
						</p>
					)}

					{isSuccess && (
						<p
							style={{
								color: "green",
								textAlign: "center",
								fontSize: "2rem",
								margin: 0,
								marginTop: "1em",
							}}
						>
							task saved*
						</p>
					)}
				</form>
				<div className="line"></div>

				<TaskList
					tasks={tasks}
					handleDescriptionChange={handleDescriptionChange}
				/>
			</div>
		</Router>
	);
}

export default App;

import React from "react";
import "./style.css";

function TextField({ area, id, className, ...props }) {
	const element = area ? (
		<textarea
			type="text"
			id={id}
			className={`field ${className}`}
			{...props}
		/>
	) : (
		<input
			type="text"
			id={id}
			className={`field ${className}`}
			{...props}
		/>
	);
	return element;
}

export default TextField;

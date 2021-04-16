import React from "react";
import "./style.css";

function Label({ htmlFor, children, className, ...props }) {
	return (
		<label htmlFor={htmlFor} className={`label ${className}`} {...props}>
			{children}
		</label>
	);
}

export default Label;

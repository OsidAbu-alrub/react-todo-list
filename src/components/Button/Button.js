import React from "react";
import "./style.css";

function Button({ handleClick, className, center, children, ...props }) {
	return (
		<div className={center && "center"}>
			<a onClick={handleClick} className={`btn ${className}`} {...props}>
				{children}
			</a>
		</div>
	);
}

export default Button;

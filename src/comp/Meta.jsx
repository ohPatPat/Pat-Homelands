import React, { useEffect } from 'react';

export const Meta = props => {
	useEffect(() => {
		console.log(props.title);
		document.title = props.title
		if (props.description) {
			document.querySelector('meta[name="description"]')
				.setAttribute("content", props.description)
		}
	}, [props.title, props.description])
	return (
		<main id={props.title}>
{			console.log(props.title)
}			<h5>
				{props.title}
			</h5>
			{props.children}
			
		</main>
	);
}


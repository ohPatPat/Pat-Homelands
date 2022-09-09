import React, { useEffect } from "react";

export const Meta = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = props.title;
    if (props.description) {
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", props.description);
    }
  }, [props.title, props.description]);

  const str = props.title;

// Replacing " " (space) to "" empty space
const res = str.replace(/ /g, '')
  return (
	
    <main id={res}>
		<h1>{props.title}</h1>
      {props.children}
    </main>
  );
};

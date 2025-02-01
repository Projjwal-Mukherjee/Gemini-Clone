import { createContext, createElement, useState } from "react";
import run from "../config/Gemini";
export const Context = createContext();

const ContextProvider = (props) => {
	const [input, setInput] = useState("");
	const [recentPrompt, setRecentPrompt] = useState("");
	const [prevPrompts, setPrevPrompts] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultData, setResultData] = useState("");

	// const delayPara = (index, nextword) => {};
	// HTML stands for **HyperText Markup Language**. It's the foundational language of the World Wide Web and is used to create the structure and content of web pages. Think of it like the skeleton and basic building blocks of a house. Here's a breakdown of what that means: * **HyperText:** This refers to text that contains links to other documents or resources. Clicking a hyperlink takes you to another part of the same page, a different page on the same website, or a completely different website. This is how you navigate the web. * **Markup Language:** This means that HTML uses tags (special keywords enclosed in angle brackets, e.g., `<h1>`, `<p>`, `<a>`) to *mark up* (describe) the content. These tags tell the browser how to display the content: is it a heading? a paragraph? a link? an image? **Key Concepts of HTML:** * **Elements:** These are the building blocks of an HTML page. They consist of: * **Opening tag:** `<h1>` (starts the element) * **Content:** This is the actual text, image, or other element inside the tags. * **Closing tag:** `</h1>` (ends the element) * **Example:** `<h1>This is a heading</h1>` * **Tags:** These are keywords (like `<h1>`, `<p>`, `<img>`, `<a>`) enclosed in angle brackets (`< >`) that define the structure and meaning of the content. * **Attributes:** These provide additional information about an element. They are added to the opening tag and consist of a name and a value (e.g., `<img src="image.jpg" alt="Description">`). * **Structure:** HTML documents follow a specific structure with key elements like `<html>`, `<head>`, and `<body>`. **Basic HTML Structure Example:** ```html <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>My Web Page</title> </head> <body> <h1>Welcome to my website!</h1> <p>This is a paragraph of text.</p> <a href="https://www.example.com">Visit example.com</a> <img src="image.jpg" alt="An example image"> </body> </html> ``` **Explanation:** * `<!DOCTYPE html>`: Declares the document type (HTML5 in this case). * `<html>`: The root element of the page. * `<head>`: Contains meta-information about the HTML document, such as character set, viewport settings, and page title. * `<meta charset="UTF-8">`: Specifies the character encoding for proper display of text. * `<meta name="viewport" ...>`: Configures the viewport for different screen sizes. * `<title>My Web Page</title>`: Sets the title displayed in the browser tab. * `<body>`: Contains the visible content of the web page. * `<h1>Welcome to my website!</h1>`: Creates a heading. * `<p>This is a paragraph of text.</p>`: Creates a paragraph. * `<a href="https://www.example.com">Visit example.com</a>`: Creates a hyperlink. * `<img src="image.jpg" alt="An example image">`: Inserts an image. **In summary, HTML is the language used to:** * **Structure the content of a webpage:** Define headings, paragraphs, lists, tables, forms, etc. * **Add multimedia content:** Embed images, videos, and audio. * **Create hyperlinks:** Link to other pages and resources. * **Provide a foundation for styling and interactivity:** HTML works in conjunction with CSS (for styling) and JavaScript (for interactivity) to create dynamic and engaging web experiences. Essentially, without HTML, there would be no web pages as we know them. It's the core building block that every website uses.

	const onSent = async () => {
		setResultData("");
		setLoading(true);
		setShowResult(true);
		const response = await run(input);
		setInput("");
		// let responseArray = response.split("**");
		// console.log(responseArray);
		// let newResponse;
		// for (let i = 0; i < responseArray.length; i++) {
		// 	if (i === 0) {
		// 		continue;
		// 	} else if (i % 2 === 0) {
		// 		newResponse += responseArray[i];
		// 	} else {
		// 		// let bold = document.createElement("b");
		// 		// let text = document.createTextNode(responseArray[i]);
		// 		// bold.appendChild(text);
		// 		// bold.innerHTML = responseArray[i];
		// 		// console.log(bold);
		// 		// bold.style.color = "red";
		// 		newResponse += "<b>" + responseArray[i] + "</b>";
		// 	}
		// }
		// what is react ?
		// for (let i = 0; i < response.length; i++) {
		// 	if(response[i]=="*"){

		// 	}

		// }
		response.replaceAll("*", "\n\n");
		setResultData(response);
		setLoading(false);
	};

	const contextValue = {
		prevPrompts,
		setPrevPrompts,
		onSent,
		recentPrompt,
		setRecentPrompt,
		showResult,
		loading,
		resultData,
		input,
		setInput,
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;

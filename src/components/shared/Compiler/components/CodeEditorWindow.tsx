import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({
	onChange,
	language,
	code,
	theme,
	valueDefault,
}) => {
	const [value, setValue] = useState(code || "");

	const handleEditorChange = (value: any) => {
		setValue(value);
		onChange("code", value);
	};

	return (
		<div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
			<Editor
				height="75vh"
				width={`100%`}
				language={language || "javascript"}
				value={value}
				theme={theme}
				defaultValue={valueDefault|| "#Code Here"}
				onChange={handleEditorChange}
			/>
		</div>
	);
};
export default CodeEditorWindow;

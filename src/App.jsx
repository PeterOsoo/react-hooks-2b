import React from "react"
import ControlledInputs from "./components/forms/ControlledInputs"
import UserChallenge from "./components/forms/UserChallenge"

const App = () => {
	return (
		<div>
			<h1 className="container"> React Hooks </h1>
			<ControlledInputs />
			<UserChallenge />
		</div>
	)
}

export default App

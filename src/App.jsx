import React from "react"
import ControlledInputs from "./components/forms/ControlledInputs"
import UserChallenge from "./components/forms/UserChallenge"
import UseRef from "./components/ref/UseRef"

const App = () => {
	return (
		<div className="container">
			<h1> React Hooks </h1>
			<ControlledInputs />
			<UserChallenge />
			<UseRef />
		</div>
	)
}

export default App

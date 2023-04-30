import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
	const diffToast = () => {
		// alert("Login Successfull....")
		toast.success("Login Successfull....", { position: "top-center" })
	}
	return (
		<>
			<div className="main-div">
				<h2>Welcome to Login Page.</h2>
				<button className="button" onClick={diffToast}>
					Login
				</button>
				<ToastContainer />
			</div>
		</>
	)
}

export default Login

import React from "react"
import {
	Bounce,
	Flip,
	Slide,
	ToastContainer,
	Zoom,
	toast,
} from "react-toastify"

const Toast = () => {
	const notify = () => {
		// toast("Notify Successful.....")
		// toast.info("Notify Successful.....")
		// toast.success("Notify Successful.....")
		// toast.warning("Notify Successful.....")
		// toast.error("Notify Successful.....")

		// toast("Notify Successful.....", { position: "top-center" })
		// toast.info("Notify Successful.....", { position: "top-right" })
		// toast.success("Notify Successful.....", { position: "top-left" })
		// toast.warning("Notify Successful.....", { position: "bottom-left" })
		// toast.error("Notify Successful.....", { position: "bottom-right" })

		toast("Notify Successful.....", {
			position: "top-center",
			theme: "colored",
		})
		toast.info("Notify Successful.....", {
			position: "top-right",
			theme: "dark",
		})
		toast.success("Notify Successful.....", {
			position: "top-left",
			autoClose: 10000,
		})
		toast.warning("Notify Successful.....", {
			position: "bottom-left",
			autoClose: 1000,
		})
		toast.error("Notify Successful.....", {
			position: "bottom-right",
			autoClose: 20000,
		})
	}

	return (
		<div className="App">
			<h1>Welcome to Madhav Vanalwar</h1>
			<button onClick={notify}>Notify</button>
			{/* <ToastContainer transition={Slide} /> */}
			{/* <ToastContainer transition={Bounce} /> */}
			{/* <ToastContainer transition={Flip} /> */}
			<ToastContainer transition={Zoom} limit={2} />
		</div>
	)
}

export default Toast

"use client";

import React, { useState, useEffect } from "react";
import Signup from "../../components/Signup";
import "../../components/Login.css";
import LoginForm from "../../components/LoginForm";
import { useRouter } from "next/navigation";

const Login = () => {
	const [isRightPanelActive, setIsRightPanelActive] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [showSignup, setShowSignup] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // adjust breakpoint as needed
		};

		handleResize(); // set on initial load
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href =
			"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, []);

	const router = useRouter();

	if (isMobile) {
		return (
			<div className="container" style={{ width: "90%", maxWidth: 400 }}>
				<div
					style={{ display: "flex", justifyContent: "center", margin: "20px" }}
				>
					<button
						className={`ghost ${!showSignup ? "active-tab" : ""}`}
						onClick={() => setShowSignup(false)}
						style={{ marginRight: "10px" }}
					>
						Login
					</button>
					<button
						className={`ghost ${showSignup ? "active-tab" : ""}`}
						onClick={() => setShowSignup(true)}
					>
						Sign Up
					</button>
				</div>
				{showSignup ? (
					<Signup isMobile={true} />
				) : (
					<LoginForm isMobile={true} />
				)}
			</div>
		);
	}

	// ✅ DESKTOP layout (unchanged)
	return (
		<div>
			<button
				onClick={() => router.push("/")}
				style={{
					position: "absolute",
					top: "20px",
					right: "30px",
					fontSize: "24px",
					background: "transparent",
					border: "none",
					color: "white",
					cursor: "pointer",
					zIndex: 9999,
				}}
			>
				✕
			</button>

			<div
				className={`container ${
					isRightPanelActive ? "right-panel-active" : ""
				}`}
				id="container"
			>
				<Signup />

				<div className="form-container sign-in-container">
					<form action="#">
						<h1>Sign in</h1>
						<div className="social-container">
							<a href="#" className="social">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="#" className="social">
								<i className="fab fa-google-plus-g"></i>
							</a>
							<a href="#" className="social">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
						<span>or use your account</span>
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<a href="#">Forgot your password?</a>
						<button>Sign In</button>
					</form>
				</div>

				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>
								To keep connected with us please login with your personal info
							</p>
							<button
								className="ghost"
								onClick={() => setIsRightPanelActive(false)}
							>
								Sign In
							</button>
						</div>

						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button
								className="ghost"
								onClick={() => setIsRightPanelActive(true)}
							>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;

"use client";

import React, { useState, useEffect } from "react";
import Signup from "../../components/Signup";
import LoginForm from "../../components/LoginForm";
import { useRouter } from "next/navigation";

const Login = () => {
	const [isRightPanelActive, setIsRightPanelActive] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [showSignup, setShowSignup] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css";
		document.head.appendChild(link);
		return () => document.head.removeChild(link);
	}, []);

	if (isMobile) {
		return (
			<div className="w-[90%] max-w-[400px] mx-auto mt-10">
				<div className="flex justify-center mb-6">
					<button
						className={`px-4 py-2 rounded-full font-bold border ${
							!showSignup ? "bg-blue-600 text-white" : "text-blue-400 border-blue-400"
						}`}
						onClick={() => setShowSignup(false)}
					>
						Login
					</button>
					<button
						className={`ml-4 px-4 py-2 rounded-full font-bold border ${
							showSignup ? "bg-blue-600 text-white" : "text-blue-400 border-blue-400"
						}`}
						onClick={() => setShowSignup(true)}
					>
						Sign Up
					</button>
				</div>
				{showSignup ? <Signup isMobile={true} /> : <LoginForm isMobile={true} />}
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black text-white relative flex items-center justify-center">
			<button
				onClick={() => router.push("/")}
				className="absolute top-5 right-8 text-white text-2xl z-50"
			>
				✕
			</button>

			<div
				className={`relative bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden w-[768px] max-w-full min-h-[480px] transition-all duration-700 ${
					isRightPanelActive ? "right-panel-active" : ""
				}`}
			>
				{/* Sign Up form (hidden by default) */}
				<div
					className={`absolute top-0 left-0 w-1/2 h-full z-10 transition-transform duration-700 ${
						isRightPanelActive ? "translate-x-full z-50" : "opacity-0 z-0"
					}`}
				>
					<Signup />
				</div>

				{/* Sign In form */}
				<div
					className={`absolute top-0 left-0 w-1/2 h-full z-20 transition-transform duration-700 transform ${
						isRightPanelActive ? "translate-x-full" : ""
					}`}
				>
					<form className="bg-[#121212] h-full flex flex-col items-center justify-center px-12 text-center">
						<h1 className="font-bold text-2xl mb-4">Sign in</h1>
						<div className="flex space-x-3 my-4">
							<a href="#" className="border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center">
								<i className="fab fa-facebook-f" />
							</a>
							<a href="#" className="border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center">
								<i className="fab fa-google-plus-g" />
							</a>
							<a href="#" className="border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center">
								<i className="fab fa-linkedin-in" />
							</a>
						</div>
						<span className="text-xs text-gray-300 mb-3">or use your account</span>
						<input
							type="email"
							placeholder="Email"
							className="w-full max-w-xs bg-[#1e1e1e] text-white p-3 mb-2 rounded"
						/>
						<input
							type="password"
							placeholder="Password"
							className="w-full max-w-xs bg-[#1e1e1e] text-white p-3 mb-2 rounded"
						/>
						<a href="#" className="text-blue-300 text-sm mt-1 mb-4">Forgot your password?</a>
						<button className="bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
							Sign In
						</button>
					</form>
				</div>

				{/* Overlay container */}
				<div
					className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 z-30 ${
						isRightPanelActive ? "-translate-x-full" : ""
					}`}
				>
					<div className="bg-gradient-to-r from-[#0d47a1] to-[#1976d2] h-full text-center text-black flex flex-col items-center justify-center px-10">
						{/* Left Overlay Panel */}
						<div
							className={`absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center transition-transform duration-700 ${
								isRightPanelActive ? "translate-x-0" : "-translate-x-1/5"
							}`}
						>
							<h1 className="text-2xl font-bold mb-3">Welcome Back!</h1>
							<p className="text-sm mb-6">
								To keep connected with us please login with your personal info
							</p>
							<button
								className="border border-black text-white px-6 py-2 rounded-full text-sm font-bold uppercase"
								onClick={() => setIsRightPanelActive(false)}
							>
								Sign In
							</button>
						</div>

						{/* Right Overlay Panel */}
						<div
							className={`absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center transition-transform duration-700 ${
								isRightPanelActive ? "translate-x-1/5" : "translate-x-0"
							}`}
						>
							<h1 className="text-2xl font-bold mb-3">Hello, Friend!</h1>
							<p className="text-sm mb-6">Enter your personal details and start your journey with us</p>
							<button
								className="border border-black text-white px-6 py-2 rounded-full text-sm font-bold uppercase"
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

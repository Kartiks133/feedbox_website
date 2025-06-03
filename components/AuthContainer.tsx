import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./Signup";

const AuthContainer: React.FC = () => {
	const [isSignUp, setIsSignUp] = useState(false);

	return (
		<div className="w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
			<div className="relative w-full max-w-5xl h-[550px] bg-black bg-opacity-30 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">

				{/* Main panels */}
				<div className={`absolute w-full h-full flex transition-transform duration-700 ease-in-out ${isSignUp ? "-translate-x-1/2" : "translate-x-0"}`}>
					{/* Sign In */}
					<div className="w-1/2">
						<LoginForm />
					</div>
					{/* Sign Up */}
					<div className="w-1/2">
						<Signup />
					</div>
				</div>

				{/* Overlay */}
				<div className="absolute top-0 left-1/2 w-1/2 h-full z-30 overflow-hidden">
					<div className={`absolute top-0 h-full w-full flex items-center justify-center flex-col px-10 text-white transition-transform duration-700 ease-in-out 
						${isSignUp ? "-translate-x-full" : "translate-x-0"} 
						bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800`}>
						{isSignUp ? (
							<>
								<h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
								<p className="mb-6 text-center px-2">To keep connected with us, please login with your personal info</p>
								<button
									onClick={() => setIsSignUp(false)}
									className="bg-transparent border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition"
								>
									Sign In
								</button>
							</>
						) : (
							<>
								<h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
								<p className="mb-6 text-center px-2">Enter your personal details and start your journey with us</p>
								<button
									onClick={() => setIsSignUp(true)}
									className="bg-transparent border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition"
								>
									Sign Up
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthContainer;

import React from "react";

const Signup: React.FC = () => {
	return (
		<div className="w-full h-full flex items-center justify-center bg-[#121212] text-white">
			<form className="w-3/4 max-w-sm flex flex-col text-center">
				<h1 className="text-2xl font-bold mb-4">Create Account</h1>

				<div className="flex justify-center mb-4">
					<a href="#" className="border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center mx-1">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="#" className="border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center mx-1">
						<i className="fab fa-google-plus-g"></i>
					</a>
					<a href="#" className="border border-gray-400 rounded-full h-10 w-10 flex items-center justify-center mx-1">
						<i className="fab fa-linkedin-in"></i>
					</a>
				</div>

				<span className="text-sm text-gray-300 mb-2">or use your email for registration</span>

				<input
					type="text"
					placeholder="Name"
					className="bg-[#1e1e1e] text-white px-4 py-3 my-2 rounded"
				/>
				<input
					type="email"
					placeholder="Email"
					className="bg-[#1e1e1e] text-white px-4 py-3 my-2 rounded"
				/>
				<input
					type="password"
					placeholder="Password"
					className="bg-[#1e1e1e] text-white px-4 py-3 my-2 rounded"
				/>

				<button
					type="submit"
					className="rounded-full bg-blue-900 border border-blue-900 text-white font-semibold py-3 px-12 uppercase tracking-wide hover:bg-blue-800 transition-transform active:scale-95"
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;

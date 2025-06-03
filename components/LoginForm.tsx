import React from "react";

interface LoginFormProps {
	isMobile?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ isMobile = false }) => {
	return (
		<div className={`form-container ${isMobile ? "mobile-form" : "sign-in-container"}`}>
			<form action="#">
				<h1>Sign in</h1>
				<div className="social-container">
					<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
					<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
					<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
				</div>
				<span>or use your account</span>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<a href="#">Forgot your password?</a>
				<button>Sign In</button>
			</form>
		</div>
	);
};

export default LoginForm;

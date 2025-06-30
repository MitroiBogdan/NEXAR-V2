import React, { useState } from "react";

const AuthPage: React.FC = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setSuccessMessage("");

		try {
			if (isLogin) {
				// Login
				console.log("🔐 Attempting login...");
				// Login logic here
			} else {
				// Register
				console.log("📝 Attempting registration...");
				// Register logic here
			}
		} catch (error: any) {
			console.error("❌ Auth error:", error);
			if (error.message.includes("Invalid login credentials")) {
				setError("Email sau parolă incorectă");
			} else if (error.message.includes("Email not confirmed")) {
				setError("Emailul nu a fost confirmat");
			} else {
				setError("A apărut o eroare neașteptată");
			}
		}
	};

	return (
		<div>
			<h1>{isLogin ? "Login" : "Register"}</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					required
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Parolă"
					required
				/>
				<button type="submit" disabled={loading}>
					{isLogin ? "Autentificare" : "Înregistrare"}
				</button>
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
			<button onClick={() => setIsLogin(!isLogin)}>
				{isLogin
					? "Nu ai cont? Înregistrează-te"
					: "Ai deja cont? Autentifică-te"}
			</button>
		</div>
	);
};

export default AuthPage;

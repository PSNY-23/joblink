// src/Login.js
import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h1>
                <form action="your-login-endpoint" method="POST">
                    <div className="mb-4">
                        <label className="block text-black mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-black mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-950 transition"
                    >
                        Login
                    </button>
                    <div className="text-center mt-4">
                        <p className="text-black">
                            Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up here</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

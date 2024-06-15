import React from "react";

export default function Header() {
    return (
        <header className="bg-blue-500 shadow flex">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white justify-center">Welcome to Simple Auth</h1>
            </div>
        </header>
    );
}
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-yellow-500 p-10 text-center">
            <div className="flex flex-col items-center">
                <img src="/profile-pic.jpg" alt="Profile" className="w-36 h-36 rounded-full mb-5" />
                <div className="intro">
                    <h1 className="text-3xl">Hello!</h1>
                    <h2 className="text-xl my-3">I'm Radya Christoval, a Fullstack Web Developer.</h2>
                    <button className="px-4 py-2 bg-white text-black rounded">View More</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
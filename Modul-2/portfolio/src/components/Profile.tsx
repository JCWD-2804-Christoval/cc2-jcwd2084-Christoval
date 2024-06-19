import React from 'react';

const Profile: React.FC = () => {
    return (
        <section className="p-10 text-center">
            <h2 className="text-2xl mb-5">Profile</h2>
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="about-me w-full md:w-1/2 p-5">
                    <h3 className="text-xl mb-3">About me</h3>
                    <p>I'm a fullstack web developer with experience in web design, programming, and more.</p>
                    <img src="/profile-pic.jpg" alt="Profile" className="w-36 h-36 rounded-full mt-5 mx-auto"/>
                </div>
                <div className="details w-full md:w=1/2 p-5">
                    <h3 className="text-xl mb-3">Details</h3>
                    <ul className="list-none p-0">
                        <li className="my-2">Email: christoval999@gmail.com</li>
                        <li className="my-2">Phone: +62 878-1032-xxxx</li>
                        <li className="my-2">Location: Jakarta, Indonesia</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Profile;
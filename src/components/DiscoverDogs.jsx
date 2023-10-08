import React, { useState } from "react";

const DiscoverDogs = () => {
    const [dogName, setDogName] = useState('Oliver');
    const attributes = [];
    return (
        <div className="flex flex-col items-center justify-center h-screen m-2">
            <header className="p-6">
                <h1 className="font-extrabold text-6xl">Veni Vici!</h1>
                <h2 className="text-lg">🦴 Discover some superrr cool dogs! 🐶</h2>
            </header>
            <main className="m-4 bg-gray-700 p-4 rounded-xl">
                <h3 className="text-2xl font-bold">{dogName}</h3>
                <ul className="grid md:grid-cols-3 sm:grid-cols-1 m-2">
                    <li className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700">Attributes here</li>
                    <li className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700">Attributes here</li>
                    <li className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700">Attributes here</li>
                </ul>
                <img alt={`${dogName} the dog`} src="" className="m-1"/>
                <button className="mt-5">🔀 Discover!</button>
            </main>
        </div>
    );
}

export default DiscoverDogs;
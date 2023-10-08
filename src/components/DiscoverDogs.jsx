import React, { useState } from "react";

const DiscoverDogs = () => {
    const [dogName, setDogName] = useState('Oliver');
    return (
        <>
            <header className="m-4 p-2">
                <h1 className="font-extrabold text-6xl">Veni Vici!</h1>
                <h2 className="text-lg">🦴 Discover some superrr cool dogs! 🐶</h2>
            </header>
            <main className="m-4 bg-gray-700 p-2 rounded-xl">
                <h3 className="text-2xl font-bold">{dogName}</h3>
                <ul className="flex m-2">
                    <li className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700">Attributes here</li>
                    <li className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700">Attributes here</li>
                    <li className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700">Attributes here</li>
                </ul>
                <img alt={`${dogName} the dog`} src="" />
                <button>🔀 Discover!</button>
            </main>
        </>
    );
}

export default DiscoverDogs;
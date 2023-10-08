import React, { useState, useEffect } from "react";
import axios from 'axios';

const DiscoverDogs = ({ apiKey, banList, addToBanList }) => {
    /* HOOKS */
    const [dogData, setDogData] = useState(null);

    /* FETCH DOG DATA: Breed Name, Breed Group, Temperament Traits, Life Span */
    const fetchRandomDog = async () => {
        try {
            // Fetch response data from API request using .env key
            const response = await axios.get(`https://api.thedogapi.com/v1/images/search?api_key=${apiKey}`);
            
            // Extract Data from API request 
            if (response.data && response.data.length > 0) {
                const breedData = response.data[0].breeds[0];

                const name = breedData.name;
                const breedGroup = breedData.breed_group;
                const temperament = breedData.temperament.split(', ');
                const lifeSpan = breedData.life_span;

                // Check if any of the dog data is in BanList
                const isBanned = [name, breedGroup, ...temperament, lifeSpan].some(attr => banList.includes(attr));
                if (!isBanned) {
                    setDogData({
                        name,
                        breedGroup,
                        temperament,
                        lifeSpan,
                        imageUrl: response.data[0].url,
                    });
                } else {
                    fetchRandomDog();
                }
            }
        } catch (error) {
            console.error('Error fetching dog data:', error);
        }
    };

    // Add clicked attributed to the ban list
    const handleAttributeClick = (attribute) => {
        addToBanList(attribute);
    }

    // Fetch a random dog's data when the component mounts or when the API key changes
    useEffect(() => {
        fetchRandomDog();
    }, [apiKey, banList]);

    return (
        <div className="flex flex-col items-center justify-center h-full m-2">
            <header className="p-6">
                <h1 className="font-extrabold text-6xl">Veni Vici!</h1>
                <h2 className="text-lg">🦴 Discover some superrr cool dogs! 🐶</h2>
            </header>
            <main className="m-4 bg-gray-700 p-4 rounded-xl">
                {dogData && (
                    <>
                        <h3 className="text-2xl font-bold">{dogData.name}</h3>
                        <div className="flex justify-center">
                            <img alt={`${dogData.name} the dog`} src={dogData.imageUrl} className="m-1 w-3/4"/>
                        </div>
                        <ul className="grid md:grid-cols-3 sm:grid-cols-1 m-2">
                            <li 
                                className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700 hover:bg-yellow-500 hover:cursor-pointer"
                                onClick={() => handleAttributeClick(dogData.breedGroup)}
                            >
                                {dogData.breedGroup}
                            </li>

                            {/* Dynamically render separate <li> tags by splitting traits separated by commas*/}
                            {dogData.temperament.map((trait, index) => (
                                <li 
                                    key={index} 
                                    className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700 hover:bg-yellow-500 hover:cursor-pointer"
                                    onClick={() => handleAttributeClick(trait)}
                                >
                                    {trait}
                                </li>
                            ))}
                   
                            <li 
                                className="p-2 m-1 bg-yellow-600 font-semibold rounded-md shadow-sm shadow-gray-700 overflow-visible hover:bg-yellow-500 hover:cursor-pointer" 
                                onClick={() => handleAttributeClick(dogData.lifeSpan)}
                            >
                                {dogData.lifeSpan}
                            </li>
                        </ul>
                    </>
                )}
                <button className="m-3" onClick={fetchRandomDog}>🔀 Discover!</button>
            </main>
        </div>
    );
}

export default DiscoverDogs;

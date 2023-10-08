import React from "react";

const BanList = ({ banList }) => {

    return (
        <aside className="bg-gray-300 h-full flex flex-col align-middle"> 
            <header className="p-3 m-3">
                <h2 className="font-bold text-3xl text-black">Ban List</h2>
                <h3 className="text-black font-medium">Select an attribute in your listing to ban it</h3>
            </header>
            <ul className="flex flex-col p-2">
                {banList.map((attribute, index) => (
                    <li
                        key={index}
                        className="p-2 m-1 bg-orange-400 rounded-2xl font-semibold cursor-pointer"
                    >
                        {attribute}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default BanList;

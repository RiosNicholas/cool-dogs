const BanList = () => {
    // bannedAttributes = []
    return (
        <aside className="bg-gray-300 h-full flex justify-center align-middle">
                <header className="p-3 m-3">
                    <h2 className="font-bold text-3xl text-black">Ban List</h2>
                    <h3 className="text-black font-medium">Select an attribute in your listing to ban it</h3>
                </header>
                <ul className="flex flex-col p-2">
                    <li className="p-2 m-1 bg-orange-400 rounded-2xl font-semibold">Attribute*</li>
                </ul>
        </aside>
    );
}
export default BanList;
/* TODO: stretch feature that lists visited dogs in the session */
const VisitedDogs = () => {
    return (
        <div className="h-full w-full bg-gray-900 flex justify-center align-middle">
            <aside> 
                <h2 className="font-bold text-3xl p-6 text-white">Visited</h2>
                {/* <ul className="flex flex-col p-2">
                    <li className="p-2 m-1 bg-orange-400 rounded-2xl font-semibold">Visited dog*</li>
                </ul> */}
            </aside> 
        </div>
    );
}
export default VisitedDogs;
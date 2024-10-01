
const Counter = () => {
    return (
        <div className=" h-screen flex items-center justify-center">
            <div className=" flex flex-col items-center gap-y-3 bg-slate-300 border-2 border-purple-300 p-10 rounded-md">
                <h1
                    className=" text-2xl px-10 py-3 w-full text-center border-2 font-bold border-orange-300 bg-indigo-400 rounded-lg text-white">
                    0
                </h1>

                <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 justify-center">
                    <button className=" col-span-1  px-4 shadow font-bold py-2 bg-red-500 text-white rounded-lg text-sm">Reset</button>
                    <button className=" col-span-1 w-full px-4 shadow font-bold tracking-wide py-2 bg-orange-500 text-white rounded-lg text-sm">Decreament</button>
                    <button className=" col-span-1 w-full px-4 shadow font-bold tracking-wide py-2 bg-green-600 text-white rounded-lg text-sm">Increament</button>
                </div>
            </div>
        </div>
    )
}

export default Counter

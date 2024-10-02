import { useState } from "react";
import { addByValue, decrement, increment, reset } from "../redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { AppDispatch, RootState } from "../redux/store";
import { Button } from "@/components/ui/button";

const Counter = () => {
    const { count } = useAppSelector((state: RootState) => state.counter)
    const dispatch: AppDispatch = useAppDispatch();
    const [valueToAdd, setValueToAdd] = useState(0);

    return (
        <div className=" h-screen flex items-center justify-center">
            <div className=" flex flex-col items-center gap-y-3 bg-slate-300 border-2 border-purple-300 p-10 rounded-md">
                <h1
                    className=" text-2xl px-10 py-3 w-full text-center border-2 font-bold border-orange-300 bg-indigo-400 rounded-lg text-white">
                    {count}
                </h1>

                <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 justify-center">
                    <button

                        className=" col-span-1  px-4 shadow font-bold py-2 bg-red-500 text-white rounded-lg text-sm"
                        onClick={() => dispatch(reset())}
                    >Reset</button>
                    <button className=" col-span-1 w-full px-4 shadow font-bold tracking-wide py-2 bg-orange-500 text-white rounded-lg text-sm"
                        onClick={() => dispatch(decrement())}
                    >Decreament</button>
                    <button className=" col-span-1 w-full px-4 shadow font-bold tracking-wide py-2 bg-green-600 text-white rounded-lg text-sm"
                        onClick={() => dispatch(increment())}
                    >Increament</button>
                </div>
                <div className=" flex w-full gap-6 justify-center">
                    <input
                        value={valueToAdd} onChange={(event) => setValueToAdd(Number(event.target.value))}
                        type="number"
                        className=" border-2 border-black outline-none p-2 font-bold placeholder:font-bold rounded-md" />

                    <button
                        className=" px-4 py-2 font-bold bg-emerald-400 text-white rounded-lg"
                        onClick={() => {
                            setValueToAdd(0);
                            dispatch(addByValue({ value: valueToAdd }))
                        }}
                    >Add Value</button>
                    <Button>Increase</Button>
                </div>
            </div>
        </div>
    )
}

export default Counter

import React, { useEffect, useState } from 'react';
import "./Scroll.css"
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function DynamicCards() {

    const [card, setCard] = useState([]);
    const [foodRegion, setFoodRegion] = useState("Arabica");

    useEffect(() => {
        async function FetchCoffeeApi() {
            try {
                const request = await fetch(`https://askanbackend.onrender.com/AskanTech/AllPost`);
                const response = await request.json();
                setCard(response.results)
            } catch (error) {
                alert("Error Happend Press F12")
                console.error("Error Happend! ", error.message);
            }
        }
        FetchCoffeeApi()
    }, [])

    return (
        <div className='mt-10'>
            <div className="text-center text-gray-400 text-[1.2rem] ">Our products</div>
            <div className="text-center text-gray-800 text-[2rem] font-roman font-[800]">From Top Quality Materials</div>
            <div className="my-10">
                <div className="flex items-center justify-center w-fit py-2 px-3 rounded-full mx-auto bg-orange-900 gap-3 ">
                    <button onClick={() => setFoodRegion("Arabica")} className={`px-2 py-1 rounded-full ${foodRegion === "Arabica" ? "text-orange-900 bg-orange-200" : "text-white "}`}>Arabica ({card?.filter(target => target.region === "Arabica")?.length || 0})</button>
                    <button onClick={() => setFoodRegion("Robusta")} className={`px-2 py-1 rounded-full ${foodRegion === "Robusta" ? "text-orange-900 bg-orange-200" : "text-white "}`}>Robusta({card?.filter(target => target.region === "Robusta")?.length || 0})</button>
                    <button onClick={() => setFoodRegion("Liberica")} className={`px-2 py-1 rounded-full ${foodRegion === "Liberica" ? "text-orange-900 bg-orange-200" : "text-white "}`}>Liberica({card?.filter(target => target.region === "Liberica")?.length || 0})</button>
                </div>
                <div className="flex items-center justify-normal snap-x gap-5 w-[1200px] overflow-x-scroll pb-5 clg:c-scroll c-scroll-Visible mx-auto max-w-[90%] mt-14">
                    {
                        card && card?.length === 0 ? <div className='text-center w-full flex items-center justify-center'><AiOutlineLoading3Quarters className='text-[2rem] animate-spins' /></div> : card?.filter(target => String(target.region) === String(foodRegion)).map((target, index) => <div key={"Image" + index + 1} className=' snap-start flex w-[320px] min-w-[280px] flex-col gap-4 p-3 md:p-4' >
                            <img src={target.image} alt={target.title} className={`w-[100%] md:w-[95%] h-[130px] mx-auto rounded-xl`} />
                            <div className="font-[500] text-[1.3rem]">{target.title}</div>
                            <div className="">
                                <span className='font-[600]'>⭐{target.rating}</span>
                                <span className='text-[11px] px-2 py-1 rounded-md bg-gray-300 mx-2'>{target.review} reviews</span>
                            </div>
                            <div className="text-[12px] text-gray-400 tracking-wide">{target.description}</div>
                            <div className="flex items-center justify-between px-3">
                                <span className='text-[1.2rem] font-[600] text-gray-500'>$ {target.rate}</span>
                                <button className='px-3 py-1 rounded-md bg-orange-800 text-white'><IoMdAdd /></button>
                            </div>
                        </div>)
                    }
                </div>
                <br id='Aboutus' />
            </div>
        </div>
    )
}

export default DynamicCards


import React from 'react';
import "./font.css";

function Testnomial() {
    const FeedBack = [
        { image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png", name: "Sarah", email: "sarahonline@gmail.com", thoughts: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti obcaecati quam minima repudiandae eius?", time: "3 days ago", rating: "9.6" },
        { image: "https://www.wovlene.com/cm-admin/uploads/image/testimonial-2.jpg", name: "Tom Marvelo Riddles", email: "tomriddles@gmail.com", thoughts: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias voluptas, possimus facilis totam enim cumque sint mollitia labore fugit doloremque.", time: "5 days ago", rating: "8.8" },
        { image: "https://www.wovlene.com/cm-admin/uploads/image/testimonial-3.jpg", name: "D Cooper", email: "dcooper@gmail.com", thoughts: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae reprehenderit itaque tempore magni nihil nesciunt dicta quaerat odit voluptatem, sunt quisquam sed esse recusandae.", time: "7 days ago", rating: "8.4" },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-1R9cRHb2dlcyLktklgOrM5609DSxuNeYPEiwBkFApfANpX3kcldmmnZTUjDjHdQil8&usqp=CAU", name: "Jonathan", email: "jonathanonline@gmail.com", thoughts: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor iusto cum expedita, aliquid voluptate esse delectus fugit deserunt?", time: "8 days ago", rating: "9.9" },
        { image: "https://qph.cf2.quoracdn.net/main-thumb-213520398-200-cvrodlpvyieemitmrzsksjbsftbhkbvh.jpeg", name: "Shadu Mohammed", email: "shadumohammed@gmail.com", thoughts: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit recusandae soluta aliquid inventore nemo autem corporis iure repellendus placeat.", time: "9 days ago", rating: "8.3" },
        { image: "https://philstarlife.s3.ap-east-1.amazonaws.com/photos/Tanya/Contributors/Johanna%20Anes%20dela%20Cruz%2010%20J%20Actors/Mackenyu.jpg", name: "Shaxo chen", email: "shaxomail@gmail.com", thoughts: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae maiores nam impedit optio mollitia aperiam tempora temporibus quis incidunt. Temporibus, amet quia.", time: "9 days ago", rating: "7.9" },
    ]

    return (
        <div className='mt-20 '>
            <div className="text-[1.2rem] text-center text-gray-400 font-[500]">Testimonials</div>
            <div className="md:text-[2rem] lg:text-[2.5rem] text-[1.5rem] text-center text-orange-900 font-[700] font-roman">What our Buyers Say</div>
            <div className={` snap-x flex mmd:items-center mmd:justify-center gap-5 md:gap-7 lg:gap-7 mmd:overflow-x-hidden overflow-x-scroll mmd:flex-wrap w-[1400px] px-10 duration-300 transition-all h-fit pb-10 mx-auto max-w-[100%] mmd:mt-10 mt-10`}>
                {
                    FeedBack.map((target, index) => <div key={"Testnomial" + index + 1} className=' snap-start flex gap-3 min-w-[320px] w-[340px] md:w-[390px] mmd:h-auto h-fit border rounded-lg p-4 shadow-md hover:shadow-xl'>
                        <div className="flex mmd:items-center mmd:justify-center flex-col gap-3 h-fit min-h-[200px]">
                            <div className="flex items-center justify-normal w-full px-5 gap-3">
                                <img src={target.image} alt={`user${index + 1}`} className='w-[50px] h-[50px] rounded-full border border-gray-400' />
                                <div className="flex flex-col">
                                    <div className="font-[600]">{target.name}</div>
                                    <div className="text-gray-400 text-[14px]">{target.email}</div>
                                </div>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-5 px-5 my-3">
                                    <span>⭐ {target.rating}</span>
                                    <span className='text-gray-400'>{target.time}</span>
                                </div>
                                <div className="">{target.thoughts}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="inline-flex items-center justify-center w-full mmd:my-10 my-0">
                <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Testnomial




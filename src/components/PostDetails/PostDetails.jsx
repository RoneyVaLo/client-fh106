import React from 'react';
import Like from '../../assets/amor.png';
import Comment from '../../assets/burbuja-de-chat.png';
import Share from '../../assets/enviar.png';
import Save from '../../assets/guardar-instagram.png';

const PostDetails = ({ currentArticle, closeArticle }) => {

    
    const { _id, images, description, likes, user, comments, publication_date } = currentArticle;


    const calculateElapsedTime = () => {
        const publication = new Date(publication_date);
        const differenceInMilliseconds = new Date() - publication;
        const weeks = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)) % 7;
        const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(differenceInMilliseconds / (1000 * 60)) % 60;

        if (weeks > 0) {
            if (weeks > 3) {
                const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
                const day = publication.getDate();
                const month = monthNames[publication.getMonth()];

                return `${day} de ${month}`;
            }
            return `${weeks} sem`;
        } else if (days > 0) {
            return `${days} día`;
        } else if (hours > 0) {
            return `${hours} h`;
        } else if (minutes > 0) {
            return `${minutes} min`;
        }
    };




    return (
        <div className='w-full bg-slate-400 fixed z-40 inset-0 overflow-auto'>
            <div
                className='absolute right-2 top-2 cursor-pointer'
            >
                <svg
                    className="text-white relative block"
                    fill="currentColor"
                    height="18"
                    role="img"
                    viewBox="0 0 24 24"
                    width="18"
                    onClick={closeArticle}
                >
                    <title>Cerrar</title>
                    <polyline
                        fill="none"
                        points="20.643 3.357 12 12 3.353 20.647"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                    ></polyline>
                    <line
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        x1="20.649"
                        x2="3.354"
                        y1="20.649"
                        y2="3.354"
                    ></line>
                </svg>


            </div>

            <div className='w-[90%] mx-auto inset-6 z-50 absolute flex justify-center'>
                <section
                    className='flex border-r rounded-tl rounded-bl'
                >
                    <img
                        src={images}
                        alt={_id}
                        style={{ aspectRatio: "1/1" }}
                        className='max-h-[648px] max-w-[550px] min-h-[450px] overflow-hidden rounded-tl rounded-bl'
                    />
                </section>

                <section
                    className='bg-white w-[400px] border-b-2 rounded-tr rounded-br'
                >
                    <section
                        className='py-3 px-4 w-full flex items-center justify-start border-b'
                    >
                        <header
                            className='flex items-center py-3 pr-1 pl-4 relative grow shrink gap-1'
                            style={{ maxWidth: "calc(100% - 48px)" }}
                        >
                            <div
                                id='foto'
                                className='mr-3'
                            >
                                <img
                                    src={user.profile_image}
                                    alt="imagen de perfil de usuario"
                                    className='h-10 w-10 cursor-pointer rounded-full'
                                />
                            </div>
                            <div id='username'>
                                <h2 className='cursor-pointer hover:opacity-60'>{user.username}</h2>
                            </div>
                        </header>

                        <div
                            id='mas'
                            className='h-6 w-6 flex justify-center items-center py-2 cursor-pointer hover:opacity-60'
                        >
                            <svg
                                className="block relative"
                                fill="currentColor"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <title>Más opciones</title>
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="1.5"
                                ></circle>
                                <circle
                                    cx="6"
                                    cy="12"
                                    r="1.5"
                                ></circle>
                                <circle
                                    cx="18"
                                    cy="12"
                                    r="1.5"
                                ></circle>
                            </svg>
                        </div>
                    </section>

                    <section
                        className='w-full flex flex-col pb-2 pt-1 px-4'
                    >

                        <div className='my-2 p-2 border-b'>
                            <div className='mb-4 flex flex-col'>
                                {description.split('\n').map((line, index) => (
                                    <p key={index} className='text-justify'>{line}</p>
                                ))}

                                <span
                                    className='mt-2 mb-1'
                                    style={{ color: "rgb(115, 115, 115)" }}
                                >{calculateElapsedTime()}</span>
                            </div>

                            {comments.length === 0 &&
                                <div className='pl-6 pr-4 mb-4 overflow-y-auto max-h-48'>
                                    {
                                        comments.map((comment, index) => (
                                            <p key={index} className='my-8 pb-2 pl-2 shadow'>
                                                {comment.content}
                                            </p>
                                        ))
                                    }

                                </div>
                            }
                        </div>

                        <div className='flex'>
                            <div className='flex w-[80%] gap-6'>
                                <div className='pb-2 pt-1'>
                                    <img src={Like} alt="" className='w-6 h-6 aspect-square cursor-pointer hover:opacity-70' />
                                </div>

                                <div className='pb-2 pt-1'>
                                    <img src={Comment} alt="" className='w-6 h-6 aspect-square cursor-pointer hover:opacity-70' />
                                </div>

                                <div className='pb-2 pt-1'>
                                    <img src={Share} alt="" className='w-6 h-6 aspect-square cursor-pointer hover:opacity-70' />
                                </div>
                            </div>

                            <div className='flex w-[20%] justify-end'>
                                <div className='pb-2 pt-1'>
                                    <img src={Save} alt="" className='w-6 h-6 aspect-square cursor-pointer hover:opacity-70' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <p
                                className='mt-2 mb-1 text-sm'
                                style={{ color: "rgb(115, 115, 115)" }}
                            >{likes} Me gusta</p>
                            <span
                                className='mt-2 mb-1'
                                style={{ color: "rgb(115, 115, 115)" }}
                            >{calculateElapsedTime()}</span>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default PostDetails

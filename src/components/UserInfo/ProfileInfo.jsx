import React from 'react'

const UserInfo = ({ user }) => {

    return (
        <section className="flex gap-2 justify-center pt-7 px-5 mb-11 font-helvetica">
            <section className="mr-8 w-72 flex justify-center items-center">
                <img
                    className='rounded-full w-36'
                    style={{ aspectRatio: "1/1" }}
                    src={user.profile_image}
                    alt={`Foto de perfil de ${user.name}`}
                />
            </section>

            <section>
                <div className="flex gap-8 mb-5 items-center">
                    <h2 className="text-xl font-medium">{user.username}</h2>
                    <button
                        className="bg-gray-200 text-sm px-[16px] py-[7px] rounded-lg border border-transparent cursor-pointer font-semibold hover:bg-gray-300"
                    >Seguir</button>
                    <button
                        className="bg-gray-200 text-sm px-[16px] py-[7px] rounded-lg border border-transparent cursor-pointer font-semibold hover:bg-gray-300"
                    >Enviar mensaje</button>
                </div>

                <ul className="flex text-base mb-5 list-none">
                    <li className="mr-10">
                        <button
                            className="text-gray-800 bg-transparent border-none cursor-pointer text-sm font-semibold hover:opacity-50"
                        >
                            <span className='text-black break-words font-normal'>{user.quantity_post}</span> publicaciones
                        </button>
                    </li>
                    <li className="mr-10">
                        <button
                            className="text-gray-800 bg-transparent border-none cursor-pointer text-sm font-semibold hover:opacity-50"
                        >
                            <span className='text-black break-words font-normal'>{user.followed}</span> seguidores
                        </button>
                    </li>
                    <li className="mr-10">
                        <button
                            className="text-gray-800 bg-transparent border-none cursor-pointer text-sm font-semibold hover:opacity-50"
                        >
                            <span className='text-black break-words font-normal'>{user.followers}</span> seguidos
                        </button>
                    </li>
                </ul>

                <div className="flex flex-col items-start max-w-[550px]">
                    <h2
                        className='text-sm max-w-full break-words font-semibold'
                    >
                        {user.name}
                    </h2>

                    {user.biography.category &&
                        <span
                            className='text-sm font-normal text-gray-600'
                        >
                            {user.biography.category}
                        </span>
                    }
                    <p
                        className='text-sm font-normal mb-2'
                    >
                        {user.biography.description}
                    </p>
                </div>
            </section>
        </section>
    )
}

export default UserInfo

import React, { useState } from 'react'
import Cuadricula from '../../assets/cuadricula.png'
import Etiqueta from '../../assets/etiqueta.png'

const PostNavigation = ({ checkedSection, setCheckedSection }) => {

    const isSelected = "text-black border-t border-black mt-n1"

    return (
        <section
            className='w-full flex justify-center items-center text-uppercase border-t border-gray-300 uppercase tracking-wider leading-tight text-xs'
        >
            <a
                href="#"
                className={`
                    ${(checkedSection === 0) ? isSelected : 'text-gray-600'}
                    font-medium no-underline cursor-pointer flex h-12 items-center justify-center mr-8
                    font-helvetica
                `}
                id="post-link"
                onClick={() => { setCheckedSection(0) }}
            >
                <div className='flex items-center'>
                    <img src={Cuadricula} alt="cuadricula" className='w-4 h-4'/>
                    <span className="ml-2 align-baseline text-sm">Publicaciones</span>
                </div>
            </a>

            <a
                href="#"
                className={`
                ${(checkedSection === 1) ? isSelected : 'text-gray-600'} 
                font-medium  no-underline cursor-pointer flex h-12 items-center justify-center ml-8
                font-helvetica
                `}
                id="post-link"
                onClick={() => { setCheckedSection(1) }}
            >
                <div className='flex'>
                    <img src={Etiqueta} alt="etiqueta" className='w-4 h-5' />
                    <span className="ml-2 align-baseline text-sm">Etiquetadas</span>
                </div>
            </a>
        </section>
    )
}

export default PostNavigation

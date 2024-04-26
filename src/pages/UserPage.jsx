import React, { useEffect, useState } from 'react'
import axios from 'axios';

import UserInfo from '../components/UserInfo/ProfileInfo'
import PostNavigation from '../components/PostNavigation/PostNavigation';
import PostsView from '../components/PostsView/PostsView';


const UserPage = () => {

    /* 
    0: Posts Propios
    1: Posts Etiquetados
    */
    const [checkedSection, setCheckedSection] = useState(0);

    const [posts, setPosts] = useState(false);

    const changePostSection = (section) => {
        setCheckedSection(section);
    };


    const user = {
        name: "Filosofía de la Ciencia",
        username: "FH-106",
        profile_image: "https://www.revistaesfinge.com/wp-content/uploads/2015/01/2f7bb693f9e8b1bbf875f0818996978d.jpg",
        quantity_post: posts ? posts.length : 0,
        followed: 0,
        followers: 0,
        biography: {
            category: "Educación Humanísticas",
            description: "Este es el portafolio perteneciente al curso FH-106 del estudiante Roney Alfonso Valdelomar López"
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            
            const {data} = await axios.get(`http://localhost:4000/api/posts/?user=65e57068fb02872525c18f73`)
            setPosts(data);
        }

        fetchPosts();
    }, []);

    return (
        <div className="w-full my-0 mx-auto">
            <header className='h-16 border-b border-gray-300'></header>

            <UserInfo user={user} />

            <PostNavigation checkedSection={checkedSection} setCheckedSection={changePostSection} />

            {((checkedSection === 0) && posts) && <PostsView posts={posts} />}

            <footer></footer>
        </div>
    )
}

export default UserPage

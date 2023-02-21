import { useState } from "react";
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserProvider';
import CommunityPostModal from './CommunityPostModal';
import CommunityPosts from "./CommunityPosts";

const CommunityHome = () => {
    const [isModalOpen, setIsModalOpen]: any = useState(false);
    console.log(isModalOpen);
    const { dbUser }: any = useUser();
    return (
        <div>
            <h2 className='text-4xl text-center font-bold dark:text-white mt-10'>Welcome to the Skill Judge Community Forum</h2>
            <div className='flex items-center justify-center my-10'>
                <div className="avatar">
                    <div className="w-12 h-12 rounded-full mr-3">
                        {
                            dbUser?._id ? <img src={dbUser.photo} alt={dbUser.name} /> : <FaUser className='w-full h-full text-blue-500' />
                        }
                    </div>
                </div>
                {
                    dbUser?._id ? <label onClick={() => setIsModalOpen(true)} htmlFor="my-modal" className="border p-3 bg-gray-50 hover:bg-gray-100 dark:bg-zinc-600 dark:hover:bg-zinc-500 hover:cursor-pointer text-lg dark:text-white rounded-full w-full max-w-lg">Talk about anything regarding programming ...</label>
                        : <label className="border p-3 bg-gray-50 hover:bg-gray-100 dark:bg-zinc-600 dark:hover:bg-zinc-500 text-lg dark:text-white rounded w-full max-w-sm"><Link to={'/login'} className='font-bold'>Login to start talking with programmers </Link> </label>
                }

            </div>
            <div>
                <CommunityPosts></CommunityPosts>
            </div>
            {
                isModalOpen && (<CommunityPostModal setIsModalOpen={setIsModalOpen}></CommunityPostModal>)
            }
        </div>
    );
};

export default CommunityHome;
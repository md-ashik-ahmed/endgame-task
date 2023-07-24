import { useContext } from "react";

import Image from "../../assets/images.png"
import { AuthContext } from "../../Providers/AuthProvider";

const Avatar = () => {
    const { user } = useContext(AuthContext)
    return (
      <img
        className='rounded-full'
        src={user && user.photoURL ? user.photoURL : Image}
        alt='profile'
        height='40'
        width='40'
      />
    )
};

export default Avatar;
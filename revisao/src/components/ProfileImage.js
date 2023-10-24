import React from 'react';

const ProfileImage = ({titulo, imagem, alt}) => {
    return(
        <div className='card'>
            <h2 className='titulo'>{titulo}</h2>
            <img className='imagem' src={imagem} alt={alt}/>
        </div>
    )
}

export default ProfileImage;
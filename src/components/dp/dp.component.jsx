import React from 'react';
import { Image } from './dp.styles';

const Drop = ({src, alt}) => {
	return(
        <div>
            {
                src? (<Image src={src} alt={alt}/>) : (<Image src={'https://i.ibb.co/X7dj5NH/user.png'} alt={alt}/>)
            }
        </div>
    )


}

export default Drop;
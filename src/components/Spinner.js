import React from 'react';
import { Image } from 'react-bootstrap';
import Loader from '../img/spinner.gif';

function Spinner() {
    return (
        <div>
            <Image
                fluid={+true}
                src={Loader}
                className='spinner d-block mx-auto'
                alt='Loading'
            />
        </div>
    );
}

export default Spinner;

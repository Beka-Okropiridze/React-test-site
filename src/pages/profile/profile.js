//Profile კომპონენტი ჯერ გადის withAuthProtection-ის მანიპულაციებს და მერე იხატება, ამიტომ ეს title ფროფსი უნდა გავატაროთ with-A-P-ის
// კომპონენტის რეთარნში რომელიც რეალურად Profile-ია და მანდაც გავუწეროთ ...props
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProfilechildComponent from './ProfilechildComponent';
import ProfilechildComponentSecond from './ProfilechildComponentSec';

export const Profile = ({title}) => {
    const [userName, setUserName] = useState('');

    return(
        <div className="row p-2">
            <h1>UserName:{userName}</h1>
            <h3>{title}</h3>
            <div className='row'>
                <div className='col-4'>
                    <input className='form-control' onChange={(event) => {setUserName (event.target.value)}} />
                </div>
                <div className='col-4'>
                    <ProfilechildComponent /> 
                </div>
                <div className='col-4'>
                    <ProfilechildComponentSecond /> 
                </div>
            </div>
        </div>
    )
};

Profile.propTypes = {
    title: PropTypes.string.isRequired
};
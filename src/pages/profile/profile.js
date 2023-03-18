//Profile კომპონენტი ჯერ გადის withAuthProtection-ის მანიპულაციებს და მერე იხატება, ამიტომ ეს title ფროფსი უნდა გავატაროთ with-A-P-ის
// კომპონენტის რეთარნში რომელიც რეალურად Profile-ია და მანდაც გავუწეროთ ...props
import ProfilechildComponent from './ProfilechildComponent';
import ProfilechildComponentSecond from './ProfilechildComponentSec';
import { Button } from '../../atoms/Buttons'
import { Task } from '../../components/Task';
import { useMemo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

// const ProfilechildComponent = ( { params, onClick } ) => {
//     console.log('--Child-Component-rendering', params);
//     return(
//         <h4 style={{
//             color: params.color 
//         }}>
//             Child component</h4>
//     )
// };

// const MemoProfileChildcomponent = memo(ProfilechildComponent, (prevProps, nextProps) => {
//     return prevProps.params.color === nextProps.params.color
// }); პრიმიტული ფროფსის შემთხვევაში.

// const MemoProfileChildcomponent = memo(ProfilechildComponent);

export const Profile = ({title}) => {
    const [userName, setUserName] = useState('');
    const [color, setColor] = useState('red');

    const paramsi = useMemo(() => ({                      // ({color}) მოკლე გზაა(იგივეა) რო ეწეროს {return {color} }
        color,
    }), [color]);

    const oNClick = useCallback(() => {
        console.log('OnClick');
    }, []);

    return(
        <div className="row p-2">
            <div className='row'>
                <Task />
            </div>
            <hr />
            <h1>UserName:{userName}</h1>
            <h3>{title}</h3>
            <div className='row'>
                <div className='col-4'>
                    <input className='form-control' onChange={(event) => {setUserName (event.target.value)}} />
                </div>
                <div className='col-4'>
                    <Button className='btn btn-outline-secondary' 
                            onClick={() => setColor(color === 'red' ? 'green' : 'red')}
                            >
                        Change color
                    </Button>
                </div>
                <div className='col-4'>
                    <ProfilechildComponent params={paramsi} onClick={oNClick} /> 
                </div>
                <div className='col-4'>
                    <ProfilechildComponentSecond /> 
                </div>
            </div>
        </div>
    )
};
//red->green->red->green ტყუილად გიწერია მემო აზრი არ აქვს
//red->red->red->green ესე შეიძლება ლოგიკურია მემოს გამოყენება

Profile.propTypes = {
    title: PropTypes.string.isRequired
};

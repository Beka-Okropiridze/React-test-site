//Profile კომპონენტი ჯერ გადის withAuthProtection-ის მანიპულაციებს და მერე იხატება, ამიტომ ეს title ფროფსი უნდა გავატაროთ with-A-P-ის
// კომპონენტის რეთარნში რომელიც რეალურად Profile-ია და მანდაც გავუწეროთ ...props
import PropTypes from 'prop-types';

export const Profile = ({title}) => {
    return(
        <div className="row p-2">
            <h1>Profile Page</h1>
            <h3>{title}</h3>
        </div>
    )
};

Profile.propTypes = {
    title: PropTypes.string.isRequired
};
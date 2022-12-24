
export const Button = ( {className, onClick, text, type = 'button'} ) => {
    return <button className={className} onClick={onClick} type={type}>
        {text}
        </button>
};
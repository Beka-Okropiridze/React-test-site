
export const Button = ( {className, onClick, text, type = 'button', children} ) => {
    const buttonContent = children ? children : text;
    return <button className={className} onClick={onClick} type={type}>
        {buttonContent}
        </button>
};
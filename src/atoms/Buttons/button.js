
export const Button = ( {className, onClick, text, type = 'button', disabled, children} ) => {
    const buttonContent = children ? children : text;
    return <button className={className} onClick={onClick} type={type} disabled={disabled} data-testid='buttonElement'>
        {buttonContent}
        </button>
};
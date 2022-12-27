import { useState } from "react"

export const Collapseable = ({closedtitle, openedtitle, isopen = true, children, className}) => {
    const[opened,setOpened] = useState(isopen);
    return (
        <div className={`row box shadow my-3 p-3 ${className}`}>
            <h2 style={{
                cursor:'pointer'
                }}
                className='text-muted fs-2'
                onClick={()=> setOpened(!opened)}
            >
                    {opened ? openedtitle : closedtitle}
            </h2>
            <div className={`col-12 ${opened ? 'd-block' : 'd-none'}`}>{children}</div>
        </div>
    )
}
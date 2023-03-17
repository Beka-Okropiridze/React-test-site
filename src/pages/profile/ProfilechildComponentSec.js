import { memo } from "react";

const ProfilechildComponentSecond = () => {
    console.log('--Child-Component-rendering-Second', );
    const fs = Math.round(Math.random() * 40) + 10;
    return(
        <h4 style={{
            fontSize: fs
        }}>Child component</h4>
    )
};

export default memo(ProfilechildComponentSecond);
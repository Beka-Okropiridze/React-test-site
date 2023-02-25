
import { Headeri } from '../header/Header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router-dom'; //reactis ფიქსირებული კომპონენტია რომელშიც იხატება ის კომპონენტი რომელსაც უმთხვევ მისამართს

const sizes = {
    'default': 'container',
    'fluid': 'container-fluid'
};

const OutletStyles = {
    minHeight: '300px'
};

export const Layout = ({ className, size = 'default' }) => {
    return <div className={`${sizes[size]} ${className}`}>
        <Headeri />
        <div className='my-3' style={OutletStyles}>
            <Outlet />
        </div>
        <Footer />
    </div>
};
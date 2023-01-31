import { Link } from "react-router-dom"

export const NoMatch = () => {
    return(
        <div className="row"> 
            <h2>Error 404 Page not found</h2>
            <p>
                <Link to='/'>Go to the Home page</Link>
            </p>
        </div>
    )
}
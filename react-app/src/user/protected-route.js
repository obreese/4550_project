import {useSelector} from "react-redux"
import {Navigate, useNavigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {loggedIn} = useSelector((state) => state.user)

    if (loggedIn) {
        return (children)
    } else {
        return (<Navigate to={'/login'}/>)
    }
}
export default ProtectedRoute
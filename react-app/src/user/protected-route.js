import {useSelector} from "react-redux"
import {Navigate, useNavigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {currentUser} = useSelector((state) => state.user)

    if (currentUser) {
        return (children)
    } else {
        return (<Navigate to={'/login'}/>)
    }
}
export default ProtectedRoute
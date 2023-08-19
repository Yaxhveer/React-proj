import { Navigate } from 'react-router-dom';

interface Prop {
    Component: React.FC;
}

const PrivateRoute: React.FC<Prop> = ({ Component }) => {
    if (localStorage.getItem('userInfo')) {
        return <Component />;
    }
    return <Navigate to='/register' />;
};

export default PrivateRoute;
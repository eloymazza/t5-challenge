import { Navigate, Route, Routes } from 'react-router-dom';
import { ComicList } from '../pages/comic/Comic';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/comic" />} />
            <Route path="/comic" Component={ComicList} />
        </Routes>
    );
};

export default AllRoutes;

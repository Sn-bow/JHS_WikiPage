import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WikiMainPage from './page/wiki-main-page/WikiMainPage';
import WikiWritePage from './page/wiki-write-page/WikiWritePage';
import WikiDetailPage from './page/wiki-detail-page/WikiDetailPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WikiMainPage />} />
                <Route path="/write/:id" element={<WikiWritePage />} />
                <Route path="/detail/:list_id" element={<WikiDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
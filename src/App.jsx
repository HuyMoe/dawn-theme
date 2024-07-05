import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './hook/useScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Header />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

import './scss/App.scss';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import TimerPage from './Pages/TimerPage';
import CompleteTask from './Pages/CompleteTask';
import NotFound from './Pages/NotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/complete" element={<CompleteTask />} />
                        <Route path="/timer" element={<TimerPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WaterTracker from './components/WaterTracker';
import './styles/index.styl';

const App: React.FC = () => {
    const [glassSize, setGlassSize] = useState<number>(250);
    const [dailyGoal, setDailyGoal] = useState<number>(2000);

    useEffect(() => {
        const savedGoal = localStorage.getItem('dailyGoal');
        if (savedGoal) {
            setDailyGoal(parseInt(savedGoal, 10));
        }
    }, []);

    return (
        <div>
            <Header />
            <main style={{ padding: '20px', marginBottom: '60px' }}>
                <WaterTracker glassSize={glassSize} dailyGoal={dailyGoal} />
            </main>
            <Footer setGlassSize={setGlassSize} setDailyGoal={setDailyGoal} dailyGoal={dailyGoal} />
        </div>
    );
};

export default App;

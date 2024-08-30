import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/waterTracker.styl';

interface WaterTrackerProps {
    glassSize: number;
    dailyGoal: number;
}

const WaterTracker: React.FC<WaterTrackerProps> = ({ glassSize, dailyGoal }) => {
    const { t } = useTranslation();
    const [waterAmount, setWaterAmount] = useState<number>(0);

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('waterData') || '{}');
        const currentDate = getCurrentDate();

        if (savedData.date === currentDate) {
            setWaterAmount(savedData.amount);
        } else {
            localStorage.setItem(
                'waterData',
                JSON.stringify({ date: currentDate, amount: 0 })
            );
        }
    }, []);

    const addWater = () => {
        const newWaterAmount = waterAmount + glassSize;
        setWaterAmount(newWaterAmount);

        localStorage.setItem(
            'waterData',
            JSON.stringify({ date: getCurrentDate(), amount: newWaterAmount })
        );
    };

    const resetWater = () => {
        setWaterAmount(0);

        localStorage.setItem(
            'waterData',
            JSON.stringify({ date: getCurrentDate(), amount: 0 })
        );
    };

    const waterHeight = Math.min((waterAmount / dailyGoal) * 100, 100);

    return (
        <div className="water-tracker">
            <h2>{t('waterTracker.title')}</h2>
            <p>{t('waterTracker.consumed', { amount: waterAmount })}</p>
            <p>{t('waterTracker.goal', { goal: dailyGoal })}</p>

            <div className="glass-container">
                <div className="glass">
                    <div className="water" style={{ height: `${waterHeight}%` }} />
                </div>
            </div>

            <button onClick={addWater}>
                {t('waterTracker.addButton', { size: glassSize })}
            </button>

            <button onClick={resetWater} className="reset-button" disabled={waterAmount === 0}>
                {t('waterTracker.resetButton')}
            </button>
        </div>
    );
};

export default WaterTracker;

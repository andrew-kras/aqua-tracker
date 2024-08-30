import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/settingsModal.styl';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    setGlassSize: (size: number) => void;
    setDailyGoal: (goal: number) => void;
    dailyGoal: number;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, setGlassSize, setDailyGoal, dailyGoal }) => {
    const { t, i18n } = useTranslation();
    const [inputGlassSize, setInputGlassSize] = useState<string>('250');
    const [inputDailyGoal, setInputDailyGoal] = useState<string>(dailyGoal.toString());
    const [isValid, setIsValid] = useState<boolean>(true);

    useEffect(() => {
        setInputDailyGoal(dailyGoal.toString());
    }, [dailyGoal]);

    useEffect(() => {
        const glassSizeValid = parseInt(inputGlassSize, 10) >= 1;
        const dailyGoalValid = parseInt(inputDailyGoal, 10) >= 1;
        setIsValid(glassSizeValid && dailyGoalValid);
    }, [inputGlassSize, inputDailyGoal]);

    const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value as 'en' | 'ru';
        i18n.changeLanguage(selectedLanguage);
    };

    const handleGlassSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputGlassSize(event.target.value);
    };

    const handleDailyGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDailyGoal(event.target.value);
    };

    const saveSettings = () => {
        const size = parseInt(inputGlassSize, 10);
        const goal = parseInt(inputDailyGoal, 10);

        if (isValid) {
            if (!isNaN(size) && size > 0) {
                setGlassSize(size);
            }

            if (!isNaN(goal) && goal > 0) {
                setDailyGoal(goal);
                localStorage.setItem('dailyGoal', goal.toString());
            }

            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>{t('settings.title')}</h2>
                </div>
                <div className="modal-content">
                    <div className="language-settings">
                        <p className="language-label">{t('settings.language')}</p>
                        <select
                            value={i18n.language}
                            onChange={handleChangeLanguage}
                            className="language-select"
                        >
                            <option value="ru">{t('settings.languageRu')}</option>
                            <option value="en">{t('settings.languageEn')}</option>
                        </select>
                    </div>
                    <div className="glass-size-settings">
                        <p className="glass-size-label">{t('settings.glassSize')}</p>
                        <input
                            type="number"
                            value={inputGlassSize}
                            onChange={handleGlassSizeChange}
                            className="glass-size-input"
                            min="1"
                        />
                    </div>
                    <div className="daily-goal-settings">
                        <p className="daily-goal-label">{t('settings.dailyGoal')}</p>
                        <input
                            type="number"
                            value={inputDailyGoal}
                            onChange={handleDailyGoalChange}
                            className="daily-goal-input"
                            min="1"
                        />
                    </div>
                </div>
                <button className="close-button" onClick={saveSettings} disabled={!isValid}>
                    {t('settings.close')}
                </button>
            </div>
        </div>
    );
};

export default SettingsModal;

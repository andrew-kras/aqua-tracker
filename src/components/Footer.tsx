import React, { useState } from 'react';
import { FaCog, FaGithub } from 'react-icons/fa';
import SettingsModal from './SettingsModal';
import '../styles/footer.styl';

interface FooterProps {
    setGlassSize: (size: number) => void;
    setDailyGoal: (goal: number) => void;
    dailyGoal: number;
}

const Footer: React.FC<FooterProps> = ({ setGlassSize, setDailyGoal, dailyGoal }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

    const openSettings = () => setIsSettingsOpen(true);
    const closeSettings = () => setIsSettingsOpen(false);

    return (
        <footer className="footer">
            <a href="https://github.com/andrew-kras" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub /> GitHub
            </a>

            <div className="footer-buttons">
                <button className="settings-icon" onClick={openSettings}>
                    <FaCog />
                </button>
            </div>

            <SettingsModal
                isOpen={isSettingsOpen}
                onClose={closeSettings}
                setGlassSize={setGlassSize}
                setDailyGoal={setDailyGoal}
                dailyGoal={dailyGoal}
            />
        </footer>
    );
};

export default Footer;

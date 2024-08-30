import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/header.styl';

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
            <h1>{t('header')}</h1>
        </header>
    );
};

export default Header;

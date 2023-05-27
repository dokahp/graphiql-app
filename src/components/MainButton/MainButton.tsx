import React from 'react';
import { useTranslation } from 'react-i18next';
import './mainButton.styles.css';

function MainButton() {
  const { t } = useTranslation();

  return (
    <div className="banner-info-button">
      <div className="mainButton">
        <span>
          {t('GraphQL playground')} <i> </i>
        </span>
      </div>
    </div>
  );
}

export default MainButton;

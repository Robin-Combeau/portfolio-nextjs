import React from 'react';

interface LanguageSelectorProps {
  selectedLanguage: 'Javascript' | 'PHP';
  handleLanguageChange: (language: 'Javascript' | 'PHP') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguage, handleLanguageChange }) => {
  return (
    <div className="absolute bottom-2 right-2">
      <button
        className={`px-1 py-1 mx-0.5 hover:text-[#161716] transition ${selectedLanguage === 'Javascript' ? 'selected underline' : ''}`}
        onClick={() => handleLanguageChange('Javascript')}
      >
        Javascript
      </button>
      <button
        className={`px-2 py-1 mx-0.5 hover:text-[#161716] transition ${selectedLanguage === 'PHP' ? 'selected underline' : ''}`}
        onClick={() => handleLanguageChange('PHP')}
      >
        PHP
      </button>
    </div>
  );
};

export default LanguageSelector;
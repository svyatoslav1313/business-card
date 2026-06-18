import { useContext, useEffect, useState } from 'react';
import { Modalwin } from '../Modalwin';
import { Textwriter } from '../Textwriter';
import './Header.scss';
import { Dropdown } from './components/Dropdown';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const THEME_LIST = ['Red', 'Blue'];
const LANGUAGE_LIST = ['EN', 'UA'];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, changeTheme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  return (
    <header className='header'>
      <div className='header__dropdowns'>
        <Dropdown
          data={LANGUAGE_LIST}
          lang={i18n.language}
          changeLanguage={changeLanguage}
        />
        <Dropdown
          data={THEME_LIST}
          theme={theme}
          changeTheme={changeTheme}
        />
      </div>
      <div className="header__inner">
        <p className='header__text'>{t('header.hello')}</p>
        <p className='header__name'>{t('header.name')}</p>
        <Textwriter text={t('header.profession')} />
        <p className='header__text' style={{ fontSize: '20px', fontWeight: '100', marginTop: '20px', marginBottom: '50px' }}>
          {t('header.about')}
        </p>
        <div className='header__buttons'>
          <button className='header__button' onClick={() => { setIsModalOpen(true) }}>{t('header.buttons.seeWorks')}</button>
          <a target='_blank' href='https://t.me/svyatoslav1313' className='header__button' style={{ textDecoration: 'none' }}>{t('header.buttons.contact')}</a>
        </div>
      </div>
      <Modalwin isModalOpen={isModalOpen} onChangeOpenModal={(value) => setIsModalOpen(value)} />
    </header>
  );
}
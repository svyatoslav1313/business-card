import { useState } from 'react';
import { Modalwin } from '../Modalwin';
import { Textwriter } from '../Textwriter';
import './Header.scss';

export const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <header className='header'>
      <div className="header__inner">
        <p className='header__text'>Hello, I am</p>
        <p className='header__name'>Svyatoslav Kozelchuk-Panulin</p>
        <Textwriter text='Full Stack Developer & Student' />
        <p className='header__text' style={{ fontSize: '20px', fontWeight: '100', marginTop: '20px', marginBottom: '50px' }}>
          I build scalable web applications focused on interactivity and user experience. <br />I turn complex code into simple magic.
        </p>
        <div className='header__buttons'>
          <button className='header__button' onClick={() => { setModalIsOpen(true) }}>See works</button>
          <a target='_blank' href='https://t.me/svyatoslav1313' className='header__button' style={{ textDecoration: 'none' }}>Сontact</a>
        </div>
      </div>
      {modalIsOpen && <Modalwin handleModalIsOpen={() => setModalIsOpen(false)} />}
    </header>
  );
}
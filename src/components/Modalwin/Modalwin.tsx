import { useState } from 'react';
import './Modalwin.scss';
import { ProjectCard } from './components/ProjectCard';

type Props = {
  handleModalIsOpen: () => void;
}

export const Modalwin: React.FC<Props> = ({ handleModalIsOpen }) => {
  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);

    setTimeout(() => {
      handleModalIsOpen();
    }, 1000);
  }
  return (
    <div className={`modalwin ${closing ? 'closing' : ''}`}>
      <div className={`modalwin__inner ${closing ? 'closing' : ''}`}>
        <div className='modalwin__top-line'></div>
        <div className='modalwin__top'>
          <h3 className='modalwin__title'>Мои <span style={{ color: '#22d3ee' }}>Проекты</span></h3>
          <button className='modalwin__top-button' onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          </button>
        </div>
        <div className='modalwin__projects'>
          <ProjectCard
            title='Kickstarter'
            description='Масштабируемый интернет-магазин с корзиной, системой оплаты и современным интерфейсом.'
            background='linear-gradient(to bottom right, #22d3ee, #3b82f6)'
            demoLink='https://svyatoslav1313.github.io/Kickstarter/'
            tags={['HTML', 'SCSS']}
          />
          <ProjectCard
            title='React Phone Catalog'
            description='Масштабируемый интернет-магазин с полной корзиной, оплатой'
            background='linear-gradient(to bottom right, #C084FC, #EC4899)'
            demoLink='https://svyatoslav1313.github.io/react_phone-catalog/'
            tags={['HTML', 'SCSS', 'React', 'TS', 'Router']}
          />
          <ProjectCard
            title='React Phone Catalog'
            description='Интерактивная игра 2048 с интуитивным интерфейсом и динамической механикой повышения плиток.'
            background='linear-gradient(to bottom right, #1de9b3ff, #48ec6bff)'
            demoLink='https://svyatoslav1313.github.io/js_2048_game/'
            tags={['HTML', 'SCSS', 'JS']}
          />
        </div>
      </div>
    </div>
  );
}
import { useContext, useState } from 'react';
import './Modalwin.scss';
import { ProjectCard } from './components/ProjectCard';
import { AddProject } from './components/AddProject';
import { useAppSelector } from '../../app/hooks';
import { ThemeContext } from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';

type Props = {
  isModalOpen: boolean;
  onChangeOpenModal: (value: boolean) => void;
}

export const Modalwin: React.FC<Props> = ({ isModalOpen, onChangeOpenModal }) => {
  const [addProject, setAddProject] = useState(false);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const projects = useAppSelector(state => state.projects.list);

  return (
    <div className={`modalwin ${isModalOpen ? '' : 'close'} ${addProject ? '' : 'blur'}`}>
      <div className={`modalwin__inner ${isModalOpen ? '' : 'close'} ${addProject ? 'transform' : ''}`}>
        <div className='modalwin__top-line'></div>
        <div className='modalwin__top'>
          <h3 className='modalwin__title'>{t('modal.title.first')} <span style={{ color: `${theme === 'Red' ? '#ff8010' : '#00d9ff'}` }}>{t('modal.title.second')}</span></h3>
          <button className='modalwin__top-button' onClick={() => onChangeOpenModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className='modalwin__projects'>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              demoLink={project.demoLink}
              backgroundColor={project.backgroundColor}
              isNew={project.isNew}
            />
          ))}
          <div className='modalwin__plus' onClick={() => setAddProject(true)}>
            <div className='modalwin__plus-inner'></div>
          </div>
        </div>
        <AddProject openModal={addProject} handleAddProject={(value) => setAddProject(value)} />
      </div>
    </div>
  );
}
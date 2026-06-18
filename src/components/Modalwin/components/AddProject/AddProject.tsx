import React, { useState } from 'react';
import './AddProject.scss';
import { useAppDispatch } from '../../../../app/hooks';
import { addProject } from '../../../../features/projects';
import { useTranslation } from 'react-i18next';

type Props = {
  openModal: boolean;
  handleAddProject: (value: boolean) => void;
}

const TAGS_LIST = ['HTML', 'CSS', 'React', 'JS', 'Redux', 'Node.js'];
const COLOR_MAP = {
  Blue: 'linear-gradient(to bottom right, #22d3ee, #3b82f6)',
  Pink: 'linear-gradient(to bottom right, #C084FC, #EC4899)',
  Green: 'linear-gradient(to bottom right, #1de9b3ff, #48ec6bff)',
  Orange: 'linear-gradient(to bottom right, #d5e91dff, #eca248ff)',
};

export const AddProject: React.FC<Props> = ({ openModal, handleAddProject }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  // #region State
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const [colorName, setColorName] = useState('');
  const [colorValue, setColorValue] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [demoLink, setDemoLink] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [errorColor, setErrorColor] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDesc, setErrorDesc] = useState(false);
  const [errorTags, setErrorTags] = useState(false);
  // #endregion

  // #region Handlers
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setdropdownOpen(false);

    const colorHasError = !colorName;
    const titleHasError = !title.trim();
    const descHasError = !description.trim();
    const tagsHasError = selectedTags.length === 0;

    setErrorColor(colorHasError);
    setErrorTitle(titleHasError);
    setErrorDesc(descHasError);
    setErrorTags(tagsHasError);

    if (colorHasError || titleHasError || descHasError || tagsHasError) {
      return;
    }

    dispatch(addProject({
      title,
      description,
      tags: selectedTags,
      demoLink: demoLink.trim() || undefined,
      backgroundColor: colorValue,
    }));

    handleAddProject(false);
  };

  const clearFields = () => {
    setTitle('');
    setDescription('');
    setSelectedTags([]);
    setDemoLink('');
  }

  //#endregion

  return (
    <div className={`addproject ${openModal ? '' : 'closing'}`}>
      <div
        className={`addproject__modal ${openModal ? '' : 'closing'}`}
      >
        <div className='addproject__header'>
          <h1 className='addproject__title'>{t('addProject.title')}</h1>
          <button className="addproject__button" onClick={() => handleAddProject(false)}>
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
        <form className='addproject__form' onSubmit={e => handleAdd(e)}>
          <div className='addproject__field'>
            <label className='addproject__label'>
              {t('addProject.colorLabel')}
            </label>
            <input
              className='addproject__input addproject__input--color'
              type="text"
              placeholder={t('addProject.colorPlaceholder')}
              value={colorName}
              onClick={() => setdropdownOpen(prev => !prev)}
              readOnly
            />
            {errorColor && (
              <div className='addproject__error'>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="currentColor"
                  />
                </svg>
                <span className='addproject__error-message'>{t('addProject.errorColor')}</span>
              </div>
            )}
            <div className={`addproject__dropdown ${dropdownOpen ? '' : 'close'}`}>
              {Object.entries(COLOR_MAP).map(([cName, value]) => (
                <div
                  key={cName}
                  className='addproject__dropdown-item'
                  onClick={() => {
                    setColorName(cName);
                    setColorValue(value);
                    setdropdownOpen(false);
                  }}
                >
                  <span>{cName}</span>
                  {cName === colorName && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check text-cyan-400"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>)}
                </div>
              ))}
            </div>
          </div>
          <div className='addproject__field'>
            <label className='addproject__label' htmlFor="project-name">
              {t('addProject.projectNameLabel')}
            </label>
            <input
              className='addproject__input'
              type="text"
              id='project-name'
              placeholder={t('addProject.projectNamePlaceholder')}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errorTitle && (
              <div className='addproject__error'>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="currentColor"
                  />
                </svg>
                <span className='addproject__error-message'>{t('addProject.errorTitle')}</span>
              </div>
            )}
          </div>
          <div className='addproject__field'>
            <label className='addproject__label' htmlFor="project-description">
              {t('addProject.descriptionLabel')}
            </label>
            <textarea
              className='addproject__textarea'
              id='project-description'
              placeholder={t('addProject.descriptionPlaceholder')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
            {errorDesc && (
              <div className='addproject__error'>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="currentColor"
                  />
                </svg>
                <span className='addproject__error-message'>{t('addProject.errorDescription')}</span>
              </div>
            )}
          </div>
          <div className='addproject__field'>
            <label className='addproject__label'>
              {t('addProject.technologiesLabel')}
            </label>
            <div className='addproject__tags'>
              {TAGS_LIST.map(tag => (
                <div
                  key={tag}
                  className={`addproject__tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </div>
              ))}
            </div>
            {errorTags && (
              <div className='addproject__error'>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="currentColor"
                  />
                </svg>
                <span className='addproject__error-message'>{t('addProject.errorTags')}</span>
              </div>
            )}
          </div>
          {/* <div className='addproject__field'>
            <label className='addproject__label' htmlFor="project-name">
              Ссылка на код
            </label>
            <input
              className='addproject__input'
              type="text"
              id='project-name'
              placeholder='https://www.project/URL'
            />
          </div> */}
          <div className='addproject__field'>
            <label className='addproject__label' htmlFor="project-name">
              {t('addProject.demoLinkLabel')}
            </label>
            <input
              className='addproject__input'
              type="url"
              id='project-name'
              placeholder='https://www.project/URL'
              value={demoLink}
              onChange={e => setDemoLink(e.target.value)}
            />
          </div>
          <div className="addproject__bottom">
            <button className='addproject__button-submit' type='submit'>{t('addProject.save')}</button>
            <button
              className='addproject__button-cancel'
              type='button'
              onClick={clearFields}
            >
              {t('addProject.cancel')}
            </button>
          </div>
          <div className='addproject__info'>
            <p>{t('addProject.info')}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
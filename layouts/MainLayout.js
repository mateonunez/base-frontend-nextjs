import { useEffect, useState } from 'react';

import MainNavbar from 'components/Navbars/MainNavbar';
import styleTransitions from '../styles/transitions.module.css';

export default function MainLayout({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeOut');

  useEffect(() => {
    setTransitionStage('fadeIn');
  }, []);

  useEffect(() => {
    children !== displayChildren && setTransitionStage('fadeOut');
  }, [children, setDisplayChildren, displayChildren]);

  return (
    <>
      <MainNavbar fixed />
      <main
        onTransitionEnd={() => {
          if (transitionStage === 'fadeOut') {
            console.log('fading out');
            setDisplayChildren(children);
            setTransitionStage('fadeIn');
          }
        }}
        className={`${styleTransitions.displayContent} ${styleTransitions[transitionStage]}`}>
        {displayChildren}
      </main>
      <footer>
        <span>
          Powered by <b>Mateo Nunez</b>
        </span>
      </footer>
    </>
  );
}

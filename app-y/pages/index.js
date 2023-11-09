import React from 'react';
import style from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

export default function Home() {
  const router = useRouter();
  const [currentComponent, setCurrentComponent] = React.useState(null);

  const handleComponentClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div>
      <h1>Content of App Y</h1>

      <nav>
        <a
          className={`${style.link} ${
            currentComponent === 'Comp1' && style.active
          }`}
          onClick={() => handleComponentClick('Comp1')}
        >
          Component 1
        </a>
        <a
          className={`${style.link} ${
            currentComponent === 'Comp2' && style.active
          }`}
          onClick={() => handleComponentClick('Comp2')}
        >
          Component 2
        </a>
      </nav>

      {currentComponent && (
        <div>
          {currentComponent === 'Comp1' && <Comp1 />}
          {currentComponent === 'Comp2' && <Comp2 />}
        </div>
      )}
    </div>
  );
}

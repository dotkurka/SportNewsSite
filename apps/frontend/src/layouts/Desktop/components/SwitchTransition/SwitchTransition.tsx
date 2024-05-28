import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import type { ISwitchTransition } from 'layouts/Desktop/components/SwitchTransition/types';

import './SwitchTransition.scss';

const SwitchTransition = ({ children, duration = 800, trigger }: ISwitchTransition) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      classNames='switch-transition-animation'
      in={trigger}
      nodeRef={nodeRef}
      timeout={duration}
    >
      <div className='switch-transition' ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
};

export default SwitchTransition;

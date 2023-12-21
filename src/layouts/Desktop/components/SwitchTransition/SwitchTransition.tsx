import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import type { ISwitchTransition } from 'layouts/Desktop/components/SwitchTransition/types';

import './SwitchTransition.scss';

const SwitchTransition = ({ children, duration = 800, trigger }: ISwitchTransition) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={trigger}
      classNames='switch-transition-animation'
      nodeRef={nodeRef}
      timeout={duration}
    >
      <div ref={nodeRef} className='switch-transition'>
        {children}
      </div>
    </CSSTransition>
  );
};

export default SwitchTransition;

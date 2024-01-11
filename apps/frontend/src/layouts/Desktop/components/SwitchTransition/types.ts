import type { ReactNode } from 'react';

export interface ISwitchTransition {
  children: ReactNode;
  trigger?: boolean;
  duration?: number;
}

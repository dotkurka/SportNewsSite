declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: any;
  export default src;
}

declare module '*.png' {
  import React = require('react');
  const src: any;
  export default src;
}

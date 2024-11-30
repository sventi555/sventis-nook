import clsx from 'clsx';
import { useEffect, useState } from 'react';

const O = [0, 0];
const A = [0, 1];
const B = [Math.cos(Math.PI / 6), 0.5];
const C = [Math.cos(Math.PI / 6), -0.5];
const D = [0, -1];
const E = [-Math.cos(Math.PI / 6), -0.5];
const F = [-Math.cos(Math.PI / 6), 0.5];

const toCoordString = (p: number[]) => `${p[0]},${p[1]}`;

const Cube: React.FC = () => {
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimating(true), 1000);
  }, []);

  return (
    <div className="h-full">
      <svg viewBox="-1, -1.1, 2.2, 2.2" className="-scale-y-100 h-full">
        {/* left */}
        <polygon
          points={[O, D, E, F].map((coord) => toCoordString(coord)).join(' ')}
          transform={
            animating
              ? 'translate(-0.01, 0.01) rotate(-60)'
              : 'translate(-0.01, -0.01)'
          }
          className={clsx('transition-all duration-1000', {
            'fill-turquoise-600': !animating,
            'fill-turquoise-700': animating,
          })}
        ></polygon>

        {/* right */}
        <polygon
          points={[O, B, C, D].map((coord) => toCoordString(coord)).join(' ')}
          transform={
            animating
              ? 'translate(0.01, 0.01) rotate(60) '
              : 'translate(0.01, -0.01)'
          }
          className={clsx('transition-all duration-1000', {
            'fill-turquoise-800': !animating,
            ' fill-turquoise-500': animating,
          })}
        ></polygon>

        {/* top/bottom */}
        <polygon
          points={[A, B, O, F].map((coord) => toCoordString(coord)).join(' ')}
          transform={animating ? 'translate(0, -1.01)' : 'translate(0, 0.01)'}
          className={clsx('transition-all duration-1000 fill-turquoise-300')}
        ></polygon>
      </svg>
    </div>
  );
};

export default Cube;

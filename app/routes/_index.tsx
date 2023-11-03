import type { MetaFunction } from '@remix-run/node';
import { css } from 'styled-system/css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix with Vite' },
    { name: 'description', content: 'Remix with Vite!' }
  ];
};

export default function Index() {
  return (
    <div
      className={css({
        fontSize: '2xl',
        fontWeight: 'bold',
        backgroundColor: '#BADA55'
      })}
    >
      Hello 🐼!
    </div>
  );
}

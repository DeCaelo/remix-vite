import type { MetaFunction } from '@remix-run/node';
import { css } from 'styled-system/css';
import { Button, ButtonProps } from '~/components/Buttons';
import Hero from '~/components/Hero';

const sizes: ButtonProps['size'][] = ['sm', 'md', 'xs'];
const buttonOptions: ButtonProps['variant'][] = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix with Vite' },
    { name: 'description', content: 'Remix with Vite!' },
  ];
};

export default function Index() {
  return (
    <div className={css({ textAlign: 'center' })}>
      <div
        className={css({
          display: 'grid',
          minH: 'screen',
          placeContent: 'center',
          p: '6',
          lg: { p: '8' },
          pos: 'relative',
          zIndex: '0',
          overflow: 'hidden',
        })}
      >
        <Hero />
        <div className={css({ ml: 'auto', mr: 'auto' })}>
          <div
            className={css({
              display: 'grid',
              placeItems: 'center',
              gap: '12',
              mt: '16',
            })}
          >
            {buttonOptions.map((option) => (
              <div
                className={css({
                  display: 'flex',
                  gap: '6',
                  justifyContent: 'center',
                  alignItems: 'center',
                })}
                key={option}
              >
                <div className={css({ display: 'grid', gap: '2' })}>
                  <h2
                    className={css({
                      fontSize: 'xl',
                      lineHeight: 'xl',
                      letterSpacing: 'wide',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    })}
                  >
                    {option} Buttons
                  </h2>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4',
                      flexWrap: 'wrap',
                    })}
                  >
                    {sizes.map((size, index) => (
                      <Button
                        size={size}
                        variant={option}
                        disabled={index === 4}
                        key={size}
                      >
                        <span>Learn more</span>
                        <span>&rarr;</span>
                      </Button>
                    ))}
                  </div>
                </div>
                <div className={css({ display: 'grid', gap: '2' })}>
                  <h2
                    className={css({
                      fontSize: 'xl',
                      lineHeight: 'xl',
                      letterSpacing: 'wide',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                    })}
                  >
                    {option} Icon
                  </h2>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4',
                      flexWrap: 'wrap',
                    })}
                  >
                    {sizes.map((size, index) => (
                      <Button
                        size={size}
                        variant={option}
                        rounded
                        iconOnly
                        disabled={index === 2}
                        key={size}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14m-7-7v14"
                          />
                        </svg>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

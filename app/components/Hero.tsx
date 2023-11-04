import { css } from '../../styled-system/css';

import bkg from '../../assets/checks.png';

export default function Hero() {
  return (
    <>
      <img
        src={bkg}
        alt=""
        className={css({
          pos: 'absolute',
          zIndex: '.z-10',
          top: '.top-24',
          left: '.left-24',
          transform:
            'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          maxH: '70vh',
          _dark: { opacity: '0.1' },
        })}
        draggable="false"
      />
      <img
        src={bkg}
        alt=""
        className={css({
          pos: 'absolute',
          zIndex: '.z-10',
          bottom: '.bottom-24',
          right: '.right-24',
          transform:
            'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
          maxH: '70vh',
          _dark: { opacity: '0.1' },
        })}
        draggable="false"
      />
      <div className={css({ ml: 'auto', mr: 'auto', maxW: '2xl' })}>
        <div
          className={css({
            mb: '8',
            display: 'flex',
            justifyContent: 'center',
          })}
        >
          <div
            className={css({
              pos: 'relative',
              rounded: 'full',
              pl: '3',
              pr: '3',
              pt: '1',
              pb: '1',
              fontSize: 'sm',
              lineHeight: '6',
              shadow: '1',
            })}
          >
            Take me to{' '}
            <a
              href="#"
              className={css({
                fontWeight: 'semibold',
                _focusVisible: { shadow: '4' },
                rounded: 'full',
                _focus: { ringColor: 'transparent' },
              })}
            >
              <span
                className={css({ pos: 'absolute', inset: '0' })}
                aria-hidden="true"
              ></span>
              your docs <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1
          className={css({
            fontSize: '4xl',
            lineHeight: '4xl',
            fontWeight: 'bold',
            letterSpacing: 'tight',
            sm: { fontSize: '6xl', lineHeight: '6xl' },
            textWrap: 'wrap:balance]',
          })}
        >
          Class <span className="text-theme-600">Variance</span> Authority
        </h1>
        <p
          className={css({
            mt: '6',
            fontSize: 'lg',
            lineHeight: '8',
            textWrap: 'wrap:balance]',
          })}
        >
          CVA is a powerful library that empowers developers with enhanced
          control over StyleSheet output, enabling seamless customization and
          simplifying UI development within CSS-in-JS/TS environments.
        </p>
      </div>
    </>
  );
}

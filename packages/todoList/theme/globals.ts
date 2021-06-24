import { injectGlobal } from '@emotion/css'

export const injectGlobalStyles = () => {
  injectGlobal({
    'html, body': {
      padding: 0,
      margin: 0,
      height: '100%',
    },
    '#root': {
      height: '100%',
    },
  })
}

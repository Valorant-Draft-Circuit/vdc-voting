// @ts-ignore
import type { Config } from 'tailwindcss'
// @ts-ignore
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: ['formkit.theme.ts'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'vdcRed': {
          '50': '#fef4f2',
          '100': '#fee7e5',
          '200': '#fcd0cf',
          '300': '#faa9a7',
          '400': '#f67677',
          '500': '#ed464a',
          '600': '#de3845',
          '700': '#b81828',
          '800': '#9a1729',
          '900': '#84172a',
          '950': '#490811',
        },
        vdcBlack: '#1a1a1a',
        vdcGrey: '#32353a',
        vdcPurple: '#9B59B6',
        vdcBlue: '#3498db',
        vdcGreen: '#2ecc71',
        vdcYellow: '#f1c40f',
        vdcWhite: '#fffbf5',
        vdcStaff: '#68194f',
      },
    },
  },
}

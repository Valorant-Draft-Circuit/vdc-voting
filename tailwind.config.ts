// @ts-ignore
import type { Config } from 'tailwindcss'
// @ts-ignore
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'Roboto'],
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        vdcRed: '#de3845',
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

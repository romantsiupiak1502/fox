const spacing = {
  0: '0px',
  px: '1px',
  0.5: '2px',
  0.75: '3px',
  1: '4px',
  1.25: '5px',
  1.5: '6px',
  1.75: '7px',
  2: '8px',
  2.25: '9px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  3.7: '15px',
  4: '16px',
  4.5: '18px',
  5: '20px',
  6: '24px',
  6.5: '26px',
  7: '28px',
  7.5: '30px',
  8: '32px',
  8.5: '34px',
  9: '36px',
  9.5: '38px',
  10: '40px',
  10.5: '42px',
  11: '44px',
  12: '48px',
  14: '56px',
  15: '60px',
  16: '64px',
  17: '68px',
  17.5: '70px',
  18: '72px',
  19: '76px',
  20: '80px',
  22: '88px',
  24: '96px',
  26: '100px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  50: '200px',
  52: '208px',
  56: '224px',
  60: '240px',
  62: '252px',
  64: '256px',
  72: '288px',
  74: '292px',
  78: '300px',
  80: '320px',
  90: '340px',
  96: '384px',
  126: '504px',
  140: '560px',
  200: '700px',
};

module.exports = {
  content: ['./src/pages/**/*.{js, page.tsx,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing,
    extend: {
      maxWidth: {
        '4/6': '66.666667%',
        26: '100px',
        59: '232px',
        74: '292px',
        85: '340px',
        118: '456px',
        126: '504px',
        140: '560px',
        200: '700px',
      },
      minWidth: {
        26: '100px',
        59: '232px',
        74: '292px',
      },
      gridTemplateColumns: {
        5: 'repeat(auto-fill, minmax(200px, 232px))',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      blue: '#4540DB',
      background: '#090A0B',
      dark: '#133841',
      yellow: '#B88C33',
      gray: {
        light: '#9A9A9A',
      },
    },
    fontFamily: {
      body: ['Rubik', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      xl: '20px',
      '2xl': '32px',
      '3xl': '34px',
      '5xl': '48px',
    },
  },
  plugins: [],
};

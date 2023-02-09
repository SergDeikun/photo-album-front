export const theme = {
  fonts: { body: 'Roboto, sans-serif' },

  fontSize: [16, 50],

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  colors: {
    main: '#e8716d',
    black: '#000000',
    white: '#fff',
    grey: '#ccc',
    darkGrey: 'rgba(34, 34, 34, 0.85)',
    hover: '#e14641',
  },

  borderRadius: {
    small: '3px',
    round: '50px',
  },
};

// Title
//   font-family: ${p => p.theme.fonts.body};
//   font-weight: ${p => p.theme.fontWeights.regular};
//   font-size: ${p => p.theme.fontSize[3]}px;
//   line-height: 22px;
//   color: ${p => p.theme.colors.white};

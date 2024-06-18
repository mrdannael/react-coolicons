module.exports = {
  multipass: true,
  plugins: [
    'sortAttrs',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
          },
        ],
      },
    },
  ],
  js2svg: {
    indent: 2,
    pretty: true,
  },
};

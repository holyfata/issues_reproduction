// babel-preset-taro 更多选项和默认值：
// https://docs.taro.zone/docs/next/babel-config
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true,
      compiler: 'webpack5',
    }]
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@nutui/nutui-react-taro',
        camel2DashComponentName: false,
        customName: (name, file) => {
          return `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}`
        },
        customStyleName: (name) =>
          `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}/style/style.css`
      },
      'nutui-react-taro',
    ],
  ]
}

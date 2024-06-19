# React Coolicons

![coolicons](.github/logo.png)

<p align="center">
    <a href="https://www.npmjs.com/package/react-coolicons"><img src="https://img.shields.io/npm/v/react-coolicons?logo=npm" alt="Latest Release"></a>
    <a href="https://www.npmjs.com/package/react-coolicons"><img src="https://img.shields.io/npm/dw/react-coolicons?logo=npm
    " alt="Weekly Downloads"></a>
    <a href="https://github.com/mrdannael/react-coolicons/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mrdannael/react-coolicons" alt="License"></a>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%3E%3D16-blue?logo=react" alt="React Version"></a>
    <a href="https://github.com/mrdannael/react-coolicons/issues"><img src="https://img.shields.io/github/issues-raw/mrdannael/react-coolicons" alt="Open Issues"></a>
</p>

**Coolicons** a carefully designed icons for your next project. 

This package is based on version **4.1** of [coolicons](https://github.com/krystonschwarze/coolicons) repository by Kryston Schwarze.

You can easily search through available icons at [react-coolicons](https://mrdannael.github.io/react-coolicons/) page.

## Installation & Usage

First, install `react-coolicons` from npm:

```
[npm]
npm i react-coolicons

[yarn]
yarn add react-coolicons
```

Each icon can be imported individually as a React component:

```jsx
import { Alarm } from 'react-coolicons';

function MyComponent() {
  return (
    <div>
      <Alarm />
      <Alarm width={32} height={32} />
      <Alarm className="size-8">
    </div>
  );
}
```

Icons accepts common SVG properties.

## Support this project

[![coolicons](.github/coffee.png)](https://www.buymeacoffee.com/mrdannael)

## License

This library is MIT licensed.
# react-map-gl demo with create-react-app
This is a react-map-gl demo for someone who use create-react-app.

## 0. version
```
create-react-app  v1.3.3
react-map-gl      v2.0.3
```

## 1. init 
```
create-react-app demo
cd demo
yarn
```

## 2. install
instal packages for react-map-gl 
```
yarn add immutable r-dom react-map-gl
```

## 3. webpack
eject project
```
yarn eject
```
find the config files at `demo/config/webpack.config.dev.js` and `demo/config/webpack.config.prod.js`.

find `resolve` element in those 2 files:
![demo](https://image.hduzplus.xyz/image/1500383183067.png)
![demo2](https://image.hduzplus.xyz/image/1500383217756.png)

then add this content to `alias` element in those 2 files :
```
'mapbox-gl$': path.join(paths.appNodeModules, '/mapbox-gl/dist/mapbox-gl.js'),
```

those files will look like
![demo3](https://image.hduzplus.xyz/image/1500383344766.png)

## 4. Over
ok, let's update the `App.js`
```jsx
import React, { Component } from 'react';
import MapGL from 'react-map-gl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapGL
          width={700}
          height={450}
          latitude={37.768}
          longitude={-122.331}
          zoom={9.017}
          mapStyle="mapbox://styles/mapbox/dark-v9" 
          mapboxApiAccessToken={Your_Mapbox_Token}
         />
      </div>
    );
  }
}

export default App;
```
and start this project
```
yarn start
```

wow! it works!
![demo5](https://image.hduzplus.xyz/image/1500383611832.png)

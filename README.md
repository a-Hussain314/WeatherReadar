# WeatherReadar
## About
React-native app that allows user to list cities where he can get the current weather status as well as historical weather data. With historical weather data is meant all weathers requests the user has made with the app.

<table>
  <tr>
    <td><p align="center"><img src="https://i.ibb.co/xjf938D/page-3-2-2-city-search.png" width="300"  ></p></td>
    <td><p align="center"><img src="https://i.ibb.co/k8jqwYd/page-3-1-1-city-selector.png" width="300"  ></p></td>
  </tr>
  <tr>
    <td><p align="center"><img src="https://i.ibb.co/N3pKbwp/page-3-4-4-details-a.png" width="300"  ></p></td>
    <td><p align="center"><img src="https://i.ibb.co/yNrhSFg/page-3-3-3-historical-data.png" width="300"  ></p></td>
  </tr>
</table>



## How to run

Follow these instructions from react-natice docs to install the required tools to run react-native apps [reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup), then :


###  1 - Start Metro

First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—[Metro Docs](https://facebook.github.io/metro/docs/concepts)

To start Metro, run  `npx react-native start`  inside your React Native project folder:

```
npx react-native start
```

Copy

`react-native start`  starts Metro Bundler.

> If you use the Yarn package manager, you can use  `yarn`  instead of  `npx`  when running React Native commands inside an existing project.

> If you're familiar with web development, Metro is a lot like webpack—for React Native apps. Unlike Kotlin or Java, JavaScript isn't compiled—and neither is React Native. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.

### 2 -  Start your application

Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

```
npx react-native run-android
```

Copy

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

![AwesomeProject on Android](https://reactnative.dev/assets/images/GettingStartedAndroidSuccessWindows-7ae949ba8187936ba342678c432d78f6.png)

`npx react-native run-android`  is one way to run your app - you can also run it directly from within Android Studio.

> If you can't get this to work, see the  [Troubleshooting](https://reactnative.dev/docs/troubleshooting)  page.

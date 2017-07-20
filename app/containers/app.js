/**
 *
 * Copyright 2015-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from '../pages/Splash';
import CategoryContainer from '../containers/CategoryContainer';
import MainContainer from '../containers/MainContainer';
import WebViewPage from '../pages/WebViewPage';
import Feedback from '../pages/Feedback';
import About from '../pages/About';

const TabContainer = TabNavigator(
  //  四个分类  底部导航 及动画、颜色设置
  {
    Main: { screen: MainContainer },
    Category: { screen: CategoryContainer },
    Feedback: { screen: Feedback },
    About: { screen: About }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#3e9ce9',
      inactiveTintColor: '#999999',
      showIcon: true,
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);
//堆栈导航  顶部导航部分
const App = StackNavigator(
  {
    Splash: { screen: Splash },
    Category: {
      screen: CategoryContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    Web: { screen: WebViewPage }
  },
  //  顶部设置
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3e9ce9'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
);

export default App;

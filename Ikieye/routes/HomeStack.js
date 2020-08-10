import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from '../mainscreens/HomeScreen';

import WhatTheWorldNeeds from '../subscreens/WhatTheWorldNeeds';
import WhatYouLove from "../subscreens/WhatYouLove";
import WhatYouAreGoodAt from "../subscreens/WhatYouAreGoodAt";
import WhatYouCanBePaidFor from "../subscreens/WhatYouCanBePaidFor";

const screens = {
    WhatTheWorldNeeds: {
        screen: WhatTheWorldNeeds
    },
    WhatYouLove: {
        screen: WhatYouLove
    },
    WhatYouAreGoodAt: {
        screen: WhatYouAreGoodAt
    },
    WhatYouCanBePaidFor: {
        screen: WhatYouCanBePaidFor
    }
}

const HomeScreenStack = createStackNavigator(screens);

export default createAppContainer(HomeScreenStack);
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default Container = ({ children }) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{
                flex: 1,

                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }}
        >
            {children}
        </View>
    );
};
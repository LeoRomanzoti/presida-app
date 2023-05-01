import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

export default ContainerTab = ({ children }) => {

    return (
        <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        {children}
      </KeyboardAvoidingView>
    );
};

import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorAdjust from "../components/ColorAdjust";

const COLOR_INCREMENT = 10;
const RGB_MAX = 255;
const RGB_MIN = 0;

const reducer = (state, action) => {
  let newState = { ...state };
  let colorToChange = action.type;

  if (isWithinRgbRange(state[colorToChange])) {
    newState[colorToChange] = clampRgb(state[colorToChange] + action.payload);
  }

  console.log(newState);
  return newState;
};

const isWithinRgbRange = (colorValue) => {
  return colorValue >= RGB_MIN && colorValue <= RGB_MAX;
};

const clampRgb = (number) => {
  return Math.min(Math.max(number, RGB_MIN), RGB_MAX);
};

const ColorAdjustReducerScreen = () => {
  let rgb = { red: 0, green: 0, blue: 0 };
  const [state, dispatch] = useReducer(reducer, rgb);

  const updateColor = (type, payload) => {
    dispatch({ type: type, payload: payload });
  };

  const increaseColor = (color) => {
    updateColor(color, COLOR_INCREMENT);
  };

  const decreaseColor = (color) => {
    updateColor(color, -1 * COLOR_INCREMENT);
  };

  return (
    <View>
      <ColorAdjust
        colorName="Red"
        colorValue={state.red}
        onIncrease={() => increaseColor("red")}
        onDecrease={() => decreaseColor("red")}
      />
      <ColorAdjust
        colorName="Green"
        colorValue={state.green}
        onIncrease={() => increaseColor("green")}
        onDecrease={() => decreaseColor("green")}
      />
      <ColorAdjust
        colorName="Blue"
        colorValue={state.blue}
        onIncrease={() => increaseColor("blue")}
        onDecrease={() => decreaseColor("blue")}
      />
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjustReducerScreen;

import { View, Text } from "react-native";
import React from "react";
import { ButtonRectangle } from "./Button";
import { SIZES, COLORS } from "../constants";

const Modal = ({ open, setOpen }) => {
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.white,
              width: 300,
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: SIZES.font,
              paddingHorizontal: SIZES.font * 2,
            }}
          >
            <Text style={{ marginBottom: 10, color: COLORS.primary }}>OK!</Text>
            <ButtonRectangle handlePress={handleCloseModal} width="100%">
              Cancel
            </ButtonRectangle>
          </View>
        </View>
      ) : (
        <View />
      )}
    </>
  );
};

export default Modal;

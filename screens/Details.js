import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";

import {
  DetailDesc,
  FocusedStatusBar,
  DetailBid,
  DetailHeader,
} from "../components/index.js";

import { ButtonRectangle } from "../components/Button";
import { SubInfo } from "../components/SubInfo";
import Modal from "../components/Modal";
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />

      <Modal open={open} setOpen={setOpen} />

      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.5)",
          width: "100%",
          position: "absolute",
          bottom: 0,
          zIndex: 1,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonRectangle
          handlePress={handleOpenModal}
          minWidth={170}
          {...SHADOWS.dark}
          fontSize={SIZES.large}
        />
      </View>
      <FlatList
        data={data.bids}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DetailBid bid={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <>
            <DetailHeader data={data} navigation={navigation} />
            <SubInfo />
            <View
              style={{
                padding: SIZES.font,
              }}
            >
              <DetailDesc data={data} />
              {data.bids.length && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

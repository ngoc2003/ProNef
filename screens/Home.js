import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useState } from "react";

import { COLORS, FONTS, NFTData, SIZES } from "../constants";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components/index.js";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) {
      setNftData(NFTData);
    } else {
      const filter = NFTData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );

      setNftData(filter);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={nftData}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
            ListEmptyComponent={() => (
              <View
                style={{
                  padding: SIZES.font,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.large,
                    color: COLORS.primary,
                  }}
                >
                  No data founded!
                </Text>
              </View>
            )}
            renderItem={({ item }) => <NFTCard data={item} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

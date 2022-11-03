const ScrollableMenu = () => {
  const [toggle, setToggle] = useState(false);

  return toggle ? (
    <>
      <View
        style={{
          width: "100%",
          backgroundColor: "red",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 30 }}>First box</Text>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "limegreen",
            borderRadius: 8,
          }}
          onPress={() => setToggle(!toggle)}
        />
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "yellow",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 30 }}>Second box</Text>
      </View>
    </>
  ) : (
    <View
      style={{
        width: "100%",
        backgroundColor: "red",
        flexDirection: "row",
      }}
    >
      <Text style={{ fontSize: 30 }}>First box</Text>
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          backgroundColor: "limegreen",
          borderRadius: 8,
        }}
        onPress={() => setToggle(!toggle)}
      />
    </View>
  );
};

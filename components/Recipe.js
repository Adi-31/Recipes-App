import { View, Text } from "react-native"

const Recipe = () => {

  return (
    <View>

    <View style={{ backgroundColor: 'blue', borderRadius: 10, margin: 10, }}>
        <Text style={{fontSize: 45, fontWeight: '500', color: 'white'}}> Baked Salmon</Text>

    </View>
    <View style={{ backgroundColor: 'yellow', borderRadius: 10, margin: 10, }}>
        <Text>Salmon</Text>
        <Text>Pine Nuts</Text>
        <Text>Butter Lettuce</Text>
        <Text>Salmon</Text>
        <Text>Salmon</Text>

    </View>
    </View>
  )
}

export default Recipe
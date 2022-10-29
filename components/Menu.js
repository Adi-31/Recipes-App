import { View, Text } from 'react-native'
import RecipeTitle from './RecipeTitle'
import Recipe from './Recipe'


const Menu = () => {
  return (
    <View>
        <RecipeTitle />
        <Recipe />
        {/* <Recipe /> */}

    </View>
  )
}

export default Menu
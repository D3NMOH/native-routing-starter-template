import { Text, View } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Homepage</Text>
    </View>
  );
}

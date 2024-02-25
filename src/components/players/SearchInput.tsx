import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

interface SearchInputProps {
  text: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}
const SearchInput: React.FC<SearchInputProps> = ({ text, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon
          name="search-outline"
          size={20}
          color="#666"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search..."
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#333",
  },
});

export default SearchInput;

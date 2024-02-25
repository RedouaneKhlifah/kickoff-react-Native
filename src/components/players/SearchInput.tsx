import { View, TextInput, StyleSheet, BackHandler } from "react-native";
import React, { useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/Ionicons";

interface SearchInputProps {
  text: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ text, onChangeText }) => {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const backAction = () => {
      if (inputRef.current && inputRef.current.isFocused()) {
        inputRef.current.blur();
        return true;
      }
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [text]);
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
          ref={inputRef}
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
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
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
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SearchInput;

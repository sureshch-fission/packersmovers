import React, { useState } from "react";
import { Button, View, Alert} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTime =  (props)  => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    console.log('vikashkajsaksjd')
  };
  
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  
    hideDatePicker();
    setDatePickerVisibility(false);
  };

  return (
    <View>
      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={props.isDatePickerVisible}
        mode="datetime"
        onConfirm={props.handleConfirm}
        onCancel={props.hideDatePicker}
      />
    </View>
  );
};

export default DateTime;
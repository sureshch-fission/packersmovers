/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import DateTime from '../../DateTime';
import React, {useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Text,
  FlatList,
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';

let bookedDate = [];

//Sample Data
const packersData = [
    {
        Name: 'Packer-1',
        Id: 1,
        Longitude: 8742199,
        Latitude: 1220,
    },
    {
        Name: 'Packer-2',
        Id: 2,
        Longitude: 41.40338,
        Latitude: 2.17403,
    },

  {
    Name: 'Packer-3',
    Id: 3,
    Longitude: 1313431,
    Latitude: 4242,
  },

  {
    Name: 'Packer-4',
    Id: 4,
    Longitude: 4413431,
    Latitude: 4242,
  },
];

        Name: 'Packer-4',
        Id: 4,
        Longitude: 4413431,
        Latitude: 4242,
    },
]


//accessing users location 
const PackersmoversScreen = async () => {

  //get users Access data
  const location = AsyncStorage.getItem('userLocation');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')

    //get users Access data
    const getData = async () => {

        const userLatitude = await AsyncStorage.getItem('userLatitude')
        const userLongitude = await AsyncStorage.getItem('userLongitude')
        setlatitude(userLatitude)
        setlongitude(userLongitude)



    }
    getData()


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
        console.log('vikashkajsaksjd')
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const handleConfirm = (date) => {
        const isbooked = bookedDate.some(data => data.toString() === date.toString())
        console.log("isbooked");
        if (!isbooked) {
            bookedDate = [...bookedDate, date.toString()]
            Alert.alert(
                "Success",
                ` Your Packer is Booked ${date}`,


                [

                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );

            hideDatePicker();
            setDatePickerVisibility(false);

        } else {
            Alert.alert(
                "failed",
                ` Oops! Your Packer is already Booked `,


                [

                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );

            hideDatePicker();
            setDatePickerVisibility(false);

        }


    };


    packersData.forEach(item => {

        //Function for Finding Distance between Two Co-ordinates using Latitude and Longitutde
        const distance = (lat1, lon1, lat2, lon2) => {
            if ((lat1 == lat2) && (lon1 == lon2)) {
                return 0;
            }
            else {
                var radlat1 = Math.PI * lat1 / 180;
                var radlat2 = Math.PI * lat2 / 180;
                var theta = lon1 - lon2;
                var radtheta = Math.PI * theta / 180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;

                }
                dist = Math.acos(dist);
                dist = dist * 180 / Math.PI;
                dist = dist * 60 * 1.1515;
                dist = dist * 1.609344

                console.log('distance2', Math.ceil(dist));
                if (Math.round(dist) <= 5000) {
                    console.log('packers available', { 'Name': item.Name, 'id': item.Id });
                    availablePackers.push({ 'Name': item.Name, 'id': item.Id })

                } else {
                    console.log('Not Availble')
                }

                return dist;
            }
        }
        distance(item.Latitude, item.Longitude, latitude, longitude);

        //DUMMY DATA for available packers
        // distance(59.3293371, 13.4877472,59.3293371, 13.4877472 )

    });


    return (

        <SafeAreaView>
            <View>
                {availablePackers.length === 0 ? (

                    <View>
                        <Text style={styles.packernot} >
                            No Packers Available in Your Nearest Location</Text>
                    </View>

                ) : (
                    <View>
                        <Text style={styles.headerStyle}>Available Packers in Your Location</Text>
                        <FlatList
                            data={availablePackers}
                            renderItem={({ item }) => {

                                return <TouchableOpacity onPress={showDatePicker}>
                                    <Text style={styles.packerStyle} >{item.Name}</Text>
                                </TouchableOpacity>
                            }
                            }
                            keyExtractor={item => item.id} />
                        <DateTime handleConfirm={handleConfirm} hideDatePicker={hideDatePicker} isDatePickerVisible={isDatePickerVisible} />


                    </View>

                )}


            </View>

        </SafeAreaView>


  const handleConfirm = date => {
    const isbooked = bookedDate.some(
      data => data.toString() === date.toString(),
    );
    console.log('isbooked');
    if (!isbooked) {
      bookedDate = [...bookedDate, date.toString()];
      Alert.alert(
        'Success',
        ` Your Packer is Booked ${date}`,

        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );

      hideDatePicker();
      setDatePickerVisibility(false);
    } else {
      Alert.alert(
        'failed',
        ' Oops! Your Packer is already Booked ',

        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );

      hideDatePicker();
      setDatePickerVisibility(false);
    }
  };

  packersData.forEach(item => {
    //Function for Finding Distance between Two Co-ordinates using Latitude and Longitutde
    const distance = (lat1, lon1, lat2, lon2, unit) => {
      if (lat1 == lat2 && lon1 == lon2) {
        return 0;
      } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;

        console.log('distance2', Math.ceil(dist));
        if (Math.round(dist) <= 5000) {
          console.log('packers available', {Name: item.Name, id: item.Id});
          availablePackers.push({Name: item.Name, id: item.Id});
        } else {
          console.log('Not Availble');
        }

        return dist;
      }
    };
    //distance(item.Latitude, item.Longitude, location.latitude, location.longitude);

    //DUMMY DATA for available packers
    distance(59.3293371, 13.4877472, 59.3225525, 13.4619422);
  });

  console.log(availablePackers);
  return (
    <SafeAreaView>
      <View>
        {availablePackers.length === 0 ? (
          <View>
            <Text style={styles.packernot}>
              No Packers Available in Your Nearest Location
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.headerStyle}>
              Available Packers in Your Location
            </Text>
            <FlatList
              data={availablePackers}
              renderItem={({item}) => {
                console.log(item);
                return (
                  <TouchableOpacity onPress={showDatePicker}>
                    <Text style={styles.packerStyle}>{item.Name}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.id}
            />
            <DateTime
              handleConfirm={handleConfirm}
              hideDatePicker={hideDatePicker}
              isDatePickerVisible={isDatePickerVisible}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        textAlign: "center",
        padding: 20,
        color: '#000',
        top: 20


    },
    packerStyle: {
        fontSize: 20,
        textAlign: "center",
        padding: 20,
        color: '#ffff',
        backgroundColor: 'blue',
        margin: 30,
        borderRadius: 35


    },
    packernot: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 20,
        textAlign: "center",
        padding: 10,
        color: '#fff',
        backgroundColor: 'red',
        margin: 30,
        borderRadius: 10
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }


    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default PackersmoversScreen;

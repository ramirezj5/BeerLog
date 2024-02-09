import React, {useState} from 'react';
// Use state is a react hook that allows you to add state to a functional component
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

function Post() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log('Here is some data')
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Form i */}
        <Controller
          control={control}
          render={({ field }) => (
            <View>
            <Text style={{ marginBottom: 5 }}>Beer Name</Text>
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Beer Name"
            />
            </View>
          )}
          name="beerName"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <View>
            <Text style={{ marginBottom: 5 }}>Brewer</Text>
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Brewer"
            />
            </View>
          )}
          name="brewer"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <View>
            <Text style={{ marginBottom: 5 }}>Price</Text>
            <TextInput
              {...field}
              style={styles.input}
              placeholder="Price"
            />
            </View>
          )}
          name="price"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <View>
            <Text style={{ marginBottom: 5 }}>Notes</Text>
            <TextInput
              {...field}
              style={{height: 100, borderColor: 'gray', borderWidth: 1, padding: 5 }}
              placeholder="Notes"
              multiline={true}
              numberOfLines={4} // You can adjust this as needed
              maxLength={300}
            />
            </View>
          )}
          name="notes"
        />  



        {/* Submit Button */}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />

        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 8,
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
  });

export default Post
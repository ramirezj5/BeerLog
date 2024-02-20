import React, {useState} from 'react';
// Use state is a react hook that allows you to add state to a functional component
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

function Post() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log('Here is some data')
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* Form i */}
          <Text style={styles.header}>Today I Tasted ...</Text>
          <Controller
            control={control}
            render={({ field }) => (
              <View>
              <Text style={{ marginBottom: 5 }}>Beverage Name</Text>
              <TextInput
                {...field}
                style={styles.input}
                placeholder="Beverage Name"
              />
              </View>
            )}
            name="beverageName"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <View>
              <Text style={{ marginBottom: 5 }}>Company</Text>
              <TextInput
                {...field}
                style={styles.input}
                placeholder="Company"
              />
              </View>
            )}
            name="company"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <View>
              <Text style={{ marginBottom: 5 }}>Place Tasted</Text>
              <TextInput
                {...field}
                style={styles.input}
                placeholder="Place Tasted"
              />
              </View>
            )}
            name="location"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <View>
              <Text style={{ marginBottom: 5 }}>Region/Country</Text>
              <TextInput
                {...field}
                style={styles.input}
                placeholder="Region/Country"
              />
              </View>
            )}
            name="origin"
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
              <Text style={{ marginBottom: 5 }}>Tasting Notes</Text>
              <TextInput
                {...field}
                style={{height: 100, borderColor: 'gray', borderWidth: 1, padding: 5 }}
                placeholder="Tasting Notes"
                multiline={true}
                numberOfLines={4} // You can adjust this as needed
                maxLength={300}
              />
              </View>
            )}
            name="notes"
          />  

          <Controller
            control={control}
            render={({ field }) => (
              <View>
              <Text style={{ marginTop: 5, marginBottom: 5 }}>Recommend To</Text>
              <TextInput
                {...field}
                style={{height: 100, borderColor: 'gray', borderWidth: 1, padding: 5 }}
                placeholder="Recommend To"
                multiline={true}
                numberOfLines={4} // You can adjust this as needed
                maxLength={300}
              />
              </View>
            )}
            name="recommend"
          /> 

          {/* Submit Button */}
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />

          
        </View>
      </ScrollView>
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
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center'
    }
  });

export default Post
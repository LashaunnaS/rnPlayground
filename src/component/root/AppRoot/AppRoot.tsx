/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AppRoot = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoal] = useState<Record<string, string>[]>([]);

  const handleGoalInput = (input: string) => {
    setEnteredGoal(input);
  };

  const handleNewGoal = () => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      {id: Math.random().toString(), value: enteredGoal},
    ]);
    setEnteredGoal('');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter some juicy text..."
            style={styles.input}
            onChangeText={handleGoalInput}
            value={enteredGoal}
          />
          <Button title="Add" onPress={handleNewGoal} />
        </View>
        <FlatList
          keyExtractor={item => item.id}
          data={courseGoals}
          renderItem={goal => (
            <View style={styles.listItem}>
              <Text style={styles.item}>{goal.item.value}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'column',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: '80%',
  },
  listItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#eef8ff',
    borderColor: '#14110F',
    borderWidth: 1,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  item: {
    paddingVertical: 2,
  },
});

export default AppRoot;

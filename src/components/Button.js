import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export function Button(){
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      //onPress={handleAddNewSkill}
    >
      <Text style={styles.buttonText}>Add</Text>
  </TouchableOpacity>
  )
}



export  function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Cristiano
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

<Button/>

<Text style={[styles.title, { marginVertical: 50 }]}>
  My Skills
</Text>

{
  mySkills.map(skill => (
  <TouchableOpacity key={skill} style={styles.buttonSkill}>
    <Text style={styles.textSkill}>
      {skill}
    </Text>
  </TouchableOpacity>
  ))
}

    </View >
  )
}

const styles = StyleSheet.create({

      button: {
        backgroundColor: '#A37CF7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
      },
      buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
      },
  });
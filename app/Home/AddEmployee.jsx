import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


const AddEmployee = () => {
  const navigation = useNavigation();
  
  // State variables for input fields
  const [employeeName, setEmployeeName] = useState('');
  const [employeeCountry, setEmployeeCountry] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [employeeDesignation, setEmployeeDesignation] = useState('');
  const [employeeMobileNo, setEmployeeMobileNo] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [salary, setSalary] = useState('');

  // Function to handle adding employee
  const addEmployee = async () => {
    // Here you can perform any actions to add the employee using the state values
    const employeeData = {
      employeeName,
      employeeCountry,
      employeeId,
      employeeDesignation,
      employeeMobileNo,
      dateOfBirth,
      joiningDate,
      salary
    };
    try{
        const response = axios('http://172.20.10.2:5000/addEmployee', employeeData);
        if(response.status === 200){
            console.log('data added')
        }
    }catch(error){
        console.log(error)
    }

  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </Pressable>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>Add New Employee</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Enter Employee Name</Text>
            <TextInput
              value={employeeName}
              onChangeText={(text) => setEmployeeName(text)}
              placeholder='Employee Name'
              style={styles.input}
            />
            <Text style={styles.label}>Enter Employee Country</Text>
            <TextInput
              value={employeeCountry}
              onChangeText={(text) => setEmployeeCountry(text)}
              placeholder='Employee Country'
              style={styles.input}
            />
            <Text style={styles.label}>Employee ID</Text>
            <TextInput
              value={employeeId}
              onChangeText={(text) => setEmployeeId(text)}
              placeholder='Employee ID'
              style={styles.input}
            />
            <Text style={styles.label}>Designation</Text>
            <TextInput
              value={employeeDesignation}
              onChangeText={(text) => setEmployeeDesignation(text)}
              placeholder='Designation'
              style={styles.input}
            />
            <Text style={styles.label}>Mobile No.</Text>
            <TextInput
              value={employeeMobileNo}
              onChangeText={(text) => setEmployeeMobileNo(text)}
              placeholder='Mobile No.'
              style={styles.input}
            />
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              value={dateOfBirth}
              onChangeText={(text) => setDateOfBirth(text)}
              placeholder='Date of Birth'
              style={styles.input}
            />
            <Text style={styles.label}>Joining Date</Text>
            <TextInput
              value={joiningDate}
              onChangeText={(text) => setJoiningDate(text)}
              placeholder='Joining Date'
              style={styles.input}
            />
            <Text style={styles.label}>Salary</Text>
            <TextInput
              value={salary}
              onChangeText={(text) => setSalary(text)}
              placeholder='Salary'
              style={styles.input}
            />
            <Pressable onPress={addEmployee} style={styles.addButton}>
              <Text style={{ color: 'white' }}>Add Employee</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
  },
  addButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 7,
  },
});

export default AddEmployee;

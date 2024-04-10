import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { axios } from 'axios';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router/build/hooks';
import { useNavigation } from '@react-navigation/native';


const EmployeeList
  = () => {
    const [employee, setEmployee] = useState();

    useEffect(() => {
      const fetchdata = async () => {
        const response = await axios('http://172.20.10.2:5000/getEmployee')
        setEmployee(response.data)
      }
      fetchdata()
    }, [])
    console.log(employee)
    const router = useRouter();
    const navigation = useNavigation()
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', padding: 8, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          <Pressable style={{ flexDirection: 'row', marginLeft: 20, padding: 7, borderRadius: 7, borderColor: 'red', borderWidth: 1, width: '75%' }}>
            <Feather name="search" size={24} color="black" />
            <TextInput style={{ flex: 1 }} placeholder='Search' />
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => router.push('/Home/AddEmployee')}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </Pressable>
        </View>
      </View>

    )
  }

export default EmployeeList


const styles = StyleSheet.create({})
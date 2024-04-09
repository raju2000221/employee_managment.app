import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, Feather,AntDesign,FontAwesome6 ,MaterialIcons,Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router/build/hooks';
const index = () => {
    const router = useRouter();
    return (
       <SafeAreaView style={{ flex: 1, backgroundColor: '#7F7FD5' }}>
         <ScrollView>
            <LinearGradient colors={["#7F7FD5", "#E9E4F0"]}>
                <View style={{ padding: 8 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="lock" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: 600 }}>Employee Management System</Text>
                        <AntDesign name="barschart" size={24} color="black" />
                    </View>
                    <View style={{flexDirection:'row', alignContent:'center', gap:5, marginTop:20}}>
                        <Pressable onPress={() => router.push('/Home/AddEmployee')} style={{backgroundColor:'#7F7FD5', padding:10,  flex:1, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:50, height:50,borderRadius:50, backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <FontAwesome6 name="list-ol" size={24} color="black" />
                            </View>
                            <Text style={{color:'white'}}>
                                Employee list
                            </Text>
                        </Pressable>
                        <Pressable style={{backgroundColor:'#7F7FD5', padding:10, flex:1, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:50, height:50,borderRadius:50,  backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <FontAwesome6 name="list-check" size={24} color="black" />

                            </View>
                            <Text style={{color:'white'}}>
                               Attendance
                            </Text>
                        </Pressable>

                    </View>
                    <View style={{marginTop:30, backgroundColor:'white', padding:8, borderRadius:10}}>
                        <Pressable style={{backgroundColor:'#7F7FD5', flexDirection:'row',padding:10,alignItems:'center', borderRadius:10}}>
                            <View style={{padding:7, width:45, height:45,borderRadius:7,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <AntDesign name="profile" size={24} color="black" />

                            </View>
                            <Text style={{flex:1, marginLeft:10, fontWeight:700, fontSize:16}}>Attendance Report</Text>
                            <View style={{padding:7, width:45, height:45,borderRadius:7,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <Feather name="arrow-right-circle" size={24} color="black" />

                            </View>

                        </Pressable>
                        <Pressable style={{backgroundColor:'#7F7FD5', flexDirection:'row',padding:10,alignItems:'center', borderRadius:10, marginTop:15}}>
                            <View style={{padding:7, width:45, height:45,borderRadius:7,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <MaterialIcons name="summarize" size={24} color="black" />

                            </View>
                            <Text style={{flex:1, marginLeft:10, fontWeight:700, fontSize:16}}>Summary Report</Text>
                            <View style={{padding:7, width:45, height:45,borderRadius:7,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <Feather name="arrow-right-circle" size={24} color="black" />

                            </View>

                        </Pressable>
                        <Pressable style={{backgroundColor:'#7F7FD5', flexDirection:'row',padding:10,alignItems:'center', borderRadius:10, marginTop:15}}>
                            <View style={{padding:7, width:45, height:45,borderRadius:7,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <Octicons name="report" size={24} color="black" />

                            </View>
                            <Text style={{flex:1, marginLeft:10, fontWeight:700, fontSize:16}}>All Generate Report</Text>
                            <View style={{padding:7, width:45, height:45,borderRadius:7,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <Feather name="arrow-right-circle" size={24} color="black" />

                            </View>

                        </Pressable>
                        <Pressable style={{backgroundColor:'#7F7FD5', flexDirection:'row',padding:10,alignItems:'center', borderRadius:10, marginTop:15}}>
                            <View style={{padding:7, width:45, height:45,borderRadius:7,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <MaterialIcons name="more-time" size={24} color="black" />

                            </View>
                            <Text style={{flex:1, marginLeft:10, fontWeight:700, fontSize:16}}>Over Time Employee</Text>
                            <View style={{padding:7, width:45, height:45,borderRadius:7,backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
                            <Feather name="arrow-right-circle" size={24} color="black" />

                            </View>

                        </Pressable>
                    </View>
                    <View style={{flexDirection:'row', marginTop:30, gap:15}}>
                        <View style={{backgroundColor:'#7F7FD5', flex:1, borderRadius:10, padding:10, alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:35, height:35,borderRadius:7, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                            <FontAwesome6 name="people-line" size={24} color="black" />
                            </View>
                            <Text>Attendance Criteria</Text>
                        </View>
                        <View style={{backgroundColor:'#7F7FD5', flex:1, borderRadius:10, padding:10, alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:35, height:35,borderRadius:7, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                            <AntDesign name="barschart" size={24} color="black" />
                            </View>
                            <Text>Workflow</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:10, gap:15}}>
                        <View style={{backgroundColor:'#7F7FD5', flex:1, borderRadius:10, padding:10, alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:35, height:35,borderRadius:7, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                            <FontAwesome6 name="people-line" size={24} color="black" />
                            </View>
                            <Text>Cost Saving</Text>
                        </View>
                        <View style={{backgroundColor:'#7F7FD5', flex:1, borderRadius:10, padding:10, alignItems:'center', justifyContent:'center'}}>
                            <View style={{width:35, height:35,borderRadius:7, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                            <AntDesign name="barschart" size={24} color="black" />
                            </View>
                            <Text>Employee Performance</Text>
                        </View>
                    </View>

                </View>

            </LinearGradient>

        </ScrollView>
       </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({})
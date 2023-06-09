import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskItem = ({ task, handleDelete }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                style={styles.touchableContainer}
                onPress={() => navigation.navigate('TaskFormScreen', { id:task.id })}>
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemDescription}>{task.description}</Text>
            </TouchableOpacity>
        
            <TouchableOpacity 
                style={styles.touchableBtnDelete}
                onPress={() => handleDelete(task.id)}
            >
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#333333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor:'#3f3f3f',
        borderWidth:1
    },
    itemTitle: {
        color: "#ffffff"
    },
    itemDescription: {
        color: "#b2b2b2",
        fontSize:13
    },
    touchableContainer: {
        width: "72%"
    },
    touchableBtnDelete: {
        backgroundColor: "#ee5253", 
        padding: 7, 
        borderRadius:5
    }
}) 

export default TaskItem;
'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, TextInput, Platform} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';

class TabSearch extends React.Component
{
    static defaultProps={
        placeholder:'搜索'
    }
    static PropsType={
        onEditing: PropTypes.func,
        placeholder :PropTypes.string,
        onPress: PropTypes.func
    }
    constructor(props, context)
    {
        super(props, context);
        this._onEditing = this._onEditing.bind(this)
        this._onBlur = this._onBlur.bind(this)
        this._onFocus = this._onFocus.bind(this)
        this._onChangeText = this._onChangeText.bind(this)
        this._onDelete = this._onDelete.bind(this)


        this.state={
            textInputIsFocus :false,
            onClick:false
        }
    }
    _text = ''
    render()
    {
        let deleteBtn = Platform.OS === 'android'?this._text && this.state.onClick?(
            <TouchableOpacity onPress={this._onDelete} ref={(ref)=>this._deleteBtn = ref} style={styles.deleteBtn}>
                <FontAwesome name="remove" size={15} color="#FF7400"  style = {{marginLeft: 5}}/>
            </TouchableOpacity>
        ):null:null;
        let textInputStyle = this.state.textInputIsFocus ?{marginLeft:5,textAlign:'left'}:{textAlign:'center',marginRight:25};
        let placeholderTextColor = this.state.textInputIsFocus ?'#999':'#333333';
        return (
            <View style={{height:52}}>
                <View style={styles.topView}  >
                    <FontAwesome name="search" size={15} color="#FF7400"  style = {{marginLeft: 5}}/>
                    <TextInput  style={[styles.topSearch,textInputStyle]}
                                placeholder={this.props.placeholder}
                                placeholderTextColor={placeholderTextColor}
                                underlineColorAndroid="transparent"
                                clearButtonMode="while-editing"
                                autoCapitalize='none'
                                onFocus={this._onFocus}
                                onBlur={this._onBlur}
                                ref={(ref)=>this._searchInput = ref}
                                onChangeText={this._onChangeText}
                                returnKeyType='search'
                                onSubmitEditing={this._onEditing}
                    />
                    {deleteBtn}
                </View>
            </View>
        );
    }
    _onBlur(){
        if(!this._text){
            this.setState({textInputIsFocus :false,})
        }
        this.setState({onClick:false})
    }
    _onFocus(){
        this.setState({textInputIsFocus :true,onClick:true})
    }
    _onChangeText(text){
        this._text = text
        this.props.onChangeText && this.props.onChangeText(this._text)
        this.forceUpdate()
    }
    _onDelete(){
        this._searchInput.clear();
        this._onChangeText('');
    }
    _onEditing(){
        this.props.onSubmitEditing && this.props.onSubmitEditing(this._text)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSearch:{
        justifyContent:'center',
        height: 30,
        fontSize:14,
        color:'#333333',
        padding:0,
        flex:1,
        alignItems:'center'
    },
    topView:{
        height: 32,
        borderRadius:16,
        marginHorizontal:5,
        alignItems:'center',
        marginVertical:10,
        borderColor:'#acacac',
        borderWidth:StyleSheet.hairlineWidth,
        backgroundColor:'#fff',
        flexDirection:'row'
    },
    deleteBtn:{marginRight:8}
});


export default TabSearch;
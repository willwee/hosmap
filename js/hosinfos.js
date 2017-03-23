import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet,Alert,Dimensions} from 'react-native';

// import TasksCell from './lib/TasksCell'
import PagingListView from './lib/PagingListView/index'
import DefaultListView from './lib/ListCellView/index'

import Search from './lib/TabSearch/index'
import { ENTRIES1, ENTRIES2 } from './entries';

const Width = Dimensions.get('window').width;
export default class Message extends Component {
    constructor(props, context){
        super(props, context);
        this._renderRowView = this._renderRowView.bind(this);
        this._onFetch = this._onFetch.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._emptyView = this._emptyView.bind(this);
        this._onTextChange = this._onTextChange.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this._onPress = this._onPress.bind(this);
        this._onPressSearch = this._onPressSearch.bind(this);

        this.state= {
            searching: false,
            sections:ENTRIES2,

        }
    }
    render() {
        return (
            <View style={[styles.container]}>
                <Search onSubmitEditing = {this._onSubmitEditing} placeholder={'搜索'} keyFun={''} onPress={this._onPressSearch}  onChangeText={this._onTextChange}/>
                <PagingListView rowView={this._renderRowView}
                                 onFetch={this._onFetch}
                                 renderHeader={this._renderHeader}
                                 emptyView={this._emptyView}
                                 renderSeparator={this._renderSeparator}
                                 ref={(ref)=>this.pangingView =ref}
                                 onRefresh={this._onRefresh}
                                 enableEmptySections = {true}
                />
            </View>
        );
    }

    _onPressSearch(){

    }
    _onTextChange(text){
        console.log('_onTextChange>>>>>>>>>>>>>>>>>>>>>>>',text);
        if(text){
            this.setState({searching:true})
        }else{
            this.setState({searching:false})
        }
        let items =this.pangingView.getRows()
        console.log('_onTextChange>>>>>>>items>>>>>>>>>>>>>>>>',items);
        items = this.state.sections.filter((item,index)=>{
            item  = {...item}
            if(item.title.indexOf(text) !== -1){
                return true
            }else if(item.address.indexOf(text)!==-1){
                return true
            }else{
                return false
            }
        })
        console.log('_onTextChange>>>>>>>reload  items>>>>>>>>>>>>>>>>',items);
        this.pangingView.reloadRows(items)
    }

    _renderRowView(dataSource){
        let time = new Date(dataSource.sysUpdateTime)
        let mouth = time.getMonth() + 1
        let date = time.getFullYear() + '-' + mouth + '-' + time.getDate()

        return (
            <TouchableOpacity onPress={()=>{this._onPress(dataSource)}}>
                <DefaultListView icon={dataSource.icon}
                                 title={dataSource.title}
                                 titleStyle = {dataSource.titleStyle}
                                 defaultTitle={dataSource.address}
                                 defaultTitleStyle ={dataSource.defaultTitleStyle}
                                 disclosureText = {dataSource.disclosureText}
                                 showDisclosureIndicator={dataSource.showInd}
                                 style={styles.style}
                                 iconStyle={styles.iconStyle}
                >
                </DefaultListView>

            </TouchableOpacity>


        );
    }

    _onRefresh(){

    }
    _onPress(dataSource){
      console.log('>>>>>>>>>>_onPress',dataSource);

        this.props.actions.pushRouter({name: 'hosDetail', data:{dataSource:dataSource}});
    }
    _emptyView(){
        return (
            <View style={{height:40,width:Width,justifyContent:'center',alignItems:'center'}}>
                <Text>没有数据</Text>
            </View>
        )
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return(
            <View key={sectionID + ' ' +rowID} style={{backgroundColor:'#ddd',height:StyleSheet.hairlineWidth}} />
        );
    }

    _onFetch(page = 1, callback, options){
        console.log('>>>>>>>>>>>>>>>>>>>>>_onFetch');

        options = {...options,allLoaded:true}
        callback(this.state.sections,options)

    }
    _renderHeader(){
    }


}

const styles = StyleSheet.create({
    style:{
        height:80
    },
    iconStyle:{
        width:100,
        height:70,
    },
    container: {
        flex: 1,
        marginHorizontal:5,
        marginBottom:50
    },
    text:{lineHeight:100, textAlign:'center'},
    button:{marginTop:10,height:34,borderColor:'#ccc',borderWidth:0.5,backgroundColor:'#fff',borderRadius:2, justifyContent:'center',alignItems:'center',marginLeft:10, marginRight:10},
    buttonText:{color:'#444'},
});

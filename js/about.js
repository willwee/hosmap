import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet,Dimensions,TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ListView from './lib/GiftedListExView/index';

import DefaultListView from './lib/ListCellView/index'


const Width = Dimensions.get('window').width;

export default class About extends Component {
    constructor(props, context){
        super(props, context);
        this._renderRowView = this._renderRowView.bind(this);
        this._renderSectionHeader = this._renderSectionHeader.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this._onFetch = this._onFetch.bind(this);
        this._onPress = this._onPress.bind(this);
        this._loginOut = this._loginOut.bind(this);

        this.state={
            sections : [

                [
                    { vectoricon:(<FontAwesome name="user" size={50} color="#FF7400" style={styles.mainVectoriconStyle} />),title: this._user.name,titleStyle:{fontSize:20,color:'#999999'}
                        ,defaultTitleStyle:{color:'#999999',width:Width*3/4,flexWrap: 'wrap',paddingRight:2}
                        ,defaultTitle:this._user.roleNms
                        ,disclosureVecIcon :(<FontAwesome name="angle-right" size={40} color="#FF7400" />)
                        , style:{margin:5,height:82},showInd:true},
                ],
                [
                    {vectoricon:(<FontAwesome name="map-marker" size={30} color="#FF7400" style={styles.vectoriconStyle} />),  title: '登录地',showInd:false,disclosureText:this._user.loginOrgNm},
                    {vectoricon:(<FontAwesome name="heart-o" size={20} color="#FF7400" style={styles.vectoriconStyle} />), title: '兴趣爱好',showInd:false}
                ],

                [   {vectoricon:(<FontAwesome name="unlock-alt" size={30} color="#FF7400" style={styles.vectoriconStyle} />),  title: '修改密码',showInd:true} ],
                [   {vectoricon:(<FontAwesome name="info" size={30} color="#FF7400"  style={styles.vectoriconStyle} />),  title: '关于',showInd:true}],
            ]
        }
    }
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <ListView
                    rowView={this._renderRowView}
                    renderSectionHeader={this._renderSectionHeader}
                    renderSeparator={this._renderSeparator}
                    onFetch={this._onFetch}
                    firstLoader={false}
                    pagination={false}
                    refreshable={false}
                    withSections={true}>
                </ListView>

            </View>
        )
    }
    _renderRowView(rowData,sectionID, rowID) {
        return (
            <TouchableOpacity onPress={()=>this._onPress(rowData)}>
                <DefaultListView icon={rowData.icon}
                                 vectoricon = {rowData.vectoricon}
                                 title={rowData.title}
                                 titleStyle = {rowData.titleStyle}
                                 defaultTitle={rowData.defaultTitle}
                                 defaultTitleStyle ={rowData.defaultTitleStyle}
                                 disclosureText = {rowData.disclosureText}
                                 showDisclosureIndicator={rowData.showInd}
                                 disclosureVecIcon = {rowData.disclosureVecIcon}
                                 style={rowData.style}
                                 iconStyle={rowData.iconStyle}
                >
                </DefaultListView>

            </TouchableOpacity>


        );
    }
    _renderSectionHeader(sectionData, sectionID){
        let style = sectionID === '0'?{height:0}:null;
        return(
            <View key={sectionID} style={[{height:11,backgroundColor:'#f4f4f4',borderTopWidth:StyleSheet.hairlineWidth,borderBottomWidth:StyleSheet.hairlineWidth,borderColor:'#cccccc'},style]} />
        )
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return(
            <View key={sectionID + ' ' +rowID} style={{height:StyleSheet.hairlineWidth,backgroundColor:'#cccccc'}} />
        );
    }
    _loginOut(){
        console.log('>>>>>>>>>>>>_loginOut');
    }

    _onPress(rowData) {
       console.log('>>>>>>>>>>>>>>>_onPress');
    }
    _user ={'name':'辉辉','roleNms':'证券分析师','loginOrgNm':'深圳'};
    _onFetch(page  , callback, options){
        callback(this.state.sections);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f4f4f4',
    },
  text:{lineHeight:100, textAlign:'center'},
    vectoriconStyle:{
        marginLeft:5,
        width:30
    },
    mainVectoriconStyle:{
        marginLeft:5,
        marginRight:10
    }
});

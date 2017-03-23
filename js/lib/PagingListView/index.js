'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet, ActivityIndicator,Text, TouchableOpacity, Image} from 'react-native';

import GiftedListExView from '../GiftedListExView/index';

class PagingListView extends React.Component {

    constructor(props) {
        super(props);
        this._paginationLoadedEndView = this._paginationLoadedEndView.bind(this);
        this._paginationWaitingView = this._paginationWaitingView.bind(this);
        this._renderSeperator = this._renderSeperator.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._fetchingView = this._fetchingView.bind(this);
        this._nullView = this._nullView.bind(this);
        this._onLasted = this._onLasted.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this._onScrollTo = this._onScrollTo.bind(this);
    }

    render() {
        return (
            <GiftedListExView rowView={this._renderRow}
                            onFetch={this._onFetch}
                            refreshable={true}
                            paginationWaitingView={this._paginationWaitingView}
                            emptyView={this._nullView}
                            renderSeparator={this._renderSeperator}
                            onEndReached={this._onLasted}
                            renderHeader={this._renderHeader}
                            ref = {(ref)=>this.myGiftedView = ref}
                              paginationFetchingView={this._fetchingView}
                              paginationAllLoadedView={this._paginationLoadedEndView}
                            onEndReachedThreshold={10}
                              firstLoader={false}
                              pagination={true}
                {...this.props}/>
        );
    }

    getRows=()=>{
        return this.myGiftedView.getRows();
    }

    reloadRows=(rows)=>{
        return this.myGiftedView.reloadRows(rows);
    }

    reload=()=>{
        this.myGiftedView._onRefresh()
    }

    _onRefresh(){
        this.myGiftedView._onRefresh()
    }

    _renderSeperator(sid, id){
        return (<View key={sid+id} style={{height: Stylesheet.hairlineWidth, backgroundColor: '#dddddd'}} />);
    }

    _renderHeader(){
        return null;
    }
    _setPage(page){
        this.myGiftedView._setPage(page)
    }
    _fetchingView(firstLoaderHide){
        if(firstLoaderHide){
            return null;
        }else{
            return (
                <View style={{flexDirection: 'row',justifyContent: 'center',padding: 10, backgroundColor: 'white'}}>
                    <ActivityIndicator size="small"/>
                    <Text style={{marginLeft:5, fontSize: 20}}>加载中...</Text>
                </View>
            );
        }
    }

    _paginationLoadedEndView(){
        return null;
    }

    _onLasted(){
        if(this._pagnateCallback && this.props.pagination !== false){
            this._pagnateCallback();
        }
    }

    _paginationWaitingView(pagnateCallback){
        this._pagnateCallback = pagnateCallback;
        return (
            <View style={{alignItems: 'center',padding: 10, backgroundColor: 'white'}}>
                <Text style={{fontSize: 20}}>上拉加载</Text>
            </View>
        );
    }

    _nullView(refreshCallback){
        return null;
    }


    _onScrollTo(index){
        this.myGiftedView._onScrollTo(index)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default PagingListView;
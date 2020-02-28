import React, { Component } from 'react'
import '../style/home.css';
import { connect } from 'react-redux';
import { changeCenteroid,getInitialState } from '../actions/homeAction'
import PropTypes from 'prop-types';



const BUTTON_ICON = {
    plus:'+',
    minus:'-',
    vBtn:'V'
}

class home extends Component {

    state = {
        showGroup:false,
        centroids:[],
        selected:''
      }

 
    /**
     * This function recevies group of names and return the centroid name.
     * @param {Object}   
     * @public
     */
    getCentroid(item){
        return item.cntName;
    }
    
    /**
     * This function invokes when + action is clicked, it sets the clicked centroid to be the selected one.
     * @param {int}   
     * @public
     */
    handleButtonClick = (key) =>{
        this.setState({showGroup:!this.state.showGroup,selected:key})
    }

    /**
     * This function invokes changeCenteroid action, which sends the group index and the new centroid.
     * @param {int,int}   
     * @public
     */
    handleVClick = (groupdIndex,newCntIndex) =>{
        this.props.changeCenteroid(groupdIndex,newCntIndex)
    }

    /**
     * React life cycle method, This method is called when props are passed to the Component instance.
     * The method recevies two indexes, group index ( the object index inside the centroids array), new centroid index * ( the new centroid index inside the group array ), then the methods sets the new centroid and sort it.
     * @param {int,int}   
     * @public
     */
    componentWillReceiveProps(nextProps){
        this.state.centroids[nextProps.home.groupIndex].cntName = this.state.centroids[nextProps.home.groupIndex].group[nextProps.home.newCntIndex].name
        this.sortCentroids(this.state.centroids)
    }

    /**
     * React life cycle method that invoked immediately after a component is mounted,
     * sets the initial state - receives the centroids and sort them.
     * @param {} 
     * @public
     */
    componentDidMount(){
        this.props.getInitialState()
        this.sortCentroids(this.props.home.centroids)
        this.setState({centroids:this.props.home.centroids})
    }

    /**
     * This function sorts the names group by similarity in decreasing order.
     *
     * @param {Array} 
     * @public
     */
    sortCentroids = (centroids) =>{
        
        centroids.forEach((item)=>{
        item.group.sort((a,b)=>{
            return a.value-b.value
        })
        })

    }
    
    render() {
        return (
            <div className='centroids_container'>
                <div className=''>
                    {this.state.centroids.map((item,key)=>{
                        return (
                        <div className='block'>
                            <div className='centroid_container'>
                                <div className='btn' onClick={()=>this.handleButtonClick(key)}>{this.state.showGroup && this.state.selected == key ? BUTTON_ICON.minus : BUTTON_ICON.plus}</div>
                                <div className='centroid_name'>{this.getCentroid(item)}</div>
                            </div>
                            {this.state.showGroup && this.state.selected == key ? item.group.map((ele,i)=>{
                                if(ele.name != item.cntName){
                                return (
                                <div className='item_container'>
                                    <div className='item_name'>{ele.name}</div>
                                    <div className='btn' onClick={()=>this.handleVClick(key,i)}>{BUTTON_ICON.vBtn}</div>
                                </div>)}
                            }) : <></>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

home.propTypes = {
    centroids: PropTypes.array
  };
  
const mapStateToProps = (state) => ({
    home:state.home,
});

export default connect(mapStateToProps,{changeCenteroid,getInitialState})(home);


import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';


class GoalItem extends Component{

    completeGoal(){
        //add to complete goals to the database
        //remove the goal  from the goal reference

        const {email}=this.props.user;
        const {title,serverKey}=this.props.goal;
        //console.log('serverKey',serverKey);
       // console.log('email',email,'title',title); 
        goalRef.child(serverKey).remove();
        completeGoalRef.push({title,email});

    }

    render(){
        //console.log('this.props.goal',this.props.goal)
        const {email,title}=this.props.goal
        return(
            <div style={{margin:'5px'}}>
                <strong >{title}</strong>  
                <span style={{margin:'5px'}}> Submitted by  <em>{email}</em></span>{' '}
                <button className='btn btn-sm btn-primary'
                onClick={()=>this.completeGoal()}>
                    Complete
                </button>
                </div>
        )
    }
}

function mapStateToprops(state){
    const{user}=state
    return{
        user
    }
}

export default connect(mapStateToprops,null)(GoalItem);
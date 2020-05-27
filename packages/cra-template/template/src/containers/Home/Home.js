// Home
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';


const Home = (props) => {
    
    
    const displayComponents = (<>
        <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
                <ListItemText primary="List of things to do" />
            </ListItem>
        </List>

    </>);
    
    const spinnerComponent = <Spinner />;


    const renderComponent = (props.loading) ? spinnerComponent : displayComponents;

    return(
         <>
            {renderComponent}
         </>
    );
};


const mapStateToProps = state => {
    return {
        error: state.query.error
        ,loading: state.query.loading
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
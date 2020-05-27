import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './Spinner.css';
import { connect } from 'react-redux';

const spinner = (props) => {

    // props{
    //     curValue: Integer
    // }


    return (
        <div className={styles.spinnerdiv}>
            <center><br /><br /><br /><br /><CircularProgress size="10rem" thickness={4.0} variant="determinate" value={props.loadingValue} /><br /><br /><br /><br /></center>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        loading: state.query.loading
        ,loadingValue: state.query.loadingValue
    }
  };


export default connect(mapStateToProps)(spinner);
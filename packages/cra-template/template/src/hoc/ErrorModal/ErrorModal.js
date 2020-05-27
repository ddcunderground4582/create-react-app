// ErrorModal
import React, { useState }  from 'react';
import SimpleDialog from '../../components/UI/SimpleDialog/SimpleDialog'; 
import Typography from '@material-ui/core/Typography/Typography';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';

const ErrorModal = (props) => {

    // props{
    //     errorMessage,
    //     errorTitle,
    //     returnPath
    // }

    const useErrorMessage = (props.errorMessage === undefined) ? props.error : props.errorMessage;
    const useErrorTitle = (props.errorTitle === undefined) ? "An Error has occurred." : props.errorTitle;
    const userReturnPath = (props.returnPath === undefined) ? "/" : props.returnPath;
    const [dialogOpen, setDialogOpen] = useState(true);

    const handleClose = value => {
        props.onClearError();
        setDialogOpen(false);
    }

    const modalDisplay = (dialogOpen) ? (
        <SimpleDialog  open={dialogOpen} onClose={handleClose} title={useErrorTitle}>
            <Typography variant="body1" style={{padding: '2vw'}}>
                {useErrorMessage}
            </Typography>
        </SimpleDialog>)
        : (<Redirect to={userReturnPath} />);

    return(
        <>
            {modalDisplay}
        </>
    );
};

const mapStateToProps = state => {
    return {
        error: state.auth.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClearError: () => dispatch(actions.authClearError())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
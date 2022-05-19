import error from '../../images/error.jpg';

const errorMessage = () => {
    return (
        <img style={{ height: '250px', margin: '0 auto', opacity: '0.85'}} src={error} alt="Error" />
    );
};

export default errorMessage;
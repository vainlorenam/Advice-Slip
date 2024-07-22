import FavoriteAdvice from '../FavoriteAdvice/FavoriteAdvice';
import './FavoriteAdvicesModal.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const newFavoriteAdvicesModal = (props) => {
    return (
        <>
            <div onClick={props.setIsOpen} className="overlay"></div>
            <div className="favorite-advices-container">
                <div className='favorite-advices-title'>
                    <AutoAwesomeIcon />
                    <h2>My favorite advices</h2>
                    <AutoAwesomeIcon />
                </div>
                <div className='favorite-advices-container'>
                    {props.advices.map(advice => (
                        <FavoriteAdvice key={advice.id} advice={advice} removeAdvice={props.removeAdvice}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default newFavoriteAdvicesModal;
import './FavoriteAdvice.css';
import DeleteIcon from '@mui/icons-material/Delete';

const FavoriteAdvice = (props) => {
    // cream o functie "intermediara" pentru a apela o functie primita prin props
    // daca functia primita prin props ARE MINIM UN PARAMETRU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const handleRemoveAdvice = () => {
        props.removeAdvice(props.advice.id);
    };


  return (
    <div className='favorite-advice-container' key={props.advice.id}>
        <div className='favorite-advice-id-date'>
            <p className='favorite-advice-id'> #{props.advice.id}</p>
            <p className='favorite-advice-date'>Added at: {props.advice.addedAt}</p>
        </div>
        <div className='content-remove'>
            <p className='favorite-advice-content'> {props.advice.content} </p>

            <button className='remove-advice' onClick={handleRemoveAdvice}>
                <DeleteIcon />
            </button>
        </div>
    </div>
  )
}

export default FavoriteAdvice

import React, {useEffect} from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCards } from '../redux/Actions/cardCreators';
import { useDispatch } from 'react-redux';


const HistoryCard = ({cards}) => {
  const dispatch = useDispatch();

  useEffect(() => {
     // Fetch card data and dispatch setCards
     const fetchCards = async () => {
      const data = await fetchCardDataFromAPI(); // Replace with your data fetching logic
      dispatch(setCards(data));
    };

    fetchCards();
  }, [dispatch]);
 

  return (
    <div className='hidden md:flex flex-col rounded-md'>
      <div className='flex flex-col gap-y-2'>
        {cards && cards.slice(0, 3).map((card, index) => (
          <div key={index} className='flex flex-col gap-2 px-4 bg-[#CCBBBB] rounded-lg'>
            <div className='flex items-center gap-4'>
              <BsPersonCircle />
              <p>{card.name}</p>
            </div>

            <div className='flex flex-col items-start justify-normal p-4 overflow-hidden '>
              <p className=''>{card.text}</p>
            </div>
            <div className='flex gap-4 '>
              <p>{card.date}</p>
              <p>{card.questionNo}</p>
            </div>
          </div>
        ))}
        {cards.length === 0 && <p>No history available.</p>}
      </div>
    </div>
  );
};


HistoryCard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      text: PropTypes.string,
      date: PropTypes.string,
      questionNo: PropTypes.number
    })

  ).isRequired
}

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
  }
} 

export default connect(mapStateToProps)(HistoryCard);
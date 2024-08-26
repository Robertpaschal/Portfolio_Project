import React from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Helper function to extract first 10 words
const gerFirst10Words = (text) => {
  const words = text.split(' ');
  return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
};

//format date
const formatDate = (date) => new Date(date).toLocaleDateString();


const HistoryCard = ({cards}) => {
  const limitCards = cards.slice(0, 3);
 
  return (
    <div className='hidden md:flex flex-col rounded-md'>
      <div className='flex flex-col gap-y-2'>
        {limitCards.length > 0 ? (
        limitCards.map((card, index) => (
          <div key={index} className='flex flex-col gap-2 px-4 bg-[#d19090] rounded-lg'>
            <div className='flex items-center gap-4'>
              <BsPersonCircle />
              <p>{card.user.name}</p>
            </div>

            <div className='flex flex-col items-start justify-normal p-4 overflow-hidden '>
              <p className=''>{gerFirst10Words(card.text)}</p>
            </div>
            <div className='flex gap-4 '>
              <p>{formatDate(card.date)}</p>
              <p>Session {index + 1}</p>
            </div>
          </div>
        ))
        ) : (
          <div className='flex justify-center items-center h-full'>
            <p>No history available</p>
          </div>
            // {cards.length === 0 && <p>No history available.</p>}
        )}
      </div>
    </div>
  );
};


HistoryCard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string,
      }).isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      Qn_No: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = state => {
  return {
    cards: state.cards.cards,
  }
} 

export default connect(mapStateToProps)(HistoryCard);
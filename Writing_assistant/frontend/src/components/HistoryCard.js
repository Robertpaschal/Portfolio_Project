import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const HistoryCard = ({cards}) => {
  const limitCards = cards.slice(0, 3);
 
  return (
    <div className='hidden md:flex flex-col rounded-md'>
      <div className='flex flex-col gap-y-2'>
        {limitCards.length > 0 ? (
        limitCards.map((card, index) => (
          <div key={index} className='flex flex-col gap-2 px-4 bg-[#CCBBBB] rounded-lg'>
            <div className='flex items-center gap-4'>
              <BsPersonCircle />
              <p>{card.user.name}</p>
            </div>

            <div className='flex flex-col items-start justify-normal p-4 overflow-hidden '>
              <p className=''>{card.text}</p>
            </div>
            <div className='flex gap-4 '>
              <p>{card.Date}</p>
              <p>{card.Qn_No}</p>
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
        image: PropTypes.string.isRequired,
      }).isRequired,
      text: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
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
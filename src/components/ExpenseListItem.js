import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


// load a locale
numeral.register('locale', 'kr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'kr' : 'SKE';
    },
    currency: {
        symbol: 'kr'
    }
});

// switch between locales
numeral.locale('kr');

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
          <h3 className="list-item__title">{description}</h3>
          <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
      <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
      {/*<div>
        <h4 className="list-item__discription">{note}</h4>
      </div>*/}
    </Link>
);

export default ExpenseListItem;
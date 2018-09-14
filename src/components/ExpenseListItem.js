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
    <div>
         <Link to={`/edit/${id}`}>
             <h3>{description}</h3>
         </Link>
         <p>
         {numeral(amount / 100).format('$0,0.00')} 
         - 
         {moment(createdAt).format('MMMM Do, YYYY')}
         </p>
         <p>{note}</p>
         
    </div>
); 

export default ExpenseListItem;
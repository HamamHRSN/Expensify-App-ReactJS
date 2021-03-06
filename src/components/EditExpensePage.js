import React from 'react';
import { connect } from 'react-redux';
import  ExpenseForm  from './ExpenseForm';
// import { editExpense, removeExpense } from '../actions/expenses';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');                     
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}  
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>   
            </div>
        );
    }
};


// export class EditExpensePage extends React.Component {
    
//     onSubmit = (expense) => {
//         this.props.editExpense(this.props.expense.id, expense);
//         this.props.history.push('/');                     
//     };
//     onRemove = () => {
//         this.props.removeExpense({ id: this.props.expense.id });
//         this.props.history.push('/');
//     };
//     render() {
//         return (
//             <div>
//                 <ExpenseForm 
//                     expense={this.props.expense}
//                     onSubmit={this.onSubmit}  
//                 />
//                 <button onClick={this.onRemove}>Remove</button>
//             </div>
//         );
//     }
// };

// const EditExpensePage = (props) => {
    
//     console.log(props);
    
//     return (
//         <div>
//             {/*<h1>This Is From Edit Expense Page {props.match.params.id}</h1>*/}
//             <ExpenseForm 
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     //  console.log('Updated!', expense);
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
                     
//                 }}  
//             />
//             <button onClick={() => {
//                 props.dispatch(removeExpense({ id: props.expense.id }));
//                 props.history.push('/');
//            }}>Remove</button>
//         </div>
//     );
// };


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
         startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
         startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    };
 };

// const mapDispatchToProps = (dispatch, props) => {
//     return {
//          editExpense: (id, expense) => dispatch(editExpense(id, expense)),
//          removeExpense: (data) => dispatch(removeExpense(data))
//     };
//  };

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
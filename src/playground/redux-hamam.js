import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



const addLicense = (
    {
        license_Department = '',
        license_Description = '',
        license_Cost = 0,
        createdAt = 0
    } = {}
                   ) => ({
   type: 'ADD_LICENSE',
   license: {
    licenseId : uuid(),
    license_Department,
    license_Description,
    license_Cost,
    createdAt
   }
});


const removeLicense = ({licenseId} = {}) => ({
      type: 'REMOVE_LICENSE',
      licenseId
});


const editLicense = (licenseId, updates) => ({
    type: 'EDIT_LICENSE',
    licenseId,
    updates
});

const licenseReducerDefaultState = [];
const licenseReducer = (state = licenseReducerDefaultState, action) => {
    switch (action.type) {
       case 'ADD_LICENSE':
          return [
            ...state,
            action.license
          ];
       case 'REMOVE_LICENSE':
           return state.filter(({licenseId}) => licenseId !== action.licenseId);
       case 'EDIT_LICENSE':
           return state.map((license) => {
            if (license.licenseId === action.licenseId) {
                return {
                    ...license,
                    ...action.updates
                }
            } else {
                return license;
            }
           });
        default:
            return state;
    }
};


const store = createStore(combineReducers({
    licenses: licenseReducer
}));


store.subscribe(() => {
     console.log(store.getState());
     
});


const licenseOne = store.dispatch(addLicense({license_Department: 'Electric', license_Description: 'this is my Electric bill', license_Cost: 3000, createdAt: 3000}));
const licenseTwo = store.dispatch(addLicense({license_Department: 'Rent', license_Description: 'this is my rent bill', license_Cost: 1000, createdAt: 2500}));

store.dispatch((removeLicense({licenseId: licenseOne.license.licenseId})));

store.dispatch((editLicense(licenseTwo.license.licenseId, {license_Cost: 2000})));

const fasilitiesStudy = {
    licenses: [{
        licenseId: '1',
        license_Department: '',
        license_Requirements: [],
        license_Info: [],
        license_Description: '',
        license_Cost: 123,
        license_StartDate: 'Sdate',
        license_EndDate: 'Edate',
        license_Photo: 'Photo',
        createdAt: 0

    }],
    managment:{
        employees: [{
            employeeId: '1',
            employeeName: 'Anonymous',
            employeePosition: '',
            employeePositionPlace: '',
            employeeSalary: 1000,
            employeeStartDate: 'date',
            employeeEndDate: 'date'
        }],
        purchases: [{
            itemId: '1',
            itemInfo: '',
            itemSource: '',
            itemPrice: 123,
            itemPayingDate: 'date'
        }],
        sales: [{
            itemId: '1',
            itemInfo: '',
            itemPrice: 123,
            itemSalesDate: 'date'
        }],
        expenses: [{
            id: '123123H',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 91800,
            createdAt: 0
        }]

    },
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}


























// // console.log('hamam');


// import { createStore } from 'redux';

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// });

// const store = createStore((state = { count: 0 }, action) => {
//           switch (action.type) {
//               case 'INCREMENT':
//                   return {
//                      count: state.count +  action.incrementBy
//                   };
          
//               default:
//                   return state;
//           }
// });

// const unSubscribe = store.subscribe(() => {
//      console.log(store.getState());
     
// });


// // store.dispatch({
// //     type:'INCREMENT'
// // });

// // store.dispatch({
// //     type:'INCREMENT',
// //     incrementBy: 5
// // })

// store.dispatch(incrementCount());

// store.dispatch(incrementCount({ incrementBy : 10 }));



import React from "react";
import { connect } from "react-redux";
import 'react-dates/initialize';
import { DateRangePicker } from "react-dates"; //https://github.com/airbnb/react-dates
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";

import regeneratorRuntime from "regenerator-runtime"; 


export class ExpenseListFilters extends React.Component {
  state = {
      calendarFocused: null,
      startDate: this.props.filters.startDate,
      endDate: this.props.filters.endDate

  };

  onDatesChange = ({ startDate, endDate})=>{
      this.props.setStartDate(startDate);
      this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused)=>{
      this.setState(()=>({ calendarFocused }));
  };

  onTextChange = (e)=>{
      this.props.setTextFilter(e.target.value);
      };
  
  onSortChange = (e)=>{
      let v = e.target.value;
      if (v === 'amount'){
          this.props.sortByAmount();
      } else if(v === 'date'){
          this.props.sortByDate();
      };
  };

  render(){
      return  (
          <div className="content-container">
              <div className="input-group">
                  <div className="input-group__item">
                      <input 
                          type="text"
                          className="text-input"
                          placeholder="Search Expenses" 
                          value={this.props.filters.text} 
                          onChange={this.onTextChange}
                      />
                  </div>
                  <div className="input-group__item">
                      <select
                          className="select"  
                          value={this.props.filters.sortBy} 
                          onChange={this.onSortChange}>
                          <option value="date">Date</option>
                          <option value="amount">Amount</option>
                      </select>
                  </div>
                  <div className="input-group__item">
                      <DateRangePicker 
                          startDate={this.props.filters.startDate}
                          startDateId={"startDate"}
                          endDate={this.props.filters.endDate}
                          endDateId={"endDate"}
                          onDatesChange={this.onDatesChange}
                          focusedInput={this.state.calendarFocused}
                          onFocusChange={this.onFocusChange}
                          showClearDates={true}
                          numberOfMonths={1}
                          isOutsideRange={()=> false}
                      />
                  </div>
              </div>
          </div>
      );
  };
};
//onChange takes a funciton and every single time the input changes the function fires
// e is the event argument 
//e.target.value is the value text from the input
//focusedInput

const mapStateToProps = (state)=>({
  filters: state.filters
});

const mapDispatchToProps = (dispatch)=> ({
  setTextFilter: (text)=> dispatch(setTextFilter(text)),
  sortByDate: ()=> dispatch(sortByDate()),
  sortByAmount: ()=> dispatch(sortByAmount()),
  setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
  setEndDate: (endDate)=> dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
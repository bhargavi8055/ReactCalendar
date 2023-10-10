import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import CalendarComponent from './CalendarComponent';

test('renders the CalendarComponent with date March 23, 2020 ', () => {
  const date = new Date('2020-03-23');
  const { getByText } = render(<CalendarComponent passedDate={date} />);

  // Check if the rendered Calendar component displays the year and month correctly
  expect(getByText('March 2020')).toBeInTheDocument();


  // Check if the specified date (23) is present and highlighted
  expect(getByText('23').closest('button')).toHaveClass('react-calendar__tile--active');
});

test('renders the CalendarComponent with date October 3, 2022 ', () => {
  const date = new Date('2022-10-03');
  const { getByText } = render(<CalendarComponent passedDate={date} />);
 
  // Check if the rendered Calendar component displays the year and month correctly
  expect(getByText('October 2022')).toBeInTheDocument();
  
  expect(getByText('3').closest('button')).toHaveClass('react-calendar__tile--active');
});





/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('render the application', () => {
  render(<App />);
  const numberOfAttendees = 2;
  const selectAttendees = document.querySelector('select#attendeesSelect')!;
  const radioBadges = document.getElementsByName('badge');
  const radioAccomodation = document.getElementsByName('accomodation');
  const checkboxReady = document.getElementsByName('readyRock');
  expect(selectAttendees).toBeInTheDocument();
  radioBadges.forEach(radio => {
    expect(radio).toBeInTheDocument();
  });
  radioAccomodation.forEach(radio => {
    expect(radio).toBeInTheDocument();
  });
  checkboxReady.forEach(checkbox => {
    expect(checkbox).toBeInTheDocument();
  });
  fireEvent.change(selectAttendees, {target: { value: numberOfAttendees }});
  const attendeesInputs = document.querySelectorAll('[name^="attendee_"]');
  attendeesInputs.forEach(input => {
    expect(input).toBeInTheDocument();
    fireEvent.change(input, {target: { value: 'asdasdsa' }});
  });
  fireEvent.click(radioBadges[0]);
  const inputBadgeName = document.querySelector('#badgeName');
  expect(inputBadgeName).toBeInTheDocument();
  fireEvent.click(radioAccomodation[1]);
  fireEvent.click(checkboxReady[0]);
  const submitButton = document.querySelector('#submitButton')!;
  expect(submitButton).toBeInTheDocument();
  fireEvent.click(submitButton);
});

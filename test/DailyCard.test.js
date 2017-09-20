import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyCard from '../lib/Components/DailyCard/DailyCard.js';


describe('Daily Card', () => {

  let wrapper;


beforeEach( () => {
  wrapper = shallow (
    <DailyCard
      dayTime={'1 PM'}
      dayTempHigh={'85'}
      dayTempLow={'60'}
      dayIcon={'sunny'}
      dayCondition={'partly cloudy'}
    />
  )
})

it('should render time', () => {
  const dayTime = wrapper.find('.day');
  expect(dayTime.text()).toEqual('1 PM');
})

it('should render temp high', () => {
  const dayTempHigh = wrapper.find('.dayHigh');
  expect(dayTempHigh.text()).toEqual('88');
})

it('should render temp low', () => {
  const dayIcon = wrapper.find('.time');
  expect(dayIcon.text()).toEqual('');
})

it('should render day icon', () => {
  const condition = wrapper.find('.time');
  expect(condition.text()).toEqual('party cloudy');
})

it('should render day condition', () => {
  const condition = wrapper.find('.time');
  expect(condition.text()).toEqual('party cloudy');
})

})

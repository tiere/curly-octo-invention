import Dashboard   from '../../src/components/dashboard';
import React       from 'react';
import { expect }  from 'chai';
import { shallow } from 'enzyme';

describe("Dashboard", function () {
  it("contains html", function () {
    expect(shallow(<Dashboard />).contains(<div className="dashboard" />)).to.equal(true);
  });
});

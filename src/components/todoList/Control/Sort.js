import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by <span className="caret" />
              </button>
              {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a role="button">Name Asc</a></li>
                <li><a role="button">Name Desc</a></li>
                <li><a role="button">Level Asc</a></li>
                <li><a role="button">Level Desc</a></li>
              </ul> */}
              <span id="spSort" className="label label-success label-medium">Name Asc</span>
            </div>
          </div>
        );
    }
}

export default Sort;
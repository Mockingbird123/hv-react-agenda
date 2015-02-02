var React         = require('react');
var HvReactAgenda = require('hv-react-agenda');

var now = new Date(2015, 5, 24);
var items = [
  {
    name          : 'Snorlax, I choose you!',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()-7, 8, 24),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()-7, 8, 49),
    classes       : 'snorlax'
  },
  {
    name          : '\'Puff, I choose you!',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 12, 56),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 20, 14),
    classes       : 'jigglypuff'
  },
  {
    name          : 'Select this time',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 12, 56),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 16, 56),
    classes       : 'outline'
  },
  {
    name          : 'Pikachu, I choose you!',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 9, 35),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+3, 11, 49),
    classes       : 'pikachu'
  },
  {
    name          : 'Charizard, I choose you!',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+7, 9, 14),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+7, 17),
    classes       : 'charizard'
  }
];

var App = React.createClass({

  render: function() {
    return (
      <div>
        <HvReactAgenda startDate={now} startAtTime={7} items={items} />
      </div>
    )
  }

});

React.render(<App />, document.getElementsByTagName('body')[0]);
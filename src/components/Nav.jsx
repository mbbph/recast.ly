import Search from './Search.js';

var Nav = ({handleSearchInputChange}) => (
  <nav className="navbar">
    <div className="col-md-6 offset-md-3">
      <Search handleSearchInputChange={handleSearchInputChange}/>
    </div>
  </nav>
);

export default Nav;

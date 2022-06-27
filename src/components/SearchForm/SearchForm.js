// import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchForm({ onSubmit }) {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
 

 if (searchQuery.trim() === '') {
      return toast.error('Please try again.');
    }
    onSubmit(searchQuery);
    setSearchQuery('')
  }

    const handleChange = event => {
   setSearchQuery(event.currentTarget.value.toLowerCase())
  };

      return (
     
        <form onSubmit={handleSubmit} >
          <button type="submit" >
            <ImSearch />

      <span>Search</span>
    </button>

            <input
      onChange={handleChange}
      value={searchQuery}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search"
    />
  </form>

    )

}

// SearchForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }

export default SearchForm;
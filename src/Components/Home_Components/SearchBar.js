import React from 'react';

function SearchBar() {
  return (
    <div style={{ position: 'relative', width: '300px', margin: '20px auto' }}>
      <input
        type="text"
        placeholder="Search.."
        style={{
          width: '100%',
          padding: '10px 20px',
          borderRadius: '25px',
          border: '1px solid #ddd',
          boxSizing: 'border-box',
        }}
      />
      <button
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          padding: '5px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;

import React from 'react';

function HomeSearch() {
  return (
    <div>
      <div
        className="eGVWv f M q"
        role="tablist"
        data-automation="tab-list"
        style={{ display: 'flex', gap: '40px', justifyContent: 'center' }}
      >
        {/* HOME Button */}
        <button
          className="PFswe d Gv B- _S Mi Nj MH NL wSSLS BmgDU"
          role="tab"
          type="button"
          aria-selected="true"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            className="d Vb egaXP UmNoP"
            style={{ marginBottom: '5px' }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.889 3.542a.25.25 0 0 0-.278 0l-8 5.333a.25.25 0 0 0-.111.208v10.465c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25V9.083a.25.25 0 0 0-.111-.208zm-1.11-1.248a1.75 1.75 0 0 1 1.942 0l8 5.333c.487.325.779.871.779 1.456v10.465a1.75 1.75 0 0 1-1.75 1.75h-16A1.75 1.75 0 0 1 2 19.548V9.083c0-.585.292-1.131.78-1.456z"
              fill="black"
            ></path>
          </svg>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Home</span>
        </button>

        {/* Search Button */}
        <button
          className="PFswe d Gv B- _S Mi Nj MH NL wSSLS"
          role="tab"
          type="button"
          aria-selected="false"
          tabIndex="-1"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'gray',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            style={{ marginBottom: '5px' }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5336 5.12639C8.94493 5.12639 7.42135 5.75748 6.29801 6.88083C5.17467 8.00417 4.54358 9.52775 4.54358 11.1164C4.54358 12.705 5.17467 14.2286 6.29801 15.352C7.42135 16.4753 8.94493 17.1064 10.5336 17.1064C12.1222 17.1064 13.6458 16.4753 14.7691 15.352C15.8925 14.2286 16.5236 12.705 16.5236 11.1164C16.5236 9.52775 15.8925 8.00417 14.7691 6.88083C13.6458 5.75748 12.1222 5.12639 10.5336 5.12639ZM3.04358 11.1164C3.04355 9.91702 3.33155 8.73518 3.88335 7.67028C4.43515 6.60538 5.23461 5.68856 6.21449 4.99695C7.19437 4.30533 8.326 3.85914 9.51422 3.69591C10.7024 3.53268 11.9125 3.65718 13.0426 4.05894C14.1726 4.46071 15.1897 5.12798 16.0082 6.00463C16.8267 6.88129 17.4228 7.94169 17.7462 9.09664C18.0696 10.2516 18.1109 11.4673 17.8666 12.6415C17.6224 13.8158 17.0997 14.9142 16.3426 15.8444L21.7836 21.2864L20.7236 22.3474L15.2836 16.9074C14.1867 17.8071 12.8569 18.3767 11.4489 18.5501C10.0409 18.7235 8.61267 18.4934 7.33033 17.8867C6.04799 17.28 4.96431 16.3216 4.20541 15.123C3.44652 13.9245 3.04361 12.535 3.04358 11.1164Z"
              fill="black"
            />
          </svg>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Search</span>
        </button>
      </div>
    </div>
  );
}

export default HomeSearch;

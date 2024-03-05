import React, { useState } from 'react'
import { SearchInfo24Regular } from '@fluentui/react-icons';
import { useSearchParams } from 'react-router-dom';

function Search({placeholder, className}) {
    const [search, setSearch] = useState("");

    const [ searchParams, setSearchParams ] = useSearchParams();

    function handleClick() {
        setSearchParams({search: search});
        setSearch("");
    }
  return (
    <div className={'my-8 flex items-center justify-center ' + className}>
        <input placeholder={placeholder}
        type='text'
        value={search}
        onChange={event => setSearch(event.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        className='w-3/5 h-10 border-2 border-amber-700 rounded-lg px-2 mt-1 box-border'/>
         <div className='relative'>
                <SearchInfo24Regular className='absolute top-[-16px] right-2 px-4 py-1 box-content cursor-pointer' onClick={handleClick} />
            </div>
    </div>
    
  )
}

export default Search;
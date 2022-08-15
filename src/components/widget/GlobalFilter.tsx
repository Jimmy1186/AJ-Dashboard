import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'


function GlobalFilter({filter,setFilter}) {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
      setFilter(value || undefined)
    }, 1000)
  return (
   <span>
    Search:{' '}
    <input value={filter||''} onChange={(e)=>setFilter(e.target.value)} type="text" placeholder="Type here" className="input w-full max-w-xs" />
   </span>
  )
}

export default GlobalFilter
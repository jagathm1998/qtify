import {ReactComponent as SearchIcon } from './Search icon.svg'

function SearchBar() {
    return <form style={{
        display: 'flex',
        minWidth: '570px',
        
    }}>
        <input 
          placeholder='Search an album of your choice'
          style={{
            flex: 1,
            padding: '8px',
            borderRadius: '8px 0px 0px 8px',
            

          }}/>

        <button style={{
            width: '66px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            borderRadius: '0px 8px 8px 0px'
        }}>
            <SearchIcon />
        </button>
    </form>
    
}
export default SearchBar;
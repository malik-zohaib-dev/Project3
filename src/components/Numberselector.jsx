
import './NS.css'

const Numberselector = ({setError, error, selectedNumber,setSelectedNumber}) => {
const arrnmbr = [1, 2, 3, 4, 5, 6]

const numberselectorhandler = (value) => {
setSelectedNumber(value);
setError("");
}

 return (
    <div className='numberselectorcontainer'>
      <p className='text-red-500'>{error}</p>
        <div className='flex'>
            {arrnmbr.map((value, i) => {
          const isSelected = value === selectedNumber;
          return(
          <div 
          className={`box ${isSelected ? 'selected' : ''}`} 
          key={i} 
          onClick={() => numberselectorhandler(value) }
         >{value}
          </div>
        );
})}
        </div>
        <p>Select Number</p>
        </div>
  )
}

export default Numberselector
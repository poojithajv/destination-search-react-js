// Write your code here
import './index.css'

const DestinationItem = props => {
  const {countryDetails} = props
  const {name, imgUrl} = countryDetails
  return (
    <li className="list-container">
      <div className="list-items">
        <img src={imgUrl} className="image" alt={name} />
        <p className="place">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem

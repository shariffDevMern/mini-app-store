// TabItem.js
import './index.css'

const TabItem = props => {
  const {eachTab, selectedTab, onChangeActiveTab} = props
  const {displayText, tabId} = eachTab
  const highlightedTab = selectedTab ? 'active-tab' : ''
  const changeTab = () => {
    onChangeActiveTab(tabId)
  }

  return (
    <li onClick={changeTab} className={`tab-item ${highlightedTab}`}>
      <button type="button" className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

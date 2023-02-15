
function Tab({ children, activeTab, setActiveTab }) { 
    
    return (
        <div>
            <nav>
            {children.map((tab, index) => (
            <button key={index} className={
                activeTab === index ? "bg-green-100" : "bg-gray-100"
            }
                onClick={() => setActiveTab(index)}
            >{tab.props.title}
            </button>))}
            </nav>
            {children[activeTab]}
        </div>
    )
}

Tab.Panel = function ({ children }) {

    return (
        <div>{children}</div>
    )
}

export default Tab;
function Divider({ children}) {
    return (<div className="flex flex-col w-11/12 lg:flex-row mx-auto">
    <div className="grid flex-grow card bg-base-100 rounded-box shadow-md place-items-center lg:w-card p-5 w-full">{children[0]}</div> 
    <div className="divider lg:divider-horizontal">OU</div> 
    <div className="grid flex-grow w-card bg-base-100 rounded-box shadow-md place-items-center w-full p-5">{children[1]}</div>
  </div>)
}

export default Divider;
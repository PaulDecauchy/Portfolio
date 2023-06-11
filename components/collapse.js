{/* <div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>

<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
  <div className="collapse-title text-xl font-medium">
    Focus me to see content
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div> */}

function Collapse({title, content}) {
    return (
        <div  className="collapse collapse-arrow border border-base-300 bg-base-100 w-10/12 shadow-md mx-auto rounded-md">
            <input type="checkbox" /> 
            <div className="collapse-title  text-xl font-medium">
                {title}
            </div>
            <div className="collapse-content bg-base-100">
                <p className="pt-4"> {content} </p>
            </div>
        </div>

    )
}

export default Collapse;
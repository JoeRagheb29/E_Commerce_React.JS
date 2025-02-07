function RecursiveDisplay({myObj}) {
  return (
    <>
      {Object.entries(myObj).map(([key,value])=>(
        <li key={key}>
          {Array.isArray(value) ? 
            <>
              {key}:
              <ol>
                {value.map((subvalue , idx) => (
                  <li key={idx}>
                    {typeof subvalue === 'object' ?
                      <ul><RecursiveDisplay myObj={subvalue}/></ul>
                    : subvalue}
                  </li>
                ))}
              </ol>
            </>
            : typeof value === 'object' ? 
            <>
              {key}
              <ul><RecursiveDisplay myObj={value}/></ul>
            </>
            : 
              `${key}: ${value}`
          }
        </li>
      ))}
    </>
  )
}


export default RecursiveDisplay;
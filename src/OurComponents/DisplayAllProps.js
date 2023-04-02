import './DisplayAllProps.css';

function DisplayAllProps(props)
{
    let elements = [];

    for(let key in props)
    {
        let value = props[key];

        if(value instanceof Array)
        {
            let arrayValues = '[' ;
            for(let item of value)
            {
                arrayValues += item.toString() + ", ";
            }
            arrayValues += ']';

            value = arrayValues;
        }

        let elem = 
            <div>
                <label className='key' >{key}: </label>
                <span className='value'>{value}</span>
            </div>;
        elements.push(elem);
    }

    if(elements.length == 0)
    {
        elements.push("No properties here!");
    }

    return (
    <div className="allProps">
        {elements}
    </div>
    );
}

export default DisplayAllProps;
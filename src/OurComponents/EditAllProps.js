import './DisplayAllProps.css';

function EditAllProps(props)
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
        
        let type = 'text';
        if(typeof value == 'number')
        {
            type='number';
        }

        let elem = 
            <div>
                <label className='key' >{key}: </label>
                <input
                    value={value}
                    className='form-control input'
                    type={type} />
            </div>;
        elements.push(elem);
    }

    if(elements.length === 0)
    {
        elements.push("No properties here!");
    }

    return (
    <div className="allProps">
        {elements}
    </div>
    );
}

export default EditAllProps;
import DisplayAllProps from "./DisplayAllProps";
import EditAllProps from "./EditAllProps";
import MessageComp from "./MessageComp";

function SecondComponent(props) {
    let max = props.max ?? 10;
    let elements = [];
    let colors = ['red', 'blue', 'green', 'darkblue', 'silver', 'gold'];

    for (let i = 1; i <= max; i++) {
        let elem = {
            message: "Hello Georgia " + i,
            color: colors[i % colors.length],
            index: i,
        };
        elements.push(elem);
    }

    let footer = <footer>Georgia Developers!</footer>;

    return (

        <div>
            {elements.map(o =>
                <MessageComp
                    message={o.message}
                    color={o.color}
                    index={o.index}
                    another='sample'
                    evenAnother={5}
                    items={['red','green','blue']}
                    time={new Date().toLocaleTimeString()} />
            )}
            {footer}
        </div>
    );
}

export {SecondComponent};
import { useEffect, useState } from "react";


const DataFetcher = ({render, url}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (url.includes('desserts')) {
            setData(['cake', 'ice cream', 'pie', 'brownie']);
        } else {
            setData(['water', 'soda', 'juice']);
        }
    }, []);

    return render(data);
}


const DessertCount = () => {
    return (
        <DataFetcher
        url='https://little/lemon/dessert'
        render={(data) => <p>{data.length} desserts</p>}
        />
    )
}


const DrinksCount = () => {
    return (
        <DataFetcher
        url='https://littlelemon/drinks'
        render={(data) => <h3>{data.length} drinks</h3>}
        />
    )
}

function RenderProps() {
    return (
        <div>
            <DessertCount/>
            <DrinksCount/>
        </div>
    )
}

export default RenderProps;


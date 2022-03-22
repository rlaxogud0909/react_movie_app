import React, { useEffect, useState } from "react";

export default function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        // setTimeout(() => setLoading(false), 3000);
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((Response) => Response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The coin!</h1>
            {loading ? (
                <string>Loading...</string>
            ) : (
                <div>
                    {coins.map((coin) => (
                        <li>
                            {coin.name} ({coin.symbol}): $
                            {coin.quotes.USD.price}
                        </li>
                    ))}
                </div>
            )}
        </div>
    );
}

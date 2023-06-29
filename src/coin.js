//코인 리스트 과제
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [money, setMoney] = useState();
//   const arr = [];

//   const moneyHandler = (event) => {
//     setMoney(event.target.value);
//     console.log(event.target.value);
//   };

//   const moneyToCoin = () => {
//     coins.map((coin) => {
//       const coinValue = coin.quotes.USD.price;
//       arr.push(coinValue / money);
//     });
//   };

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>

//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <div>
//           <input
//             value={money}
//             onChange={moneyHandler}
//             type="number"
//             placeholder="how much"
//           ></input>
//           <button onClick={moneyToCoin}>enter</button>
//           <select>
//             {coins.map((coin) => (
//               <option>
//                 {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//               </option>
//             ))}
//           </select>
//           <h2>sdf</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// movie App

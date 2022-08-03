// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import "./styles.css";
//import IndexedLang from "./Components/IndexedLang";
import DateCreateOn from "./Components/DateCreateOn";

/*
The search-index record table should display following columns:
1) CreatedOn, date
2) Title
3) Category
4) Domain
5) Days until expired, int
6) Indexed languages, short-list
7) Unindexed languages, short-list
*) A column for each SERB with the indexed count in format "{indexedCount} / {indexedExpiredCount} / {indexedTotel}"
*/

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://serpindex-demo.svc.violetvault.com/api/Index")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return "Loading..."; 

  const languagesRef = [
    "ar-sa",
    "bn-bd",
    "bn-in",
    "cs-cz",
    "da-dk",
    "de-at",
    "de-ch",
    "de-de",
    "el-gr",
    "en-au",
    "en-ca",
    "en-gb",
    "en-ie",
    "en-in",
    "en-nz",
    "en-us",
    "en-za",
    "es-ar",
    "es-cl",
    "es-co",
    "es-es",
    "es-mx",
    "es-us",
    "fi-fi",
    "fr-be",
    "fr-ca",
    "fr-ch",
    "fr-fr",
    "he-il",
    "hi-in",
    "hu-hu",
    "id-id",
    "it-ch",
    "it-it",
    "ja-jp",
    "ko-kr", 
    "nl-be", 
    "nl-nl", 
    "no-no", 
    "pl-pl", 
    "pt-br", 
    "pt-pt",
    "ro-ro",
    "ru-ru",
    "sk-sk",
    "sv-se",
    "ta-in",
    "ta-lk",
    "th-th",
    "tr-tr",
    "zh-cn",
    "zh-hk",
    "zh-tw"
    ];

  /*console.log("el arreglo completo es ", data);
  const entry=data.map( (element) =>
    element.entries.map((entry) => entry.language)
  );
  console.log("las entries son ", entry);
  */

  return (
    <div>
      <table className="highlight">
        <thead>
          <tr>
            {/*<td>ID</td>*/}
            <th>Created ON</th>
            <th>Title</th>
            <th>Category</th>
            <th>Domain</th>
            <th>Days until expired (int)</th>
            <th>Indexed languages (short-list)</th>
            <th>Unindexed languages (short-list)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (   
            <tr key={element.id}>
              {/*<td>{element.id}</td>+/}
              {/*<td><DateCreateOn date={element.createdOn} /></td>*/}
              <td>{(new Date(element.createdOn).toLocaleDateString("en-US", "full"))}</td>
              <td>{element.title}</td>
              <td>{element.category}</td>
              <td>{element.domain}</td>
              <td>{parseInt(((Date.now() - (new Date(element.validUntil)))/(1000*60*60*24)),10)}</td>
              {/*<td><IndexedLang entry={element.entries}/></td>*/}
              <td>{element.entries.map((entry) => entry.language).join(" , ")}</td>
              {/*arr1.filter(elemento => arr2.indexOf(elemento) == -1);*/}
              <td>{(languagesRef.filter(langElement => ((element.entries.map((entry) => entry.language)).indexOf(langElement)) == -1)).join(" , ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
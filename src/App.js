import React, {useEffect, useState} from "react"
import {firestore} from "./firebase"
//import logo from './logo.svg';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);

  console.log(tweets);

  useEffect(() => {
    firestore.collection("tweets")
    .get()
    .then((snapshot) => {
      // const tweets = snapshot.forEach
      snapshot.forEach((doc) => {
        setTweets(doc.data())
      })
    });
    }, [])

  return (
    <div className="App">
      {
        tweets.map(tweet => (
          console.log(tweet)
        ))
      }
    </div>
  );
}

export default App;
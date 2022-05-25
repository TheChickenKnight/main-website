import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  const names = ['Red', 'Green', 'Yellow'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Head>
        <title>Among us?</title>
      </Head> 
      <h1>Among. Us.</h1>
      <h2>choose</h2>
      <ul>
        {names.map((name) => (
          <li><Link href="https://jakeis.web.app"><a>{name}</a></Link></li>
        ))}
      </ul>


      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
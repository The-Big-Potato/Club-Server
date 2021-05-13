import React from 'react';

import mushroom from "./images/mushroom.jpg";
let mush = <img src={mushroom} alt="Morel Mushroom"/>;

function Home() { // Start with Capital
    return <section>
<main>
	<header>
	<h1>East Bay Mushroom Hunting Association</h1>
	</header>
	{mush}
	<h2>What is Mushroom Hunting?</h2>
	<p>Explaining mushroom 🍄 hunting.</p>
	<h2>Why the East Bay?</h2>
	<p>Diverse area 🌲, unique climate.</p>
	<h2>Is it safe?</h2>
	<p>Teach you how to identify mushrooms.</p>
</main>
<footer>Copyright© 2021 East Bay Mushroom Hunting Association</footer>
</section>;
}

export default Home;
const facts = [
    "Being a 26-year-old anime and manga enthusiast, I grew up watching classic series like Naruto, Bleach, Death Note during their peak popularity in the late 2000s and early 2010s.",
        "My love for chess and anime might indicate that I particularly enjoyed 'No Game No Life' & 'The King's Gambit' as they combine strategic thinking with engaging storytelling.",
        "Having an interest in both sci-fi movies and anime suggests that I might be a big fan of groundbreaking anime films like 'Ghost in the Shell', 'Akira', or 'Steins;Gate' which blend both these elements.",
        "My enjoying the snow and strategic games like chess might indicate I am someone who appreciates both peaceful contemplation and logical thinking.",
        "The combination of my interests in chess, sci-fi, and Japanese media suggests I am likely someone who enjoys intellectual challenges and complex narratives across different cultural mediums.",
        "As a fan of sci-fi movies, I have a keen interest in futuristic technologies and the possibilities they hold for humanity.",
        "My love for snow could mean that I enjoy winter sports or simply the serene beauty of a snowy landscape.",
        "Being a manga enthusiast, I have a collection of manga volumes that I cherish and revisit often.",
        "My interest in anime and chess suggests that I appreciate stories that involve strategy, competition, and character development.",
        "As someone who enjoys sci-fi, I am fascinated by the concept of space exploration and the mysteries of the universe."
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});

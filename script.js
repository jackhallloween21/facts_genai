const facts = [
    "Being a 26-year-old anime and manga enthusiast, you probably grew up watching classic series like Naruto, Bleach, or Death Note during their peak popularity in the late 2000s and early 2010s.",
        "Your love for chess and anime might indicate that you particularly enjoyed 'No Game No Life' or 'The King's Gambit' as they combine strategic thinking with engaging storytelling.",
        "Having an interest in both sci-fi movies and anime suggests you might be a big fan of groundbreaking anime films like 'Ghost in the Shell', 'Akira', or 'Steins;Gate' which blend both these elements.",
        "Your enjoyment of snow and strategic games like chess might indicate you're someone who appreciates both peaceful contemplation and logical thinking.",
        "The combination of your interests in chess, sci-fi, and Japanese media suggests you're likely someone who enjoys intellectual challenges and complex narratives across different cultural mediums.",
        "As a fan of sci-fi movies, you might have a keen interest in futuristic technologies and the possibilities they hold for humanity.",
        "Your love for snow could mean you enjoy winter sports or simply the serene beauty of a snowy landscape.",
        "Being a manga enthusiast, you might have a collection of manga volumes that you cherish and revisit often.",
        "Your interest in anime and chess suggests you appreciate stories that involve strategy, competition, and character development.",
        "As someone who enjoys sci-fi, you might be fascinated by the concept of space exploration and the mysteries of the universe."
];

document.getElementById('generate-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});

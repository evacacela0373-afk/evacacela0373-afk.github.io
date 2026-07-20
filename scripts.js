const games = [
    {
        year: 1999,
        title: 'Soulcalibur',
        studio: 'Namco',
        creator: 'Project Soul',
        image: 'assets/covers/1999-soulcalibur.jpg',
        releaseDate: 'March 3, 1999',
        genres: ['Fighting', 'Action'],
        platforms: ['Arcade', 'Dreamcast'],
        rating: '8.9/10',
        description: 'Soulcalibur reinvented 3D weapons-based combat with elegant animation, memorable characters, and one of the most stylish fighting games ever made.',
        whyItMatters: 'It helped define the arcade-era fighting renaissance and became a benchmark for visual polish and accessibility.',
        highlight: 'Its fluid weapon combat and cinematic presentation set a new standard for the genre.'
    },
    {
        year: 2000,
        title: 'The Sims',
        studio: 'Maxis',
        creator: 'Will Wright',
        image: 'assets/covers/2000-the-sims.jpg',
        releaseDate: 'February 4, 2000',
        genres: ['Life Sim', 'Strategy'],
        platforms: ['Windows', 'Mac'],
        rating: '8.7/10',
        description: 'The Sims let players build homes, shape personalities, and create entire virtual lives in a sandbox that felt deeply personal.',
        whyItMatters: 'It transformed simulation games into a global phenomenon and popularized a new kind of open-ended storytelling.',
        highlight: 'Its modular lifestyle systems made player-driven stories feel effortless and irresistible.'
    },
    {
        year: 2001,
        title: 'Halo: Combat Evolved',
        studio: 'Bungie',
        creator: 'Jason Jones',
        image: 'assets/covers/2001-halo-combat-evolved.jpg',
        releaseDate: 'November 15, 2001',
        genres: ['First-person shooter', 'Sci-fi'],
        platforms: ['Xbox', 'Windows'],
        rating: '9.5/10',
        description: 'Halo: Combat Evolved delivered a cinematic sci-fi campaign and a refined control scheme that helped define the modern console shooter.',
        whyItMatters: 'It became the face of Xbox and pushed shooters toward more accessible, console-friendly design.',
        highlight: 'Its ring-world setting and polished gunplay made every mission feel like a blockbuster event.'
    },
    {
        year: 2002,
        title: 'Metroid Prime',
        studio: 'Retro Studios',
        creator: 'Mark Pacini',
        image: 'assets/covers/2002-metroid-prime.jpg',
        releaseDate: 'November 17, 2002',
        genres: ['Action-adventure', 'Sci-fi'],
        platforms: ['GameCube', 'Wii'],
        rating: '9.4/10',
        description: 'Metroid Prime successfully translated the exploration-led structure of 2D Metroid into a breathtaking first-person adventure.',
        whyItMatters: 'It proved that genre-defining franchises could thrive in new perspectives without losing their identity.',
        highlight: 'Its atmospheric environments and intricate map design made exploration feel magical.'
    },
    {
        year: 2003,
        title: 'The Legend of Zelda: The Wind Waker',
        studio: 'Nintendo EAD',
        creator: 'Eiji Aonuma',
        image: 'assets/covers/2003-the-legend-of-zelda-the-wind-waker.jpg',
        releaseDate: 'December 13, 2003',
        genres: ['Action-adventure', 'Fantasy'],
        platforms: ['GameCube'],
        rating: '9.2/10',
        description: 'The Wind Waker embraced a painterly art style and a rich sailing adventure that reimagined Zelda for a new generation.',
        whyItMatters: 'It showed how visual identity could shape the emotional tone of a franchise without sacrificing depth.',
        highlight: 'Its oceanic exploration and heartfelt story made every voyage feel legendary.'
    },
    {
        year: 2004,
        title: 'Halo 2',
        studio: 'Bungie',
        creator: 'Jason Jones',
        image: 'assets/covers/2004-halo-2.jpg',
        releaseDate: 'November 9, 2004',
        genres: ['First-person shooter', 'Sci-fi'],
        platforms: ['Xbox'],
        rating: '9.3/10',
        description: 'Halo 2 expanded the original with a more expansive campaign, new weapons, and a richer multiplayer structure.',
        whyItMatters: 'It helped cement online console gaming as a mainstream social experience.',
        highlight: 'Its multiplayer mode became a benchmark for online console competition.'
    },
    {
        year: 2005,
        title: 'Resident Evil 4',
        studio: 'Capcom',
        creator: 'Shinji Mikami',
        image: 'assets/covers/2005-resident-evil-4.jpg',
        releaseDate: 'January 11, 2005',
        genres: ['Action', 'Survival horror'],
        platforms: ['GameCube', 'PS2', 'Wii'],
        rating: '9.6/10',
        description: 'Resident Evil 4 redefined survival horror with blazing action, cinematic camera work, and a relentless village of threats.',
        whyItMatters: 'It pushed horror toward a more kinetic style while keeping tension at the center.',
        highlight: 'Its over-the-shoulder camera became one of the most influential design choices in modern action games.'
    },
    {
        year: 2006,
        title: 'The Legend of Zelda: Twilight Princess',
        studio: 'Nintendo EAD',
        creator: 'Eiji Aonuma',
        image: 'assets/covers/2006-the-legend-of-zelda-twilight-princess.jpg',
        releaseDate: 'November 19, 2006',
        genres: ['Action-adventure', 'Fantasy'],
        platforms: ['GameCube', 'Wii'],
        rating: '9.1/10',
        description: 'Twilight Princess delivered a darker, more mature take on Zelda with impressive scale and emotional storytelling.',
        whyItMatters: 'It widened the franchise’s tonal range while preserving the series’ core sense of wonder.',
        highlight: 'Its twilight mechanics introduced a striking visual and thematic twist.'
    },
    {
        year: 2007,
        title: 'BioShock',
        studio: 'Irrational Games',
        creator: 'Ken Levine',
        image: 'assets/covers/2007-bioshock.jpg',
        releaseDate: 'August 21, 2007',
        genres: ['First-person shooter', 'Story-rich'],
        platforms: ['Windows', 'PS3', 'Xbox 360'],
        rating: 9.4,
        description: 'BioShock combined atmospheric worldbuilding, philosophical themes, and a compelling first-person combat loop inside Rapture.',
        whyItMatters: 'It elevated narrative-driven shooters into a new era of immersive storytelling.',
        highlight: 'Its twisting plot and environmental storytelling made every discovery feel important.'
    },
    {
        year: 2008,
        title: 'Grand Theft Auto IV',
        studio: 'Rockstar North',
        creator: 'Dan Houser',
        image: 'assets/covers/2008-grand-theft-auto-iv.jpg',
        releaseDate: 'April 29, 2008',
        genres: ['Action-adventure', 'Open world'],
        platforms: ['PS3', 'Xbox 360', 'Windows'],
        rating: '9.5/10',
        description: 'GTA IV brought a grittier, more grounded version of Liberty City to life with a deeply character-driven narrative.',
        whyItMatters: 'It pushed open-world games toward stronger realism, emotional maturity, and social complexity.',
        highlight: 'Its lived-in city and morally messy missions felt dramatically richer than ever before.'
    },
    {
        year: 2009,
        title: 'Uncharted 2: Among Thieves',
        studio: 'Naughty Dog',
        creator: 'Amy Hennig',
        image: 'assets/covers/2009-uncharted-2-among-thieves.jpg',
        releaseDate: 'October 13, 2009',
        genres: ['Action-adventure', 'Third-person'],
        platforms: ['PS3'],
        rating: '9.5/10',
        description: 'Uncharted 2 delivered adventure set pieces and a polished cinematic flow that made action-platforming feel effortless.',
        whyItMatters: 'It helped define modern blockbuster gaming on consoles and raised the bar for interactive spectacle.',
        highlight: 'Its climbing, gunplay, and pacing made every chapter feel like a movie blockbuster.'
    },
    {
        year: 2010,
        title: 'Red Dead Redemption',
        studio: 'Rockstar San Diego',
        creator: 'Dan Houser',
        image: 'assets/covers/2010-red-dead-redemption.jpg',
        releaseDate: 'May 18, 2010',
        genres: ['Action-adventure', 'Western'],
        platforms: ['PS3', 'Xbox 360'],
        rating: '9.6/10',
        description: 'Red Dead Redemption created a vast, sun-drenched western with an unforgettable antihero and a deeply human story.',
        whyItMatters: 'It demonstrated how expansive worlds could be paired with intimate character work and emotional resonance.',
        highlight: 'Its frontier atmosphere made every journey feel like a living legend.'
    },
    {
        year: 2011,
        title: 'The Elder Scrolls V: Skyrim',
        studio: 'Bethesda Game Studios',
        creator: 'Todd Howard',
        image: 'assets/covers/2011-the-elder-scrolls-v-skyrim.jpg',
        releaseDate: 'November 11, 2011',
        genres: ['Action RPG', 'Open world'],
        platforms: ['Windows', 'PS3', 'Xbox 360'],
        rating: '9.0/10',
        description: 'Skyrim gave players a sprawling fantasy world packed with quests, lore, and endless possibilities for discovery.',
        whyItMatters: 'It became one of the most influential open-world RPGs ever released and inspired countless creators.',
        highlight: 'Its freedom of exploration and modding support made it a timeless sandbox fantasy.'
    },
    {
        year: 2012,
        title: 'Journey',
        studio: 'Thatgamecompany',
        creator: 'Jenova Chen',
        image: 'assets/covers/2012-journey.jpg',
        releaseDate: 'March 13, 2012',
        genres: ['Adventure', 'Indie'],
        platforms: ['PS3', 'PS4', 'PS5'],
        rating: '9.2/10',
        description: 'Journey turned a simple travel experience into an emotional, wordless masterpiece about connection and discovery.',
        whyItMatters: 'It showed that elegant design and restraint could make games feel deeply personal and universal.',
        highlight: 'Its poetic presentation and anonymous online interactions created an unforgettable bond.'
    },
    {
        year: 2013,
        title: 'The Last of Us',
        studio: 'Naughty Dog',
        creator: 'Neil Druckmann',
        image: 'assets/covers/2013-the-last-of-us.jpg',
        releaseDate: 'June 14, 2013',
        genres: ['Action-adventure', 'Survival'],
        platforms: ['PS3', 'PS4'],
        rating: '9.4/10',
        description: 'The Last of Us blended survival gameplay with an intimate, character-driven story about loss, love, and humanity.',
        whyItMatters: 'It elevated narrative-driven games to a level that felt cinematic without losing interactivity.',
        highlight: 'Its characters and emotional stakes made every encounter feel meaningful.'
    },
    {
        year: 2014,
        title: 'Dragon Age: Inquisition',
        studio: 'BioWare',
        creator: 'Mike Laidlaw',
        image: 'assets/covers/2014-dragon-age-inquisition.jpg',
        releaseDate: 'November 18, 2014',
        genres: ['Action RPG', 'Fantasy'],
        platforms: ['Windows', 'PS3', 'PS4', 'Xbox 360', 'Xbox One'],
        rating: '8.8/10',
        description: 'Inquisition brought tactical combat and party-based storytelling together in a rich fantasy campaign with vast scale.',
        whyItMatters: 'It reminded players that party RPGs could still feel fresh and ambitious in a crowded era.',
        highlight: 'Its world-state systems gave each playthrough a distinct sense of consequence.'
    },
    {
        year: 2015,
        title: 'The Witcher 3: Wild Hunt',
        studio: 'CD PROJEKT RED',
        creator: 'Mateusz Tomaszkiewicz',
        image: 'assets/covers/2015-the-witcher-3-wild-hunt.jpg',
        releaseDate: 'May 19, 2015',
        genres: ['Action RPG', 'Fantasy'],
        platforms: ['Windows', 'PS4', 'Xbox One'],
        rating: '9.3/10',
        description: 'The Witcher 3 delivered a sweeping fantasy world filled with side quests, lore, and morally complex choices.',
        whyItMatters: 'It became a landmark for open-world RPGs by blending exploration, narrative, and world design.',
        highlight: 'Its side quests became so beloved that they transformed the expectation for content depth.'
    },
    {
        year: 2016,
        title: 'Overwatch',
        studio: 'Blizzard Entertainment',
        creator: 'Jeff Kaplan',
        image: 'assets/covers/2016-overwatch.jpg',
        releaseDate: 'May 24, 2016',
        genres: ['Hero shooter', 'Team-based'],
        platforms: ['Windows', 'PS4', 'Xbox One'],
        rating: '9.0/10',
        description: 'Overwatch brought a bright, accessible hero shooter to life with sharp teamwork, dynamic abilities, and a strong competitive identity.',
        whyItMatters: 'It shaped the modern esports and live-service era by turning team play into a spectacle.',
        highlight: 'Its hero roster and quick rounds made it instantly approachable yet deeply strategic.'
    },
    {
        year: 2017,
        title: 'The Legend of Zelda: Breath of the Wild',
        studio: 'Nintendo',
        creator: 'Eiji Aonuma',
        image: 'assets/covers/2017-the-legend-of-zelda-breath-of-the-wild.jpg',
        releaseDate: 'March 3, 2017',
        genres: ['Action-adventure', 'Open world'],
        platforms: ['Switch', 'Wii U'],
        rating: '9.8/10',
        description: 'Breath of the Wild redefined the action-adventure genre with a physics-driven world and striking freedom of exploration.',
        whyItMatters: 'It influenced countless games by proving that systems-driven design could be both elegant and emotionally resonant.',
        highlight: 'Its open-ended puzzles and emergent moments made every climb feel meaningful.'
    },
    {
        year: 2018,
        title: 'Red Dead Redemption 2',
        studio: 'Rockstar Studios',
        creator: 'Rob Nelson',
        image: 'assets/covers/2018-red-dead-redemption-2.jpg',
        releaseDate: 'October 26, 2018',
        genres: ['Action-adventure', 'Western'],
        platforms: ['PS4', 'Xbox One', 'Windows'],
        rating: '9.7/10',
        description: 'Red Dead Redemption 2 delivered a cinematic frontier story packed with rich worldbuilding, believable characters, and meticulous detail.',
        whyItMatters: 'It stands as one of the strongest examples of environmental storytelling and systemic world design.',
        highlight: 'Its dynamic wildlife and characters made the world feel alive in every direction.'
    },
    {
        year: 2019,
        title: 'Death Stranding',
        studio: 'Kojima Productions',
        creator: 'Hideo Kojima',
        image: 'assets/covers/2019-death-stranding.jpg',
        releaseDate: 'November 8, 2019',
        genres: ['Action', 'Walking sim'],
        platforms: ['PS4', 'Windows'],
        rating: '8.7/10',
        description: 'Death Stranding used a strange yet fascinating premise to explore connection, loneliness, and the power of human bonds.',
        whyItMatters: 'It became a defining example of how unusual concepts can grow into a deeply memorable experience.',
        highlight: 'Its asynchronous multiplayer and delivery loop created a uniquely reflective gameplay rhythm.'
    },
    {
        year: 2020,
        title: 'The Last of Us Part II',
        studio: 'Naughty Dog',
        creator: 'Neil Druckmann',
        image: 'assets/covers/2020-the-last-of-us-part-ii.jpg',
        releaseDate: 'June 19, 2020',
        genres: ['Action-adventure', 'Survival'],
        platforms: ['PS4'],
        rating: '9.2/10',
        description: 'The Last of Us Part II pushed narrative ambition further with an emotionally punishing story and brutally precise combat.',
        whyItMatters: 'It sparked major conversations about themes, pacing, and the boundaries of interactive storytelling.',
        highlight: 'Its commitment to emotional complexity made it one of the most debated releases of the decade.'
    },
    {
        year: 2021,
        title: 'Elden Ring',
        studio: 'FromSoftware',
        creator: 'Hidetaka Miyazaki',
        image: 'assets/covers/2021-elden-ring.jpg',
        releaseDate: 'February 25, 2021',
        genres: ['Action RPG', 'Fantasy'],
        platforms: ['Windows', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X/S'],
        rating: '9.7/10',
        description: 'Elden Ring fused FromSoftware’s signature challenge with a vast open world full of secrets, lore, and vertical exploration.',
        whyItMatters: 'It brought the studio’s unique sensibility to an even wider audience without diluting its identity.',
        highlight: 'Its environmental storytelling and boss encounters made discovery feel mythical and dangerous.'
    },
    {
        year: 2022,
        title: 'God of War Ragnarök',
        studio: 'Santa Monica Studio',
        creator: 'Cory Barlog',
        image: 'assets/covers/2022-god-of-war-ragnarok.jpg',
        releaseDate: 'November 9, 2022',
        genres: ['Action-adventure', 'Mythology'],
        platforms: ['PS4', 'PS5'],
        rating: '9.6/10',
        description: 'Ragnarök expanded the emotional journey of Kratos and Atreus with breathtaking combat, rich mythology, and striking production values.',
        whyItMatters: 'It proved that a long-running action series could still evolve into something deeply personal and modern.',
        highlight: 'Its scale and emotional payoff made it a true showcase for cinematic action design.'
    },
    {
        year: 2023,
        title: "Baldur's Gate 3",
        studio: 'Larian Studios',
        creator: 'Swen Vincke',
        image: "assets/covers/2023-baldurs-gate-3.jpg",
        releaseDate: 'August 3, 2023',
        genres: ['RPG', 'Fantasy'],
        platforms: ['Windows', 'PS5', 'Xbox Series X/S'],
        rating: '9.8/10',
        description: 'Baldur’s Gate 3 delivered a rich, reactive RPG experience where choice, consequence, and party dynamics felt truly alive.',
        whyItMatters: 'It brought the D&D tradition into a new era of player-driven storytelling and tactical depth.',
        highlight: 'Its branching conversations and detailed companions made role-playing feel personal and dynamic.'
    },
    {
        year: 2024,
        title: 'Astro Bot',
        studio: 'Team Asobi',
        creator: 'Nobuhiro Ootani',
        image: 'assets/covers/2024-astro-bot.jpg',
        releaseDate: 'September 6, 2024',
        genres: ['Platformer', 'Adventure'],
        platforms: ['PS5'],
        rating: '9.5/10',
        description: 'Astro Bot celebrates PlayStation history through joyful platforming, inventive level design, and delightful references that feel earned.',
        whyItMatters: 'It reminds the industry that charm, precision, and celebration can still define a modern platformer.',
        highlight: 'Its playful levels and heartfelt homage to PlayStation classics make it feel like a love letter to gaming itself.'
    }
];

const yearGrid = document.querySelector('.year-grid');
const resultsList = document.getElementById('resultsList');
const gameContainer = document.getElementById('gameContainer');
const resultsSummary = document.getElementById('resultsSummary');
const searchInput = document.getElementById('searchInput');
const exploreBtn = document.getElementById('exploreBtn');
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
const heroCollage = document.querySelector('.hero-collage');

let selectedYear = 1999;

function createYearButtons() {
    games.forEach((game) => {
        const button = document.createElement('button');
        button.className = 'year';
        button.type = 'button';
        button.textContent = game.year;

        button.addEventListener('click', () => {
            selectedYear = game.year;
            render();
            document.getElementById('games').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        yearGrid.appendChild(button);
    });
}

function getVisibleGames(term) {
    const query = term.trim().toLowerCase();

    if (!query) {
        return games;
    }

    return games.filter((game) => {
        const haystack = [
            game.title,
            game.studio,
            game.description,
            game.genres.join(' '),
            game.platforms.join(' '),
            game.year.toString()
        ].join(' ').toLowerCase();

        return haystack.includes(query);
    });
}

function renderResults() {
    const visibleGames = getVisibleGames(searchInput.value);

    if (visibleGames.length === 0) {
        resultsList.innerHTML = '<div class="result-card"><strong>No matches found</strong><span>Try another genre, studio, or year.</span></div>';
        resultsSummary.textContent = 'No results';
        return;
    }

    resultsSummary.textContent = `${visibleGames.length} game${visibleGames.length > 1 ? 's' : ''} matched`;

    resultsList.innerHTML = visibleGames.map((game) => {
        const isActive = game.year === selectedYear;
        return `
            <button class="result-card ${isActive ? 'active' : ''}" type="button" data-year="${game.year}">
                <strong>${game.title}</strong>
                <span>${game.year} • ${game.studio}</span>
            </button>
        `;
    }).join('');

    resultsList.querySelectorAll('.result-card').forEach((button) => {
        button.addEventListener('click', () => {
            selectedYear = Number(button.getAttribute('data-year'));
            render();
        });
    });
}

function renderGame() {
    const game = games.find((entry) => entry.year === selectedYear);

    if (!game) {
        gameContainer.innerHTML = '<p class="subtitle">No game information is available for this year yet.</p>';
        return;
    }

    const currentIndex = games.findIndex((entry) => entry.year === game.year);
    const previousGame = currentIndex > 0 ? games[currentIndex - 1] : null;
    const nextGame = currentIndex < games.length - 1 ? games[currentIndex + 1] : null;

    gameContainer.innerHTML = `
        <div class="detail-shell">
            <div class="detail-top">
                <div class="detail-hero">
                    <img src="${game.image}" alt="${game.title}">
                    <div class="detail-overlay">
                        <div class="detail-badges">
                            <span class="meta-pill">${game.year}</span>
                            <span class="rating-pill">⭐ ${game.rating}</span>
                        </div>
                        <h2>${game.title}</h2>
                        <p>${game.description}</p>
                        <div class="action-buttons">
                            <a class="action-button" href="https://en.wikipedia.org/wiki/${encodeURIComponent(game.title)}" target="_blank" rel="noreferrer">Wikipedia</a>
                            <a class="action-button" href="https://www.youtube.com/results?search_query=${encodeURIComponent(game.title + ' gameplay')}" target="_blank" rel="noreferrer">Gameplay</a>
                            <a class="action-button" href="https://www.youtube.com/results?search_query=${encodeURIComponent(game.title + ' trailer')}" target="_blank" rel="noreferrer">Trailer</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="detail-content">
                <div class="detail-copy">
                    <div class="detail-nav">
                        <button class="nav-button" data-direction="prev" ${previousGame ? '' : 'disabled'}>${previousGame ? '← Previous' : 'Start of timeline'}</button>
                        <div class="meta-pill">${game.year} • ${game.studio}</div>
                        <button class="nav-button" data-direction="next" ${nextGame ? '' : 'disabled'}>${nextGame ? 'Next →' : 'End of timeline'}</button>
                    </div>
                    <div class="detail-card">
                        <h3>Overview</h3>
                        <p>${game.whyItMatters}</p>
                    </div>
                    <div class="detail-card">
                        <h3>Signature hook</h3>
                        <p>${game.highlight}</p>
                    </div>
                    <div class="info-grid">
                        <div class="detail-card">
                            <h3>Genres</h3>
                            <p>${game.genres.join(' • ')}</p>
                        </div>
                        <div class="detail-card">
                            <h3>Platforms</h3>
                            <p>${game.platforms.join(' • ')}</p>
                        </div>
                        <div class="detail-card">
                            <h3>Release Date</h3>
                            <p>${game.releaseDate}</p>
                        </div>
                        <div class="detail-card">
                            <h3>Rating</h3>
                            <p>${game.rating}</p>
                        </div>
                    </div>
                </div>
                <aside class="detail-sidebar">
                    <div class="detail-card">
                        <h3>Quick Facts</h3>
                        <ul class="fact-list">
                            <li><span>Developer</span><strong>${game.studio}</strong></li>
                            <li><span>Creator</span><strong>${game.creator}</strong></li>
                            <li><span>Release</span><strong>${game.year}</strong></li>
                            <li><span>Rating</span><strong>${game.rating}</strong></li>
                        </ul>
                    </div>
                    <div class="detail-card accent-card">
                        <h3>Interesting fact</h3>
                        <p>${game.highlight}</p>
                    </div>
                </aside>
            </div>
        </div>
    `;

    gameContainer.querySelectorAll('.nav-button').forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.getAttribute('data-direction');
            const currentIndex = games.findIndex((entry) => entry.year === selectedYear);
            const targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
            const targetGame = games[targetIndex];

            if (targetGame) {
                selectedYear = targetGame.year;
                render();
            }
        });
    });
}

function renderYearButtons() {
    document.querySelectorAll('.year').forEach((button) => button.classList.toggle('active', Number(button.textContent) === selectedYear));
}

function render() {
    renderResults();
    renderGame();
    renderYearButtons();
}

createYearButtons();

searchInput.addEventListener('input', render);

exploreBtn.addEventListener('click', () => {
    document.getElementById('years').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    if (hero && heroCollage) {
        const offset = window.scrollY * 0.08;
        heroCollage.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
});

window.addEventListener('mousemove', (event) => {
    if (!hero) {
        return;
    }

    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    hero.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(0)`;
});

window.addEventListener('mouseleave', () => {
    if (hero) {
        hero.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    }
});

render();

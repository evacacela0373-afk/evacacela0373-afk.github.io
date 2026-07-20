const games = [
    {
        year: 1999,
        title: 'Dino Crisis',
        studio: 'Capcom',
        creator: 'Shinji Mikami',
        image: 'assets/covers/1999-dino-crisis.jpg',
        releaseDate: 'July 1, 1999',
        genres: ['Action-adventure', 'Survival horror'],
        platforms: ['PlayStation'],
        rating: '8.1/10',
        description: 'Dino Crisis brought tense survival horror to a prehistoric setting with quick action, limited resources, and a memorable sense of panic.',
        whyItMatters: 'It helped expand the survival-horror formula into a more cinematic, action-forward experience.',
        highlight: 'Its combination of dinosaurs, tight pacing, and escalating danger made every room feel dangerous.'
    },
    {
        year: 2000,
        title: 'Spyro: Year of the Dragon',
        studio: 'Insomniac Games',
        creator: 'Craig Stitt',
        image: '',
        releaseDate: 'October 24, 2000',
        genres: ['Platformer', 'Adventure'],
        platforms: ['PlayStation'],
        rating: '8.6/10',
        description: 'Spyro: Year of the Dragon refined the mascot-platformer formula with bright worlds, collectible challenges, and a lighter, more playful tone.',
        whyItMatters: 'It showed how a polished 3D platformer could stay accessible while still feeling packed with personality.',
        highlight: 'Its colorful levels and charming character design made it one of the most approachable games of its era.'
    },
    {
        year: 2001,
        title: 'Silent Hill 2',
        studio: 'Team Silent',
        creator: 'Keiichiro Toyama',
        image: 'assets/covers/2001-silent-hill-2.jpg',
        releaseDate: 'September 24, 2001',
        genres: ['Survival horror', 'Psychological'],
        platforms: ['PlayStation 2'],
        rating: '9.3/10',
        description: 'Silent Hill 2 became a landmark in psychological horror with a haunting atmosphere, emotional storytelling, and deeply unsettling imagery.',
        whyItMatters: 'It raised the emotional and narrative ambition of horror games and pushed the genre toward greater maturity.',
        highlight: 'Its foggy town and personal themes turned every encounter into a deeply reflective experience.'
    },
    {
        year: 2002,
        title: 'Kingdom Hearts',
        studio: 'Square',
        creator: 'Tetsuya Nomura',
        image: 'assets/covers/2002-kingdom-hearts.jpg',
        releaseDate: 'March 28, 2002',
        genres: ['Action RPG', 'Fantasy'],
        platforms: ['PlayStation 2'],
        rating: '8.8/10',
        description: 'Kingdom Hearts merged Disney-inspired worlds with action combat and an emotional original story that resonated with a huge audience.',
        whyItMatters: 'It helped define the crossover RPG trend and made squarely emotional storytelling feel mainstream.',
        highlight: 'Its blend of beloved worlds and original characters gave it a signature identity from the start.'
    },
    {
        year: 2003,
        title: 'Fatal Frame II: Crimson Butterfly',
        studio: 'Tecmo',
        creator: 'Makoto Shibata',
        image: 'assets/covers/2003-fatal-frame-ii-crimson-butterfly.jpg',
        releaseDate: 'December 12, 2003',
        genres: ['Survival horror', 'Psychological'],
        platforms: ['PlayStation 2'],
        rating: '8.5/10',
        description: 'Fatal Frame II built tension through supernatural encounters, unsettling visuals, and a slow-burning sense of dread.',
        whyItMatters: 'It demonstrated how psychological horror could be made more intimate and immersive through restraint.',
        highlight: 'Its haunted village setting and camera-driven scares made every exploration feel precarious.'
    },
    {
        year: 2004,
        title: 'Metal Gear Solid 3: Snake Eater',
        studio: 'Konami Computer Entertainment Japan',
        creator: 'Hideo Kojima',
        image: 'assets/covers/2004-metal-gear-solid-3-snake-eater.jpg',
        releaseDate: 'November 17, 2004',
        genres: ['Action-adventure', 'Stealth'],
        platforms: ['PlayStation 2'],
        rating: '9.2/10',
        description: 'Metal Gear Solid 3: Snake Eater returned the series to its roots with a tense jungle setting and a more grounded stealth experience.',
        whyItMatters: 'It deepened the series’ lore while sharpening its stealth mechanics and emotional storytelling.',
        highlight: 'Its survivalist tone and memorable boss encounters made it one of the most acclaimed stealth games ever made.'
    },
    {
        year: 2005,
        title: 'Shadow of the Colossus',
        studio: 'Team Ico',
        creator: 'Fumito Ueda',
        image: '',
        releaseDate: 'October 18, 2005',
        genres: ['Action-adventure', 'Fantasy'],
        platforms: ['PlayStation 2'],
        rating: '9.5/10',
        description: 'Shadow of the Colossus delivered a sparse, majestic adventure in which each giant encounter felt like a personal ritual.',
        whyItMatters: 'It proved that minimalism and scale could create a profoundly emotional experience.',
        highlight: 'Its giant-scale encounters and quiet atmosphere made every journey feel intimate and monumental.'
    },
    {
        year: 2006,
        title: 'Final Fantasy XII',
        studio: 'Square Enix',
        creator: 'Hiroshi Minagawa',
        image: 'assets/covers/2006-final-fantasy-xii.jpg',
        releaseDate: 'March 16, 2006',
        genres: ['JRPG', 'Fantasy'],
        platforms: ['PlayStation 2'],
        rating: '8.7/10',
        description: 'Final Fantasy XII introduced a more tactical battle system and an ambitious world built around political intrigue and a richly layered setting.',
        whyItMatters: 'It pushed the series toward a more strategic style while keeping its signature scale and spectacle intact.',
        highlight: 'Its gambit system made combat feel dynamic and highly readable from the start.'
    },
    {
        year: 2007,
        title: 'Persona 3 FES',
        studio: 'Atlus',
        creator: 'Katsura Hashino',
        image: '',
        releaseDate: 'April 19, 2007',
        genres: ['JRPG', 'Social sim'],
        platforms: ['PlayStation 2'],
        rating: '9.0/10',
        description: 'Persona 3 FES blended dungeon crawling with school-life simulation in a story that balanced everyday routine with supernatural drama.',
        whyItMatters: 'It helped define the modern social-RPG structure that later games would expand upon.',
        highlight: 'Its calendar-based progression gave the game a strong sense of time, rhythm, and consequence.'
    },
    {
        year: 2008,
        title: 'Metal Gear Solid 4: Guns of the Patriots',
        studio: 'Kojima Productions',
        creator: 'Hideo Kojima',
        image: 'assets/covers/2008-metal-gear-solid-4-guns-of-the-patriots.jpg',
        releaseDate: 'June 12, 2008',
        genres: ['Action-adventure', 'Stealth'],
        platforms: ['PlayStation 3'],
        rating: '9.0/10',
        description: 'Metal Gear Solid 4 delivered a towering finale to Solid Snake’s story with cinematic presentation, refined stealth, and huge production scope.',
        whyItMatters: 'It showcased how action games could merge spectacle, politics, and character work into a single, coherent experience.',
        highlight: 'Its cinematic set pieces and memorable boss fights gave the series a grand closing chapter.'
    },
    {
        year: 2009,
        title: 'Uncharted 2: Among Thieves',
        studio: 'Naughty Dog',
        creator: 'Amy Hennig',
        image: '',
        releaseDate: 'October 13, 2009',
        genres: ['Action-adventure', 'Third-person'],
        platforms: ['PlayStation 3'],
        rating: '9.5/10',
        description: 'Uncharted 2: Among Thieves set a new benchmark for cinematic action-adventure with fluid movement, unforgettable set pieces, and a confident sense of momentum.',
        whyItMatters: 'It became a touchstone for blockbuster game design and helped define modern action-adventure pacing.',
        highlight: 'Its climbing, gunplay, and scripted spectacle made every scene feel larger than life.'
    },
    {
        year: 2010,
        title: 'Red Dead Redemption',
        studio: 'Rockstar San Diego',
        creator: 'Dan Houser',
        image: 'assets/covers/2010-red-dead-redemption.jpg',
        releaseDate: 'May 18, 2010',
        genres: ['Action-adventure', 'Western'],
        platforms: ['PlayStation 3', 'Xbox 360'],
        rating: '9.6/10',
        description: 'Red Dead Redemption created a sprawling western with an unforgettable antihero and a deeply human story shaped by loss and freedom.',
        whyItMatters: 'It showed that open worlds could feel intimate, morally complex, and emotionally resonant at once.',
        highlight: 'Its frontier atmosphere and living world made every journey feel meaningful.'
    },
    {
        year: 2011,
        title: 'Dark Souls',
        studio: 'FromSoftware',
        creator: 'Hidetaka Miyazaki',
        image: 'assets/covers/2011-dark-souls.jpg',
        releaseDate: 'September 22, 2011',
        genres: ['Action RPG', 'Soulslike'],
        platforms: ['PlayStation 3', 'Xbox 360', 'Windows'],
        rating: '9.3/10',
        description: 'Dark Souls introduced a demanding, atmospheric action RPG built around exploration, careful combat, and a mysterious world full of lore.',
        whyItMatters: 'It transformed difficulty into a design philosophy and inspired an entire generation of action RPGs.',
        highlight: 'Its interconnected level design and punishing combat made discovery feel both rewarding and terrifying.'
    },
    {
        year: 2012,
        title: 'Persona 4 Golden',
        studio: 'Atlus',
        creator: 'Katsura Hashino',
        image: 'assets/covers/2012-persona-4-golden.jpg',
        releaseDate: 'June 14, 2012',
        genres: ['JRPG', 'Social sim'],
        platforms: ['PlayStation Vita', 'Windows', 'Switch', 'PS4'],
        rating: '9.1/10',
        description: 'Persona 4 Golden combined a small-town mystery with stylish turn-based combat and a deeply compelling cast of friends.',
        whyItMatters: 'It elevated the social-RPG format into one of the most emotionally resonant experiences of its generation.',
        highlight: 'Its everyday life and supernatural investigation loop made the game feel both grounded and magical.'
    },
    {
        year: 2013,
        title: 'The Last of Us',
        studio: 'Naughty Dog',
        creator: 'Neil Druckmann',
        image: 'assets/covers/2013-the-last-of-us.jpg',
        releaseDate: 'June 14, 2013',
        genres: ['Action-adventure', 'Survival'],
        platforms: ['PlayStation 3'],
        rating: '9.4/10',
        description: 'The Last of Us blended survival gameplay with a heartbreakingly human story about love, loss, and the cost of staying alive.',
        whyItMatters: 'It became a landmark in narrative-driven games and set a new standard for emotional storytelling.',
        highlight: 'Its character work and environmental storytelling made every encounter feel personal and consequential.'
    },
    {
        year: 2014,
        title: 'The Legend of Heroes: Trails of Cold Steel',
        studio: 'Nihon Falcom',
        creator: 'Masayoshi',
        image: 'assets/covers/2014-the-legend-of-heroes-trails-of-cold-steel.jpg',
        releaseDate: 'November 11, 2014',
        genres: ['JRPG', 'Turn-based'],
        platforms: ['PlayStation 3', 'PlayStation Vita'],
        rating: '8.7/10',
        description: 'Trails of Cold Steel delivered a thoughtful school-based RPG with dense worldbuilding, memorable school politics, and a rich cast of allies.',
        whyItMatters: 'It introduced many players to a deeper, more literary style of JRPG storytelling.',
        highlight: 'Its focus on dialogue, character relationships, and political intrigue made it stand apart.'
    },
    {
        year: 2015,
        title: 'Bloodborne',
        studio: 'FromSoftware',
        creator: 'Hidetaka Miyazaki',
        image: '',
        releaseDate: 'March 24, 2015',
        genres: ['Action RPG', 'Soulslike'],
        platforms: ['PlayStation 4'],
        rating: '9.3/10',
        description: 'Bloodborne fused gothic horror with fast, aggressive combat to create one of the most distinctive action RPGs of its generation.',
        whyItMatters: 'It pushed the Soulslike formula toward greater speed, atmosphere, and menace.',
        highlight: 'Its Victorian setting and relentless pacing made every encounter feel dangerous and thrilling.'
    },
    {
        year: 2016,
        title: 'Dark Souls III',
        studio: 'FromSoftware',
        creator: 'Hidetaka Miyazaki',
        image: 'assets/covers/2016-dark-souls-iii.jpg',
        releaseDate: 'March 24, 2016',
        genres: ['Action RPG', 'Soulslike'],
        platforms: ['PlayStation 4', 'Xbox One', 'Windows'],
        rating: '9.5/10',
        description: 'Dark Souls III sharpened the series’ combat and world design into a more focused, elegant expression of the formula.',
        whyItMatters: 'It capped off the trilogy with a refined version of its core ideas and a strong legacy of influence.',
        highlight: 'Its boss battles and environmental storytelling made each area feel like a masterpiece of tension.'
    },
    {
        year: 2017,
        title: 'Persona 5',
        studio: 'Atlus',
        creator: 'Katsura Hashino',
        image: 'assets/covers/2017-persona-5.jpg',
        releaseDate: 'September 15, 2017',
        genres: ['JRPG', 'Social sim'],
        platforms: ['PlayStation 4', 'PlayStation 3'],
        rating: '9.3/10',
        description: 'Persona 5 delivered a bold, stylish RPG about rebellion, friendship, and the power of self-expression.',
        whyItMatters: 'It brought the series to a wider audience with a striking visual identity and a deeply memorable cast.',
        highlight: 'Its flashy style and strong character dynamics made it feel like a true milestone for the genre.'
    },
    {
        year: 2018,
        title: 'Red Dead Redemption 2',
        studio: 'Rockstar Studios',
        creator: 'Rob Nelson',
        image: 'assets/covers/2018-red-dead-redemption-2.jpg',
        releaseDate: 'October 26, 2018',
        genres: ['Action-adventure', 'Western'],
        platforms: ['PlayStation 4', 'Xbox One', 'Windows'],
        rating: '9.7/10',
        description: 'Red Dead Redemption 2 delivered a cinematic frontier story packed with rich worldbuilding, believable characters, and meticulous detail.',
        whyItMatters: 'It stands as one of the strongest examples of environmental storytelling and systemic world design.',
        highlight: 'Its dynamic wildlife and detailed world made every journey feel alive and meaningful.'
    },
    {
        year: 2019,
        title: 'Death Stranding',
        studio: 'Kojima Productions',
        creator: 'Hideo Kojima',
        image: '',
        releaseDate: 'November 8, 2019',
        genres: ['Action', 'Walking sim'],
        platforms: ['PlayStation 4', 'Windows'],
        rating: '8.7/10',
        description: 'Death Stranding explored connection, isolation, and human bonds through an unusual delivery-based structure that felt unlike anything else.',
        whyItMatters: 'It became a defining example of how unusual concepts can grow into a memorable, deeply personal experience.',
        highlight: 'Its asynchronous multiplayer and slow-burn pacing created a uniquely reflective gameplay rhythm.'
    },
    {
        year: 2020,
        title: 'The Legend of Heroes: Trails into Reverie',
        studio: 'Nihon Falcom',
        creator: 'Masayoshi',
        image: 'assets/covers/2020-the-legend-of-heroes-trails-into-reverie.jpg',
        releaseDate: 'July 28, 2020',
        genres: ['JRPG', 'Turn-based'],
        platforms: ['Windows', 'PlayStation 4'],
        rating: '8.4/10',
        description: 'Trails into Reverie expanded the Trails saga with a dramatic narrative centered on political tension, personal relationships, and layered party dynamics.',
        whyItMatters: 'It reinforced the series’ reputation for dense character work and long-form storytelling.',
        highlight: 'Its sprawling cast and branching drama made every route feel expansive and consequential.'
    },
    {
        year: 2021,
        title: 'Like a Dragon: Infinite Wealth',
        studio: 'Ryu Ga Gotoku Studio',
        creator: 'Masayoshi Yokoyama',
        image: 'assets/covers/2021-like-a-dragon-infinite-wealth.jpg',
        releaseDate: 'January 26, 2024',
        genres: ['JRPG', 'Action-adventure'],
        platforms: ['PlayStation 5', 'PlayStation 4', 'Windows', 'Xbox Series X/S'],
        rating: '8.8/10',
        description: 'Like a Dragon: Infinite Wealth brought the series into a brighter, more expansive adventure with heartfelt character drama and a strong sense of place.',
        whyItMatters: 'It helped push the franchise into a new era of mainstream recognition without losing its identity.',
        highlight: 'Its mix of heartfelt story, turn-based battles, and lively setting made it instantly memorable.'
    },
    {
        year: 2022,
        title: 'Elden Ring',
        studio: 'FromSoftware',
        creator: 'Hidetaka Miyazaki',
        image: 'assets/covers/2022-elden-ring.jpg',
        releaseDate: 'February 25, 2022',
        genres: ['Action RPG', 'Fantasy'],
        platforms: ['Windows', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
        rating: '9.7/10',
        description: 'Elden Ring fused FromSoftware’s signature challenge with a vast open world full of secrets, lore, and vertical exploration.',
        whyItMatters: 'It brought the studio’s unique sensibility to an even wider audience without diluting its identity.',
        highlight: 'Its environmental storytelling and boss encounters made discovery feel mythical and dangerous.'
    },
    {
        year: 2023,
        title: "Baldur's Gate 3",
        studio: 'Larian Studios',
        creator: 'Swen Vincke',
        image: 'assets/covers/2023-baldurs-gate-3.jpg',
        releaseDate: 'August 3, 2023',
        genres: ['RPG', 'Fantasy'],
        platforms: ['Windows', 'PlayStation 5', 'Xbox Series X/S'],
        rating: '9.8/10',
        description: 'Baldur’s Gate 3 delivered a rich, reactive RPG experience where choice, consequence, and party dynamics felt truly alive.',
        whyItMatters: 'It brought the D&D tradition into a new era of player-driven storytelling and tactical depth.',
        highlight: 'Its branching conversations and detailed companions made role-playing feel personal and dynamic.'
    },
    {
        year: 2024,
        title: 'Metaphor: ReFantazio',
        studio: 'Studio Zero',
        creator: ' Katsura Hashino',
        image: 'assets/covers/2024-metaphor-refantazio.jpg',
        releaseDate: 'October 11, 2024',
        genres: ['JRPG', 'Fantasy'],
        platforms: ['Windows', 'PlayStation 4', 'PlayStation 5', 'Xbox Series X/S'],
        rating: '9.1/10',
        description: 'Metaphor: ReFantazio offered a striking fantasy RPG experience with a bold visual style, strong party chemistry, and a gripping political narrative.',
        whyItMatters: 'It carried forward the spirit of Atlus’s best RPGs while presenting a new and distinctive world.',
        highlight: 'Its unique art direction and layered themes made it feel both familiar and fresh.'
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

function getInitialYear() {
    const hashMatch = window.location.hash.match(/year-(\d{4})/);
    return hashMatch ? Number(hashMatch[1]) : selectedYear;
}

function syncYearHash(year) {
    const nextHash = `#year-${year}`;
    if (window.location.hash !== nextHash) {
        history.replaceState(null, '', nextHash);
    }
}

function setSelectedYear(year, options = {}) {
    selectedYear = year;
    syncYearHash(year);
    render();

    if (options.scrollToDetails) {
        document.getElementById('games').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function getImageCandidates(imagePath) {
    const candidates = [imagePath];
    const extensionMatch = imagePath.match(/\.(jpg|jpeg|png|webp|svg)$/i);

    if (extensionMatch) {
        const stem = imagePath.slice(0, -extensionMatch[0].length);
        const fallbackExts = ['svg', 'jpg', 'jpeg', 'png', 'webp'];

        fallbackExts.forEach((ext) => {
            if (ext.toLowerCase() !== extensionMatch[1].toLowerCase()) {
                candidates.push(`${stem}.${ext}`);
            }
        });
    }

    return [...new Set(candidates)];
}

function updateActiveNav() {
    const scrollPosition = window.scrollY + 140;
    const navLinks = Array.from(document.querySelectorAll('.menu a'));

    navLinks.forEach((link) => {
        const targetId = link.getAttribute('href')?.replace('#', '');
        const section = targetId ? document.getElementById(targetId) : null;

        if (!section) {
            return;
        }

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        link.classList.toggle('active', scrollPosition >= top && scrollPosition < bottom);
    });
}

selectedYear = getInitialYear();

function createYearButtons() {
    games.forEach((game) => {
        const button = document.createElement('button');
        button.className = 'year';
        button.type = 'button';
        button.textContent = game.year;

        button.addEventListener('click', () => {
            setSelectedYear(game.year, { scrollToDetails: true });
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
        resultsList.innerHTML = '<div class="result-card empty-state"><strong>No matches found</strong><span>Try another genre, studio, or year.</span></div>';
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
            setSelectedYear(Number(button.getAttribute('data-year')));
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

    const imageCandidates = getImageCandidates(game.image);

    gameContainer.innerHTML = `
        <div class="detail-shell">
            <div class="detail-top">
                <div class="detail-hero">
                    <img src="${imageCandidates[0]}" alt="${game.title}" data-image-candidates="${imageCandidates.join('|')}" data-image-index="0">
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

    const heroImage = gameContainer.querySelector('.detail-hero img');

    if (heroImage) {
        heroImage.addEventListener('error', () => {
            const candidates = (heroImage.getAttribute('data-image-candidates') || '')
                .split('|')
                .filter(Boolean);
            const nextIndex = Number(heroImage.dataset.imageIndex || 0) + 1;

            if (nextIndex < candidates.length) {
                heroImage.dataset.imageIndex = String(nextIndex);
                heroImage.src = candidates[nextIndex];
            } else {
                heroImage.classList.add('is-fallback');
            }
        });
    }

    gameContainer.querySelectorAll('.nav-button').forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.getAttribute('data-direction');
            const currentIndex = games.findIndex((entry) => entry.year === selectedYear);
            const targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
            const targetGame = games[targetIndex];

            if (targetGame) {
                setSelectedYear(targetGame.year);
            }
        });
    });
}

function renderYearButtons() {
    document.querySelectorAll('.year').forEach((button) => {
        const isActive = Number(button.textContent) === selectedYear;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
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

document.addEventListener('keydown', (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        return;
    }

    const currentIndex = games.findIndex((entry) => entry.year === selectedYear);
    if (event.key === 'ArrowRight') {
        const nextGame = games[currentIndex + 1] || games[0];
        setSelectedYear(nextGame.year);
    }

    if (event.key === 'ArrowLeft') {
        const prevGame = games[currentIndex - 1] || games[games.length - 1];
        setSelectedYear(prevGame.year);
    }
});

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveNav();

    if (hero && heroCollage) {
        const offset = window.scrollY * 0.08;
        heroCollage.style.transform = `translate3d(0, ${offset}px, 0)`;
    }
});

window.addEventListener('mousemove', (event) => {
    if (!hero || window.matchMedia('(hover: none)').matches) {
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

updateActiveNav();
render();

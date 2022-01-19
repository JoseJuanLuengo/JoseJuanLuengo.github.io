var eldritch = eldritch || {};
eldritch.decks = eldritch.decks || [];

var artefacts = new Deck("Artefacts", "2.0", [], [], [], [
    {
        name: "Les Contrées de L'Horreur",
        image: "eldritchhorroricon.jpg",
        cards: [
            {
                id: 1,
                name: "Boule de Cristal de Mortlan",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 2,
                name: "Statue Grotesque",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 3,
                name: "De Vermis Mysteriis",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 4,
                name: "La Clé d'Argent",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 5,
                name: "Boîte à Portails",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 6,
                name: "Flûte des Dieux Extérieurs",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 7,
                name: "Cuve pour Cervelle de Mi-Go",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "TRAVAIL D'ÉQUIPE"
                ]
            },
            {
                id: 8,
                name: "Necronomicon",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 9,
                name: "Fusil Lumineux",
                traits: [
                    "OBJET",
                    "ARME",
                    "MAGIQUE"
                ]
            },
            {
                id: 10,
                name: "Épée de Saint Jérôme",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "ARME"
                ]
            },
            {
                id: 11,
                name: "T'tka Halot",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 12,
                name: "Rubis de R`lyeh",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 13,
                name: "Cultes des Goules",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 14,
                name: "Masque Blême",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
        ]
    },
    {
        name: "Légendes Oubliées",
        image: "forsakenlore.png",
        cards: [
            {
                id: 15,
                name: "Sphère Maudite",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 16,
                name: "Massa di Requiem per Shuggay",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 17,
                name: "Lait de Shub-Niggurath",
                traits: [
                    "OBJET",
                    "ÉLIXIR"
                ]
            },
            {
                id: 18,
                name: "Épée d'Y'ha-Talla",
                traits: [
                    "OBJET",
                    "ARME",
                    "MAGIQUE"
                ]
            },
            {
                id: 19,
                name: "Sacoche du Néant",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 20,
                name: "Élixir de Vie",
                traits: [
                    "OBJET",
                    "ÉLIXIR"
                ]
            },
            {
                id: 21,
                name: "Couronne Serpentine",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 22,
                name: "Tablettes de Zanthu",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },

        ]
    },
    {
        name: "Mountains of Madness",
        image: "mountainsofmadness.png",
        cards: [
            {
                id: 23,
                name: "Pnakotic Manuscripts",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 24,
                name: "Alien Device",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 25,
                name: "Heart of Winter",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 26,
                name: "Livre d'Ivon",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 27,
                name: "Crystal of the Elder Things",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 28,
                name: "Eltdown Shards",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 29,
                name: "Hyperborean Crystal",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 30,
                name: "Dhol Chants",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
        ]
    },
    {
        name: "Vestiges Occultes",
        image: "strangeremnants.png",
        cards: [
            {
                id: 31,
                name: "Idole Draconique",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE"
                ]
            },
            {
                id: 32,
                name: "Mask du Veilleur",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 33,
                name: "Flûte d'Os",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 34,
                name: "Khépesh des Abysses",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE",
                    "ARME"
                ]
            },
        ]
    },
    {
        name: "Under the Pyramids",
        image: "underthepyramids.png",
        cards: [
            {
                id: 35,
                name: "Book of the Dead",
                traits: [
                    "OBJET",
                    "RELIQUE",
                    "LIVRE"
                ]
            },
            {
                id: 36,
                name: "Scales of Thoth",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE"
                ]
            },
            {
                id: 37,
                name: "Shining Trapezohedron",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 38,
                name: "Twin Scepters",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE"
                ]
            },
        ]
    },
    {
        name: "Signes de Carcosa",
        image: "signsofcarcossa.png",
        cards: [
            {
                id: 39,
                name: "Clé de Carcosa",
                traits: [
                    "TRINKET",
                    "MAGIQUE"
                ]
            },
            {
                id: 40,
                name: "Cape en Lambeaux",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 42,
                name: "Le Roi en Jaune",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 43,
                name: "Masque de Sthénélus",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "RELIQUE"
                ]
            },
        ]
    },
    {
        name: "Les Contrées du Rêve",
        image: "dreamlands.png",
        cards: [
            {
                id: 44,
                name: "Cristalliseur de Rêves",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "TRAVAIL D'ÉQUIPE"
                ]
            },
            {
                id: 45,
                name: "Croix de Cykranosh",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 46,
                name: "Clé des Anciens",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            },
            {
                id: 47,
                name: "Pentacle Interplanetaire",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
        ]
    },
    {
        name: "Cités en Ruine",
        image: "citiesInRuins.png",
        cards: [
            {
                id: 48,
                name: "Bâton de Rhabdomancien",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "ARME"
                ]
            },
            {
                id: 49,
                name: "Fragments de G`harne",
                traits: [
                    "OBJET",
                    "RELIQUE",
                    "LIVRE"
                ]
            },
            {
                id: 50,
                name: "Élixir de Tikkoun",
                traits: [
                    "OBJET",
                    "ÉLIXIR"
                ]
            },
            {
                id: 51,
                name: "Chant de Vach-Viraj",
                traits: [
                    "OBJET",
                    "MAGIQUE",
                    "LIVRE"
                ]
            }
        ]
    },
    {
        name: "Masks of Nyarlathotep",
        image: "mon.png",
        cards: [
            {
                id: 52,
                name: "Black Book",
                traits: [
                    "OBJET",
                    "LIVRE",
                ]
            },
            {
                id: 53,
                name: "Black Fan",
                traits: [
                    "OBJET",
                    "MAGIQUE"
                ]
            },
            {
                id: 54,
                name: "Hemisphere Map",
                traits: [
                    "OBJET"
                ]
            },
            {
                id: 55,
                name: "True Magick",
                traits: [
                    "OBJET",
                    "LIVRE"
                ]
            }
        ]
    }
]);
eldritch.decks.push(artefacts);


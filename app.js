(function () {
  const STORAGE_KEY = "metal-heroes-sheet-forge-v1";
  const APP_BASE_URL = getAppBaseUrl();

  const LEVEL_OPTIONS = [
    { value: "pussy", label: "Pussy" },
    { value: "rocker", label: "Rocker" },
    { value: "super-freak", label: "Super Freak" }
  ];

  const POKER_SUITS = [
    { id: "clubs", label: "Clubs" },
    { id: "diamonds", label: "Diamonds" },
    { id: "hearts", label: "Hearts" },
    { id: "spades", label: "Spades" }
  ];

  const BAND_MEMBERS = [
    {
      id: "joey",
      name: "Joey",
      role: "Vocals + Rhythm Guitar",
      specialLabel: "Special",
      resourceLabel: "Fuses",
      resourceSlots: 3,
      inventorySeed: ["Credit Card", "", ""]
    },
    {
      id: "brian",
      name: "Brian",
      role: "Lead Guitar",
      specialLabel: "Special",
      resourceLabel: "Fuses",
      resourceSlots: 3,
      inventorySeed: ["", "", ""]
    },
    {
      id: "gregori",
      name: "Gregori",
      role: "Drums",
      specialLabel: "Special",
      resourceLabel: "Fuses",
      resourceSlots: 3,
      inventorySeed: ["", "", ""]
    },
    {
      id: "leo",
      name: "Leo",
      role: "Bass",
      specialLabel: "Special",
      resourceLabel: "Fuel",
      resourceSlots: 3,
      inventorySeed: ["", "", ""]
    }
  ];

  const ROAD_TO_GLORY_ITEMS = [
    { id: "contract-with-abyss-records", label: "Contract with Abyss Records" },
    { id: "rooted-for-the-maverick", label: "Rooted for the Maverick" },
    { id: "gibson-brain-farts-saved", label: "Gibson / Brain Farts saved" },
    { id: "clinched-ep-recordings", label: "Clinched EP recordings" },
    { id: "band-friendship-1", label: "Band Friendship (I)" },
    { id: "perverted-creep", label: "Perverted Creep" },
    { id: "band-friendship-2", label: "Band Friendship (II)" },
    { id: "threw-out-the-trash", label: "Threw out the Trash" },
    { id: "met-a-black-legend", label: "Met a Black Legend" },
    { id: "snatched-the-key", label: "Snatched the Key" },
    { id: "band-friendship-3", label: "Band Friendship (III)" },
    { id: "an-angel-sings", label: "An Angel sings" },
    { id: "heli-taxi-medevac", label: "Heli-Taxi / Medevac" },
    { id: "rigged-buddy-king-cam", label: "Rigged Buddy / King Cam" },
    { id: "hunted-the-undead", label: "Hunted the Undead" },
    { id: "sixth-finger-in-play", label: "6th Finger in play" },
    { id: "kicked-the-snake", label: "Kicked the Snake" },
    { id: "fan-support", label: "Fan Support" },
    { id: "march-of-the-heroes-army", label: "March of the Heroes' Army" },
    { id: "humiliated-by-jill-charlotte", label: "Humiliated by Jill / Charlotte" },
    { id: "brought-lucy-to-his-knees", label: "Brought Lucy to his Knees" },
    { id: "won-clems-heart", label: "Won Clem's Heart" }
  ];

  const SONGS = [
    ["classic", 1, "Soul Reaper", ""],
    ["classic", 2, "Flaming Thoughts", ""],
    ["classic", 3, "Love, Friends, Pain", ""],
    ["classic", 4, "Hollywood Seduction", ""],
    ["classic", 5, "I Want You, Bitch!", ""],
    ["classic", 6, "Under the Heroes' Banner", ""],
    ["death", 7, "Kneel to Die!", ""],
    ["death", 8, "Living Nightmares", ""],
    ["death", 9, "Vicious Ghost", ""],
    ["death", 10, "Into the Ruins", ""],
    ["death", 11, "Hungry Blood", ""],
    ["death", 12, "Altars of Sacrifice", ""],
    ["thrash", 13, "Die Hard and Prosper", ""],
    ["thrash", 14, "Nothing Personal", ""],
    ["thrash", 15, "Night Witch", ""],
    ["thrash", 16, "Kill and Destroy", ""],
    ["thrash", 17, "Check my Freak", ""],
    ["thrash", 18, "Crawling Crusader", ""],
    ["nu", 19, "Blood spill, Brain leaks", ""],
    ["nu", 20, "High Speed Creativity", ""],
    ["nu", 21, "Neon Nights", ""],
    ["nu", 22, "Raw Nature", ""],
    ["nu", 23, "Nightfall on Mars", ""],
    ["power", 24, "Rise and Fall", ""],
    ["power", 25, "Fairies Fear Boots", ""],
    ["power", 26, "Killer King", ""],
    ["power", 27, "Lords over Lovers", ""],
    ["power", 28, "The Shadow's Tale", ""],
    ["symphonic", 29, "Your Body is a Battleground", "Cover"],
    ["symphonic", 30, "Just Another Prisoner", ""],
    ["symphonic", 31, "Wasted Tears", ""],
    ["symphonic", 32, "Revelations of Eternity", ""],
    ["symphonic", 33, "Rest in Peace", ""],
    ["glorious", 34, "Legacy in a Box", "Sleeze"],
    ["glorious", 35, "Siren of Desire", "Stoner"],
    ["glorious", 36, "My Girl is a Short Track Medalist", "Punk"],
    ["glorious", 37, "Fallen Hero", "Rock Ballad"],
    ["glorious", 38, "The Song of Hatred, the Dragon", "Epic"],
    ["glorious", 39, "Thrill to Kill", "Rap/X-over"],
    ["glorious", 40, "God of Rock", "???"]
  ].map(function (song) {
    return {
      id: "song-" + song[1],
      category: song[0],
      number: song[1],
      title: song[2],
      detail: song[3]
    };
  });

  const SONG_CATEGORY_LABELS = {
    classic: "Classic",
    death: "Death",
    thrash: "Thrash",
    nu: "Nu",
    power: "Power",
    symphonic: "Symphonic",
    glorious: "Glorious Tracks"
  };

  const SUPPORTERS = [
    { id: "jill", name: "Jill", role: "Mystery", defaultNote: "???" },
    { id: "ricci-truman", name: "Ricci Truman", role: "Manager", defaultNote: "" },
    { id: "russ-marlow", name: "Russ Marlow", role: "Manager", defaultNote: "" },
    { id: "zig", name: "Zig", role: "Roadie", defaultNote: "" },
    { id: "charlotte", name: "Charlotte", role: "Vocals", defaultNote: "" }
  ];

  const TOUR_BOOK_GIGS = [
    ["battle-at-the-palace", "Battle at the Palace", "USA"],
    ["debut-under-the-rainbow", "Debut under the Rainbow", "USA"],
    ["halloween-on-fire", "Halloween on Fire", "USA"],
    ["turn-on-the-voltage", "Turn on the Voltage", "USA"],
    ["down-the-dungeon", "Down the Dungeon", "USA"],
    ["rock-the-maiden", "Rock the Maiden", "USA"],
    ["stars-at-starlite", "Stars at Starlite", "CAN"],
    ["swedish-sins", "Swedish Sins", "SWE"],
    ["gig-for-zig", "Gig for Zig", "SWE"],
    ["open-air-ostersund", "Open Air Ostersund", "SWE"],
    ["vamp-the-mansion", "Vamp the Mansion", "USA"],
    ["brave-heroes", "Brave Heroes", "GBR"],
    ["underworld-preview", "Underworld Preview", "GBR"],
    ["bring-it-to-the-max", "Bring It to the Max", "NED"],
    ["metal-metro-mayhem", "Metal Metro Mayhem", "FRA"],
    ["woa-headbanger-stage", "W:O:A Headbanger Stage", "GER"],
    ["woa-tv-gig", "W:O:A TV-Gig", "GER"],
    ["rock-the-boat", "Rock the Boat", "USA"],
    ["mbro-awards-medley", "MBRO Awards Medley", "USA"],
    ["echo-rossija", "Echo Rossija", "RUS"],
    ["sao-paulo-arena", "Sao Paulo Arena", "BRA"]
  ].map(function (gig) {
    return {
      id: gig[0],
      title: gig[1],
      country: gig[2]
    };
  });

  const GIG_LAYOUT_SOURCE = window.METAL_HEROES_GIG_LAYOUTS || {
    pageSize: [1584, 1224],
    pageOrder: [1],
    gigs: []
  };

  const GIG_PAGE_WIDTH = GIG_LAYOUT_SOURCE.pageSize[0];
  const GIG_PAGE_HEIGHT = GIG_LAYOUT_SOURCE.pageSize[1];

  const GIG_BLUEPRINTS = GIG_LAYOUT_SOURCE.gigs.map(function (gig) {
    return {
      id: gig[0],
      label: gig[1],
      title: gig[2],
      page: gig[3],
      nodes: gig[4].map(function (node) {
        return {
          x: node[0],
          y: node[1],
          w: node[2],
          h: node[3],
          type: node[4] || "node"
        };
      })
    };
  });

  const GIG_BLUEPRINTS_BY_ID = GIG_BLUEPRINTS.reduce(function (accumulator, gig) {
    accumulator[gig.id] = gig;
    return accumulator;
  }, {});

  const GIG_PAGES = GIG_LAYOUT_SOURCE.pageOrder.map(function (pageNumber) {
    return {
      number: pageNumber,
      gigs: GIG_BLUEPRINTS.filter(function (gig) {
        return gig.page === pageNumber;
      })
    };
  });

  function getInitialTab() {
    const hash = (window.location.hash || "").replace("#", "").toLowerCase();
    if (hash === "rocker" || hash === "freak" || hash === "journal") {
      return hash;
    }
    return "journal";
  }

  const uiState = {
    activeTab: getInitialTab(),
    lastSavedAt: null,
    saveTimer: null,
    gridPage: {
      rocker: 1,
      freak: 1
    },
    openDetails: {
      "songs-classic": true
    }
  };

  const appRoot = document.getElementById("app");
  const fileInput = document.getElementById("sheet-file-input");

  let state = loadInitialState();

  function cloneData(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function isPlainObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function deepMerge(template, incoming) {
    if (Array.isArray(template)) {
      const source = Array.isArray(incoming) ? incoming : [];
      const baseTemplate = template.length > 0 ? template[0] : undefined;
      const length = Math.max(template.length, source.length);
      return Array.from({ length: length }, function (_, index) {
        const templateItem = template[index] !== undefined ? template[index] : baseTemplate;
        const incomingItem = source[index];
        if (templateItem === undefined) {
          return cloneData(incomingItem);
        }
        return deepMerge(templateItem, incomingItem);
      });
    }

    if (isPlainObject(template)) {
      const sourceObject = isPlainObject(incoming) ? incoming : {};
      const output = {};
      Object.keys(template).forEach(function (key) {
        output[key] = deepMerge(template[key], sourceObject[key]);
      });
      Object.keys(sourceObject).forEach(function (key) {
        if (!(key in output)) {
          output[key] = cloneData(sourceObject[key]);
        }
      });
      return output;
    }

    return incoming !== undefined ? incoming : template;
  }

  function createMemberState(profile) {
    return {
      stats: {
        skill: 0,
        power: 0,
        presence: 0,
        ego: 0
      },
      specialCode: "",
      specialSpent: false,
      resources: Array.from({ length: profile.resourceSlots }, function () {
        return false;
      }),
      inventory: profile.inventorySeed.slice()
    };
  }

  function createNodeState() {
    return {
      section: "",
      subBox: "",
      ringMarked: false,
      cleared: false
    };
  }

  function createGigState(blueprint) {
    return {
      notes: "",
      nodes: Array.from({ length: blueprint.nodes.length }, function () {
        return createNodeState();
      })
    };
  }

  function createInitialState() {
    return {
      version: 1,
      journal: {
        level: "rocker",
        influence: 0,
        powerOffs: 0,
        notes: "",
        taylorStuffLeft: ["VIP-", "", "", "", ""],
        taylorStuffRight: ["", "", "", ""],
        removedCardNote: "",
        removedCardSuits: {
          clubs: false,
          diamonds: false,
          hearts: false,
          spades: false
        },
        roadToGlory: ROAD_TO_GLORY_ITEMS.reduce(function (accumulator, item) {
          accumulator[item.id] = false;
          return accumulator;
        }, {}),
        scoreBars: {
          videoScore: 0,
          securityLevel: 0,
          coupsChances: 0,
          luciversMight: 0
        },
        band: {
          metalArtefacts: BAND_MEMBERS.reduce(function (accumulator, member) {
            accumulator[member.id] = "";
            return accumulator;
          }, {}),
          fanbase: 0,
          chemistry: 0,
          dawnaHearts: 0,
          members: BAND_MEMBERS.reduce(function (accumulator, member) {
            accumulator[member.id] = createMemberState(member);
            return accumulator;
          }, {})
        },
        repertoire: {
          songPoints: 0,
          songs: SONGS.map(function (song) {
            return {
              id: song.id,
              leader: "",
              fame: 0,
              out: false
            };
          })
        },
        supporters: SUPPORTERS.reduce(function (accumulator, supporter) {
          accumulator[supporter.id] = {
            active: false,
            note: supporter.defaultNote
          };
          return accumulator;
        }, {}),
        tourBook: TOUR_BOOK_GIGS.map(function (gig) {
          return {
            id: gig.id,
            played: false,
            modifiers: {
              a: false,
              b: false,
              c: false,
              p: false,
              s: false
            },
            gigScore: ""
          };
        })
      },
      gigGrids: {
        rocker: GIG_BLUEPRINTS.reduce(function (accumulator, gig) {
          accumulator[gig.id] = createGigState(gig);
          return accumulator;
        }, {}),
        freak: GIG_BLUEPRINTS.reduce(function (accumulator, gig) {
          accumulator[gig.id] = createGigState(gig);
          return accumulator;
        }, {})
      }
    };
  }

  function loadInitialState() {
    const template = createInitialState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return template;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.sheet) {
        return template;
      }
      uiState.lastSavedAt = parsed.savedAt ? new Date(parsed.savedAt).getTime() : null;
      return deepMerge(template, parsed.sheet);
    } catch (error) {
      return template;
    }
  }

  function scheduleSave() {
    clearTimeout(uiState.saveTimer);
    uiState.saveTimer = setTimeout(function () {
      const payload = {
        savedAt: new Date().toISOString(),
        sheet: state
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      uiState.lastSavedAt = Date.now();
      refreshTelemetry();
    }, 180);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function parsePath(path) {
    return path.split(".").map(function (segment) {
      return /^\d+$/.test(segment) ? Number(segment) : segment;
    });
  }

  function getByPath(path) {
    return parsePath(path).reduce(function (current, segment) {
      return current[segment];
    }, state);
  }

  function setByPath(path, value) {
    const segments = parsePath(path);
    let target = state;
    for (let index = 0; index < segments.length - 1; index += 1) {
      target = target[segments[index]];
    }
    target[segments[segments.length - 1]] = value;
  }

  function formatTimestamp(timestamp) {
    if (!timestamp) {
      return "Autosave ready";
    }
    return new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit"
    }).format(timestamp);
  }

  function countRoadProgress() {
    return Object.values(state.journal.roadToGlory).filter(Boolean).length;
  }

  function countFilledNodes(difficulty) {
    return GIG_BLUEPRINTS.reduce(function (total, gig) {
      const gigState = state.gigGrids[difficulty][gig.id];
      const filled = gigState.nodes.filter(function (node) {
        return node.cleared || node.ringMarked || node.section.trim() || node.subBox.trim();
      }).length;
      return total + filled;
    }, 0);
  }

  function countGigNodes(difficulty) {
    return GIG_BLUEPRINTS.reduce(function (total, gig) {
      return total + gig.nodes.length;
    }, 0);
  }

  function refreshTelemetry() {
    const road = appRoot.querySelector("[data-summary='road']");
    const rocker = appRoot.querySelector("[data-summary='rocker']");
    const freak = appRoot.querySelector("[data-summary='freak']");
    const saved = appRoot.querySelector("[data-summary='saved']");

    if (road) {
      road.textContent = countRoadProgress() + " / " + ROAD_TO_GLORY_ITEMS.length;
    }

    if (rocker) {
      rocker.textContent = countFilledNodes("rocker") + " / " + countGigNodes("rocker");
    }

    if (freak) {
      freak.textContent = countFilledNodes("freak") + " / " + countGigNodes("freak");
    }

    if (saved) {
      saved.textContent = formatTimestamp(uiState.lastSavedAt);
    }
  }

  function renderPipTrack(config) {
    const symbolClass = config.variant ? " " + config.variant : "";
    const compactClass = config.compact ? " compact" : "";
    const buttons = Array.from({ length: config.max }, function (_, index) {
      const value = index + 1;
      return (
        "<button type='button' class='pip" +
        (value <= config.value ? " is-active" : "") +
        "' data-action='set-pips' data-path='" +
        config.path +
        "' data-value='" +
        value +
        "' aria-label='Set value to " +
        value +
        "'>" +
        value +
        "</button>"
      );
    }).join("");

    return (
      "<div class='pip-track" +
      symbolClass +
      compactClass +
      "'>" +
      buttons +
      "<button type='button' class='pip-reset' data-action='set-pips' data-path='" +
      config.path +
      "' data-value='0'>Clear</button></div>"
    );
  }

  function renderField(path, value, label, placeholder) {
    return (
      "<label class='field'><span class='label'>" +
      escapeHtml(label) +
      "</span><input type='text' data-path='" +
      path +
      "' value='" +
      escapeHtml(value) +
      "' placeholder='" +
      escapeHtml(placeholder || "") +
      "'></label>"
    );
  }

  function renderTextarea(path, value, label, placeholder) {
    return (
      "<label class='field'><span class='label'>" +
      escapeHtml(label) +
      "</span><textarea data-path='" +
      path +
      "' placeholder='" +
      escapeHtml(placeholder || "") +
      "'>" +
      escapeHtml(value) +
      "</textarea></label>"
    );
  }

  function renderCompactTextarea(path, value, label, placeholder) {
    return (
      "<label class='field gig-note-field'><span class='label'>" +
      escapeHtml(label) +
      "</span><textarea class='gig-note-textarea' data-path='" +
      path +
      "' placeholder='" +
      escapeHtml(placeholder || "") +
      "'>" +
      escapeHtml(value) +
      "</textarea></label>"
    );
  }

  function getAppBaseUrl() {
    const scripts = Array.from(document.scripts || []);
    const appScript = scripts.find(function (script) {
      return /(^|\/)app\.js(?:[?#].*)?$/.test(script.src || "");
    });
    if (appScript && appScript.src) {
      return appScript.src.replace(/app\.js(?:[?#].*)?$/, "");
    }
    return new URL("./", window.location.href).href;
  }

  function getGigPageImagePath(difficulty, pageNumber) {
    return APP_BASE_URL + "assets/gig-grids/" + difficulty + "/page-" + pageNumber + ".png";
  }

  function toPagePercent(value, total) {
    return ((value / total) * 100).toFixed(4);
  }

  function getGigNodeRenderHeight(node) {
    if (node.type === "performance") {
      return node.h;
    }
    return node.h < 80 ? 100 : node.h;
  }

  function countGigFilledNodes(difficulty, gigId) {
    return state.gigGrids[difficulty][gigId].nodes.filter(function (node) {
      return node.cleared || node.ringMarked || node.section.trim() || node.subBox.trim();
    }).length;
  }

  function renderJournal() {
    const roadMidpoint = Math.ceil(ROAD_TO_GLORY_ITEMS.length / 2);
    const leftRoad = ROAD_TO_GLORY_ITEMS.slice(0, roadMidpoint);
    const rightRoad = ROAD_TO_GLORY_ITEMS.slice(roadMidpoint);

    return (
      "<div class='journal-layout'>" +
      renderHeroStatusPanel() +
      renderNotesPanel() +
      renderTaylorStuffPanel() +
      renderScoreBarsPanel() +
      renderRoadToGloryPanel(leftRoad, rightRoad) +
      renderBandPanel() +
      renderRepertoirePanel() +
      renderSupportersPanel() +
      renderTourBookPanel() +
      "</div>"
    );
  }

  function renderHeroStatusPanel() {
    return (
      "<section class='panel span-5'><h2 class='section-title'>Main Sheet</h2>" +
      "<p class='section-copy'>Level, influence, power offs, and the big top-of-page trackers from the PDF journal.</p>" +
      "<div class='field'><span class='label'>Level</span><div class='segmented'>" +
      LEVEL_OPTIONS.map(function (option) {
        return (
          "<label><input type='radio' name='sheet-level' data-path='journal.level' value='" +
          option.value +
          "'" +
          (state.journal.level === option.value ? " checked" : "") +
          "><span>" +
          option.label +
          "</span></label>"
        );
      }).join("") +
      "</div></div>" +
      "<div class='field'><span class='label'>Influence</span>" +
      renderPipTrack({
        path: "journal.influence",
        value: state.journal.influence,
        max: 10
      }) +
      "</div>" +
      "<div class='field'><span class='label'>Power Offs</span>" +
      renderPipTrack({
        path: "journal.powerOffs",
        value: state.journal.powerOffs,
        max: 10
      }) +
      "</div></section>"
    );
  }

  function renderNotesPanel() {
    return (
      "<section class='panel span-7'><h2 class='section-title'>Notes</h2>" +
      "<p class='section-copy'>Freeform room for plans, riffs, grudges, and anything the margins of the paper sheet would usually hold.</p>" +
      renderTextarea("journal.notes", state.journal.notes, "Session Notes", "Write your legend here...") +
      "</section>"
    );
  }

  function renderTaylorStuffPanel() {
    return (
      "<section class='panel span-5'><h2 class='section-title'>Taylor's Stuff</h2>" +
      "<p class='section-copy'>Every writable line from the item area plus the removed poker card tracker.</p>" +
      "<div class='two-column'>" +
      "<div class='inventory-stack'>" +
      state.journal.taylorStuffLeft.map(function (item, index) {
        return renderField(
          "journal.taylorStuffLeft." + index,
          item,
          "Left Slot " + (index + 1),
          "Gear, clue, or perk"
        );
      }).join("") +
      "</div>" +
      "<div class='inventory-stack'>" +
      renderField("journal.removedCardNote", state.journal.removedCardNote, "Removed Poker Card", "Card or reminder") +
      "<div class='field'><span class='label'>Removed Suits</span><div class='suit-row'>" +
      POKER_SUITS.map(function (suit) {
        return (
          "<label class='suit-chip'><input type='checkbox' data-path='journal.removedCardSuits." +
          suit.id +
          "'" +
          (state.journal.removedCardSuits[suit.id] ? " checked" : "") +
          "><span>" +
          suit.label +
          "</span></label>"
        );
      }).join("") +
      "</div></div>" +
      state.journal.taylorStuffRight.map(function (item, index) {
        return renderField(
          "journal.taylorStuffRight." + index,
          item,
          "Right Slot " + (index + 1),
          "Band item or note"
        );
      }).join("") +
      "</div></div></section>"
    );
  }

  function renderScoreBarsPanel() {
    return (
      "<section class='panel span-7'><h2 class='section-title'>Score Bars</h2>" +
      "<p class='section-copy'>The PDF score bars translated into clear tappable meters.</p>" +
      "<div class='field-grid'>" +
      "<div class='field'><span class='label'>Video Score</span>" +
      renderPipTrack({
        path: "journal.scoreBars.videoScore",
        value: state.journal.scoreBars.videoScore,
        max: 10
      }) +
      "</div>" +
      "<div class='field'><span class='label'>Security Level</span>" +
      renderPipTrack({
        path: "journal.scoreBars.securityLevel",
        value: state.journal.scoreBars.securityLevel,
        max: 8
      }) +
      "</div>" +
      "<div class='field'><span class='label'>Coup's Chances</span>" +
      renderPipTrack({
        path: "journal.scoreBars.coupsChances",
        value: state.journal.scoreBars.coupsChances,
        max: 10
      }) +
      "</div>" +
      "<div class='field'><span class='label'>Lucivers' Might</span>" +
      renderPipTrack({
        path: "journal.scoreBars.luciversMight",
        value: state.journal.scoreBars.luciversMight,
        max: 10
      }) +
      "</div>" +
      "</div></section>"
    );
  }

  function renderRoadToGloryPanel(leftRoad, rightRoad) {
    return (
      "<section class='panel span-12'><h2 class='section-title'>Road to Glory</h2>" +
      "<p class='section-copy'>The milestone list from page one, split into two clean columns so you can tick progress without hunting the paper layout.</p>" +
      "<div class='two-column'>" +
      "<div class='check-stack'>" +
      leftRoad.map(function (item) {
        return (
          "<label class='check-row'><input type='checkbox' data-path='journal.roadToGlory." +
          item.id +
          "'" +
          (state.journal.roadToGlory[item.id] ? " checked" : "") +
          "><span>" +
          escapeHtml(item.label) +
          "</span></label>"
        );
      }).join("") +
      "</div>" +
      "<div class='check-stack'>" +
      rightRoad.map(function (item) {
        return (
          "<label class='check-row'><input type='checkbox' data-path='journal.roadToGlory." +
          item.id +
          "'" +
          (state.journal.roadToGlory[item.id] ? " checked" : "") +
          "><span>" +
          escapeHtml(item.label) +
          "</span></label>"
        );
      }).join("") +
      "</div></div></section>"
    );
  }

  function renderBandPanel() {
    return (
      "<section class='panel span-12'><h2 class='section-title'>The Band</h2>" +
      "<p class='section-copy'>Band-wide tracks, artefacts, chemistry, and the four member sheets from page two.</p>" +
      "<div class='field-grid'>" +
      BAND_MEMBERS.map(function (member) {
        return renderField(
          "journal.band.metalArtefacts." + member.id,
          state.journal.band.metalArtefacts[member.id],
          "Metal Artefact: " + member.name,
          "Relic, clue, or unlock"
        );
      }).join("") +
      "<div class='field'><span class='label'>Fanbase</span>" +
      renderPipTrack({
        path: "journal.band.fanbase",
        value: state.journal.band.fanbase,
        max: 12
      }) +
      "</div>" +
      "<div class='field'><span class='label'>Chemistry</span>" +
      renderPipTrack({
        path: "journal.band.chemistry",
        value: state.journal.band.chemistry,
        max: 12
      }) +
      "</div>" +
      "<div class='field'><span class='label'>Dawna Hearts</span>" +
      renderPipTrack({
        path: "journal.band.dawnaHearts",
        value: state.journal.band.dawnaHearts,
        max: 4,
        variant: "heart"
      }) +
      "</div></div>" +
      "<div class='member-grid' style='margin-top:18px;'>" +
      BAND_MEMBERS.map(renderMemberCard).join("") +
      "</div></section>"
    );
  }

  function renderMemberCard(member) {
    const memberState = state.journal.band.members[member.id];
    return (
      "<article class='member-card'><div class='member-heading'><span class='member-name'>" +
      escapeHtml(member.name) +
      "</span><span class='member-role'>" +
      escapeHtml(member.role) +
      "</span></div>" +
      "<div class='stat-grid'>" +
      ["skill", "power", "presence", "ego"].map(function (stat) {
        return (
          "<div class='stat-block'><span class='inline-label'>" +
          stat +
          "</span>" +
          renderPipTrack({
            path: "journal.band.members." + member.id + ".stats." + stat,
            value: memberState.stats[stat],
            max: 5,
            compact: true
          }) +
          "</div>"
        );
      }).join("") +
      "</div>" +
      "<div class='field-grid' style='margin-top:14px;'>" +
      renderField(
        "journal.band.members." + member.id + ".specialCode",
        memberState.specialCode,
        member.specialLabel,
        "Code, section, or mark"
      ) +
      "<label class='checkbox-chip' style='align-self:end;'><input type='checkbox' data-path='journal.band.members." +
      member.id +
      ".specialSpent'" +
      (memberState.specialSpent ? " checked" : "") +
      "><span>Special spent</span></label></div>" +
      "<div class='field' style='margin-top:14px;'><span class='label'>" +
      escapeHtml(member.resourceLabel) +
      "</span><div class='resource-row'>" +
      memberState.resources.map(function (used, index) {
        return (
          "<label class='resource-pill'><input type='checkbox' data-path='journal.band.members." +
          member.id +
          ".resources." +
          index +
          "'" +
          (used ? " checked" : "") +
          "><span>Slot " +
          (index + 1) +
          "</span></label>"
        );
      }).join("") +
      "</div></div>" +
      "<div class='inventory-list' style='margin-top:14px;'>" +
      memberState.inventory.map(function (item, index) {
        return renderField(
          "journal.band.members." + member.id + ".inventory." + index,
          item,
          "Inventory " + (index + 1),
          "Gear or note"
        );
      }).join("") +
      "</div></article>"
    );
  }

  function renderRepertoirePanel() {
    const groupedSongs = Object.keys(SONG_CATEGORY_LABELS).map(function (categoryKey) {
      return {
        key: categoryKey,
        label: SONG_CATEGORY_LABELS[categoryKey],
        songs: SONGS.filter(function (song) {
          return song.category === categoryKey;
        })
      };
    });

    return (
      "<section class='panel span-12'><h2 class='section-title'>Repertoire</h2>" +
      "<p class='section-copy'>Song points plus a collapsible catalog of every track from page three.</p>" +
      "<div class='field'><span class='label'>Song Points</span>" +
      renderPipTrack({
        path: "journal.repertoire.songPoints",
        value: state.journal.repertoire.songPoints,
        max: 10
      }) +
      "</div>" +
      "<div class='category-list' style='margin-top:16px;'>" +
      groupedSongs.map(function (group, groupIndex) {
        const detailKey = "songs-" + group.key;
        const isOpen = Object.prototype.hasOwnProperty.call(uiState.openDetails, detailKey)
          ? uiState.openDetails[detailKey]
          : groupIndex === 0;
        return (
          "<details class='panel category-panel' data-detail-key='" +
          detailKey +
          "'" +
          (isOpen ? " open" : "") +
          "><summary><div class='summary-left'><span class='badge'>" +
          escapeHtml(group.label) +
          "</span><div class='summary-text'><h4>" +
          escapeHtml(group.label) +
          "</h4><p>" +
          group.songs.length +
          " songs</p></div></div><span class='summary-copy'>Leader, fame, and OUT state</span></summary>" +
          "<div class='song-body'><div class='song-list'>" +
          group.songs.map(renderSongRow).join("") +
          "</div></div></details>"
        );
      }).join("") +
      "</div></section>"
    );
  }

  function renderSongRow(song) {
    const songIndex = SONGS.findIndex(function (candidate) {
      return candidate.id === song.id;
    });
    const songState = state.journal.repertoire.songs[songIndex];
    return (
      "<div class='song-row'><div class='song-title'><strong><span class='song-number'>#" +
      song.number +
      "</span>" +
      escapeHtml(song.title) +
      "</strong>" +
      (song.detail ? "<span>" + escapeHtml(song.detail) + "</span>" : "") +
      "</div>" +
      renderField(
        "journal.repertoire.songs." + songIndex + ".leader",
        songState.leader,
        "Leader",
        "Band member or combo"
      ) +
      "<div class='inline-field'><span class='inline-label'>Fame</span>" +
      renderPipTrack({
        path: "journal.repertoire.songs." + songIndex + ".fame",
        value: songState.fame,
        max: 5,
        variant: "star",
        compact: true
      }) +
      "</div>" +
      "<label class='checkbox-chip'><input type='checkbox' data-path='journal.repertoire.songs." +
      songIndex +
      ".out'" +
      (songState.out ? " checked" : "") +
      "><span>Out</span></label></div>"
    );
  }

  function renderSupportersPanel() {
    return (
      "<section class='panel span-4'><h2 class='section-title'>Supporters</h2>" +
      "<p class='section-copy'>Companion checkmarks and notes from page four.</p>" +
      "<div class='supporter-grid'>" +
      SUPPORTERS.map(function (supporter) {
        const supporterState = state.journal.supporters[supporter.id];
        return (
          "<article class='supporter-card'><div><div class='supporter-name'>" +
          escapeHtml(supporter.name) +
          "</div><div class='supporter-role'>" +
          escapeHtml(supporter.role) +
          "</div></div>" +
          "<label class='checkbox-chip'><input type='checkbox' data-path='journal.supporters." +
          supporter.id +
          ".active'" +
          (supporterState.active ? " checked" : "") +
          "><span>Checked on sheet</span></label>" +
          renderField(
            "journal.supporters." + supporter.id + ".note",
            supporterState.note,
            "Note",
            "Status or reminder"
          ) +
          "</article>"
        );
      }).join("") +
      "</div></section>"
    );
  }

  function renderTourBookPanel() {
    return (
      "<section class='panel span-8'><h2 class='section-title'>Tour Book</h2>" +
      "<p class='section-copy'>Gig rows with modifiers and score boxes from the right half of page four.</p>" +
      "<div class='tour-table'>" +
      TOUR_BOOK_GIGS.map(function (gig, index) {
        const gigState = state.journal.tourBook[index];
        return (
          "<div class='tour-row'><label class='checkbox-chip'><input type='checkbox' data-path='journal.tourBook." +
          index +
          ".played'" +
          (gigState.played ? " checked" : "") +
          "><span>Played</span></label>" +
          "<div class='tour-name'><strong>" +
          escapeHtml(gig.title) +
          "</strong><span>" +
          escapeHtml(gig.country) +
          "</span></div><div class='modifier-strip'>" +
          ["a", "b", "c", "p", "s"].map(function (modifier) {
            return (
              "<label class='modifier-chip'><input type='checkbox' data-path='journal.tourBook." +
              index +
              ".modifiers." +
              modifier +
              "'" +
              (gigState.modifiers[modifier] ? " checked" : "") +
              "><span>" +
              modifier.toUpperCase() +
              "</span></label>"
            );
          }).join("") +
          "</div>" +
          renderField(
            "journal.tourBook." + index + ".gigScore",
            gigState.gigScore,
            "Gig Score",
            "Score"
          ) +
          "</div>"
        );
      }).join("") +
      "</div></section>"
    );
  }

  function renderGigGrid(difficulty) {
    const title = difficulty === "rocker" ? "Rocker Gig Grid" : "Freak Gig Grid";
    const description =
      difficulty === "rocker"
        ? "The medium-difficulty sheet laid back over the original page art."
        : "The Freak sheet using the same page layouts with its own symbols and save state.";
    const currentPageNumber = uiState.gridPage[difficulty] || GIG_PAGES[0].number;
    const currentPage = GIG_PAGES.find(function (page) {
      return page.number === currentPageNumber;
    }) || GIG_PAGES[0];

    return (
      "<div class='journal-layout'><section class='panel span-12'><div class='grid-intro'><div><h2 class='section-title'>" +
      title +
      "</h2><p class='section-copy'>" +
      description +
      "</p></div><span class='difficulty-pill'>" +
      (difficulty === "rocker" ? "Rocker" : "Freak") +
      " difficulty</span></div>" +
      "<p class='mono-note'>This view now uses the extracted PDF page art as the backdrop. Type in the large box, type in the mini-box under it, and tap the circle to mark the third fillable spot.</p>" +
      "<div class='gig-page-tabs'>" +
      GIG_PAGES.map(function (page) {
        return (
          "<button type='button' class='gig-page-tab" +
          (page.number === currentPage.number ? " is-active" : "") +
          "' data-action='grid-page' data-difficulty='" +
          difficulty +
          "' data-page='" +
          page.number +
          "'>Page " +
          page.number +
          "</button>"
        );
      }).join("") +
      "</div></section>" +
      "<section class='panel span-12 gig-stage-panel'><div class='gig-page-header'><div><span class='badge'>Page " +
      currentPage.number +
      "</span><h3 class='gig-page-title'>Gig Grid Page " +
      currentPage.number +
      "</h3></div><div class='gig-page-chip-list'>" +
      currentPage.gigs.map(function (gig) {
        return (
          "<span class='gig-name-chip'><strong>" +
          escapeHtml(gig.label) +
          "</strong><span>" +
          escapeHtml(gig.title) +
          "</span></span>"
        );
      }).join("") +
      "</div></div><div class='gig-canvas-shell'><div class='gig-canvas'><img class='gig-page-image' width='" +
      GIG_PAGE_WIDTH +
      "' height='" +
      GIG_PAGE_HEIGHT +
      "' src='" +
      getGigPageImagePath(difficulty, currentPage.number) +
      "' alt='" +
      escapeHtml(title + " page " + currentPage.number) +
      "' data-art-src='" +
      escapeHtml(getGigPageImagePath(difficulty, currentPage.number)) +
      "'><div class='gig-page-missing' aria-hidden='true'><strong>Grid art missing</strong><span></span></div><div class='gig-page-overlay'>" +
      currentPage.gigs.map(function (gig) {
        return renderGigOverlay(difficulty, gig);
      }).join("") +
      "</div></div></div></section>" +
      "<section class='panel span-12'><h2 class='section-title'>Gig Notes</h2><p class='section-copy'>Page-specific notes stay below the art so the overlay itself can stay close to the printed layout.</p><div class='gig-page-notes'>" +
      currentPage.gigs.map(function (gig) {
        return renderGigNoteCard(difficulty, gig);
      }).join("") +
      "</div></section></div>"
    );
  }

  function renderGigOverlay(difficulty, gig) {
    const gigState = state.gigGrids[difficulty][gig.id];
    return gig.nodes.map(function (blueprintNode, nodeIndex) {
      return renderGigOverlayNode(difficulty, gig, blueprintNode, gigState.nodes[nodeIndex], nodeIndex);
    }).join("");
  }

  function renderGigOverlayNode(difficulty, gig, blueprintNode, nodeState, nodeIndex) {
    const basePath = "gigGrids." + difficulty + "." + gig.id + ".nodes." + nodeIndex;
    const renderHeight = getGigNodeRenderHeight(blueprintNode);
    const topOffsetPercent = ((Math.max(blueprintNode.h - 100, 0) / renderHeight) * 100).toFixed(2);
    const classes = [
      "gig-node-overlay",
      blueprintNode.type === "performance" ? "is-performance" : "",
      blueprintNode.h < 80 ? "is-compact" : "",
      blueprintNode.h > 100 ? "has-top-label" : ""
    ].filter(Boolean).join(" ");

    return (
      "<div class='" +
      classes +
      "' style='left:" +
      toPagePercent(blueprintNode.x, GIG_PAGE_WIDTH) +
      "%; top:" +
      toPagePercent(blueprintNode.y, GIG_PAGE_HEIGHT) +
      "%; width:" +
      toPagePercent(blueprintNode.w, GIG_PAGE_WIDTH) +
      "%; height:" +
      toPagePercent(renderHeight, GIG_PAGE_HEIGHT) +
      "%;' title='" +
      escapeHtml(gig.title + " node " + (nodeIndex + 1)) +
      "'>" +
      (blueprintNode.type === "performance"
        ? ""
        : "<input type='text' class='gig-node-main-input' data-path='" +
          basePath +
          ".section' value='" +
          escapeHtml(nodeState.section) +
          "' placeholder='' style='top:calc(" +
          topOffsetPercent +
          "% + 9%);'>") +
      "<input type='text' class='gig-node-sub-input' data-path='" +
      basePath +
      ".subBox' value='" +
      escapeHtml(nodeState.subBox) +
      "' placeholder='' style='top:" +
      (blueprintNode.type === "performance"
        ? "59%"
        : "calc(" + topOffsetPercent + "% + 60%)") +
      ";'>" +
      (blueprintNode.type === "performance"
        ? ""
        : "<button type='button' class='gig-node-ring" +
          (nodeState.ringMarked ? " is-marked" : "") +
          "' data-action='toggle-node-ring' data-path='" +
          basePath +
          ".ringMarked' aria-label='Toggle circle for " +
          escapeHtml(gig.title + " node " + (nodeIndex + 1)) +
          "' aria-pressed='" +
          String(nodeState.ringMarked) +
          "' style='top:calc(" +
          topOffsetPercent +
          "% + 25.5%);'></button>") +
      "</div>"
    );
  }

  function renderGigNoteCard(difficulty, gig) {
    const gigState = state.gigGrids[difficulty][gig.id];
    const filledCount = countGigFilledNodes(difficulty, gig.id);
    return (
      "<article class='gig-note-card'><div class='summary-left'><span class='badge'>" +
      escapeHtml(gig.label) +
      "</span><div class='summary-text'><h4>" +
      escapeHtml(gig.title) +
      "</h4><p>" +
      filledCount +
      " / " +
      gig.nodes.length +
      " nodes carrying data</p></div></div>" +
      renderCompactTextarea(
        "gigGrids." + difficulty + "." + gig.id + ".notes",
        gigState.notes,
        "Gig Notes",
        "Route clues, outcomes, or symbol reminders"
      ) +
      "</article>"
    );
  }

  function renderApp() {
    appRoot.innerHTML =
      "<div class='app-shell'><header class='hero-banner'><div class='hero-grid'><div>" +
      "<span class='kicker'>Metal Heroes Sheet Forge</span><h1 class='app-title'>Turn the sheets into stage gear.</h1>" +
      "<p class='subtitle'>Editable web app versions of the Metal Journal and both gig grids, with heavy-metal styling plus local save/load so the campaign can live on your machine instead of on paper.</p>" +
      "<div class='control-row'><button type='button' class='action-btn' data-action='export'>Save JSON</button>" +
      "<button type='button' class='action-btn secondary' data-action='import'>Load JSON</button>" +
      "<button type='button' class='action-btn secondary' data-action='reset'>New Blank Sheet</button></div>" +
      "<div class='tabs'><button type='button' class='tab-btn" +
      (uiState.activeTab === "journal" ? " is-active" : "") +
      "' data-action='tab' data-tab='journal'>Metal Journal</button><button type='button' class='tab-btn" +
      (uiState.activeTab === "rocker" ? " is-active" : "") +
      "' data-action='tab' data-tab='rocker'>Rocker Grid</button><button type='button' class='tab-btn" +
      (uiState.activeTab === "freak" ? " is-active" : "") +
      "' data-action='tab' data-tab='freak'>Freak Grid</button></div>" +
      "<div class='sheet-note'>Browser autosave is always on. Use JSON export when you want a portable backup or a named campaign file.</div></div>" +
      "<aside class='hero-side'><div class='summary-card'><span class='summary-label'>Road to Glory</span><span class='summary-value' data-summary='road'>0 / 0</span><div class='summary-copy'>Milestones checked in the journal.</div></div>" +
      "<div class='summary-card'><span class='summary-label'>Rocker Nodes</span><span class='summary-value' data-summary='rocker'>0 / 0</span><div class='summary-copy'>Filled node cards in the Rocker grid.</div></div>" +
      "<div class='summary-card'><span class='summary-label'>Freak Nodes</span><span class='summary-value' data-summary='freak'>0 / 0</span><div class='summary-copy'>Filled node cards in the Freak grid.</div></div>" +
      "<div class='summary-card'><span class='summary-label'>Last Autosave</span><span class='summary-value' data-summary='saved'>Autosave ready</span><div class='summary-copy'>Stored in this browser for quick return trips.</div></div></aside></div></header>" +
      "<main class='view'>" +
      (uiState.activeTab === "journal" ? renderJournal() : renderGigGrid(uiState.activeTab)) +
      "<div class='footer-note'>Metal Heroes and the Fate of Rock sheet data recreated from the uploaded PDFs for local personal play.</div></main></div>";

    refreshTelemetry();
  }

  function exportSheet() {
    const payload = {
      version: state.version,
      exportedAt: new Date().toISOString(),
      sheet: state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const datePart = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = "metal-heroes-sheet-" + datePart + ".json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function importSheet(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const payload = JSON.parse(String(event.target.result));
        const source = payload && payload.sheet ? payload.sheet : payload;
        state = deepMerge(createInitialState(), source);
        scheduleSave();
        renderApp();
      } catch (error) {
        alert("That file could not be read as a Metal Heroes save.");
      } finally {
        fileInput.value = "";
      }
    };
    reader.readAsText(file);
  }

  function resetSheet() {
    const confirmed = window.confirm("Start a fresh blank sheet? Your current browser autosave will be replaced.");
    if (!confirmed) {
      return;
    }
    state = createInitialState();
    scheduleSave();
    renderApp();
  }

  function handleInputEvent(target) {
    const path = target.dataset.path;
    if (!path) {
      return;
    }

    let value;
    if (target.type === "checkbox") {
      value = target.checked;
    } else if (target.type === "radio") {
      if (!target.checked) {
        return;
      }
      value = target.value;
    } else {
      value = target.value;
    }

    setByPath(path, value);
    scheduleSave();
    refreshTelemetry();
  }

  function handleActionClick(target) {
    const action = target.dataset.action;
    if (!action) {
      return;
    }

    if (action === "tab") {
      uiState.activeTab = target.dataset.tab;
      window.location.hash = uiState.activeTab;
      renderApp();
      return;
    }

    if (action === "grid-page") {
      uiState.gridPage[target.dataset.difficulty] = Number(target.dataset.page);
      renderApp();
      return;
    }

    if (action === "export") {
      exportSheet();
      return;
    }

    if (action === "import") {
      fileInput.click();
      return;
    }

    if (action === "reset") {
      resetSheet();
      return;
    }

    if (action === "set-pips") {
      const path = target.dataset.path;
      const value = Number(target.dataset.value);
      setByPath(path, value);
      updatePipTrack(target.closest(".pip-track"), value);
      scheduleSave();
      refreshTelemetry();
      return;
    }

    if (action === "toggle-node-ring") {
      const path = target.dataset.path;
      setByPath(path, !getByPath(path));
      scheduleSave();
      renderApp();
      return;
    }

    if (action === "add-node" || action === "remove-node") {
      const difficulty = target.dataset.difficulty;
      const gigId = target.dataset.gig;
      const nodeList = state.gigGrids[difficulty][gigId].nodes;
      if (action === "add-node") {
        nodeList.push(createNodeState());
      } else if (nodeList.length > 1) {
        nodeList.pop();
      }
      scheduleSave();
      renderApp();
    }
  }

  function updatePipTrack(track, value) {
    if (!track) {
      return;
    }
    const pipButtons = track.querySelectorAll(".pip");
    pipButtons.forEach(function (button, index) {
      button.classList.toggle("is-active", index < value);
    });
  }

  appRoot.addEventListener("click", function (event) {
    const target = event.target.closest("[data-action]");
    if (!target) {
      return;
    }
    handleActionClick(target);
  });

  appRoot.addEventListener("input", function (event) {
    const target = event.target;
    if (!target.matches("[data-path]")) {
      return;
    }
    handleInputEvent(target);
  });

  appRoot.addEventListener("change", function (event) {
    const target = event.target;
    if (!target.matches("[data-path]")) {
      return;
    }
    handleInputEvent(target);
  });

  appRoot.addEventListener("error", function (event) {
    const target = event.target;
    if (!target.matches || !target.matches(".gig-page-image")) {
      return;
    }
    const canvas = target.closest(".gig-canvas");
    if (!canvas) {
      return;
    }
    const missingText = canvas.querySelector(".gig-page-missing span");
    if (missingText) {
      missingText.textContent = target.dataset.artSrc || target.src;
    }
    canvas.classList.add("is-missing-art");
  }, true);

  appRoot.addEventListener("load", function (event) {
    const target = event.target;
    if (!target.matches || !target.matches(".gig-page-image")) {
      return;
    }
    const canvas = target.closest(".gig-canvas");
    if (canvas) {
      canvas.classList.remove("is-missing-art");
    }
  }, true);

  appRoot.addEventListener("toggle", function (event) {
    const detailKey = event.target.dataset.detailKey;
    if (!detailKey) {
      return;
    }
    uiState.openDetails[detailKey] = event.target.open;
  });

  fileInput.addEventListener("change", function () {
    const file = fileInput.files && fileInput.files[0];
    if (file) {
      importSheet(file);
    }
  });

  window.addEventListener("hashchange", function () {
    const nextTab = getInitialTab();
    if (nextTab !== uiState.activeTab) {
      uiState.activeTab = nextTab;
      renderApp();
    }
  });

  renderApp();
})();

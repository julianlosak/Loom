
const { Choice, Story, Branch } = require("..");
const { v4: uuidv4  } = require('uuid')


const branchData = [
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        start_here: true,
        reference_id: "1",
        removed_item: "Working Flashlight",
        branch_title:"Awakening",
        branch_content:
         `You awake in a panic! You look around and realize
          you are in a hospital. While everything seems vaguely 
          familiar, you have no memory.
          You stand but almost collapse under your own weight.
          You must find a purpose.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Look around",
                next_branch: "Initial Items"
            }
        ]
    },
    {
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "2",
        branch_title: "Initial Items",
        branch_content: "You find a flashlight.",
        story_choices: [
            {
                choice_text: "Pick up flashlight",
                next_branch: "Flashlight description"
            },
            {
                id: uuidv4(),
                choice_text: "Go back",
                next_branch: "Awakening"
            }
        ]
    },

    {
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "3",
        branch_title: "Flashlight description",
        received_item: "Flashlight",
        branch_content: "You notice the flashlight does not have batteries but you take it anyway",
        story_choices: [
            {   
                id: uuidv4(),
                choice_text: "Exit the room",
                next_branch: "Hospital Halls"
            }
        ],
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "4",
        branch_title:"Hospital Halls",
        branch_content:
         `You exit the room and notice no staff, or life of any kind, in the building.
          You see a receptionist desk that looks abandoned and tattered.
          &quot;I should check for something useful.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go to reception desk",
                next_branch: "Reception Desk"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "5",
        branch_title:"Reception Desk",
        branch_content:
         `A messy desk with a with a locked drawer`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Unlock Drawer",
                next_branch: "Locked Drawer"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "6",
        branch_title:"Locked Drawer",
        branch_content:
         `The drawer is locked with a 3 digit keypad combination.
         You see a sticky note that says, &quot;The meaning of the universe?&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                type: "input",
                choice_text: "042?",
                next_branch: "Drawer Success",
                fail_branch: "Drawer flashlight Fail"
            },
            {
                id: uuidv4(),
                type: "input",
                choice_text: "069?",
                next_branch: "Drawer Fail",
                fail_branch: "Drawer Fail"
            },
            {
                id: uuidv4(),
                type: "input",
                choice_text: "420?",
                next_branch: "Drawer Fail",
                fail_branch: "Drawer Fail"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "7",
        branch_title:"Drawer Fail",
        branch_content:
         `You jiggle the lock but it does not open`,
        story_choices: [
            {
                id: uuidv4(),
                type: "input",
                choice_text: "What could the code be?",
                next_branch: "Locked Drawer",
                fail_branch: "Drawer Fail"
            },
            {
                id: uuidv4(),
                choice_text: "Go back",
                next_branch: "Reception Desk"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "8",
        branch_title:"Drawer Success",
        received_item: "Working Flashlight",
        removed_item: "Flashlight",
        branch_content:
         `*click*
         The drawer opens to reveal batteries. You pick them up and slot them into the flashlight.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Continue down the hall",
                next_branch: "Stairwell Hallway Init"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "9",
        branch_title:"Stairwell Hallway Init",
        branch_content:
         `The unlocked door goes to the stairwell.
          There is nothing stopping you from going up or down.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go Down",
                next_branch: "Down Stairs Init"
            },
            {
                id: uuidv4(),
                choice_text: "Go Up",
                next_branch: "Up Stairs"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "10",
        branch_title:"Stairwell Hallway",
        branch_content:
         `&quot;Which way to go? Am I talking to myself?&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go Down",
                next_branch: "Down Stairs"
            },
            {
                id: uuidv4(),
                choice_text: "Go Up",
                next_branch: "Up Stairs"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "11",
        branch_title:"Down Stairs Init",
        branch_content:
         `&quot;Ah! An exit door. Finally I can get out of here.&quot;
          You jiggle the handle a few times.
         &quot;Of course it's locked! Why wouldn't it be locked?!&quot;
         You feel dread as you wallow in your mind.
         &quot;I have to find another way.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go up",
                next_branch: "Stairwell Hallway"
            },
            {
                id: uuidv4(),
                choice_text: "Go to main Lobby",
                next_branch: "Main Lobby Init"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "12",
        branch_title:"Down Stairs",
        branch_content:
         `You're at the bottom of the stairs.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go up",
                next_branch: "Stairwell Hallway"
            },
            {
                id: uuidv4(),
                choice_text: "Go to main Lobby",
                next_branch: "Main Lobby"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "13",
        branch_title:"Up Stairs",
        branch_content:
         `You notice another locked door labeled "Roof Access."`,
        story_choices: [
            {
                //2
                id: uuidv4(),
                choice_text: "Try door",
                next_branch: "Final Door"
            },
            {
                id: uuidv4(),
                choice_text: "Go back",
                next_branch: "Stairwell Hallway"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "14",
        branch_title:"Main Lobby Init",
        branch_content:
         `A dormant room with cobwebs and... Is that a person? A real person?!`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Approach Person",
                next_branch: "Figure Dialog"
            },
            {
                id: uuidv4(),
                choice_text: "Go back",
                next_branch: "Down Stairs"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "15",
        branch_title:"Figure Dialog",
        branch_content:
         `
         ══════════════▒████████████████████═════
         ════════════▓█████████▓███▓▓██▓███▓█████
         ═══════▒██████▓████▓██▓██▓▒▒▒▓▓▓▓▓▒█████
         ═══████▓████▓████▓▓█▓██════════░████████
         ═══████▓███▓▓███▓▓█▒▒█════████▒══███▓███
         ═══▓██▓████████▓██▓═█════██═══▒▓══██████
         ════██████▓███▓███═█════█▓════════██▓███
         ════████▓███▓███▒═░═══════════════██▓███
         ════▓██▓███▓██▓══════════════════▓█▓████
         ═════█▓██████═══════════════▓███═▒█▓████
         ═════██▓███═══░════════════██████▓█▓████
         ════▒█████═══███▓═════════██═░█▒████████
         ════████▓██═██░▒██═══════░█═░▓██▒═▒█▓███
         ═══████▓███═█═══██░══════▒══████═══█████
         ══▓███▓████▓══░███════════════▒════██▓██
         ══███▓▓█████════▓══════════════════██▓▓█
         ═▓███▓███▓██══════════════════════░███▓█
         ════▒████▓███▒═══════════════════██████▓
         ═════████▓████═════░███▓════════██████▓█
         ═════▒█████▓███════▓▒══░█══════██████▓▓█
         ═════███▓██▓████════█▒▓█▓═════▒████▓▓███
         ════██▓███▓██████═══▒██▓══════████▓▓████
         ═══██▓█████▓██████═══════════░███▓▓█████
         ═▒██████▓██▓▓██████══════════▓███▓██████
         ░█░████▓█████▓███▓██░════════▒████▓█████
         █═░███▓██████▓███▓███▓══░═════█████▓████
         ═░███▓██████▓███▓████████═══════████▓███

         
         &quot;Oh! You are awake.&quot;`,
        ambient_track: "drone",
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Where am I?",
                next_branch: "Where"
            },
            {
                id: uuidv4(),
                choice_text: "Who am I?",
                next_branch: "Who"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "16",
        branch_title:"Where",
        branch_content:
         `&quot;You are where you are meant to be...&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Who am I?",
                next_branch: "Who"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "17",
        branch_title:"Who",
        sound_effect: "ticks",
        branch_content:
         `&quot;You're the man that killed them... Don't you remember?&quot;
         
         You almost collapse to the sound of screeching metal.
        By the time you regain your sanity, the figure has disappeared.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go back to Main Lobby",
                next_branch: "Main Lobby"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "18",
        branch_title:"Main Lobby",
        branch_content:
         `You notice a pitch black hallway where the darkness is deafening.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go back to stairwell",
                next_branch: "Down Stairs"
            },
            {
                id: uuidv4(),
                required_item: "flashlight",
                choice_text: "Investigate hallway",
                next_branch: "1st Floor Hall Init",
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "19",
        branch_title:"1st Floor Hall Init",
        branch_content:
         `With your flashlight in hand, you can conquer the darkness.
          You notice an open hospital room with a faint light.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go Into Hospital Room",
                next_branch: "Hospital Room Scripted"
            },
            {
                id: uuidv4(),
                choice_text: "Go back",
                next_branch: "Main Lobby"
            },
            {
                id: uuidv4(),
                choice_text: "Keep going through hallway",
                next_branch: "Chapel Door Locked"
            }
        ]
    },


    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "21",
        branch_title:"1st Floor Hall",
        branch_content:
         `&quot;Now that power is back this dark and creepy hall isn't so dark and creepy.
          Don't want to go back into that creepy room.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go back",
                next_branch: "Main Lobby 2"
            },
            {
                id: uuidv4(),
                choice_text: "Keep going through hallway",
                next_branch: "Hospital Chapel"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "22",
        branch_title:"Chapel Door Locked",
        branch_content:
         `A large wooden door appears through the darkness.
         Candelight can be seen through the bottom of the
         door but it won't budge.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go back",
                next_branch: "Main Lobby"
            },
            {
                id: uuidv4(),
                choice_text: "Enter Room",
                next_branch: "Hospital Room Scripted"
            }
        ]
    },
    
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "23",
        branch_title:"Hospital Room Scripted",
        branch_content:
         `The door creaks open.

          Your head throbs as you feel a sense of regret and unease. 
          Anxiety fills your chest as figures appear around the room.
          The world narrows around you, and... you faint.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Continue",
                next_branch: "Hospital Chapel Init"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "24",
        branch_title:"Hospital Chapel Init",
        branch_content:
         `You awake in what seems to be the chapel in the hospital.
           As creepy as it is, you feel at peace.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Approach Altar",
                next_branch: "Altar"
            },
            {
                id: uuidv4(),
                choice_text: "Unlock Door",
                next_branch: "Chapel Door Unlocked"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "25",
        branch_title:"Altar",
        branch_content:
         `Candles and offerings surround the altar.
         
         The photos of people the memorial is dedicated to 
         stare into your eyes as if they knew who approached
         them.
         \n\n
         The feeling of anxiety is back, crushing your ribs
         under the weight of guilt.
         \n\n
         &quot;Did I kill these people?&quot;
          \n...
          \nDid you?`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Look around",
                next_branch: "Chapel Look"
            },
            {
                id: uuidv4(),
                choice_text: "Unlock Door",
                next_branch: "Chapel Door Unlocked"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "26",
        branch_title:"Main Lobby 2",
        branch_content:
         `Back at that main lobby, glad that woman isn't there.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go back to stairwell",
                next_branch: "Down Stairs"
            },
            {
                id: uuidv4(),
                choice_text: "Keep going through hallway",
                required_item: "flashlight",
                next_branch: "1st Floor Hall",
                fail_branch: "1st Floor Hall Fail"
            }
        ]
    },

    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "27",
        branch_title:"Chapel Look",
        branch_content:
         `You see a path that leads upstairs.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go up stairs",
                next_branch: "Chapel Upstairs"
            },
            {
                id: uuidv4(),
                choice_text: "Go to chapel door",
                next_branch: "Chapel Door Unlocked"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "28",
        branch_title:"Chapel Door Unlocked",
        branch_content:
         `You move a large plank from its resting place across the door
         and drop it on the ground.
         
         You feel uneasy, leaving so quickly.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go to altar",
                next_branch: "Chapel Altar"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "29",
        branch_title:"Chapel Upstairs",
        branch_content:
         `The stairs seem like they are at least a century old.
         Upon arriving at the top, you notice an elevator
         and a closet.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go into closet",
                next_branch: "Chapel Closet init"
            },
            {
                id: uuidv4(),
                choice_text: "Go to elevator",
                next_branch: "Elevator Init"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "30",
        branch_title:"Hospital Chapel",
        branch_content:
         `&quot;Back in the chapel.&quot;
        You try not to look at the photos.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go up stairs",
                next_branch: "Chapel Upstairs"
            },
            {
                id: uuidv4(),
                choice_text: "Go through the unlocked door",
                next_branch: "1st Floor Hallway"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "31",
        branch_title:"Chapel Closet init",
        branch_content:
         `You see a breaker box with cut wires.
         \n\n
         &quot;I'm no electrician...&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go to elevator",
                next_branch: "Elevator Init"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "32",
        branch_title:"Elevator Init",
        branch_content:
         `&quot;Wow, a creepy elevator. No surprise there.&quot;
         
         You try the elevator, but it has no power.
         
         &quot;Guess it's time to become an electrician.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go into closet",
                next_branch: "Chapel Closet"
            },
            {
                id: uuidv4(),
                choice_text: "Go to elevator",
                next_branch: "Elevator"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "33",
        branch_title:"Chapel Closet",
        branch_content:
         `&quot;Here goes nothing.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Connect wires randomly",
                next_branch: "Power Fail"
            },
            {
                id: uuidv4(),
                choice_text: "Connect blue to blue and red to red",
                next_branch: "Power Success"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "34",
        branch_title:"Power Fail",
        branch_content:
         `You're shocked that this is going so well, then you're just shocked.
         \n\n
        &quot;Ow! I hate this place!&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Try again",
                next_branch: "Chapel Closet"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "35",
        branch_title:"Power Success",
        branch_content:
         `Lights illuminate the room as power fills the hospital.
         
         &quot;Maybe I found my new career.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go back to elevator",
                next_branch: "Elevator"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "36",
        branch_title:"Elevator",
        branch_content:
         `With the power back on, you can take the elevator.
         **WARNING If you take this path you can no longer return to previous choice encounters**`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Take the elevator",
                next_branch: "Basement"
            },
            {
                id: uuidv4(),
                choice_text: "Wait",
                next_branch: "Chapel Upstairs"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "37",
        branch_title:"Basement",
        branch_content:
         `You arrive in a dark and dreary basement.
          You see a dark pit. Whispers fill your mind, begging you to come closer.
          Whispers seep from the darkness, &quot;Please....I beg you.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go to the pit",
                next_branch: "Pit"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "38",
        branch_title:"Pit",
        branch_content:
         `The pit is a pool of endless darkness. Maybe some light will help.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Shine flashlight in pit",
                next_branch: "Pit"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "39",
        branch_title:"Pit",
        branch_content:
         `The pit seems endless from what you can see. Maybe some light will help.`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Shine flashlight in pit",
                next_branch: "Skeleton"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "40",
        branch_title:"Skeleton",
        branch_content:
         `*SCREeEeeEeEeEEeCH*\n

        &quot;WHAT THE F***!&quot;

⡀⠀⠀⠀⠀⢀⠀⠀⡄⢀⡐⠐⣄⡒⡨⣀⣐⢀⡀⠂⠀⠐⠨⡀⠀⡀⠐⡰⠂⢀⠐⣀⠀⢊⡊⢀⠐⢀⢠⠀⠀⠀⢄⠐⠠⠀⠐⡗⡀⢂⡀⠸⠔⡲⡂⢒⠁⢀⢀⣠⣴⣾⠗⠀⠀
⠦⠀⠠⠄⠤⡀⠀⠀⠀⠄⣀⠀⡀⠀⠀⠀⠢⠀⠀⠢⠄⠀⠀⠐⠀⠘⠀⠀⢄⠀⠀⠀⠀⠀⠐⠆⠠⢀⠀⠀⡀⡀⠀⠄⠀⠦⠀⠺⢀⠀⠀⠠⠀⠀⠀⠀⠀⣴⣿⣿⠟⠁⠀⠁⣀
⣉⠀⠀⠀⠀⠀⠀⠠⠆⠂⠀⠀⠀⡀⠀⠐⠊⠰⠀⠀⡍⠀⠰⠄⠃⠴⠸⢀⠀⠀⠀⠈⠀⠀⠈⠈⢀⠀⢀⠀⠁⠁⠀⠀⡀⠐⠘⠀⠉⠖⠐⠂⠀⠂⡀⢧⣿⣿⣿⠃⢀⣠⣾⣶⡿
⠀⠀⠂⠄⠀⠀⠡⠒⠀⢠⠀⡀⠀⠀⠀⠀⠐⠀⠒⡆⢰⡄⠀⠀⠀⠐⠰⠀⣄⠁⢰⠀⠀⠁⠈⢠⠁⠉⡍⡌⠀⠀⢀⡀⠀⠀⠄⠁⠀⠂⠀⢠⡀⠀⢰⣿⣿⣿⠁⣠⣿⣿⠟⠋⠀
⠀⠠⠀⠀⠀⠀⠀⠀⠀⠅⠀⠊⠉⢀⣁⣦⣈⣀⣤⣤⣶⣦⣇⠀⠀⠀⠢⠀⠙⢧⡅⠀⠀⠀⠤⠠⠠⠁⠰⠀⢀⠈⠢⠠⠁⠀⠠⠁⠀⠁⠀⠠⠀⠂⢀⣿⣿⣿⣾⣿⣟⣁⣠⣴⣤
⠀⢀⠀⠐⠀⢀⠂⠑⠂⠠⠄⣠⣿⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡷⣐⠰⠀⡂⠈⠳⢘⠀⠀⠰⠂⠆⠀⠂⠀⠂⢸⣦⣶⣿⣶⣦⣬⣈⡐⠀⠐⠂⣂⣴⣿⣿⣿⣿⣿⣿⣟⡛⠛⢉
⠀⠐⠀⢀⠂⠀⡣⢀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠠⢸⠠⠐⠀⢤⡋⠂⠄⠀⠃⢌⠊⡂⠈⠻⠿⠿⠿⠿⣿⣿⣯⣷⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⠿
⠀⠀⠀⠁⠀⣀⠨⠄⠀⢀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡁⠁⢃⢇⣀⠈⠓⣔⠀⠀⡐⠄⢀⠈⠀⠒⠒⠐⠀⡀⢙⠛⠻⠟⢋⣹⣿⣿⣿⣿⣽⡏⠿⠿⠋⠉⠀⠀
⠀⠈⠀⠀⢀⠐⠁⡀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠠⠨⠈⠘⣿⣆⠀⠘⡏⠀⠥⠽⠀⠐⠀⠌⠨⠤⠦⠀⢀⠀⠀⢄⣴⣾⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣐⠀⠁⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢸⠸⠀⠈⠻⣧⢀⠀⢸⣰⠀⢀⠀⣅⠀⠒⢈⠉⣁⠀⠦⢈⣤⣿⣿⣿⣿⢟⣿⣿⡆⡀⢀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠂⠀⠳⢿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⢳⣿⠆⠂⠰⡟⣷⣤⡐⢻⡆⢰⠀⠀⠀⡔⢐⠀⠄⠀⣦⣾⣿⣿⣿⡿⢃⣾⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠊⠀⠐⠀⠈⠀⠸⠁⣶⣿⣿⣿⣸⡿⠿⠿⣿⣿⣿⣿⣥⣴⣿⡏⠾⣯⡹⢦⣄⣁⠄⡈⠀⣾⣏⠠⠉⠈⠀⠐⠿⣿⣿⣿⠟⢁⣾⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠢⠀⠀⠄⠀⠘⣿⣿⣯⣟⣷⣶⣾⣿⡿⢿⣿⣿⣿⣿⠇⠀⢼⣥⣾⣿⡏⡅⣠⢘⣿⣿⡾⠐⠀⣁⣥⣤⣿⣿⣯⣾⣿⣿⣿⣿⣿⠯⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠠⠀⠁⠀⠀⠀⠌⠈⠛⠿⣿⣿⣿⣿⣿⣷⣶⣿⣿⣿⡇⠄⠀⣼⣿⣿⣿⣿⣷⣥⣬⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡏⠃⠀⠀⠀⠀⠂⠀⠀⠀
⠀⠀⠀⣀⠀⠀⠀⠀⠈⠂⠀⡀⠑⣀⢀⣸⣿⣿⢿⣿⣿⣿⣿⢻⣿⣋⡓⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⡀⠀⠐⠀⠀⠠⠀⠀⠀⠀
⠀⡀⠀⠀⠉⠀⠀⢀⡀⠱⡄⠀⡀⠘⢽⣿⣿⣿⣷⣿⣿⣿⣿⣿⡿⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⡟⠉⠉⠛⠛⢻⠿⣿⣿⠿⠟⠿⠻⠿⠿⣿⣿⡿⣯⠄⠀⠀⠀⠁⠄
⠀⠀⠀⠠⠂⠀⠈⡀⠀⠀⠉⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⠿⠁⢰⣿⣿⠟⠛⠿⣿⣿⣿⣿⣧⠠⠀⣦⣰⠽⠓⠉⠉⠚⡀⠒⠂⠀⠂⡈⢹⠷⡆⡀⠀⠀⠀⠀⠀⠀⠐⠀⠈⠀
⠀⠀⠀⠀⠌⠀⠀⠀⠀⠄⠸⡃⠀⠨⠀⢸⣿⣿⣿⣿⣽⣽⣿⣷⣶⣿⣿⢏⣴⣿⣿⣿⣿⣿⣽⣿⣆⡀⢉⡇⠓⠄⠘⠷⠄⠁⠁⢰
⠀⠀⠀⣰⣴⡷⣺⣶⣧⡴⠿⣿⣀⣈⣥⣼⣿⣿⣿⣿⣿⣿⣿⣽⣛⣿⣱⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠩⠈⠀
⠀⠀⠀⢛⡃⣠⣿⣿⣿⣶⣾⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣯⠇⠠⠀⡀⠀⠐⡢
⠀⢄⡀⢈⣱⣿⣿⣿⣿⡁⠀⠀⠀⠀⢠⣿⣟⣥⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣧⡀⠈⠁⠈⢈⠉⠀⠀⡋⠐
⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣼⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⢟⣽⣿⣿⣿⣿⣿⣿⣷⣌⡈⠁⣀⠐⠀⡈⠀⠀⠀
⢠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣁⣤⣾⣿⣿⣿⣫⣿⣿⣿⣿⣿⡿⢋⣠⣿⣿⣈⣻⣿⣿⡎⠥⣄⠱⠁⠁⠀⠀
⢚⣿⣿⣿⣿⣿⣿⡟⠛⢿⣿⣿⣿⣿⣿⣿⠿⠟⣋⣵⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⠿⢿⣿⣿⣿⣄⠀⢸⣂⠐⠃⠀⠀
⠀⠙⢙⣿⣿⣿⣿⡁⠀⠈⣿⣿⣿⣿⣿⣿⣯⣾⣿⠟⢛⣩⣿⣿⣿⣿⣿⣿⣯⣥⣴⣶⣶⣶⣮⣝⣿⣿⣷⣮⠿⠠⠤⠀⡀
⠀⢠⣾⣿⣿⣿⣿⠇⠄⠂⠙⠻⢻⣿⣿⣿⣿⣿⣧⣠⣾⣿⢿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣛⠻⣿⣿⣿⡿⣿⡄⠐⠅⠠
⠀⢸⣿⣿⣿⣿⣿⠀⠐⠃⠀⠀⢸⣿⣿⡟⣿⣿⣿⡿⢟⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⡛⢿⣿⣿⢿⡗⠅⠀⠈⠠⠂⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢸⣿⣿⣿⣿⡛⠀⡀⠀⠄⣤⣾⣿⣟⣼⣿⣿⣿⣴⣿⣿⢯⣿⣿⣿⣿⢿⣿⡟⠻⠿⣿⣿⣿⣿⣿⣦⣹⣿⠀⠀⠔⣦⢄⠀⠀

Skeletons in Usison: &quot;WHY DID YOU DO THIS TO US?&quot; \n

Skeleton in Unison: &quot;JOIN US! FAIR THAT YOU DIE WHERE YOUR SINS RESIDE!&quot;

`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "RUN!",
                next_branch: "Run"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "41",
        branch_title:"Run",
        branch_content:
         `&quot;Screw this&quot;
         *You run the other direction but a skeleton grabs you by the ankle and drags you into the pit
         
         Darkness consumes you*`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Continue",
                next_branch: "Dream"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "43",
        branch_title:"Dream",
        branch_content:
         `Horrors and shadows dance around you.\n
         &quot;There is no hope for you down here\n
         Take a spin to decide your fate \n
         Meet us on the roof for answers.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Continue",
                next_branch: "Laundry Room"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "43",
        branch_title:"Dream",
        branch_content:
         `Horrors and shadows dance around you.\n
         "There is no hope for you down here\n
         Take a spin to decide your fate \n
         Meet us on the roof for answers."`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Continue",
                next_branch: "Laundry Room"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "44",
        branch_title:"Laundry Room",
        branch_content:
         `You awake on a pile of uniforms. Shaking with fear you look up only to come to the realization that the "pit" was a laundry chute.\n
         
         &quot;I can't take it anymore! I have to make it to the roof&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Look Around",
                next_branch: "Laundry Look"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "45",
        branch_title:"Laundry Look",
        branch_content:
         `You see a rack of employee uniforms and an elevator shaft`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Search Employee Pockets",
                next_branch: "Search Employee Pockets"
            },
            {
                id: uuidv4(),
                choice_text: "Go to elevator",
                next_branch: "Laundry Elevator Init"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "46",
        branch_title:"Laundry Elevator Init",
        branch_content:
         `&quot;The elevator still works! I guess almost shocking myself to death paid off.&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Search Employee Pockets",
                next_branch: "Search Employee Pockets"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "47",
        branch_title:"Search Employee Pockets",
        received_item: "Keycard",
        branch_content:
         `Checking every pocket you find a keycard.
         
         &quot;This must be my ticket to the roof&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Take the elevator",
                next_branch: "Laundry Elevator"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "48",
        branch_title:"Laundry Elevator",
        branch_content:
         `A new elevator button is lit up to take you to the upper floor
         &quot;Lets do this&quot; &quot;I am doing it again aren't I?&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go up",
                next_branch: "Hospital Halls Final"
            }
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "50",
        branch_title:"Hospital Halls Final",
        branch_content:
         `You find yourself back where it all started. You see the reception desk in front of you`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go back to stairwell",
                next_branch: "Stairwell Final"
            },
            
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "51",
        branch_title:"Stairwell Final",
        branch_content:
         `&quot;One last place to go&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go up",
                next_branch: "Up Stairs Final"
            }
            
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "52",
        branch_title:"Up Stairs Final",
        branch_content:
         `The door labeled &quot;roof access&quot; lies in front of you
         &quot;Time to put an end to this&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Discover your fate",
                next_branch: "Roof Access"
            },
            
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "53",
        branch_title:"Roof Access",
        removed_item: "Keycard",
        branch_content:
         `Fire consumes the roof. You manage to see a structure through the smoke\n\n
         &quot;Is that a wheel....OF CATS????&quot;

         The names of your victims are arranged on the wheel
         
         Demon: &quot;You finally arrive. Faced with the names of those you killed&quot;
         &quot;You live with the guilt of your students blood on your hands.&quot;
         &quot;You will always be killer. So why not kill again?&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Spin The Wheel",
                next_branch: "Spin"
            },
            
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "54",
        branch_title:"Spin",
        branch_content:
         `You approach the wheel and take hold of the lever. It feels natural in your hands.
         
         Demon:&quot;Do what you were born to do, FILTH!&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Reluctantly spin the wheel",
                next_branch: "Light Spin"
            },
            {
                id: uuidv4(),
                choice_text: "Spin from muscle memory",
                next_branch: "Normal Spin"
            },
            {
                id: uuidv4(),
                choice_text: "Give it all you got",
                next_branch: "Hard Spin"
            },
            
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "55",
        branch_title:"Light Spin",
        end_here: true,
        branch_content:
         `You hesitantly spin the wheel. It spins infinitly as the fire spreads, engulfing the roof slowly making it's way to your feet.
         DEMON: &quot;You have chosen wrong my friend&quot;
         The fire clings to your presence and engulfs you. While it does not burn, you are constricted as you watch the wheel spin......FOREVER

         
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░██░░░█░███░░██░░░█████░░░█░░░█░░░░░░░░░
░█░█░░█░█░█░█░░█░░█░█░█░░█░█░░█░░░░░░░░░
░█░░█░█░█░█░███░░░█░█░█░█░░░█░█░░░░░░░░░
░█░░░██░█░█░█░░█░░█░█░█░█████░█░░░░░░░░░
░█░░░░█░███░█░░█░░█░█░█░█░░░█░░████░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░████░░██░░░█░████░░████░██░░░█░░█████░░
░█░░░░░█░█░░█░█░░░█░░██░░█░█░░█░█░░░░░░░
░████░░█░░█░█░█░░░█░░██░░█░█░░█░█░░░███░
░█░░░░░█░░█░█░█░░░█░░██░░█░░█░█░█░░░░░█░
░████░░█░░░█░░████░░████░█░░██░░░█████░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
         
         
         `,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Restart?",
                next_branch: "Awakening"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "56",
        branch_title:"Normal Spin",
        branch_content:
         `DEMON: &quot;Interesting.....You have spun the wheel like you always have.&quot;
         Suddenly your memories return to you!
         DEMON: &quot;I have restored your memories since you are so stuck in your old ways&quot;       
         `,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Continue",
                next_branch: "Normal Spin Final"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "57",
        branch_title:"Normal Spin Final",
        end_here: true,
        branch_content:
         `Everything comes back to you. You can remember your childhood, your loves, and your sins.....
         
         The haunting memories of what you did to them, the horrors you bestowed on the ones who trusted you.
         It tears you apart.....

         &quot;I can't take it anymore!&quot;

         Unable to find a safe place within your own mind you see a ledge that was not engulfed by flames.....you jump.

         Thus a poetic demise for someone such as yourself PLAYER.

         
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░███░░░░███░░░░████░░░░░░░░░░░░░░░░░
░░░░░█░░█░░█░░░█░░░█░░░█░░░░░░░░░░░░░░░░
░░░░░███░░░█████░░░█░░░█░░░░░░░░░░░░░░░░
░░░░░█░░█░█░░░░░█░░█░░░█░░░░░░░░░░░░░░░░
░░░░░███░░█░░░░░█░░████░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░████░░██░░░█░████░░████░██░░░█░░█████░░
░█░░░░░█░█░░█░█░░░█░░██░░█░█░░█░█░░░░░░░
░████░░█░░█░█░█░░░█░░██░░█░█░░█░█░░░███░
░█░░░░░█░░█░█░█░░░█░░██░░█░░█░█░█░░░░░█░
░████░░█░░░█░░████░░████░█░░██░░░█████░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
         `,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Restart?",
                next_branch: "Awakening"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "58",
        branch_title:"Hard Spin",
        branch_content:
         `DEMON: "What are you doing?!
         
         You take the wheel and you throw the lever with as much might as you can muster.
         The wheel spins violently as sparks fly.\n
         The wheel shatters as pegs and debris fly every direction.
         
         DEMON: &quot;NOOOOO&quot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Continue",
                next_branch: "Hard Spin Final"
            },
        ]
    },
    {   
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "58",
        branch_title:"Hard Spin Final",
        end_here: true,
        branch_content:
         `The sky erupts into a maginficent light, you feel the world crumbling around you.
         Suddenly you are awoken by a familiar voice that says, &quot;Eli.....you fell asleep during class again&quot;


░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░█████░░░░███░░░░███░░░████░░░░░░░░
░░░░░█░░░░░░░░█░░░█░░█░░░█░░█░░░█░░░░░░░
░░░░░█░░░███░░█░░░█░░█░░░█░░█░░░█░░░░░░░
░░░░░█░░░░░█░░█░░░█░░█░░░█░░█░░░█░░░░░░░
░░░░░░█████░░░░███░░░░███░░░████░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░████░░██░░░█░████░░████░██░░░█░░█████░░
░█░░░░░█░█░░█░█░░░█░░██░░█░█░░█░█░░░░░░░
░████░░█░░█░█░█░░░█░░██░░█░█░░█░█░░░███░
░█░░░░░█░░█░█░█░░░█░░██░░█░░█░█░█░░░░░█░
░████░░█░░░█░░████░░████░█░░██░░░█████░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Restart?",
                next_branch: "Awakening"
            },
        ]
    },
    
    

    {   
        //1
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "42",
        branch_title:"Altar 2",
        branch_content:
         `&qwot;Ugh these creepy photos are staring at me again. I have to push further&qwot;`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Look around",
                next_branch: "Chapel Look"
            }
        ]
    },
    {   
        //2
        id: uuidv4(),
        story_reference_id: "andrew's story",
        reference_id: "49",
        branch_title:"Final Door Locked",
        branch_content:
         `You try the door but it is locked by kaycard access`,
        story_choices: [
            {
                id: uuidv4(),
                choice_text: "Go back",
                next_branch: "Stairwell Hallway Init"
            }
        ]
    },
    
    
]






const branchSeeds = async (storyRefUUIDs, userUUIDs) => {


    let starting_branches = []
    let branchUUIDs = {};
    let choiceData = []

    branchData.forEach((branch) => {
        branchUUIDs[branch.branch_title] = branch.id;
    })

    

    branchData.forEach((branch) => {
        branch.story_id = storyRefUUIDs[branch.story_reference_id]
        branch.user_id = userUUIDs[0]
        branch.story_choices.forEach((choice) => {
            choice['branch_id'] = branch.id
            choice['next_branch'] = branchUUIDs[choice.next_branch] ? branchUUIDs[choice.next_branch] : null
            choice['fail_branch'] = branchUUIDs[choice.fail_branch] ? branchUUIDs[choice.fail_branch] : null
            choice['story_id'] = storyRefUUIDs[branch.story_reference_id]
            choiceData.push(choice)            
        })
        if (branch.start_here) {
            starting_branches.push(branch)
        }
    })

    starting_branches.forEach( async (branch) => {
        
        await Story.update({ start_branch : branch.id }, {
            where: {
              id: branch.story_id,
            }    
          });
        console.log(await Story.findByPk(branch.story_id))
        
    })
    
    await Branch.bulkCreate(branchData, { returning: true })
    await Choice.bulkCreate(choiceData, { returning: true })
    

}

module.exports = branchSeeds;
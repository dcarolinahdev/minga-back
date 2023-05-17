import "dotenv/config.js"
import "../../config/database.js"
import Category from "../Category.js"

let categories = [
    {
        name: "shonen",
        color: "#EF8481",
        hover: "#FFE0DF",
        description: "Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.",
        character_photo: "https://i.postimg.cc/0jdQ27GW/shonen-character.png",
        cover_photo: "https://i.postimg.cc/SK3jZSNr/shonen-cover.png",
        admin_id: '6463fb800b365aca9ada7793'
    },{
        name: "comics",
        color: "#8883F0",
        hover: "#E0DBFF",
        description: "Marvel, DC and anothers comics",
        character_photo: "https://i.postimg.cc/dQmtCmdn/comics-character.png",
        cover_photo: "https://i.postimg.cc/DZG0H9SK/comics-cover.webp",
        admin_id: '6463fb800b365aca9ada7793'
    },{
        name: "shojo",
        color: "#00BA88",
        hover: "#D1FBF0",
        description: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        character_photo: "https://i.postimg.cc/YqzGpBbr/shojo-character.png",
        cover_photo: "https://i.postimg.cc/Dz88dJF0/shojo-cover.jpg",
        admin_id: '6463fb800b365aca9ada7793'
    },{
        name: "seinen",
        color: "#FC9C57",
        hover: "FFDFC8",
        description: "Japanese seinen tells stories with a mature tone. Some frequent themes in the plots are sex, violence and politics.",
        character_photo: "https://i.postimg.cc/6pQ3t28c/seinen-character.png",
        cover_photo: "https://i.postimg.cc/y86JxpbF/seinen-cover.jpg",
        admin_id: '6463fb800b365aca9ada7793'
    }
]

Category.insertMany(categories)
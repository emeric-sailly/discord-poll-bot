import { BOARDGAME_POLL, PRESENCE_POLL, WEBTALK_POLL } from "./constants/poll.js";
import { CreatePoll } from "./utils.js";

const args = process.argv.slice(2);

if(args.includes("--presence")) {
    CreatePoll(process.env.CHANNEL_ID_3DVIA_HBM_DEV, PRESENCE_POLL);
} else if(args.includes("--boardgame")) {
    CreatePoll(process.env.CHANNEL_ID_3DVIA_BOARDGAME, BOARDGAME_POLL);
} else if(args.includes("--webtalk")) {
    CreatePoll(process.env.CHANNEL_ID_3DVIA_HBM_DEV, WEBTALK_POLL);
} else {
    CreatePoll(process.env.CHANNEL_ID_TEST, PRESENCE_POLL);
}
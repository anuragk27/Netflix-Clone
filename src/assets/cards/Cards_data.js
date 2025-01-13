import card_img1 from './card1.jpg';
import card_img2 from './card2.jpg';
import card_img7 from './card7.jpg';
import card_img8 from './card8.jpg';
import card_img14 from './card14.jpg';
import carryon from './carryon.jpg';
import redone from './redone.jpg';
import venom from './venom.jpg';
import lion from './lion.jpg';
import deadpool from './deadpool.jpg';
import glad from './glad.jpg';
import culpatuya from './culpatuya.jpg';
import darknight from './darknight.jpg';
import elevation from './elevation.jpg';
import forestgump from './forestgump.jpg';
import godfather from './godfather.jpg';
import godfather2 from './godfather2.jpg';
import greenmiles from './greenmiles.jpg';
import heredity from './heredity.jpg';
import moana from './moana.jpg';
import parasite from './parasite.jpg';
import schindlerslist from './schindlerslist.jpg';
import shawshank from './shawshank.jpg';
import sonic from './sonic.jpg';
import spiritedaway from './spiritedaway.jpg';
import survive from './survive.jpg';
import your_name from './your_name.jpg';
import twelveangry from './twelveangry.jpg';
import absolution from './absolution.jpg';
import azrael from './azrael.jpg';
// import { redirect } from 'react-router-dom';

const cards_data = [
    {
        image: card_img1,
        name: "Kung Fu Panda",
        category: "popular",
        redirect: "Bla1TQ4UQ6o?si=1-idS2_BOdIojw0O"
    },
    {
        image: card_img2,
        name: "Squid Game",
        category: "popular",
        redirect: "hEqk10Kbgh4?si=KH7AaMIpv5Yn_Kas"
    },
    {
        image: venom,
        name: "venom",
        category: "popular",
        redirect: "u9Mv98Gr5pY?si=YPBKcZ4-CHTWyIDn"
    },
    {
        image: redone,
        name: "Red One",
        category: "popular",
        redirect: "U8XH3W0cMss?si=gan1jq0KdmYgHKdq"
    },
    {
        image: lion,
        name: "Lion King",
        category: "popular",
        redirect: "o17MF9vnabg?si=OaOfZcNBTpahFNm7"
    },
    {
        image: moana,
        name: "Moana",
        category: "popular",
        redirect: "LKFuXETZUsI?si=l4TXoVWDOv5AOnya"
    },
    {
        image: card_img7,
        name: "The Railway MEN",
        category: "popular",
        redirect: "iD3TZ_Xxc14?si=_ouIGRoVxiGFGLgx"
    },
    {
        image: card_img8,
        name: "Young Sheldon",
        category: "popular",
        redirect: "jffVm6tNBDg?si=Tp3Oi5b7tuJDSS91"
    },
    {
        image: deadpool,
        name: "Deadpool & Wolverine",
        category: "popular",
        redirect: "73_1biulkYk?si=9SjBCmApGtM6kDiJ"
    },
    {
        image: carryon,
        name: "Carry On",
        category: "popular",
        redirect: "KS0XacjMmOc?si=YJ0NpicL2Xx4_kzq"
    },
    {
        image: glad,
        name: "Gladiator",
        category: "popular",
        redirect: "TQwSz88ITAE?si=NEd7HeMkdwWg43iG"
    },
    {
        image: card_img14,
        name: "All of Us Are Dead",
        category: "popular",
        redirect: "IN5TD4VRcSM?si=fm84GNenwcSlQaAB"
    },
    {
        image: shawshank,
        name: "Shawshank Redemption",
        category: "top_rated",
        redirect: "PLl99DlL6b4?si=7rpNX1615vQ0gF_a",
    },
    {
        image: darknight,
        name: "The Dark Knight",
        category: "top_rated",
        redirect: "_PZpmTj1Q8Q?si=mX2nDBrfyGNmRiQ-"
    },
    {
        image: godfather,
        name: "GodFather",
        category: "top_rated",
        redirect: "UaVTIH8mujA?si=IH0NFMsWitX9rkrK"
    },
    {
        image: schindlerslist,
        name: "Schindler's List",
        category: "top_rated",
        redirect: "mxphAlJID9U?si=V4CYpfrK3CMCrYPz"
    },
    {
        image: twelveangry,
        name: "12 Angry Men",
        category: "top_rated",
        redirect: "TEN-2uTi2c0?si=tdKV3eDLMGE_mTlG"
    },
    {
        image: parasite,
        name: "Parasite",
        category: "top_rated",
        redirect: "SEUXfv87Wpk?si=bnt94SsTq7167luO"
    },
    {
        image: your_name,
        name: "Your Name",
        category: "top_rated",
        redirect: "_oWzYOwXn-o?si=cI6sisq1sV8A1KQZ"
    },
    {
        image: greenmiles,
        name: "Green Miles",
        category: "top_rated",
        redirect: "Ki4haFrqSrw?si=ka1uEGXnO3THS39O"
    },
    {
        image: godfather2,
        name: "GodFather 2",
        category: "top_rated",
        redirect: "9O1Iy9od7-A?si=ibk7fMIcYV8f1VCV"
    },
    {
        image: spiritedaway,
        name: "Spirited Away",
        category: "top_rated",
        redirect: "ByXuk9QqQkk?si=RQDf5Ct20ihFN5y-"
    },
    {
        image: forestgump,
        name: "Forest Gump",
        category: "top_rated",
        redirect: "bLvqoHBptjg?si=7eJcv0q1Mo9ds9a9"
    },
    {
        image: elevation,
        name: "Elevation",
        category: "upcoming",
        redirect: "ZivlF_UYkN0?si=kP3bRaDRnARfhg7P"
    },
    {
        image: redone,
        name: "Red One",
        category: "upcoming",
        redirect: "U8XH3W0cMss?si=gan1jq0KdmYgHKdq"
    },
    {
        image: lion,
        name: "Lion King",
        category: "upcoming",
        redirect: "o17MF9vnabg?si=OaOfZcNBTpahFNm7"
    },
    {
        image: culpatuya,
        name: "Culpatuya",
        category: "upcoming",
        redirect: "f27QempqWdY?si=D4WH2NbrnC4Kowz4"
    },
    {
        image: sonic,
        name: "Sonic",
        category: "upcoming",
        redirect: "f27QempqWdY?si=D4WH2NbrnC4Kowz4"
    },
    {
        image: survive,
        name: "Survive",
        category: "upcoming",
        redirect: "2sNkmHMLsVw?si=tHHWZsgXEaoT21mr"
    },
    {
        image: deadpool,
        name: "Deadpool & Wolverine",
        category: "upcoming",
        redirect: "73_1biulkYk?si=9SjBCmApGtM6kDiJ"
    },
    {
        image: absolution,
        name: "Absolution",
        category: "upcoming",
        redirect: "2sNkmHMLsVw?si=tHHWZsgXEaoT21mr"
    },
    {
        image: azrael,
        name: "Azrael",
        category: "upcoming",
        redirect: "XWtKsBGWsig?si=TE3eh7WVVg4rofDw"
    },
    {
        image: darknight,
        name: "The Dark Knight",
        category: "now_playing",
        redirect: "_PZpmTj1Q8Q?si=mX2nDBrfyGNmRiQ-"
    },
    {
        image: deadpool,
        name: "Deadpool & Wolverine",
        category: "now_playing",
        redirect: "73_1biulkYk?si=9SjBCmApGtM6kDiJ"
    },
    {
        image: card_img2,
        name: "Squid Game",
        category: "now_playing",
        redirect: "hEqk10Kbgh4?si=KH7AaMIpv5Yn_Kas"
    },
    {
        image: venom,
        name: "venom",
        category: "now_playing",
        redirect: "u9Mv98Gr5pY?si=YPBKcZ4-CHTWyIDn"
    },
    {
        image: your_name,
        name: "Your Name",
        category: "now_playing",
        redirect: "_oWzYOwXn-o?si=cI6sisq1sV8A1KQZ"
    },
    {
        image: redone,
        name: "Red One",
        category: "now_playing",
        redirect: "U8XH3W0cMss?si=gan1jq0KdmYgHKdq"
    },
    {
        image: heredity,
        name: "Heredity",
        category: "now_playing",
        redirect: "V6wWKNij_1M?si=ivcDHV_qwBORC8xH"
    },
    {
        image: shawshank,
        name: "Shawshank Redemption",
        category: "now_playing",
        redirect: "PLl99DlL6b4?si=7rpNX1615vQ0gF_a"
    },
    {
        image: spiritedaway,
        name: "Spirited Away",
        category: "now_playing",
        redirect: "ByXuk9QqQkk?si=RQDf5Ct20ihFN5y-"
    },
    {
        image: parasite,
        name: "Parasite",
        category: "now_playing",
        redirect: "SEUXfv87Wpk?si=bnt94SsTq7167luO"
    },
]

export default cards_data;
import {createMuiTheme} from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#ffba60";


export default createMuiTheme({
    palette: {
        common: {
            arcBlue: arcBlue,
            arcOrange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            // テキストの変換を行う。
            // none: テキストを変換しない（初期値）
            // capitalize: 単語の先頭文字を大文字にする
            // uppercase: 全ての文字を大文字にする
            // lowercase: 全ての文字を小文字にする
            // full-width: ての文字を全角形式にする。対応する全角形式が無い場合にはそのまま表示
            textTransform: "none",
            // フォントの重みや太さを指定する。
            textWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        }
    },
    mixins:{
        toolbar: {
            minHeight: "7em"
        }
    }
})
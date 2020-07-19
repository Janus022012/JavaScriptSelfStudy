import {createMuiTheme} from "@material-ui/core/styles";

const TAKASHO_WHITE1 = "#ffffff"
const TAKASHO_WHITE2 = "#f5f4ed"
const TAKASHO_BLACK1 = "#83827f"
const TAKASHO_BLACK2 = "#313131"
const TAKASHO_TEXT1 = "#b78e3d"
const TAKASHO_TEXT2 = "#cac7c3"

export default createMuiTheme({
    palette: {
        common: {
            TAKASHO_WHITE1: TAKASHO_WHITE1,
            TAKASHO_WHITE2: TAKASHO_WHITE2,
            TAKASHO_BLACK1: TAKASHO_BLACK1,
            TAKASHO_BLACK2: TAKASHO_BLACK2,
            TAKASHO_TEXT1: TAKASHO_TEXT1,
            TAKASHO_TEXT2: TAKASHO_TEXT2
        },
        primary: {
            main: TAKASHO_WHITE1
        },
        secondary: {
            main: TAKASHO_WHITE2
        }
    },
    typography: {
        tab: {
            fontFamily: "游明朝",
            // テキストの変換を行う。
            // none: テキストを変換しない（初期値）
            // capitalize: 単語の先頭文字を大文字にする
            // uppercase: 全ての文字を大文字にする
            // lowercase: 全ての文字を小文字にする
            // full-width: ての文字を全角形式にする。対応する全角形式が無い場合にはそのまま表示
            textTransform: "capitalize",
            fontSize: "13px",
            padding: 0,
            minHeight: "5em"
        },
        tab_Button: {
            marginRight: "10px",
            fontFamily: "Crimson Text",
            textTransform: "capitalize",
            minHeight: "5em"
        },
    },
    mixins:{
        toolbar: {
            minHeight: "5em"
        }
    }
})
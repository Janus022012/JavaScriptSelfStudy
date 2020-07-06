import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('it shows a comment box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App/>, div);

    // ブラウザがJSDOMによってシミュレートされ、その後Rreactコンポーネントがレンダリングされる。
    // レンダリング後のHTMLによってテストを行う。
    expect(div.innerHTML).toContainElement('CommentBox');

    // unmountComponentAtNodeはComponenntのクリーンアップである。
    ReactDOM.unmountComponentAtNode(div);
});

// Docker講座共通JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // 1. ヘッダー初期化
    if (typeof dockerCourseConfig !== 'undefined' && typeof initHeader === 'function') {
        initHeader(dockerCourseConfig);
    }

    // 2. 折りたたみ機能
    if (typeof initCollapsibleSections === 'function') {
        initCollapsibleSections();
    }

    // 3. コピーボタンの追加（YAMLのみ）
    document.querySelectorAll('.yaml-code').forEach(element => {
        // ボタンを追加する前に元のテキストを保存
        const code = element.querySelector('code') || element;
        const originalText = (code.textContent || code.innerText).trim();

        const btn = document.createElement('button');
        btn.classList.add('copy-button');
        btn.textContent = 'COPY';

        btn.addEventListener('click', () => {
            navigator.clipboard.writeText(originalText).then(() => {
                btn.textContent = 'COPIED!';
                setTimeout(() => {
                    btn.textContent = 'COPY';
                }, 2000);
            }).catch(err => {
                console.error('コピーに失敗しました:', err);
            });
        });

        element.appendChild(btn);
    });
});

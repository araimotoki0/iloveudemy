// ヘッダーコンポーネントを生成・挿入する関数
function initHeader(courseConfig) {
    // 現在のパスから相対パスを計算
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop();
    const isInSubfolder = currentPath.includes('/basic/') || currentPath.includes('/miraichi/') || currentPath.includes('/docker/');
    const rootPath = isInSubfolder ? '../' : './';

    // ヘッダーHTML生成
    const headerHTML = `
    <!-- ヘッダー -->
    <header class="relative py-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <!-- 背景装飾 -->
        <div class="absolute inset-0 opacity-30">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-purple-900/20"></div>
        </div>

        <!-- 装飾用の幾何学的形状 -->
        <div class="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl animate-pulse-slow"></div>
        <div class="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl animate-pulse-slow" style="animation-delay: -1s;"></div>

        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center">
                <h1 class="text-3xl md:text-4xl font-black mb-4 tracking-tight">
                    <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        ${courseConfig.title}
                    </span>
                </h1>
                ${courseConfig.subtitle ? `<p class="text-gray-300 text-lg mb-6">${courseConfig.subtitle}</p>` : ''}

                ${courseConfig.couponUrl ? `
                <div class="max-w-3xl mx-auto mt-6 bg-gradient-to-r from-red-900/40 to-pink-900/40 border border-red-500/50 p-4 rounded-xl shadow-2xl backdrop-blur-sm">
                    <p class="text-red-200 font-bold text-base mb-2">⚠️ 定価で購入せず必ずクーポンをご使用ください！</p>
                    <p class="text-gray-200 text-sm">最新のクーポンコードで 1500円 からご受講いただけます</p>
                </div>
                <div class="mt-6">
                    <a href="${courseConfig.couponUrl}" target="_blank"
                        class="inline-flex items-center px-8 py-3 text-base font-bold rounded-full shadow-2xl text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        クーポンで購入する
                    </a>
                </div>
                ` : ''}
            </div>
        </div>
    </header>

    <!-- ナビゲーションタブ -->
    <nav class="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
                ${courseConfig.pages.map(page => {
                    const isActive = currentFile === page.file;
                    return `
                    <a href="${page.file}"
                       class="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                           isActive
                           ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                           : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                       }">
                        ${page.icon ? `<span class="mr-2">${page.icon}</span>` : ''}${page.title}
                    </a>
                    `;
                }).join('')}
            </div>
        </div>
    </nav>

    <!-- 目次ポップアップ（コンパクト版） -->
    <div id="toc-modal" class="fixed top-32 right-8 z-50 hidden">
        <div class="glass-dark rounded-lg p-4 w-80 max-h-[70vh] overflow-y-auto shadow-2xl">
            <div class="flex justify-between items-center mb-3">
                <h2 class="text-sm font-bold text-white">
                    目次
                </h2>
                <button id="close-toc" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav id="toc-list" class="space-y-1">
                <!-- JavaScriptで動的に生成 -->
            </nav>
        </div>
    </div>

    <!-- 上に戻るボタン -->
    <button id="scroll-to-top" class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full shadow-2xl opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    </button>

    <!-- 目次ボタンと全て閉じるボタン（固定位置） -->
    <div class="fixed top-24 right-16 z-40 flex flex-col gap-2">
        <button id="toc-button"
            class="px-3 py-1.5 rounded-lg glass hover:bg-white/20 transition-colors duration-200 flex items-center gap-2">
            <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <span class="text-white text-xs">目次</span>
        </button>
        <button id="toggle-all" class="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors duration-200 flex items-center justify-center gap-2 text-xs text-red-300 hover:text-red-200 border border-red-500/30">
            <svg id="toggle-icon" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span id="toggle-text" class="text-white text-xs">全て閉じる</span>
        </button>
    </div>
    `;

    // bodyの最初に挿入
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // イベントリスナーを設定
    setupHeaderEvents();

    // DOM生成完了後にbodyを表示（ちらつき防止）
    requestAnimationFrame(() => {
        document.body.classList.add('loaded');
    });
}

// ヘッダーのイベントリスナーを設定
function setupHeaderEvents() {
    // スクロールアニメーション
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const scrollToTopBtn = document.getElementById('scroll-to-top');

        if (scrolled > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    });

    // 上に戻るボタン
    document.getElementById('scroll-to-top').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 目次ボタンの制御
    const tocButton = document.getElementById('toc-button');
    const tocModal = document.getElementById('toc-modal');
    const closeToc = document.getElementById('close-toc');

    tocButton.addEventListener('click', () => {
        tocModal.classList.toggle('hidden');
    });

    closeToc.addEventListener('click', () => {
        tocModal.classList.add('hidden');
    });

    // モーダル外をクリックで閉じる
    document.addEventListener('click', (e) => {
        if (!tocModal.contains(e.target) && e.target !== tocButton && !tocButton.contains(e.target)) {
            tocModal.classList.add('hidden');
        }
    });

    // 全て閉じる/開くボタン
    const toggleAllBtn = document.getElementById('toggle-all');
    const toggleText = document.getElementById('toggle-text');
    const toggleIcon = document.getElementById('toggle-icon');
    let allExpanded = true;

    toggleAllBtn.addEventListener('click', () => {
        const wrappers = document.querySelectorAll('.collapsible-content');
        const arrows = document.querySelectorAll('.content-section h3');

        if (allExpanded) {
            // 全て閉じる
            wrappers.forEach(wrapper => {
                wrapper.classList.add('collapsed');
            });
            arrows.forEach(arrow => {
                arrow.classList.add('collapsed');
            });
            toggleText.textContent = '全て開く';
            toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            toggleAllBtn.classList.remove('bg-red-500/20', 'hover:bg-red-500/30', 'border-red-500/30', 'text-red-300', 'hover:text-red-200');
            toggleAllBtn.classList.add('bg-green-500/20', 'hover:bg-green-500/30', 'border-green-500/30', 'text-green-300', 'hover:text-green-200');
            allExpanded = false;
        } else {
            // 全て開く
            wrappers.forEach(wrapper => {
                wrapper.classList.remove('collapsed');
            });
            arrows.forEach(arrow => {
                arrow.classList.remove('collapsed');
            });
            toggleText.textContent = '全て閉じる';
            toggleIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
            toggleAllBtn.classList.remove('bg-green-500/20', 'hover:bg-green-500/30', 'border-green-500/30', 'text-green-300', 'hover:text-green-200');
            toggleAllBtn.classList.add('bg-red-500/20', 'hover:bg-red-500/30', 'border-red-500/30', 'text-red-300', 'hover:text-red-200');
            allExpanded = true;
        }
    });
}

// セクションの折りたたみ機能を初期化
function initCollapsibleSections() {
    document.querySelectorAll('.content-section h3').forEach((h3, index) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('collapsible-content');

        let nextElement = h3.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'H2' && nextElement.tagName !== 'H3') {
            const elementToMove = nextElement;
            nextElement = nextElement.nextElementSibling;
            wrapper.appendChild(elementToMove);
        }

        h3.insertAdjacentElement('afterend', wrapper);

        h3.addEventListener('click', () => {
            wrapper.classList.toggle('collapsed');
            h3.classList.toggle('collapsed');
        });

        // 目次用のIDを生成
        if (!h3.id) {
            h3.id = `section-${index}`;
        }

        // 目次リストに追加
        const tocList = document.getElementById('toc-list');
        if (tocList) {
            const tocItem = document.createElement('a');
            tocItem.href = `#${h3.id}`;
            tocItem.textContent = h3.textContent.replace('▼', '').replace('▶', '').trim();
            tocItem.classList.add('block', 'px-3', 'py-2', 'rounded-md', 'text-gray-300', 'hover:text-white', 'hover:bg-white/10', 'transition-colors', 'duration-200', 'text-sm');
            tocItem.addEventListener('click', (e) => {
                e.preventDefault();
                h3.scrollIntoView({ behavior: 'smooth', block: 'start' });
                document.getElementById('toc-modal').classList.add('hidden');
            });
            tocList.appendChild(tocItem);
        }
    });
}

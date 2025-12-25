// サイドバーコンポーネントを生成・挿入する関数
function initSidebar() {
    // 現在のパスから相対パスを計算
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/basic/') || currentPath.includes('/miraichi/') || currentPath.includes('/docker/') || currentPath.includes('/setup/') || currentPath.includes('/miraichi-db/');
    const rootPath = isInSubfolder ? '../' : './';

    // サイドバーHTML
    const sidebarHTML = `
    <!-- サイドバー -->
    <aside id="sidebar"
        class="fixed left-0 top-0 h-full w-80 transform -translate-x-full transition-transform duration-300 ease-in-out z-50 overflow-y-auto"
        style="background-color: rgba(17, 24, 39, 0.95); backdrop-filter: blur(10px); color: white;">
        <div class="p-6">
            <div class="flex justify-between items-center mb-8">
                <h2
                    class="text-xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                    メニュー</h2>
                <button id="close-sidebar" class="text-gray-400 hover:text-white transition-colors">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <nav class="space-y-2">
                <a href="${rootPath}index.html" class="flex items-center px-4 py-3 rounded-lg ${currentPath.endsWith('index.html') && !isInSubfolder ? 'bg-white/20' : 'hover:bg-white/10'} sidebar-link transition-colors duration-200">
                    <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>クーポンリンク</span>
                </a>
                <div class="pt-4 pb-2">
                    <p class="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">講座資料</p>
                </div>
                <a href="${rootPath}basic/index.html"
                    class="flex items-center px-4 py-3 rounded-lg ${currentPath.includes('/basic/') ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors duration-200 sidebar-link">
                    <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>【第四弾】Laravel入門</span>
                </a>
                <a href="${rootPath}docker/what-is-docker.html"
                    class="flex items-center px-4 py-3 rounded-lg ${currentPath.includes('/docker/') ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors duration-200 sidebar-link">
                    <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span>【第五弾】Docker入門</span>
                </a>
                <div class="pt-4 pb-2">
                    <p class="text-xs font-semibold text-gray-400 uppercase px-4 mb-2">MIRAICHI特別講座</p>
                </div>
                <a href="${rootPath}miraichi/index.html"
                    class="flex items-center px-4 py-3 rounded-lg ${currentPath.includes('/miraichi/') ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors duration-200 sidebar-link">
                    <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div class="flex flex-col">
                        <span>独学でエンジニア</span>
                        <span class="text-xs text-gray-400 mt-0.5">2025年10月20日</span>
                    </div>
                </a>
                <a href="${rootPath}setup/setup-windows.html"
                    class="flex items-center px-4 py-3 rounded-lg ${currentPath.includes('/setup/') ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors duration-200 sidebar-link">
                    <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div class="flex flex-col">
                        <span>特別講座環境構築</span>
                        <span class="text-xs text-gray-400 mt-0.5">2025年11月15日</span>
                    </div>
                </a>
                <a href="${rootPath}miraichi-db/index.html"
                    class="flex items-center px-4 py-3 rounded-lg ${currentPath.includes('/miraichi-db/') ? 'bg-white/20' : 'hover:bg-white/10'} transition-colors duration-200 sidebar-link">
                    <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                    <div class="flex flex-col">
                        <span>データベース&バックエンド超入門</span>
                        <span class="text-xs text-gray-400 mt-0.5">2025年11月24日</span>
                    </div>
                </a>
            </nav>
        </div>
    </aside>

    <!-- オーバーレイ -->
    <div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"></div>
    `;

    // ハンバーガーメニューボタンHTML
    const openButtonHTML = `
    <!-- ハンバーガーメニューボタン -->
    <button id="open-sidebar"
        style="position: fixed; top: 1rem; left: 1rem; z-index: 9999; padding: 0.75rem; border-radius: 9999px; background-color: #1f2937; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
        <svg style="height: 1.5rem; width: 1.5rem; color: white;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    </button>
    `;

    // bodyの最初に挿入
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    document.body.insertAdjacentHTML('afterbegin', openButtonHTML);

    // イベントリスナーを設定
    setupSidebarEvents();
}

// サイドバーのイベントリスナーを設定
function setupSidebarEvents() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('open-sidebar');
    const closeBtn = document.getElementById('close-sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    // サイドバーを開く
    openBtn.addEventListener('click', () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    });

    // サイドバーを閉じる
    const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    };

    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
}

// DOMContentLoaded時にサイドバーを初期化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebar);
} else {
    initSidebar();
}

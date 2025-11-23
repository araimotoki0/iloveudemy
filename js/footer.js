// フッターコンポーネントを生成・挿入する関数
function initFooter() {
    // 現在のパスを取得してindex.htmlかどうかを判定
    const currentPath = window.location.pathname;
    const isIndexPage = currentPath.endsWith('index.html') || currentPath.endsWith('/');
    const isInSubfolder = currentPath.includes('/basic/') || currentPath.includes('/miraichi/') || currentPath.includes('/docker/') || currentPath.includes('/setup/') || currentPath.includes('/miraichi-db/');
    const isRootIndex = isIndexPage && !isInSubfolder;

    let footerHTML = '';

    if (isRootIndex) {
        // ルートのindex.htmlの場合はリッチなフッター（おみくじ・SNS付き）
        footerHTML = `
    <!-- フッター -->
    <footer class="relative mt-8">
        <!-- 装飾的な波形 -->
        <div class="absolute top-0 left-0 w-full overflow-hidden">
            <svg class="w-full h-32" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,37 C240,67 480,82 720,67 C960,52 1200,7 1440,37 L1440,74 L0,74 Z" fill="url(#gradient1)"
                    fill-opacity="0.3"></path>
                <path d="M0,37 C240,57 480,67 720,57 C960,47 1200,17 1440,37 L1440,74 L0,74 Z"
                    fill="url(#gradient2)" fill-opacity="0.4"></path>
                <path d="M0,37 C240,47 480,52 720,47 C960,42 1200,27 1440,37 L1440,74 L0,74 Z"
                    fill="url(#gradient3)" fill-opacity="0.5"></path>
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#3183ff" />
                        <stop offset="100%" style="stop-color:#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#8b5cf6" />
                        <stop offset="100%" style="stop-color:#ec4899" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ec4899" />
                        <stop offset="100%" style="stop-color:#10b981" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div class="bg-gradient-to-br from-dark-100 to-dark-300 text-white py-12 pt-20 relative">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h3 class="text-2xl font-black mb-6 gradient-text">ご訪問ありがとうございます！</h3>

                    <button id="fortune-button"
                        class="magnetic-button px-8 py-4 text-lg font-black rounded-full shadow-2xl btn-3d mb-8 transform hover:scale-105 transition-all duration-300">
                        🎁 今日のおみくじを引く ✨
                    </button>

                    <div class="flex justify-center space-x-8 mb-8">
                        <!-- X (Twitter) -->
                        <a href="https://x.com/_moto___" target="_blank"
                            class="magnetic-button text-gray-400 hover:text-neon-cyan transition-all duration-300 transform hover:scale-125 p-3 rounded-full glass">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z">
                                </path>
                            </svg>
                        </a>
                        <!-- GitHub -->
                        <a href="https://github.com/sbtest1218-oss" target="_blank"
                            class="magnetic-button text-gray-400 hover:text-neon-purple transition-all duration-300 transform hover:scale-125 p-3 rounded-full glass">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>

                    <div class="glass-dark p-4 rounded-xl max-w-2xl mx-auto">
                        <p class="text-lg font-bold mb-2 text-glow-white">✨ 最新技術を学んで未来を切り開こう ✨</p>
                        <p class="text-gray-300 text-sm">AWS、AI、Web開発の最前線で活躍するエンジニアを目指しましょう</p>
                    </div>
                </div>

                <div class="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p class="text-gray-400 text-sm">&copy; 2025 新井元気のプログラミング講座. All rights reserved.</p>
                    <p class="text-gray-500 text-xs mt-1">Designed with ❤️ for developers</p>
                </div>
            </div>
        </div>
    </footer>`;
    } else {
        // その他のページはシンプルなフッター
        footerHTML = `
    <!-- フッター -->
    <footer class="glass mt-20 py-8">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <p class="text-gray-400 text-sm">&copy; 2025 新井元気のプログラミング講座. All rights reserved.</p>
            <p class="text-gray-500 text-xs mt-1">Designed with ❤️ for developers</p>
        </div>
    </footer>`;
    }

    // おみくじモーダルはルートのindex.htmlの場合のみ追加
    if (isRootIndex) {
        footerHTML += `
    <!-- 高機能おみくじモーダル -->
    <div id="fortune-modal" class="fixed inset-0 flex items-center justify-center z-50 hidden">
        <div class="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-md" id="modal-backdrop"></div>
        <div
            class="glass-dark rounded-3xl p-12 max-w-2xl w-full mx-4 relative z-10 transform transition-all neon-border">
            <div class="text-center">
                <div class="mb-8">
                    <div
                        class="w-20 h-20 mx-auto bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-4xl animate-bounce-slow">
                        🔮
                    </div>
                </div>
                <h3 class="text-4xl font-black mb-8 gradient-text text-glow">本日の運勢</h3>
                <div id="fortune-result"
                    class="text-2xl mb-12 py-8 px-10 glass rounded-2xl shadow-inner min-h-32 flex items-center justify-center">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-cyan"></div>
                </div>
                <div class="flex gap-4 justify-center">
                    <button id="close-modal"
                        class="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-500 text-white font-bold rounded-full shadow-lg hover:from-gray-700 hover:to-gray-600 transition duration-300 focus:outline-none">
                        閉じる
                    </button>
                    <button id="retry-fortune"
                        class="px-8 py-4 btn-3d text-white font-bold rounded-full shadow-lg transition duration-300 focus:outline-none">
                        もう一度引く
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    }

    // main要素の後に挿入（</main>の後）
    const mainElement = document.querySelector('main');
    if (mainElement && mainElement.parentElement) {
        mainElement.insertAdjacentHTML('afterend', footerHTML);
    } else {
        // mainがない場合は、.min-h-screenの最後に追加
        const container = document.querySelector('.min-h-screen');
        if (container) {
            container.insertAdjacentHTML('beforeend', footerHTML);
        }
    }

    // イベントリスナーを設定（ルートのindex.htmlの場合のみ）
    if (isRootIndex) {
        setupFooterEvents();
    }
}

// フッターのイベントリスナーを設定
function setupFooterEvents() {
    // おみくじボタンのイベントリスナー
    const fortuneButton = document.getElementById('fortune-button');
    const closeModal = document.getElementById('close-modal');
    const retryFortune = document.getElementById('retry-fortune');
    const modalBackdrop = document.getElementById('modal-backdrop');

    if (fortuneButton) fortuneButton.addEventListener('click', showFortuneModal);
    if (closeModal) closeModal.addEventListener('click', closeFortuneModal);
    if (retryFortune) retryFortune.addEventListener('click', showRandomFortune);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeFortuneModal);
}

// おみくじモーダルを表示
function showFortuneModal() {
    const fortuneModal = document.getElementById('fortune-modal');
    const modalContent = document.querySelector('#fortune-modal .glass-dark');

    if (!fortuneModal || !modalContent) return;

    fortuneModal.classList.remove('hidden');

    modalContent.style.opacity = '0';
    modalContent.style.transform = 'scale(0.8) rotateY(20deg)';

    setTimeout(() => {
        modalContent.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'scale(1) rotateY(0deg)';
    }, 10);

    // ローディング後におみくじ結果を表示
    setTimeout(() => {
        showRandomFortune();
    }, 1000);
}

// ランダムなおみくじ結果を表示
function showRandomFortune() {
    const fortunes = [
        "大吉：宇宙人があなたのGitHubをスターしに来るでしょう👽",
        "大吉：古代エジプトの呪文で、バグが一瞬で直ります🐛✨",
        "大吉：ハリーポッターの魔法で、コードが自動で最適化されます🧙‍♂️",
        "大吉：月からのメッセージ、新しいプログラミング言語を発明するかも🌕",
        "大吉：アトランティスの失われた技術が、あなたのプロジェクトを加速させます🌊",
        "大吉：人工知能が今日あなたの親友になるでしょう🤖",
        "大吉：タイムトラベラーがバグの修正方法を教えてくれます⏰",
        "大吉：幸運のユニコーンが、デプロイを成功に導きます🦄",
        "大吉：マトリックスの世界から、革新的なアイデアが降ってきます💊",
        "中吉：忍者の秘伝書で、セキュリティの極意を学べます🥷",
        "中吉：賢者の石が、コードを黄金に変えるでしょう💎",
        "中吉：北欧の神々が、システムの安定性を祝福します⚡",
        "中吉：アラビアンナイトの魔法のランプから、三つの願いが叶います🪔",
        "中吉：ドラゴンが、サーバーを見守ってくれます🐉",
        "中吉：妖精たちが、夜中にコードを整理してくれるでしょう🧚‍♀️",
        "中吉：ピクシーが、デバッグを手伝ってくれます✨",
        "中吉：マーリンの魔法書から、新しいアルゴリズムを発見します📚",
        "中吉：星座が、最適な開発パスを示してくれます⭐",
        "中吉：占星術師が、リリース日の吉凶を占います🔮",
        "小吉：謎の古代文明からプルリクエストが届きます🗿",
        "小吉：レインボーユニコーンが、テストコードを書いてくれます🌈",
        "小吉：猫又が、バグを見つけてくれるでしょう😺",
        "小吉：河童が、データベースの最適化を手伝ってくれます🥒",
        "小吉：鳳凰が、レガシーコードを蘇らせます🦅",
        "小吉：キツネの嫁入りが、新機能のひらめきをくれます🦊",
        "小吉：天狗が、パフォーマンスチューニングのコツを教えます👺",
        "小吉：インターネットの妖精が、WiFiを高速化します🧚‍♂️",
        "小吉：雪女が、サーバールームの冷却を助けてくれます❄️",
        "小吉：座敷わらしが、作業環境を整えてくれます👻",
        "吉：火の鳥が、古いバグを焼き尽くします🔥",
        "吉：ペガサスが、クラウドの彼方へ導いてくれます🦄",
        "吉：人魚姫が、データの海から宝物を見つけてくれます🧜‍♀️",
        "吉：こびとたちが、マイクロサービスを構築します🧝‍♂️",
        "吉：ゴブリンが、コードのリファクタリングを手伝います👺",
        "吉：ケンタウロスが、新しい技術の使い方を教えてくれます🐎",
        "吉：フェニックスが、クラッシュしたアプリを復活させます🦅",
        "吉：ヨガの達人が、デバッグの瞑想法を伝授します🧘‍♀️",
        "吉：空飛ぶじゅうたんが、デプロイを運んでくれます🪄",
        "吉：千里眼の占い師が、潜在的なバグを予言します👁️",
        "末吉：土蜘蛛が、ネットワークを監視してくれます🕷️",
        "末吉：カッパが、データベースの深層から秘密を見つけます🥒",
        "末吉：道士が、バグ退治の護符を授けてくれます📜",
        "末吉：狐の嫁入りの日は、デプロイを控えめにしましょう🌧️",
        "末吉：鬼が、パフォーマンス改善のヒントをくれます👹",
        "末吉：天使が、エラーハンドリングを見守ってくれます👼",
        "末吉：半魚人が、データベースの深層を探索します🧜‍♂️",
        "末吉：ムーミンが、デバッグの冒険に連れて行ってくれます🌟",
        "末吉：ゾンビプロセスの復活に注意が必要です🧟",
        "末吉：ヴァンパイアが、夜間バッチの実行を見守ります🧛‍♂️",
        "凶：黒猫が横切ったら、バックアップを取り直しましょう🐈‍⬛",
        "凶：魔女の呪いで、キーボードが一時的に反転するかも🧙‍♀️",
        "凶：人面魚が、データベースに警告を発しています🐟",
        "凶：幽霊バグが、深夜に現れるかもしれません👻",
        "凶：eclipse of the IDEに気をつけましょう🌑",
        "凶：マーメイドの涙で、サーバーが一時的に不安定に🧜‍♀️",
        "凶：たぬきの化かしで、コードが難読化されるかも🦝",
        "凶：百目の怪が、タイプミスを誘発します👁️",
        "凶：hungry ghostsがメモリを消費するかも...👻",
        "凶：呪われたコードレビューに要注意です⚠️",
        "大凶：コードの墓場から、レガシーバグが蘇ります💀",
        "大凶：闇の力が、git historyを塗り替えようとしています🌚",
        "大凶：魔界の門が開き、未知のバグが放たれるかも😈",
        "大凶：コードの迷宮に迷い込まないよう注意です🌀",
        "大凶：デーモンプロセスの反乱に気をつけて👿",
        "超吉：量子コンピューターの神様が微笑んでいます🌟",
        "超吉：AIの女神が、コードを祝福してくれます🤖",
        "超吉：銀河系評議会が、あなたのプロジェクトを認証します🌌",
        "超吉：タイムロードが、未来のバグを事前に修正します⏳",
        "超吉：アセンブリの古代の神が、最適化の秘密を伝授します⚡",
        "激吉：虹色のフェニックスが、完璧なデプロイを約束します🌈",
        "激吉：量子もつれのパラドックスで、バグが消滅します✨",
        "激吉：スーパーAIが、コードレビューを完璧にこなします🦾",
        "激吉：プログラミングの神様が、インスピレーションを与えます📿",
        "激吉：デジタル世界の賢者が、最高の解決策を示します💫",
        "特吉：オープンソースの精霊が、Pull Requestを承認します🌟",
        "特吉：テクノマンサーが、完璧なアーキテクチャを啓示します🔮",
        "特吉：サイバー空間の守護神が、セキュリティを強化します🛡️",
        "特吉：コードの女神が、リファクタリングの道を示します👑",
        "特吉：デジタルフェアリーが、UIを魔法のように改善します✨",
        "omega吉：宇宙のビッグバンが、革新的なソリューションを生み出します💥",
        "omega吉：全てのバグが特徴となる稀有な日です✨",
        "omega吉：異次元からの来訪者が、未来の技術を伝授します👽",
        "omega吉：量子もつれの奇跡が、全てのテストをパスさせます🌌",
        "omega吉：デジタル世界の創造神が、あなたのコードを完璧にします🌟",
        "null：突然の404エラー...おみくじが見つかりません🔍",
        "undefined：おみくじは存在しますが、結果は未定義です❓",
        "NaN：おみくじの結果が数値ではありません🔢",
        "[object Object]：おみくじが正しくシリアライズできません📦",
        "Type Error：おみくじの型が一致しません⚠️",
        "null吉：無の力を味方につけた最強の運勢です！🎯",
        "500吉：内部サーバーエラーほど強運はありません！🚀",
        "SyntaxError吉：エラーの向こうに最高の幸運が待っています！✨",
        "try-catch吉：どんな例外も幸運に変換される素晴らしい日です🍀",
        "Runtime吉：実行時に幸運がどんどん溢れ出ます💫",
        "Stack Overflow吉：積み重なった幸運が溢れ出します📚✨",
        "Infinite吉：無限の幸運ループに突入します♾️",
        "ArrayIndexOutOfBounds吉：幸運が配列の範囲を超えて溢れ出ます📊",
        "Promise吉：非同期な幸運が確実に実行されます🤝",
        "Binary吉：0と1の世界から幸運が舞い降ります🔄",
        "HTTP 200吉：すべてのリクエストが成功する完璧な日です✅",
        "Memory Overflow吉：幸運がメモリに収まりきらないほど訪れます💾",
        "Git Push吉：幸運を本番環境にデプロイできる日です🚀",
        "Buffer Overflow吉：幸運がバッファを超えて溢れ出します📈",
        "Cloud吉：クラウドの彼方から幸運が降り注ぎます☁️",
        "Quantum吉：量子もつれの力で幸運が重ね合わせされます🌌",
        "Unicode吉：世界中の文字が幸運を呼び込みます🌏",
        "Fibonacci吉：幸運が黄金比で増大します📊✨",
        "Pi吉：円周率のように無限に続く幸運です🥧",
        "Root吉：管理者権限級の強運が発動します👑"
    ];

    const result = fortunes[Math.floor(Math.random() * fortunes.length)];
    const fortuneResult = document.getElementById('fortune-result');

    if (!fortuneResult) return;

    // ローディングを停止
    fortuneResult.innerHTML = '';
    fortuneResult.textContent = result;

    // 結果に応じたスタイリング
    fortuneResult.className = 'text-2xl mb-12 py-8 px-10 glass rounded-2xl shadow-inner min-h-32 flex items-center justify-center';

    if (result.includes('超大吉') || result.includes('激吉') || result.includes('特吉')) {
        fortuneResult.classList.add('text-neon-cyan', 'font-bold');
        fortuneResult.style.textShadow = '0 0 20px rgba(0, 255, 255, 0.8)';
    } else if (result.includes('大吉')) {
        fortuneResult.classList.add('text-yellow-300', 'font-bold');
        fortuneResult.style.textShadow = '0 0 15px rgba(255, 215, 0, 0.8)';
    } else if (result.includes('中吉') || result.includes('小吉') || result.includes('吉')) {
        fortuneResult.classList.add('text-green-300');
        fortuneResult.style.textShadow = '0 0 10px rgba(16, 185, 129, 0.6)';
    } else if (result.includes('凶')) {
        fortuneResult.classList.add('text-red-300');
        fortuneResult.style.textShadow = '0 0 10px rgba(239, 68, 68, 0.6)';
    } else {
        fortuneResult.classList.add('text-purple-300');
        fortuneResult.style.textShadow = '0 0 15px rgba(139, 92, 246, 0.8)';
    }

    // アニメーション効果
    fortuneResult.style.opacity = '0';
    fortuneResult.style.transform = 'scale(0.8)';

    setTimeout(() => {
        fortuneResult.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
        fortuneResult.style.opacity = '1';
        fortuneResult.style.transform = 'scale(1)';
    }, 100);
}

// モーダルを閉じる
function closeFortuneModal() {
    const fortuneModal = document.getElementById('fortune-modal');
    const modalContent = document.querySelector('#fortune-modal .glass-dark');

    if (!fortuneModal || !modalContent) return;

    modalContent.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)';
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'scale(0.8) rotateY(-20deg)';

    setTimeout(() => {
        fortuneModal.classList.add('hidden');
        // リセット
        const fortuneResult = document.getElementById('fortune-result');
        if (fortuneResult) {
            fortuneResult.innerHTML = '<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-cyan"></div>';
            fortuneResult.className = 'text-2xl mb-12 py-8 px-10 glass rounded-2xl shadow-inner min-h-32 flex items-center justify-center';
            fortuneResult.style.textShadow = '';
        }
    }, 600);
}

// DOMContentLoaded時にフッターを初期化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}

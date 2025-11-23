// タスクデータ（メモリ上のみ - リロードで消える！）
let tasks = [];
let taskIdCounter = 1;

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
});

// タスク作成
function createTask(event) {
    event.preventDefault();

    const task = {
        id: taskIdCounter++,
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('taskDescription').value,
        priority: document.getElementById('taskPriority').value,
        status: 'pending',
        dueDate: document.getElementById('taskDueDate').value,
        createdAt: new Date()
    };

    tasks.push(task);
    renderTasks();
    hideCreateModal();

    // フォームをリセット
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskPriority').value = 'medium';
    document.getElementById('taskDueDate').value = '';
}

// タスク削除
function deleteTask(id) {
    if (confirm('本当に削除しますか？')) {
        tasks = tasks.filter(task => task.id !== id);
        renderTasks();
    }
}

// タスク完了
function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = 'completed';
        task.completedAt = new Date();
        renderTasks();
    }
}

// ステータス変更
function changeStatus(id, status) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = status;
        if (status === 'completed') {
            task.completedAt = new Date();
        }
        renderTasks();
    }
}

// フィルタリング
function filterTasks() {
    renderTasks();
}

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('statusFilter').value = '';
    document.getElementById('priorityFilter').value = '';
    renderTasks();
}

// タスク一覧を描画
function renderTasks() {
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');

    // フィルタ条件を取得
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const priorityFilter = document.getElementById('priorityFilter').value;

    // フィルタリング
    let filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchText) ||
                             task.description.toLowerCase().includes(searchText);
        const matchesStatus = !statusFilter || task.status === statusFilter;
        const matchesPriority = !priorityFilter || task.priority === priorityFilter;

        return matchesSearch && matchesStatus && matchesPriority;
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    taskList.innerHTML = filteredTasks.map(task => `
        <div class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <div class="flex items-start justify-between">
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2 py-1 text-xs rounded ${getPriorityColorClass(task.priority)}">
                            優先度: ${getPriorityLabel(task.priority)}
                        </span>
                        <span class="px-2 py-1 text-xs rounded ${getStatusColorClass(task.status)}">
                            ${getStatusLabel(task.status)}
                        </span>
                        ${isOverdue(task) ? '<span class="px-2 py-1 text-xs rounded bg-red-600 text-white">期限切れ</span>' : ''}
                    </div>

                    <h3 class="text-lg font-bold text-gray-800 mb-2">${escapeHtml(task.title)}</h3>

                    ${task.description ? `<p class="text-gray-600 mb-2">${escapeHtml(task.description.substring(0, 100))}${task.description.length > 100 ? '...' : ''}</p>` : ''}

                    <div class="text-sm text-gray-500">
                        ${task.dueDate ? `<span>期限: ${formatDate(task.dueDate)}</span>` : ''}
                    </div>
                </div>
            </div>

            <!-- アクション -->
            <div class="flex gap-2 mt-4">
                ${task.status !== 'completed' ? `
                    <button onclick="completeTask(${task.id})" class="text-green-600 hover:text-green-800 text-sm">
                        ✓ 完了にする
                    </button>
                ` : ''}
                <button onclick="deleteTask(${task.id})" class="text-red-600 hover:text-red-800 text-sm">
                    削除
                </button>
            </div>
        </div>
    `).join('');
}

// ヘルパー関数
function getPriorityLabel(priority) {
    const labels = { low: '低', medium: '中', high: '高' };
    return labels[priority] || priority;
}

function getStatusLabel(status) {
    const labels = { pending: '未着手', in_progress: '進行中', completed: '完了' };
    return labels[status] || status;
}

function getPriorityColorClass(priority) {
    const colors = {
        high: 'bg-red-100 text-red-800',
        medium: 'bg-yellow-100 text-yellow-800',
        low: 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
}

function getStatusColorClass(status) {
    const colors = {
        completed: 'bg-green-100 text-green-800',
        in_progress: 'bg-blue-100 text-blue-800',
        pending: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
}

function isOverdue(task) {
    if (!task.dueDate || task.status === 'completed') return false;
    return new Date(task.dueDate) < new Date();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// モーダル操作
function showCreateModal() {
    document.getElementById('createModal').classList.remove('hidden');
    document.getElementById('createModal').classList.add('flex');
}

function hideCreateModal() {
    document.getElementById('createModal').classList.add('hidden');
    document.getElementById('createModal').classList.remove('flex');
}

// モーダル外クリックで閉じる
document.getElementById('createModal').addEventListener('click', (e) => {
    if (e.target.id === 'createModal') {
        hideCreateModal();
    }
});

// --- SERVIÇOS ---
let listagemServicos = [
    { id: 1, nome: "Manicure", categoria: "Unhas", duracao: "45 min", preco: 40.00 },
    { id: 2, nome: "Pedicure", categoria: "Unhas", duracao: "45 min", preco: 60.00 },
    { id: 3, nome: "Cutilagem", categoria: "Unhas", duracao: "30 min", preco: 35.00 },
    { id: 4, nome: "Esmaltação", categoria: "Unhas", duracao: "30 min", preco: 35.00 },
    { id: 5, nome: "Esmaltação em Gel", categoria: "Unhas", duracao: "1h30min", preco: 110.00 },
    { id: 6, nome: "Alongamento em Fibra de Vidro", categoria: "Unhas", duracao: "2h", preco: 220.00 },
    { id: 7, nome: "Corte Feminino Premium", categoria: "Cabelo", duracao: "1h", preco: 150.00 },
    { id: 8, nome: "Escova Modelada", categoria: "Cabelo", duracao: "45 min", preco: 90.00 },
    { id: 9, nome: "Hidratação", categoria: "Cabelo", duracao: "1h", preco: 180.00 },
    { id: 10, nome: "Coloração", categoria: "Cabelo", duracao: "1h 30min", preco: 190.00 },
    { id: 11, nome: "Henna", categoria: "Cabelo", duracao: "1h", preco: 150.00 },
    { id: 12, nome: "Tonalização", categoria: "Cabelo", duracao: "1h 30min", preco: 190.00 },
    { id: 13, nome: "Progressiva", categoria: "Cabelo", duracao: "2h 30min", preco: 250.00 },
    { id: 14, nome: "Alinhamento'", categoria: "Cabelo", duracao: "2h", preco: 250.00 },
    { id: 15, nome: "Lavagem", categoria: "Cabelo", duracao: "30 min", preco: 40.00 },
    { id: 16, nome: "Penteado", categoria: "Cabelo", duracao: "1h", preco: 250.00 },
    { id: 17, nome: "Babyliss", categoria: "Cabelo", duracao: "1h min", preco: 120.00 },
    { id: 18, nome: "Design de Sobrancelha", categoria: "Sobrancelhas", duracao: "30 min", preco: 50.00 },
    { id: 18, nome: "Design de Sobrancelha + Henna", categoria: "Sobrancelhas", duracao: "45 min", preco: 75.00 },
    { id: 19, nome: "Design de Sobrancelha + Tintura", categoria: "Sobrancelhas", duracao: "45 min", preco: 75.00 },
    { id: 20, nome: "Design de Sobrancelha + Brow Lamination", categoria: "Sobrancelhas", duracao: "1h", preco: 198.00 },
    { id: 21, nome: "Brow Lamination + Lash Lifting", categoria: "Sobrancelhas", duracao: "2h", preco: 375.00 },
    { id: 22, nome: "Extensão de Cílios", categoria: "Cílios", duracao: "2h", preco: 180.00 },
    { id: 23, nome: "Lash Lifting", categoria: "Cílios", duracao: "1h", preco: 198.00 },
    { id: 24, nome: "Brow Lamination + Lash Lifting", categoria: "Cílios", duracao: "2h", preco: 375.00 },
    { id: 25, nome: "Nano Labial / Hidragloss", categoria: "Nano", duracao: "1h 15min", preco: 600.00 },
    { id: 26, nome: "Nano Pigmentação fio a fio", categoria: "Nano", duracao: "1h 15min", preco: 900.00 },
    { id: 27, nome: "Depilação - Virilha", categoria: "Depilação", duracao: "40 min", preco: 90.00 },
    { id: 28, nome: "Depilação - Axila", categoria: "Depilação", duracao: "20 min", preco: 40.00 },
    { id: 29, nome: "Depilação - Perna Completa", categoria: "Depilação", duracao: "1h", preco: 95.00 },
    { id: 30, nome: "Depilação - Meia Perna", categoria: "Depilação", duracao: "30 min", preco: 60.00 },
    { id: 31, nome: "Depilação - Buço", categoria: "Depilação", duracao: "15 min", preco: 25.00 },
    { id: 32, nome: "Depilação - Nariz", categoria: "Depilação", duracao: "15 min", preco: 25.00 },
    { id: 33, nome: "Massagem Modeladora", categoria: "Estética", duracao: "1h", preco: 150.00 },
    { id: 34, nome: "Drenagem Linfática", categoria: "Estética", duracao: "1h", preco: 150.00 },
    { id: 35, nome: "Sessão de Ezbody", categoria: "Estética", duracao: "45 min", preco: 180.00 },
    { id: 36, nome: "Limpeza de Pele Profunda", categoria: "Estética", duracao: "1h 30min", preco: 150.00 },
    { id: 37, nome: "Depilação a Laser", categoria: "Estética", duracao: "30 min", preco: 130.00 }
];

// --- PROFISSIONAIS ---
let profissionais = [
    { id: 1, nome: "Cilene Goes", especialidades: ["Cílios", "Sobrancelhas", "Nano"], avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80" },
    { id: 2, nome: "Evelyn Cardoso", especialidades: ["Cílios", "Sobrancelhas", "Nano"], avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" },
    { id: 3, nome: "Tayná Capeleti", especialidades: ["Unhas"], avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" },
    { id: 4, nome: "Cindi", especialidades: ["Unhas"], avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80" },
    { id: 5, nome: "Brenda Francco", especialidades: ["Unhas"], avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=120&q=80" },
    { id: 6, nome: "Djeissy Massunaga", especialidades: ["Depilação", "Estética"], avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80" },
    { id: 7, nome: "Felipe Godoy", especialidades: ["Cabelo"], avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" },
    { id: 8, nome: "Jessica Silva", especialidades: ["Cabelo"], avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" }
];

const horariosDisponiveis = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

let clientesFidelidade = [];

const DB_CLIENTES = {
    init() {
        const salvo = localStorage.getItem('manybe_clientes_v2');
        if (salvo) {
            return JSON.parse(salvo);
        }

        const padrao = [
            {
                id: 1,
                nome: "Ana Paula de Souza",
                contato: "(11) 99841-2334",
                ultimoProc: "Alongamento em Fibra",
                historicoProdutos: "Gel Honey e TopCoat Premium Vòlia",
                notas: "Tem sensibilidade a cabine de LED.",
                historicoProcedimentos: [
                    {
                        data: "2026-07-10",
                        servico: "Alongamento em Fibra de Vidro",
                        profissional: "Tayná Capeleti",
                        descricao: "Alongamento com acabamento fino.",
                        produtos: [
                            { nome: "Gel Honey", quantidade: 1 },
                            { nome: "TopCoat Premium Vòlia", quantidade: 1 }
                        ]
                    }
                ]
            },
            {
                id: 2,
                nome: "Mariana Oliveira",
                contato: "(11) 98711-4455",
                ultimoProc: "Escova Modelada",
                historicoProdutos: "Protetor térmico Kérastase Résistance",
                notas: "Prefere cabelos escovados para fora.",
                historicoProcedimentos: [
                    {
                        data: "2026-07-16",
                        servico: "Escova Modelada",
                        profissional: "Felipe Godoy",
                        descricao: "Escova com acabamento suave.",
                        produtos: [
                            { nome: "Protetor térmico Kérastase Résistance", quantidade: 1 }
                        ]
                    }
                ]
            }
        ];

        localStorage.setItem('manybe_clientes_v2', JSON.stringify(padrao));
        return padrao;
    },
    get() {
        return JSON.parse(localStorage.getItem('manybe_clientes_v2')) || [];
    },
    salvar(dados) {
        localStorage.setItem('manybe_clientes_v2', JSON.stringify(dados));
        return dados;
    }
};

// --- BANCO LOCAL ---
const DB = {
    init() {
        if (!localStorage.getItem('manybe_agendamentos_v2')) {
            const historicoInicial = [
                { id: 1, cliente: "Ana Paula de Souza", servico: "Alongamento em Fibra de Vidro", profissional: "Tayná Capeleti", data: "2026-07-24", hora: "14:00", status: "AGENDADO" },
                { id: 2, cliente: "Mariana Oliveira", servico: "Escova Modelada", profissional: "Felipe Godoy", data: "2026-07-16", hora: "10:30", status: "CONCLUÍDO" }
            ];
            localStorage.setItem('manybe_agendamentos_v2', JSON.stringify(historicoInicial));
        }
    },
    getReservas() {
        return JSON.parse(localStorage.getItem('manybe_agendamentos_v2')) || [];
    },
    addReserva(nova) {
        const dados = this.getReservas();
        dados.push(nova);
        localStorage.setItem('manybe_agendamentos_v2', JSON.stringify(dados));
    },
    mudarStatus(id, novoStatus) {
        const dados = this.getReservas();
        const item = dados.find(x => x.id == id);
        if (item) item.status = novoStatus;
        localStorage.setItem('manybe_agendamentos_v2', JSON.stringify(dados));
    },
    deletarReserva(id) {
        let dados = this.getReservas();
        dados = dados.filter(x => x.id != id);
        localStorage.setItem('manybe_agendamentos_v2', JSON.stringify(dados));
    }
};

let agendamentoAtivo = { cliente: "Visitante", servico: null, profissional: null, data: null, hora: null };
let categoriaAtiva = 'Todos';
let modoAdminAutenticado = false;
let bloqueioEditandoId = null;
let clienteFichaAtivaId = null;

const DB_BLOQUEIOS = {
    getBloqueios() {
        return JSON.parse(localStorage.getItem('manybe_bloqueios_v2')) || [];
    },
    addBloqueio(novo) {
        const dados = this.getBloqueios();
        dados.push(novo);
        localStorage.setItem('manybe_bloqueios_v2', JSON.stringify(dados));
    },
    atualizarBloqueio(bloqueioAtualizado) {
        const dados = this.getBloqueios();
        const index = dados.findIndex(item => item.id === bloqueioAtualizado.id);
        if (index >= 0) {
            dados[index] = bloqueioAtualizado;
            localStorage.setItem('manybe_bloqueios_v2', JSON.stringify(dados));
            return true;
        }
        return false;
    },
    removerBloqueio(id) {
        const dados = this.getBloqueios().filter(item => item.id !== id);
        localStorage.setItem('manybe_bloqueios_v2', JSON.stringify(dados));
        return dados;
    }
};

// =====================================================================
// --- COMPONENTE DE SELECT CUSTOMIZADO ---
// Substitui a aparência do <select> nativo (incluindo a lista de opções,
// que por padrão é desenhada pelo próprio sistema operacional e usa a
// cor de destaque azul do Windows/Android/iOS, impossível de recolorir
// só com CSS). O <select> original continua existindo escondido no DOM
// para que todo o restante do código (que lê/escreve `.value`, dispara
// `onchange`, etc.) continue funcionando exatamente como antes.
// =====================================================================
function enhanceSelects(root) {
    const escopo = root || document;
    const selects = escopo.querySelectorAll('select:not([data-enhanced])');

    selects.forEach(select => {
        select.setAttribute('data-enhanced', 'true');

        const wrapper = document.createElement('div');
        wrapper.className = 'custom-select-wrapper';
        select.parentNode.insertBefore(wrapper, select);
        wrapper.appendChild(select);

        const trigger = document.createElement('div');
        trigger.className = 'custom-select-trigger';
        trigger.setAttribute('tabindex', '0');
        wrapper.appendChild(trigger);

        const optionsList = document.createElement('div');
        optionsList.className = 'custom-select-options';
        wrapper.appendChild(optionsList);

        function construir() {
            const opcaoAtual = select.options[select.selectedIndex];
            trigger.textContent = opcaoAtual ? opcaoAtual.text : '';

            optionsList.innerHTML = '';
            Array.from(select.options).forEach((opcao, indice) => {
                const item = document.createElement('div');
                item.className = 'custom-select-option' + (indice === select.selectedIndex ? ' selected' : '');
                item.textContent = opcao.text;
                item.onclick = (evento) => {
                    evento.stopPropagation();
                    select.selectedIndex = indice;
                    wrapper.classList.remove('open');
                    construir();
                    select.dispatchEvent(new Event('change', { bubbles: true }));
                };
                optionsList.appendChild(item);
            });
        }

        select._rebuildCustomSelect = construir;
        construir();

        trigger.onclick = (evento) => {
            evento.stopPropagation();
            document.querySelectorAll('.custom-select-wrapper.open').forEach(outro => {
                if (outro !== wrapper) outro.classList.remove('open');
            });
            wrapper.classList.toggle('open');
        };

        trigger.onkeydown = (evento) => {
            if (evento.key === 'Enter' || evento.key === ' ') {
                evento.preventDefault();
                trigger.click();
            }
        };

        // Sincroniza a caixa customizada sempre que o <select> tiver suas
        // opções recriadas dinamicamente via innerHTML (ex: lista de profissionais).
        const observador = new MutationObserver(construir);
        observador.observe(select, { childList: true, subtree: true });
    });
}

function sincronizarSelectCustomizado(id) {
    const el = document.getElementById(id);
    if (el && typeof el._rebuildCustomSelect === 'function') {
        el._rebuildCustomSelect();
    }
}

// Fecha qualquer dropdown customizado aberto ao clicar fora dele
document.addEventListener('click', () => {
    document.querySelectorAll('.custom-select-wrapper.open').forEach(w => w.classList.remove('open'));
});

// --- SISTEMA GENÉRICO DE MODAL (SUBSTITUI alert() E confirm() NATIVOS) ---
function showCustomAlert(mensagem, callback) {
    const overlay = document.getElementById('modal-alert-overlay');
    const msgEl = document.getElementById('modal-alert-mensagem');
    if (!overlay || !msgEl) { if (typeof callback === 'function') callback(); return; }

    msgEl.innerText = mensagem;
    overlay.classList.remove('hidden');
    window._customAlertCallback = typeof callback === 'function' ? callback : null;
}

function fecharCustomAlert() {
    const overlay = document.getElementById('modal-alert-overlay');
    if (overlay) overlay.classList.add('hidden');

    const cb = window._customAlertCallback;
    window._customAlertCallback = null;
    if (typeof cb === 'function') cb();
}

function showCustomConfirm(mensagem, onConfirm, onCancel) {
    const overlay = document.getElementById('modal-confirm-overlay');
    const msgEl = document.getElementById('modal-confirm-mensagem');
    if (!overlay || !msgEl) { if (typeof onConfirm === 'function') onConfirm(); return; }

    msgEl.innerText = mensagem;
    overlay.classList.remove('hidden');
    window._customConfirmOnConfirm = typeof onConfirm === 'function' ? onConfirm : null;
    window._customConfirmOnCancel = typeof onCancel === 'function' ? onCancel : null;
}

function confirmarCustomConfirm() {
    const overlay = document.getElementById('modal-confirm-overlay');
    if (overlay) overlay.classList.add('hidden');

    const cb = window._customConfirmOnConfirm;
    window._customConfirmOnConfirm = null;
    window._customConfirmOnCancel = null;
    if (typeof cb === 'function') cb();
}

function cancelarCustomConfirm() {
    const overlay = document.getElementById('modal-confirm-overlay');
    if (overlay) overlay.classList.add('hidden');

    const cb = window._customConfirmOnCancel;
    window._customConfirmOnConfirm = null;
    window._customConfirmOnCancel = null;
    if (typeof cb === 'function') cb();
}

function atualizarTextoBotaoAdmin(screenId = null) {
    const btnTextEl = document.getElementById('admin-btn-text');
    if (!btnTextEl) return;

    const estaNaAreaAdministrativa = screenId === 'admin';
    btnTextEl.innerText = estaNaAreaAdministrativa ? 'Área do cliente' : 'Administrativo';
}

window.addEventListener('DOMContentLoaded', () => {
    DB.init();
    renderizarServicos();
    renderizarMinhasReservas();

    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    const inputData = document.getElementById('input-agenda-data');
    if (inputData) inputData.value = amanha.toISOString().split('T')[0];

    const filtroDataAdm = document.getElementById('filtro-adm-data');
    if (filtroDataAdm) filtroDataAdm.value = new Date().toISOString().split('T')[0];

    clientesFidelidade = DB_CLIENTES.get();
    if (clientesFidelidade.length === 0) {
        clientesFidelidade = DB_CLIENTES.init();
    }

    renderizarTabelaBloqueios();
    renderizarClientesFidelidade();

    // Aplica o select customizado (cores da marca) a todos os selects já presentes na página
    enhanceSelects(document);
});

// --- NAVEGAÇÃO ---
function navegarPara(screenId) {
    document.querySelectorAll('.view-screen').forEach(s => s.classList.add('hidden'));
    const targetScreen = document.getElementById('screen-' + screenId);
    if (targetScreen) targetScreen.classList.remove('hidden');

    atualizarTextoBotaoAdmin(screenId);

    document.querySelectorAll('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
    const sideBtn = document.getElementById('side-' + screenId);
    if (sideBtn) sideBtn.classList.add('active');

    document.querySelectorAll('.mobile-nav-btn').forEach(btn => btn.classList.remove('active'));
    const mobBtn = document.getElementById('mob-' + screenId);
    if (mobBtn) mobBtn.classList.add('active');

    if (screenId === 'reservas') renderizarMinhasReservas();
}

// --- FLUXO ADMINISTRATIVO / LOGIN ---
function gerenciarBotaoAdmin() {
    if (modoAdminAutenticado) {
        modoAdminAutenticado = false;
        atualizarTextoBotaoAdmin('inicio');

        const icon = document.getElementById('admin-mode-btn').querySelector('i');
        if (icon) icon.className = "fa-solid fa-lock";

        navegarPara('inicio');
    } else {
        navegarPara('login');
    }
}

function autenticarAdmin() {
    const usuarioEl = document.getElementById('login-user');
    const senhaEl = document.getElementById('login-pass');

    if (!usuarioEl || !senhaEl) return;

    if (usuarioEl.value === 'admin' && senhaEl.value === 'manybe2026') {
        modoAdminAutenticado = true;
        atualizarTextoBotaoAdmin('admin');

        const icon = document.getElementById('admin-mode-btn').querySelector('i');
        if (icon) icon.className = "fa-solid fa-unlock";

        usuarioEl.value = '';
        senhaEl.value = '';

        navegarPara('admin');
        renderizarTabelaAdminAgendamentos();
        renderizarClientesFidelidade();
        popularCamposBloqueio();
        renderizarTabelaBloqueios();
    } else {
        showCustomAlert("Credenciais incorretas! Tente novamente.");
    }
}

function alternarAbasAdmin(tabId, btn) {
    document.querySelectorAll('.adm-tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

    const targetTab = document.getElementById('adm-tab-' + tabId);
    if (targetTab) targetTab.classList.remove('hidden');
    if (btn) btn.classList.add('active');
}

// --- RENDERIZAÇÃO E FILTRAGEM DE SERVIÇOS ---
function renderizarServicos() {
    const container = document.getElementById('services-grid-container');
    if (!container) return;
    container.innerHTML = '';

    const searchInput = document.getElementById('search-input');
    const termoPesquisa = searchInput ? searchInput.value.toLowerCase() : '';

    const filtrados = listagemServicos.filter(servico => {
        const bateCategoria = categoriaAtiva === 'Todos' || servico.categoria === categoriaAtiva;
        const batePesquisa = servico.nome.toLowerCase().includes(termoPesquisa);
        return bateCategoria && batePesquisa;
    });

    if (filtrados.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">Nenhum procedimento encontrado.</p>`;
        return;
    }

    filtrados.forEach(servico => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.onclick = () => selecionarServico(servico);
        card.innerHTML = `
            <div>
                <h4 style="color: var(--brand-dark); font-size: 1.1rem; margin-bottom: 0.25rem;">${servico.nome}</h4>
                <span style="font-size: 0.85rem; color: var(--text-muted);"><i class="fa-regular fa-clock"></i> ${servico.duracao}</span>
            </div>
            <div style="text-align: right;">
                <span style="font-weight: bold; color: var(--brand-dark); font-size: 1.1rem;">R$ ${servico.preco.toFixed(2)}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function filtrarCategoria(categoria, btnElement) {
    categoriaAtiva = categoria;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    renderizarServicos();
}

function filtrarServicos() { renderizarServicos(); }

function selecionarServico(servico) {
    agendamentoAtivo.servico = servico;
    navegarPara('profissionais');
    renderizarProfissionaisFiltrados(servico.categoria);
}

function renderizarProfissionaisFiltrados(categoriaDoServico) {
    const container = document.getElementById('profissionais-grid-container');
    if (!container) return;
    container.innerHTML = '';

    const profissionaisFiltrados = profissionais.filter(prof => prof.especialidades.includes(categoriaDoServico));

    if (profissionaisFiltrados.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">Qualquer profissional está apto.</p>`;
        return;
    }

    profissionaisFiltrados.forEach(prof => {
        const card = document.createElement('div');
        card.className = 'prof-card';
        card.onclick = () => selecionarProfissional(prof);
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div class="prof-avatar"><img src="${prof.avatar}" alt="${prof.nome}"></div>
                <div>
                    <h4 style="color: var(--brand-dark); font-size: 1.1rem;">${prof.nome}</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted);">${prof.especialidades.join(", ")}</p>
                </div>
            </div>
            <i class="fa-solid fa-chevron-right" style="color: var(--brand-bg);"></i>
        `;
        container.appendChild(card);
    });
}

function selecionarProfissional(prof) {
    agendamentoAtivo.profissional = prof;
    navegarPara('data-hora');
    renderizarSlotsHorario();
}

function renderizarSlotsHorario() {
    const inputData = document.getElementById('input-agenda-data');
    const dataSelecionada = inputData ? inputData.value : null;
    const container = document.getElementById('agendamento-slots');
    if (!container) return;
    container.innerHTML = '';

    if (!dataSelecionada) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Por favor, selecione uma data.</p>`;
        return;
    }

    if (!agendamentoAtivo.profissional) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">Selecione um profissional primeiro.</p>`;
        return;
    }

    agendamentoAtivo.data = dataSelecionada;
    const reservasExistentes = DB.getReservas();
    const bloqueiosExistentes = DB_BLOQUEIOS.getBloqueios();

    const bloqueiosDoProfissional = bloqueiosExistentes.filter(b =>
        b.profissional === agendamentoAtivo.profissional.nome
    );

    const bloqueioAtingeDia = bloqueiosDoProfissional.some(b => {
        const dataInicio = b.dataInicio || b.data;
        const dataFim = b.dataFim || b.data;
        return dataSelecionada >= dataInicio && dataSelecionada <= dataFim;
    });

    const bloqueioTurno = bloqueiosDoProfissional.find(b => {
        const dataInicio = b.dataInicio || b.data;
        const dataFim = b.dataFim || b.data;
        return dataSelecionada >= dataInicio && dataSelecionada <= dataFim;
    });

    if (bloqueioAtingeDia && bloqueioTurno?.turno === 'DIA_TODO') {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #c94a4a; font-weight: bold; padding: 1rem;">O profissional selecionado não terá agenda disponível nesta data.</p>`;
        return;
    }

    horariosDisponiveis.forEach(hora => {
        const estaOcupadoPorReserva = reservasExistentes.some(res =>
            res.data === dataSelecionada &&
            res.hora === hora &&
            res.profissional === agendamentoAtivo.profissional.nome &&
            (res.status === 'AGENDADO' || res.status === 'CONFIRMADO')
        );

        const estaOcupadoPorBloqueio = bloqueiosDoProfissional.some(b => {
            const dataInicio = b.dataInicio || b.data;
            const dataFim = b.dataFim || b.data;
            const atingiuDia = dataSelecionada >= dataInicio && dataSelecionada <= dataFim;
            if (!atingiuDia) return false;

            const turno = b.turno || 'DIA_TODO';
            if (turno === 'DIA_TODO') return true;

            const horaNumero = Number(hora.split(':')[0]) + (hora.includes(':30') ? 0.5 : 0);
            const [manhaInicio, manhaFim] = [9, 12];
            const [tardeInicio, tardeFim] = [13, 18];

            if (turno === 'MANHA') {
                return horaNumero >= manhaInicio && horaNumero <= manhaFim;
            }
            if (turno === 'TARDE') {
                return horaNumero >= tardeInicio && horaNumero <= tardeFim;
            }
            return false;
        });

        const btn = document.createElement('button');
        btn.className = 'slot-btn';
        btn.innerText = hora;
        btn.disabled = (estaOcupadoPorReserva || estaOcupadoPorBloqueio);
        btn.onclick = () => confirmarAgendamento(hora);
        container.appendChild(btn);
    });
}

// --- CONFIRMAÇÃO DE AGENDAMENTO (MODAL CUSTOMIZADO, SEM PROMPT NATIVO) ---
function confirmarAgendamento(hora) {
    agendamentoAtivo.hora = hora;

    document.getElementById('modal-input-nome').value = '';
    document.getElementById('modal-input-telefone').value = '';
    document.getElementById('modal-erro-msg').classList.add('hidden');

    document.getElementById('modal-agendamento-overlay').classList.remove('hidden');
}

function fecharModalAgendamento() {
    document.getElementById('modal-agendamento-overlay').classList.add('hidden');
}

function confirmarDadosModal() {
    const nomeEl = document.getElementById('modal-input-nome');
    const telefoneEl = document.getElementById('modal-input-telefone');
    const erroEl = document.getElementById('modal-erro-msg');

    const nomeCliente = nomeEl.value.trim();
    const telefoneCliente = telefoneEl.value.trim();

    if (!nomeCliente) {
        erroEl.textContent = 'O nome é necessário para agendar.';
        erroEl.classList.remove('hidden');
        return;
    }

    if (!telefoneCliente) {
        erroEl.textContent = 'O telefone é necessário para agendar.';
        erroEl.classList.remove('hidden');
        return;
    }

    agendamentoAtivo.cliente = nomeCliente;

    const novaReserva = {
        id: Date.now(),
        cliente: agendamentoAtivo.cliente,
        telefone: telefoneCliente,
        servico: agendamentoAtivo.servico.nome,
        profissional: agendamentoAtivo.profissional.nome,
        data: agendamentoAtivo.data,
        hora: agendamentoAtivo.hora,
        status: "AGENDADO",
        criadoEm: new Date().toISOString()
    };

    DB.addReserva(novaReserva);

    const clienteExiste = clientesFidelidade.some(c => c.nome.toLowerCase() === agendamentoAtivo.cliente.toLowerCase());
    if (!clienteExiste) {
        clientesFidelidade.push({
            id: Date.now(),
            nome: agendamentoAtivo.cliente,
            contato: telefoneCliente,
            ultimoProc: agendamentoAtivo.servico.nome,
            historicoProdutos: "Nenhum histórico",
            notas: "Registrado via agendamento online.",
            historicoProcedimentos: []
        });
        DB_CLIENTES.salvar(clientesFidelidade);
    }

    const mensagem = `Agendamento confirmado para ${agendamentoAtivo.cliente} no dia ${formatarData(agendamentoAtivo.data)} às ${agendamentoAtivo.hora} com ${agendamentoAtivo.profissional.nome}.\n\nImportante: cancelamentos ou remarcações só podem ser feitos até 24 horas antes do horário agendado.\nEm caso de falta, poderá haver dificuldade para agendar atendimentos futuros.`;

    fecharModalAgendamento();
    showCustomAlert(mensagem, function () {
        agendamentoAtivo = { cliente: "Visitante", servico: null, profissional: null, data: null, hora: null };
        navegarPara('reservas');
    });
}

function renderizarMinhasReservas() {
    const container = document.getElementById('user-reservas-table');
    if (!container) return;
    container.innerHTML = '';
    const reservas = DB.getReservas();

    if (reservas.length === 0) {
        container.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 2rem;">Nenhuma reserva encontrada.</td></tr>`;
        return;
    }

    reservas.sort((a, b) => b.id - a.id).forEach(res => {
        const podeCancelar = podeAlterarReserva(res);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: bold;">${formatarData(res.data)}</td>
            <td>${res.hora}</td>
            <td>${res.servico}</td>
            <td>${res.profissional}</td>
            <td>
                <span class="badge ${res.status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}">${res.status}</span>
                ${podeCancelar ? `<div style="margin-top: 0.5rem;"><button class="btn-action btn-excluir" onclick="cancelarOuRemarcarReserva(${res.id})">Cancelar</button></div>` : '<div style="margin-top: 0.5rem; color: #8a6b47; font-size: 0.8rem;">Prazo encerrado</div>'}
            </td>
        `;
        container.appendChild(tr);
    });
}

function podeAlterarReserva(reserva) {
    if (!reserva.data || !reserva.hora) return false;

    const [ano, mes, dia] = reserva.data.split('-').map(Number);
    const [hora, minuto] = reserva.hora.split(':').map(Number);
    const dataReserva = new Date(ano, mes - 1, dia, hora, minuto);
    const agora = new Date();
    const diffHoras = (dataReserva - agora) / (1000 * 60 * 60);
    return diffHoras >= 24;
}

function cancelarOuRemarcarReserva(id) {
    const reserva = DB.getReservas().find(item => item.id === id);
    if (!reserva) return;

    if (!podeAlterarReserva(reserva)) {
        showCustomAlert('Só é possível cancelar até 24 horas antes do horário agendado.');
        return;
    }

    showCustomConfirm('Deseja realmente cancelar este agendamento?', function () {
        DB.deletarReserva(id);
        renderizarMinhasReservas();
        showCustomAlert('Agendamento cancelado com sucesso.');
    });
}

function popularCamposBloqueio() {
    const selectProfLock = document.getElementById('lock-profissional');
    if (selectProfLock) {
        selectProfLock.innerHTML = profissionais.map(p => `<option value="${p.nome}">${p.nome}</option>`).join('');
    }
    // Garante que também esteja habilitado como select customizado (idempotente)
    enhanceSelects(document);
    sincronizarSelectCustomizado('lock-profissional');
}

function resetarFormularioBloqueio() {
    bloqueioEditandoId = null;
    const btnSalvar = document.getElementById('btn-salvar-bloqueio');
    const btnCancelar = document.getElementById('btn-cancelar-edicao-bloqueio');
    if (btnSalvar) btnSalvar.textContent = 'Confirmar e Bloquear Agenda';
    if (btnCancelar) btnCancelar.style.display = 'none';

    const form = document.getElementById('lock-profissional');
    if (form) form.value = '';
    const dataInicio = document.getElementById('lock-data-inicio');
    if (dataInicio) dataInicio.value = '';
    const dataFim = document.getElementById('lock-data-fim');
    if (dataFim) dataFim.value = '';
    const turno = document.getElementById('lock-turno');
    if (turno) turno.value = 'DIA_TODO';
    const motivo = document.getElementById('lock-motivo');
    if (motivo) motivo.value = '';

    sincronizarSelectCustomizado('lock-profissional');
    sincronizarSelectCustomizado('lock-turno');
}

function preencherCamposBloqueio(bloqueio) {
    const profissional = document.getElementById('lock-profissional');
    const dataInicio = document.getElementById('lock-data-inicio');
    const dataFim = document.getElementById('lock-data-fim');
    const turno = document.getElementById('lock-turno');
    const motivo = document.getElementById('lock-motivo');

    if (profissional) profissional.value = bloqueio.profissional || '';
    if (dataInicio) dataInicio.value = bloqueio.dataInicio || bloqueio.data || '';
    if (dataFim) dataFim.value = bloqueio.dataFim || bloqueio.data || '';
    if (turno) turno.value = bloqueio.turno || 'DIA_TODO';
    if (motivo) motivo.value = bloqueio.motivo || '';

    sincronizarSelectCustomizado('lock-profissional');
    sincronizarSelectCustomizado('lock-turno');

    const btnSalvar = document.getElementById('btn-salvar-bloqueio');
    const btnCancelar = document.getElementById('btn-cancelar-edicao-bloqueio');
    if (btnSalvar) btnSalvar.textContent = 'Salvar Alterações';
    if (btnCancelar) btnCancelar.style.display = 'block';
}

function editarBloqueio(id) {
    const bloqueio = DB_BLOQUEIOS.getBloqueios().find(item => item.id === id);
    if (!bloqueio) return;

    bloqueioEditandoId = id;
    preencherCamposBloqueio(bloqueio);
    document.getElementById('lock-data-inicio')?.focus();
}

function cancelarEdicaoBloqueio() {
    resetarFormularioBloqueio();
}

function salvarBloqueioAgenda() {
    const prof = document.getElementById('lock-profissional')?.value;
    const dataInicio = document.getElementById('lock-data-inicio')?.value;
    const dataFim = document.getElementById('lock-data-fim')?.value;
    const turno = document.getElementById('lock-turno')?.value;
    const motivo = document.getElementById('lock-motivo')?.value?.trim() || '';

    if (!prof || !dataInicio || !dataFim) {
        showCustomAlert('Selecione o profissional e o intervalo de datas para bloquear a agenda.');
        return;
    }

    if (!motivo) {
        showCustomAlert('Informe uma justificativa para o bloqueio.');
        return;
    }

    if (dataInicio > dataFim) {
        showCustomAlert('A data inicial não pode ser maior que a data final.');
        return;
    }

    const bloqueioPayload = {
        id: bloqueioEditandoId ?? Date.now(),
        profissional: prof,
        dataInicio,
        dataFim,
        turno,
        motivo
    };

    if (bloqueioEditandoId !== null) {
        DB_BLOQUEIOS.atualizarBloqueio(bloqueioPayload);
        showCustomAlert(`Bloqueio atualizado para ${prof} no período de ${formatarData(dataInicio)} a ${formatarData(dataFim)}.`);
    } else {
        DB_BLOQUEIOS.addBloqueio(bloqueioPayload);
        showCustomAlert(`Bloqueio salvo para ${prof} no período de ${formatarData(dataInicio)} a ${formatarData(dataFim)}.`);
    }

    renderizarTabelaBloqueios();
    resetarFormularioBloqueio();
}

function renderizarTabelaBloqueios() {
    const container = document.getElementById('adm-tabela-bloqueios');
    if (!container) return;

    const bloqueios = DB_BLOQUEIOS.getBloqueios();
    if (bloqueios.length === 0) {
        container.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 1rem;">Nenhum bloqueio cadastrado.</td></tr>`;
        return;
    }

    container.innerHTML = '';
    bloqueios.forEach(bloqueio => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${bloqueio.profissional}</td>
            <td>${formatarData(bloqueio.dataInicio || bloqueio.data)}</td>
            <td>${bloqueio.turno === 'MANHA' ? 'Manhã' : bloqueio.turno === 'TARDE' ? 'Tarde' : 'Dia todo'}</td>
            <td>${formatarData(bloqueio.dataInicio || bloqueio.data)} a ${formatarData(bloqueio.dataFim || bloqueio.data)}</td>
            <td>${bloqueio.motivo}</td>
            <td>
                <div class="btn-actions-wrapper">
                    <button class="btn-action btn-status-alt" onclick="editarBloqueio(${bloqueio.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-action btn-excluir" onclick="excluirBloqueio(${bloqueio.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        container.appendChild(tr);
    });
}

function excluirBloqueio(id) {
    if (bloqueioEditandoId === id) {
        resetarFormularioBloqueio();
    }

    DB_BLOQUEIOS.removerBloqueio(id);
    renderizarTabelaBloqueios();
    showCustomAlert('Bloqueio removido com sucesso.');
}

// --- ENGENHARIA DO PAINEL GESTÃO ADM ---
function renderizarTabelaAdminAgendamentos() {
    const container = document.getElementById('adm-tabela-agendamentos');
    if (!container) return;
    container.innerHTML = '';

    const inputData = document.getElementById('filtro-adm-data');
    const inputProf = document.getElementById('filtro-adm-prof');
    const inputBusca = document.getElementById('filtro-adm-busca');

    // Segurança contra elementos nulos se a tabela rodar fora de hora
    const filtroData = inputData ? inputData.value : '';
    const filtroProf = inputProf ? inputProf.value : 'Todos';
    const filtroBusca = inputBusca ? inputBusca.value.toLowerCase() : '';

    const reservas = DB.getReservas();

    const filtradas = reservas.filter(res => {
        const bateData = !filtroData || res.data === filtroData;
        const bateProf = filtroProf === 'Todos' || res.profissional === filtroProf;
        const bateBusca = res.cliente.toLowerCase().includes(filtroBusca) || res.servico.toLowerCase().includes(filtroBusca);
        return bateData && bateProf && bateBusca;
    });

    if (filtradas.length === 0) {
        container.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">Nenhum agendamento encontrado para os filtros selecionados.</td></tr>`;
        return;
    }

    filtradas.sort((a, b) => a.hora.localeCompare(b.hora)).forEach(res => {
        const tr = document.createElement('tr');

        let selectStatus = `
            <label class="sr-only" for="status-${res.id}">Status</label>
            <select id="status-${res.id}" class="btn-action btn-status-alt" onchange="mudarStatusAgendamento(${res.id}, this.value)" title="Alterar status do atendimento">
                <option value="AGENDADO" ${res.status === 'AGENDADO' ? 'selected' : ''}>Agendado</option>
                <option value="CONFIRMADO" ${res.status === 'CONFIRMADO' ? 'selected' : ''}>Confirmado</option>
                <option value="CONCLUÍDO" ${res.status === 'CONCLUÍDO' ? 'selected' : ''}>Concluído</option>
                <option value="CANCELADO" ${res.status === 'CANCELADO' ? 'selected' : ''}>Cancelado</option>
            </select>
        `;
        // Normalização de string para evitar falhas no CSS da badge com acentuação (Ex: CONCLUÍDO -> concluido)
        const classeBadge = res.status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        tr.innerHTML = `
            <td style="font-weight: bold; color: var(--brand-dark);">${res.cliente}</td>
            <td>${formatarData(res.data)} às <span style="font-weight:bold;">${res.hora}</span></td>
            <td>${res.servico}</td>
            <td style="font-weight: 500;">${res.profissional}</td>
            <td><span class="badge ${classeBadge}">${res.status}</span></td>
            <td>
                <div class="btn-actions-wrapper">
                    ${selectStatus}
                    <button class="btn-action btn-excluir" onclick="excluirAgendamentoDefinitivo(${res.id})" title="Cancelar ou excluir agendamento"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        container.appendChild(tr);
    });

    // Novos <select> de status foram criados agora: aplica o componente customizado neles
    enhanceSelects(container);
}

function mudarStatusAgendamento(id, status) {
    DB.mudarStatus(id, status);
    renderizarTabelaAdminAgendamentos();
    showCustomAlert(`Status alterado para ${status === 'CANCELADO' ? 'Cancelado' : status === 'CONCLUÍDO' ? 'Concluído' : status === 'CONFIRMADO' ? 'Confirmado' : 'Agendado'}.`);
}

function excluirAgendamentoDefinitivo(id) {
    showCustomConfirm("Deseja realmente cancelar/excluir este agendamento?", function () {
        DB.deletarReserva(id);
        renderizarTabelaAdminAgendamentos();
        showCustomAlert('Agendamento removido com sucesso.');
    });
}

function limparFiltrosAdmin() {
    if (document.getElementById('filtro-adm-data')) document.getElementById('filtro-adm-data').value = '';
    if (document.getElementById('filtro-adm-prof')) document.getElementById('filtro-adm-prof').value = 'Todos';
    if (document.getElementById('filtro-adm-busca')) document.getElementById('filtro-adm-busca').value = '';
    sincronizarSelectCustomizado('filtro-adm-prof');
    renderizarTabelaAdminAgendamentos();
}

function renderizarClientesFidelidade() {
    const container = document.getElementById('adm-tabela-clientes');
    if (!container) return;
    container.innerHTML = '';

    clientesFidelidade.forEach(cli => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: bold; color: var(--brand-dark);">${cli.nome}</td>
            <td>${cli.contato}</td>
            <td><span style="font-weight: bold;">${cli.ultimoProc || 'Nenhum procedimento registrado'}</span></td>
            <td style="font-style: italic; font-size: 0.85rem; color: #555;">${cli.historicoProdutos || 'Nenhum histórico'}</td>
            <td><span style="font-size: 0.85rem; color: #444;">${cli.notas || 'Sem observações'}</span></td>
            <td>
                <div class="btn-actions-wrapper">
                    <button class="btn-action btn-status-alt" onclick="editarCliente(${cli.id})"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn-action btn-excluir" onclick="excluirCliente(${cli.id})"><i class="fa-solid fa-trash"></i></button>
                    <button class="btn-action btn-status-alt" onclick="abrirFichaCliente(${cli.id})"><i class="fa-solid fa-file-lines"></i></button>
                </div>
            </td>
        `;
        container.appendChild(tr);
    });
}

function limparFormularioCliente() {
    document.getElementById('cliente-id').value = '';
    document.getElementById('cliente-nome').value = '';
    document.getElementById('cliente-contato').value = '';
    document.getElementById('cliente-notas').value = '';
}

function salvarCliente() {
    const id = document.getElementById('cliente-id').value;
    const nome = document.getElementById('cliente-nome').value.trim();
    const contato = document.getElementById('cliente-contato').value.trim();
    const notas = document.getElementById('cliente-notas').value.trim();

    if (!nome || !contato) {
        showCustomAlert('Preencha nome e contato do cliente.');
        return;
    }

    if (id) {
        const cliente = clientesFidelidade.find(c => c.id == id);
        if (cliente) {
            cliente.nome = nome;
            cliente.contato = contato;
            cliente.notas = notas;
            cliente.ultimoProc = cliente.ultimoProc || 'Nenhum procedimento registrado';
            cliente.historicoProdutos = cliente.historicoProdutos || 'Nenhum histórico';
        }
    } else {
        const novoCliente = {
            id: Date.now(),
            nome,
            contato,
            ultimoProc: 'Nenhum procedimento registrado',
            historicoProdutos: 'Nenhum histórico',
            notas,
            historicoProcedimentos: []
        };
        clientesFidelidade.push(novoCliente);
    }

    DB_CLIENTES.salvar(clientesFidelidade);
    limparFormularioCliente();
    renderizarClientesFidelidade();
    showCustomAlert('Cliente salvo com sucesso!');
}

function editarCliente(id) {
    const cliente = clientesFidelidade.find(c => c.id == id);
    if (!cliente) return;

    document.getElementById('cliente-id').value = cliente.id;
    document.getElementById('cliente-nome').value = cliente.nome;
    document.getElementById('cliente-contato').value = cliente.contato;
    document.getElementById('cliente-notas').value = cliente.notas || '';
    document.getElementById('cliente-nome').focus();
}

function excluirCliente(id) {
    showCustomConfirm('Deseja remover este cliente da ficha?', function () {
        clientesFidelidade = clientesFidelidade.filter(c => c.id !== id);
        DB_CLIENTES.salvar(clientesFidelidade);
        renderizarClientesFidelidade();
        const ficha = document.getElementById('cliente-ficha-detalhes');
        if (ficha) ficha.innerHTML = '';
    });
}

function formatarValorCliente(valor) {
    if (valor === null || valor === undefined || valor === '') return 'Não informado';

    const valorTexto = String(valor).trim();
    const numero = Number(valorTexto.replace(/[R$\.\s]/g, '').replace(',', '.'));

    if (!Number.isNaN(numero)) {
        return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return valorTexto;
}

function formatarFormaPagamento(valor) {
    const mapa = {
        dinheiro: 'Dinheiro',
        pix: 'Pix',
        cartao_credito: 'Cartão de crédito',
        cartao_debito: 'Cartão de débito'
    };

    return mapa[valor] || valor || 'Não informado';
}

function adicionarLinhaProduto() {
    const lista = document.getElementById('cliente-produtos-lista');
    if (!lista) return;

    const item = document.createElement('div');
    item.className = 'cliente-produto-item';
    item.innerHTML = `
        <input type="text" class="cliente-produto-nome" placeholder="Nome do produto">
        <input type="text" class="cliente-produto-qtd" placeholder="Ex: 2 unidades ou 1 par" value="1">
        <button type="button" class="btn-action btn-excluir" onclick="this.parentElement.remove()"><i class="fa-solid fa-minus"></i></button>
    `;
    lista.appendChild(item);
}

function salvarProcedimentoCliente() {
    const cliente = clientesFidelidade.find(c => c.id == clienteFichaAtivaId);
    if (!cliente) return;

    const data = document.getElementById('cliente-proc-data')?.value;
    const servico = document.getElementById('cliente-proc-servico')?.value.trim();
    const profissional = document.getElementById('cliente-proc-profissional')?.value.trim();
    const descricao = document.getElementById('cliente-proc-descricao')?.value.trim();
    const valorCobrado = document.getElementById('cliente-proc-valor')?.value.trim();
    const formaPagamento = document.getElementById('cliente-proc-pagamento')?.value;

    if (!data || !servico || !profissional) {
        showCustomAlert('Preencha data, serviço e profissional para registrar o procedimento.');
        return;
    }

    const produtos = Array.from(document.querySelectorAll('.cliente-produto-item')).map(item => {
        const nome = item.querySelector('.cliente-produto-nome')?.value.trim();
        const qtd = item.querySelector('.cliente-produto-qtd')?.value.trim();
        return nome && qtd ? { nome, quantidade: qtd } : null;
    }).filter(Boolean);

    cliente.historicoProcedimentos = cliente.historicoProcedimentos || [];
    cliente.historicoProcedimentos.unshift({
        data,
        servico,
        profissional,
        descricao,
        produtos,
        valorCobrado,
        formaPagamento
    });

    cliente.ultimoProc = servico;
    const resumoProdutos = produtos.length > 0
        ? produtos.map(p => `${p.nome} (${p.quantidade})`).join(', ')
        : 'Nenhum produto registrado';
    cliente.historicoProdutos = resumoProdutos;

    DB_CLIENTES.salvar(clientesFidelidade);
    renderizarClientesFidelidade();
    abrirFichaCliente(cliente.id);
    showCustomAlert('Procedimento registrado com sucesso!');
}

function abrirFichaCliente(id) {
    const cliente = clientesFidelidade.find(c => c.id == id);
    const ficha = document.getElementById('cliente-ficha-detalhes');
    if (!cliente || !ficha) return;

    clienteFichaAtivaId = cliente.id;

    const historicoProcedimentos = cliente.historicoProcedimentos || [];
    const valoresAnteriores = historicoProcedimentos.map(proc => proc.valorCobrado).filter(Boolean);
    const formasPagamentoUsadas = [...new Set(historicoProcedimentos.map(proc => proc.formaPagamento).filter(Boolean))];

    const historico = historicoProcedimentos.map(proc => {
        const produtosHtml = (proc.produtos || []).map(prod => `
            <li>${prod.nome} — qtd: ${prod.quantidade}</li>
        `).join('');
        return `
            <div class="cliente-historico-item">
                <div class="cliente-historico-topo">
                    <strong>${formatarData(proc.data)}</strong>
                    <span>${proc.servico}</span>
                </div>
                <p><strong>Profissional:</strong> ${proc.profissional}</p>
                <p><strong>Descrição:</strong> ${proc.descricao || 'Sem descrição'}</p>
                <p><strong>Valor cobrado:</strong> ${formatarValorCliente(proc.valorCobrado)}</p>
                <p><strong>Forma de pagamento:</strong> ${formatarFormaPagamento(proc.formaPagamento)}</p>
                <div><strong>Produtos utilizados:</strong><ul>${produtosHtml || '<li>Nenhum produto registrado</li>'}</ul></div>
            </div>
        `;
    }).join('');

    ficha.innerHTML = `
        <div class="cliente-ficha-card">
            <h3>Ficha de ${cliente.nome}</h3>
            <p><strong>Contato:</strong> ${cliente.contato}</p>
            <p><strong>Notas:</strong> ${cliente.notas || 'Sem observações'}</p>
            <p><strong>Último procedimento:</strong> ${cliente.ultimoProc || 'Nenhum registro'}</p>
            <p><strong>Valores cobrados anteriormente:</strong> ${valoresAnteriores.length ? valoresAnteriores.map(valor => formatarValorCliente(valor)).join(' • ') : 'Nenhum valor registrado'}</p>
            <p><strong>Formas de pagamento utilizadas:</strong> ${formasPagamentoUsadas.length ? formasPagamentoUsadas.map(valor => formatarFormaPagamento(valor)).join(' • ') : 'Nenhuma forma registrada'}</p>

            <div class="cliente-procedimento-form">
                <h4>Registrar novo procedimento</h4>
                <div class="cliente-procedimento-grid">
                    <div class="form-group">
                        <label>Data</label>
                        <input type="date" id="cliente-proc-data">
                    </div>
                    <div class="form-group">
                        <label>Serviço</label>
                        <input type="text" id="cliente-proc-servico" placeholder="Ex: Hidratação">
                    </div>
                    <div class="form-group">
                        <label>Profissional</label>
                        <input type="text" id="cliente-proc-profissional" placeholder="Ex: Jessica Silva">
                    </div>
                    <div class="form-group">
                        <label>Descrição</label>
                        <textarea id="cliente-proc-descricao" rows="3" placeholder="Descreva o procedimento realizado"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Valor cobrado</label>
                        <input type="text" id="cliente-proc-valor" placeholder="Ex: 120,00">
                    </div>
                    <div class="form-group">
                        <label>Forma de pagamento</label>
                        <select id="cliente-proc-pagamento">
                            <option value="">Selecione</option>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="pix">Pix</option>
                            <option value="cartao_credito">Cartão de crédito</option>
                            <option value="cartao_debito">Cartão de débito</option>
                        </select>
                    </div>
                </div>

                <div class="cliente-produtos-lista" id="cliente-produtos-lista"></div>

                <div class="cliente-procedimento-actions">
                    <button type="button" class="submit-btn secondary-btn" onclick="adicionarLinhaProduto()">+ Adicionar produto</button>
                    <button type="button" class="submit-btn" onclick="salvarProcedimentoCliente()">Salvar procedimento</button>
                </div>
            </div>

            <div class="cliente-historico-lista">
                <h4>Histórico de procedimentos</h4>
                ${historico || '<p>Nenhum procedimento registrado.</p>'}
            </div>
        </div>
    `;

    adicionarLinhaProduto();

    // O select de forma de pagamento é criado agora dinamicamente: aplica o componente customizado
    enhanceSelects(ficha);
}

function salvarNovoServico() {
    const nomeEl = document.getElementById('add-servico-nome');
    const catEl = document.getElementById('add-servico-cat');
    const tempoEl = document.getElementById('add-servico-tempo');
    const precoEl = document.getElementById('add-servico-preco');

    if (!nomeEl || !catEl || !tempoEl || !precoEl) return;

    const nome = nomeEl.value;
    const categoria = catEl.value;
    const tempo = tempoEl.value;
    const preco = parseFloat(precoEl.value);

    if (!nome || !tempo || isNaN(preco)) {
        showCustomAlert("Preencha todos os campos do serviço.");
        return;
    }

    listagemServicos.push({ id: listagemServicos.length + 1, nome: nome, categoria: categoria, duracao: tempo, preco: preco });
    renderizarServicos();

    nomeEl.value = ''; tempoEl.value = ''; precoEl.value = '';
    showCustomAlert("Serviço cadastrado com sucesso!");
}

function formatarData(dataStr) {
    if (!dataStr) return "";
    const partes = dataStr.split('-');
    if (partes.length !== 3) return dataStr;
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
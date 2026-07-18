// --- BASE DE DADOS DOS SERVIÇOS ---
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

let clientesFidelidade = [
    { nome: "Ana Paula de Souza", contato: "(11) 99841-2334", ultimoProc: "Alongamento em Fibra", historicoProdutos: "Gel Honey e TopCoat Premium Vòlia", notas: "Tem sensibilidade a cabine de LED." },
    { nome: "Mariana Oliveira", contato: "(11) 98711-4455", ultimoProc: "Escova Modelada", historicoProdutos: "Protetor térmico Kérastase Résistance", notas: "Prefere cabelos escovados para fora." }
];

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

    renderizarTabelaBloqueios();
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
        alert("Credenciais incorretas! Tente novamente.");
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

function confirmarAgendamento(hora) {
    agendamentoAtivo.hora = hora;
    const nomeCliente = prompt("Por favor, digite o seu nome completo para concluir:");
    if (!nomeCliente || nomeCliente.trim() === "") {
        alert("O nome é necessário para agendar.");
        return;
    }
    agendamentoAtivo.cliente = nomeCliente.trim();

    const novaReserva = {
        id: Date.now(),
        cliente: agendamentoAtivo.cliente,
        servico: agendamentoAtivo.servico.nome,
        profissional: agendamentoAtivo.profissional.nome,
        data: agendamentoAtivo.data,
        hora: agendamentoAtivo.hora,
        status: "AGENDADO"
    };

    DB.addReserva(novaReserva);

    if (!clientesFidelidade.some(c => c.nome.toLowerCase() === agendamentoAtivo.cliente.toLowerCase())) {
        clientesFidelidade.push({
            nome: agendamentoAtivo.cliente,
            contato: "(11) 99999-0000",
            ultimoProc: agendamentoAtivo.servico.nome,
            historicoProdutos: "Nenhum histórico",
            notas: "Registrado via agendamento online."
        });
    }

    alert(`Sucesso! Horário agendado para ${formatarData(agendamentoAtivo.data)} às ${agendamentoAtivo.hora}.`);
    // Corrigido digitação para 'profissional'
    agendamentoAtivo = { cliente: "Visitante", servico: null, profissional: null, data: null, hora: null };
    navegarPara('reservas');
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
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: bold;">${formatarData(res.data)}</td>
            <td>${res.hora}</td>
            <td>${res.servico}</td>
            <td>${res.profissional}</td>
            <td><span class="badge ${res.status.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}">${res.status}</span></td>
        `;
        container.appendChild(tr);
    });
}

function popularCamposBloqueio() {
    const selectProfLock = document.getElementById('lock-profissional');
    if (selectProfLock) {
        selectProfLock.innerHTML = profissionais.map(p => `<option value="${p.nome}">${p.nome}</option>`).join('');
    }
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
        alert('Selecione o profissional e o intervalo de datas para bloquear a agenda.');
        return;
    }

    if (!motivo) {
        alert('Informe uma justificativa para o bloqueio.');
        return;
    }

    if (dataInicio > dataFim) {
        alert('A data inicial não pode ser maior que a data final.');
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
        alert(`Bloqueio atualizado para ${prof} no período de ${formatarData(dataInicio)} a ${formatarData(dataFim)}.`);
    } else {
        DB_BLOQUEIOS.addBloqueio(bloqueioPayload);
        alert(`Bloqueio salvo para ${prof} no período de ${formatarData(dataInicio)} a ${formatarData(dataFim)}.`);
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
    alert('Bloqueio removido com sucesso.');
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
            <select class="btn-action btn-status-alt" onchange="mudarStatusAgendamento(${res.id}, this.value)">
                <option value="AGENDADO" ${res.status === 'AGENDADO' ? 'selected' : ''}>Agendado</option>
                <option value="CONFIRMADO" ${res.status === 'CONFIRMADO' ? 'selected' : ''}>Confirmado</option>
                <option value="CONCLUÍDO" ${res.status === 'CONCLUÍDO' ? 'selected' : ''}>Concluido</option>
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
                    <button class="btn-action btn-excluir" onclick="excluirAgendamentoDefinitivo(${res.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        container.appendChild(tr);
    });
}

function mudarStatusAgendamento(id, status) {
    DB.mudarStatus(id, status);
    renderizarTabelaAdminAgendamentos();
}

function excluirAgendamentoDefinitivo(id) {
    if (confirm("Deseja realmente EXCLUIR esse agendamento permanentemente do sistema?")) {
        DB.deletarReserva(id);
        renderizarTabelaAdminAgendamentos();
    }
}

function limparFiltrosAdmin() {
    if (document.getElementById('filtro-adm-data')) document.getElementById('filtro-adm-data').value = '';
    if (document.getElementById('filtro-adm-prof')) document.getElementById('filtro-adm-prof').value = 'Todos';
    if (document.getElementById('filtro-adm-busca')) document.getElementById('filtro-adm-busca').value = '';
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
            <td><span style="font-weight: bold;">${cli.ultimoProc}</span></td>
            <td style="font-style: italic; font-size: 0.85rem; color: #555;">${cli.historicoProdutos}</td>
            <td><span style="font-size: 0.85rem; color: #444;">${cli.notas}</span></td>
        `;
        container.appendChild(tr);
    });
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
        alert("Preencha todos os campos do serviço.");
        return;
    }

    listagemServicos.push({ id: listagemServicos.length + 1, nome: nome, categoria: categoria, duracao: tempo, preco: preco });
    renderizarServicos();

    nomeEl.value = ''; tempoEl.value = ''; precoEl.value = '';
    alert("Serviço cadastrado com sucesso!");
}

function formatarData(dataStr) {
    if (!dataStr) return "";
    const partes = dataStr.split('-');
    if (partes.length !== 3) return dataStr;
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

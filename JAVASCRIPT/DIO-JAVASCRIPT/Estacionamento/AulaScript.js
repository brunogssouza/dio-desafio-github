(function () {
    //const para vincular o QuerySelector
    var _a;
    const $ = (query) => document.querySelector(query);
    function calcTempo(mil) {
        const min = Math.floor(mil / 60000);
        const sec = Math.floor(mil % 60000 / 1000);
        return `${min}m e ${sec}s`;
    }
    function patio() {
        function remover(placa) {
            const { entrada, nome } = ler().find(veiculo => veiculo.placa === placa);
            const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());
            if (!confirm(`O veiculo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))
                return;
            salvar(ler().filter((veiculo) => veiculo.placa !== placa));
            render();
        }
        function salvar(veiculos) {
            localStorage.setItem('patio', JSON.stringify(veiculos));
        }
        function render() {
            $('#patio').innerHTML = '';
            const patio = ler();
            if (patio.length) {
                patio.forEach(veiculo => adicionar(veiculo));
            }
        }
        function ler() {
            return localStorage.patio ? JSON.parse(localStorage.patio) : [];
        }
        function adicionar(veiculo, salvo) {
            var _a;
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td><button class='delete' data-placa="${veiculo.placa}">X</button></td>
            `;
            (_a = row.querySelector('.delete')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
                remover(this.dataset.placa);
            });
            const PATIO = $('#patio');
            PATIO === null || PATIO === void 0 ? void 0 : PATIO.appendChild(row);
            if (salvo) {
                salvar([...ler(), veiculo]);
            }
        }
        return { ler, adicionar, remover, salvar, render };
    }
    patio().render();
    (_a = $('#cadastrar')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        var _a, _b;
        const nome = (_a = $('#nomeCarro')) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $('#numeroPlaca')) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            return alert('Os campos de nome do veiculo e sua placa são obrigatorios!');
        }
        patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
    });
})();

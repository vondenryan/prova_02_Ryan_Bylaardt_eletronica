# Calculadora Eletrônica

Projeto desenvolvido como prova, contendo uma suite de calculadoras para cálculos elétricos com interface web.

## 📋 Visão Geral

Este repositório contém ferramentas de cálculo elétrico em JavaScript com interface HTML/CSS. O projeto está organizado em componentes modularizados para fácil manutenção e extensão.

## 🎯 Funcionalidades Principais

1. **Cálculo de Consumo Energético** - Calcula o consumo mensal de eletrodomésticos
2. **Conversor de Unidades** - Converte entre múltiplos e submúltiplos (G, M, k, m, u, n, p)
3. **Lei de Ohm** - Calcula tensão, corrente ou resistência
4. **Identificador de Resistor** - Identifica resistores pela tabela de cores
5. **Resistência Equivalente** - Calcula Req em associações série e paralelo

## 📁 Estrutura do Projeto

```
├── index.html                 # Página principal
├── codes/                     # Scripts JavaScript
│   ├── calcConsumo.js        # Cálculo de consumo energético
│   ├── calcLeiOhm.js         # Cálculo pela Lei de Ohm
│   ├── calcMultSub.js        # Conversor de múltiplos/submúltiplos
│   ├── calcReqResistor.js    # Cálculo de resistência equivalente
│   ├── calcResistor.js       # Decodificador de cores de resistor
│   ├── main.js               # Menu principal
│   └── mainResistor.js       # Interface da calculadora de resistor
├── pages/                     # Páginas HTML adicionais
│   └── resistor.html         # Página da calculadora de resistores
└── styles/                    # Folhas de estilo CSS
    └── resistor.css          # Estilos da página de resistores
```

## 📝 Descrição dos Arquivos

### HTML

#### `index.html`
Página principal que carrega todos os scripts JavaScript necessários para o funcionamento da aplicação.

**Estrutura:**
- DOCTYPE HTML5
- Meta tags para charset UTF-8 e viewport responsivo
- Links para 5 scripts JavaScript principais

#### `pages/resistor.html`
Página dedicada ao identificador de resistores com interface gráfica.

**Componentes:**
- Seletor de tipo de resistor (4 ou 5 faixas)
- Visualização prévia do resistor com faixas coloridas
- Grid de seletores para cores (1ª, 2ª, 3ª faixa, multiplicador, tolerância)
- Botão de cálculo
- Display de resultado
- Script inline para alternar visibilidade da 3ª faixa conforme seleção

**Função `atualizarInterface(n)`**
- Alterna a visibilidade da 3ª faixa de cor baseado no tipo selecionado (4 ou 5 faixas)
- Mostra/esconde elementos do DOM para 5 faixas

### JavaScript

#### `codes/calcConsumo.js`

**Função: `CalcularConsumo()`**
- Calcula o consumo mensal de eletrodomésticos em kWh
- Solicita entrada do usuário via prompts:
  - Nome do eletrodoméstico
  - Unidade de potência (Watt ou KiloWatt)
  - Valor da potência
  - Tempo de uso em horas
  - Taxa do kWh
- Realiza cálculo: `(potencia * tempo / 1000) * 30` para Watt ou `(potencia * tempo) * 30` para KiloWatt
- Multiplica pelo valor da taxa para obter custo mensal
- Exibe resultado no console com precisão de 2 casas decimais

#### `codes/calcLeiOhm.js`

**Função: `CalcularLeiDeOhm()`**
- Implementa a Lei de Ohm (V = R × I)
- Menu com 3 opções de cálculo:
  - **Caso 1 (Tensão)**: V = R × I
  - **Caso 2 (Corrente)**: I = V / R
  - **Caso 3 (Resistência)**: R = V / I
- Solicita valores necessários ao usuário
- Exibe resultado com unidade apropriada (V, A, ou Ω)

#### `codes/calcMultSub.js`

**Tabela de Conversão: `conversionTable`**
Define os expoentes para cada múltiplo/submúltiplo:
- G (Giga) = 10^9
- M (Mega) = 10^6
- k (kilo) = 10^3
- base = 10^0
- m (mili) = 10^-3
- u (micro) = 10^-6
- n (nano) = 10^-9
- p (pico) = 10^-12

**Função: `ConversorMultSub()`**
- Interface de conversor de unidades
- Exibe alert com unidades disponíveis
- Solicita unidade de origem, destino, grandeza e valor
- Chama função `conversor()` e exibe resultado

**Função: `conversor(origem, destino, val)`**
- Realiza conversão entre unidades
- Valida se as unidades existem na tabela
- Fórmula: `valor × 10^(expoente_origem - expoente_destino)`
- Retorna undefined se unidade for inválida

#### `codes/calcReqResistor.js`

**Função: `CalcularReqResistor()`**
- Menu para calcular resistência equivalente
- **Opção 1 - Série**: Soma resistências
- **Opção 2 - Paralelo**: Chama `CalcularParalelo()` com array de valores

**Função: `CalcularParalelo(arr)`**
- Calcula resistência equivalente em paralelo
- **Caso especial (2 resistores)**: `Req = (R1 × R2) / (R1 + R2)`
- **Resistores iguais**: `Req = R / n` (onde n é quantidade)
- **Caso geral**: `Req = 1 / Σ(1/Ri)`
- Verifica divisão por zero
- Retorna 0 se algum resistor for 0

#### `codes/calcResistor.js`

**Objeto: `cores`**
Tabela de referência de cores de resistores com propriedades:
- `val`: Valor numérico (0-9)
- `mult`: Multiplicador (0.01 a 10^7)
- `tolerancia`: Margem de erro em percentual

Cores incluídas: Preto, Marrom, Vermelho, Laranja, Amarelo, Verde, Azul, Violeta, Cinza, Branco, Dourado, Prata

**Função: `CalcularResistor(numFaixas, coresFaixas)`**
- Decodifica resistor pela tabela de cores
- Parâmetros:
  - `numFaixas`: 4 ou 5 (número de faixas do resistor)
  - `coresFaixas`: Array com nomes das cores
- Constrói valor numérico usando 2 ou 3 primeiras faixas
- Multiplica pelo valor da faixa multiplicadora
- Formata resultado em Ω, kΩ, MΩ ou GΩ
- Retorna valor com tolerância: "valor ±tolerancia%"

#### `codes/main.js`

**Estrutura:**
- Menu interativo com 5 opções
- Utiliza `switch` para roteamento
- Chama funções de cálculo ou redireciona para página de resistor

**Opções do Menu:**
1. CalcularConsumo()
2. ConversorMultSub()
3. Redireciona para `pages/resistor.html`
4. CalcularLeiDeOhm()
5. CalcularReqResistor()

#### `codes/mainResistor.js`

**Seleção de Elementos DOM:**
- `button`: Elemento com id "btn-calcular"
- `display`: Elemento com id "res-val" para exibir resultado

**Event Listener: Click no Botão**
- Captura tipo de resistor (4 ou 5 faixas)
- Obtém valores dos 5 seletores de cor
- Monta array `coresFaixas` com cores selecionadas
- Chama `CalcularResistor()` do arquivo calcResistor.js
- Atualiza display com resultado

**Função: `updateDisplay(x)`**
- Atualiza conteúdo de texto do elemento display
- Exibe valor calculado do resistor

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. Selecione uma das opções de cálculo no menu
3. Para resistores: siga até à página dedicada e selecione as cores
4. Os resultados são exibidos no console do navegador

## 📊 Linguagens Utilizadas

- **HTML**: 45.6%
- **JavaScript**: 34.8%
- **CSS**: 19.6%

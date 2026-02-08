// Fatores de emissão de CO₂ em gramas por km
const emissionFactors = {
    carro: 190,      // Carro médio
    moto: 80,        // Motocicleta
    onibus: 70,      // Ônibus (por passageiro)
    caminhao: 800    // Caminhão
};

// Símbolos dos veículos
const vehicleEmojis = {
    carro: '🚗',
    moto: '🏍️',
    onibus: '🚌',
    caminhao: '🚚'
};

// Traduções de frequência
const frequencyLabels = {
    '1': 'Uma única vez',
    '7': 'Por semana',
    '30': 'Por mês',
    '365': 'Por ano'
};

/**
 * Atualiza o fator de emissão quando o tipo de veículo é mudado
 */
function updateEmissionFactor() {
    const vehicleType = document.getElementById('vehicle-type').value;
    const factor = emissionFactors[vehicleType];
    console.log(`Veículo: ${vehicleType}, Fator de emissão: ${factor}g CO₂/km`);
}

/**
 * Calcula as emissões de CO₂ baseado nos dados inseridos
 */
function calculateEmissions() {
    // Obter valores do formulário
    const distance = parseFloat(document.getElementById('distance').value);
    const vehicleType = document.getElementById('vehicle-type').value;
    const frequency = parseInt(document.getElementById('frequency').value);
    
    // Validação
    if (!distance || distance <= 0) {
        console.warn('Distância inválida');
        return;
    }

    // Obter fator de emissão do veículo
    const emissionFactor = emissionFactors[vehicleType];
    
    // Calcular emissão total em kg
    const emissionInGrams = distance * emissionFactor * frequency;
    const emissionInKg = emissionInGrams / 1000;
    
    // Calcular equivalências
    const treesEquivalent = calculateTreesEquivalent(emissionInKg);
    const flightsEquivalent = calculateFlightsEquivalent(emissionInKg);
    const carKmEquivalent = calculateCarKmEquivalent(emissionInKg);
    
    // Exibir resultados
    displayResults(emissionInKg, frequency, treesEquivalent, flightsEquivalent, carKmEquivalent);
}

/**
 * Calcula quantas árvores seriam necessárias para absorver o CO₂
 * Uma árvore absorve aproximadamente 21kg de CO₂ por ano
 * @param {number} emissionInKg - Emissão em kg
 * @returns {number} Número de árvores
 */
function calculateTreesEquivalent(emissionInKg) {
    const co2PerTreePerYear = 21;
    const trees = emissionInKg / co2PerTreePerYear;
    return trees.toFixed(1);
}

/**
 * Calcula equivalência com voos transatlânticos
 * Um voo transatlântico gera aproximadamente 900kg de CO₂ por passageiro
 * @param {number} emissionInKg - Emissão em kg
 * @returns {number} Número de voos
 */
function calculateFlightsEquivalent(emissionInKg) {
    const co2PerFlight = 900;
    const flights = emissionInKg / co2PerFlight;
    return flights.toFixed(2);
}

/**
 * Calcula quantos km em um carro médio seria necessário para gerar a mesma emissão
 * @param {number} emissionInKg - Emissão em kg
 * @returns {number} Quilômetros
 */
function calculateCarKmEquivalent(emissionInKg) {
    const carEmissionFactor = emissionFactors['carro'] / 1000; // Converter para kg
    const km = emissionInKg / carEmissionFactor;
    return km.toFixed(1);
}

/**
 * Exibe os resultados do cálculo
 * @param {number} emission - Emissão em kg
 * @param {number} frequency - Frequência em dias
 * @param {number} trees - Equivalência em árvores
 * @param {number} flights - Equivalência em voos
 * @param {number} carKm - Equivalência em km de carro
 */
function displayResults(emission, frequency, trees, flights, carKm) {
    // Mostrar seção de resultados
    const resultsSection = document.getElementById('results');
    resultsSection.style.display = 'block';
    
    // Scroll para resultados
    resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Preencher valores
    document.getElementById('total-emissions').textContent = emission.toFixed(2);
    document.getElementById('trees-equivalent').textContent = trees;
    document.getElementById('flights-equivalent').textContent = flights;
    document.getElementById('car-km-equivalent').textContent = carKm;
    
    // Atualizar período
    const frequencyText = frequencyLabels[frequency.toString()] || 'Uma única vez';
    document.getElementById('period-text').textContent = frequencyText;
}

/**
 * Reseta a calculadora para seu estado inicial
 */
function resetCalculator() {
    // Limpar formulário
    document.getElementById('distance').value = '';
    document.getElementById('vehicle-type').value = 'carro';
    document.getElementById('frequency').value = '1';
    
    // Ocultar resultados
    document.getElementById('results').style.display = 'none';
    
    // Scroll para formulário
    document.querySelector('.calculator-section').scrollIntoView({ behavior: 'smooth' });
}

// Inicializar calculadora quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('CalculadoraCO₂ carregada com sucesso!');
    updateEmissionFactor();
});

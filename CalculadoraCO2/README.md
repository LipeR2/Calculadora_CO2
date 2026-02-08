# 🌍 CalculadoraCO₂

Uma aplicação web interativa para calcular emissões de CO₂ por deslocamento de diferentes tipos de veículos.

## 📋 Descrição

CalculadoraCO₂ é um projeto simples e eficiente que ajuda usuários a entender e quantificar o impacto ambiental de seus deslocamentos. A aplicação calcula a emissão de dióxido de carbono (CO₂) com base no tipo de veículo e distância percorrida.

## ✨ Funcionalidades

- **Cálculo de emissões**: Calcula emissões de CO₂ para 4 tipos de veículos
  - 🚗 Carro (190 g CO₂/km)
  - 🏍️ Moto (80 g CO₂/km)
  - 🚌 Ônibus (70 g CO₂/km por passageiro)
  - 🚚 Caminhão (800 g CO₂/km)

- **Múltiplas frequências**: Calcule emissões para
  - Uma única vez
  - Por semana
  - Por mês
  - Por ano

- **Contexto ambiental**: Visualize resultados com equivalências:
  - Número de árvores necessárias para absorver o CO₂
  - Equivalência com voos transatlânticos
  - Quilômetros de carro médio

- **Interface responsiva**: Funciona perfeitamente em desktop, tablet e dispositivos móveis

- **Design moderno**: Interface intuitiva e agradável visualmente

## 🚀 Como Usar

1. **Acesse a aplicação**: Abra o arquivo `index.html` em seu navegador
2. **Selecione o tipo de veículo**
3. **Insira a distância em quilômetros**
4. **Escolha a frequência do deslocamento**
5. **Clique em "Calcular Emissões"**
6. **Visualize os resultados e equivalências**

## 📁 Estrutura do Projeto

```
CalculadoraCO2/
├── index.html           # Arquivo principal HTML
├── src/
│   ├── css/
│   │   └── style.css    # Estilos CSS
│   └── js/
│       └── calculator.js # Lógica JavaScript
├── tests/               # Pasta para testes
└── README.md           # Este arquivo
```

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Design responsivo com Grid, Flexbox e gradientes
- **JavaScript (Vanilla)**: Lógica de cálculo e interatividade

## 📊 Fatores de Emissão

Os fatores de emissão utilizados são baseados em dados ambientais reais:

| Veículo | Emissão | Observação |
|---------|---------|-----------|
| 🚗 Carro | 190 g CO₂/km | Carro médio |
| 🏍️ Moto | 80 g CO₂/km | Motocicleta padrão |
| 🚌 Ônibus | 70 g CO₂/km | Por passageiro |
| 🚚 Caminhão | 800 g CO₂/km | Caminhão médio |

## 🌱 Equivalências

Para contextualizar os resultados:

- **1 árvore**: Absorve ~21 kg de CO₂ por ano
- **1 voo transatlântico**: Gera ~900 kg de CO₂ por passageiro
- **Carro médio**: Emite 190 g CO₂/km

## 🎨 Características de Design

- **Tema de gradiente**: Cores vibrantes e harmônicas
- **Animações suaves**: Transições fluidas entre elementos
- **Ícones informativos**: Emojis para melhor identificação dos veículos
- **Responsividade**: Adapta-se a qualquer tamanho de tela
- **Acessibilidade**: Interface clara e intuitiva

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Smartphone (480px - 767px)
- Dispositivos pequenos (< 480px)

## 🔧 Como Executar Localmente

1. **Clone o repositório** (se estiver no GitHub):
   ```bash
   git clone https://github.com/seu-usuario/CalculadoraCO2.git
   cd CalculadoraCO2
   ```

2. **Abra o arquivo** `index.html`:
   - Duplo clique no arquivo, ou
   - Clique com botão direito → Abrir com navegador, ou
   - Use um servidor local (opcional)

3. **Para usar com servidor local** (Python):
   ```bash
   python -m http.server 8000
   # ou
   python3 -m http.server 8000
   ```
   Depois acesse: `http://localhost:8000`

## 🧪 Testes

Para adicionar testes à aplicação, você pode utilizar frameworks como Jest ou Mocha. A pasta `tests/` está disponível para esse propósito.

Exemplo de teste (a ser implementado):
```javascript
// tests/calculator.test.js
test('Calcular emissões de carro', () => {
  const emissions = (100 * 190 * 1) / 1000; // 100km, carro, uma vez
  expect(emissions).toBe(19); // kg CO₂
});
```

## 📈 Melhorias Futuras

- [ ] Integração com API de GPS para cálculo automático de distância
- [ ] Histórico de cálculos
- [ ] Metas de redução de CO₂
- [ ] Comparação com outros usuários
- [ ] Suporte para mais tipos de veículos
- [ ] Modo escuro
- [ ] Testes unitários automatizados
- [ ] Aplicativo mobile
- [ ] Integração com redes sociais para compartilhamento

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. **Fork o projeto**
2. **Crie uma branch para sua feature** (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para conscientização ambiental.

## 📞 Suporte

Se encontrar problemas ou tiver sugestões, sinta-se à vontade para:
- Abrir uma [Issue](https://github.com/seu-usuario/CalculadoraCO2/issues)
- Enviar um email
- Fazer um fork e contribuir com melhorias

## 🌐 Acesse Online

Você pode testar a aplicação visitando: [CalculadoraCO₂](https://seu-usuario.github.io/CalculadoraCO2)

---

**Ajude a reduzir as emissões de carbono! 🌱**

Cada km calculado é um passo em direção a um planeta mais sustentável.

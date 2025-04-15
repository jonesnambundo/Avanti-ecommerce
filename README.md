# 🛍️ Avanti - E-commerce Responsivo

Projeto de uma interface web responsiva para uma loja virtual fictícia chamada **Avanti**. A proposta é replicar um layout profissional seguindo o design fornecido no Figma, aplicando técnicas modernas de front-end com foco em usabilidade, responsividade e interatividade.

---

## ✅ Funcionalidades

- Layout responsivo para **versão desktop e mobile**
- Menu com categorias e submenus interativos
- Campo de busca funcional que exibe o termo buscado em um **modal**
- Carrossel de produtos com navegação implementada via **Swiper.js**
- Seções de destaque, newsletter, informações institucionais e atendimento
- Accordion de FAQ adaptado ao mobile (expansível)
- Rodapé com formas de pagamento e logos institucionais

---

## 🧱 Tecnologias Utilizadas

- **HTML5**
- **CSS3** (sem frameworks, customizado)
- **JavaScript Vanilla**
- [**Swiper.js**](https://swiperjs.com/) - para o carrossel de produtos
- **Font Awesome** - ícones
- **Google Fonts** (Heebo, Nunito, Poppins)

---

## 📦 Estrutura de Pastas

```
avanti/
├── css/
│   └── styles.css
├── scripts/
│   ├── scripts.js
│   ├── swiper.js
│   └── faq.js
├── images/
│   └── (ícones, produtos, banners, logos...)
├── index.html
└── README.md
```

---

## 🔍 Funcionalidade de Busca com Modal

Ao digitar um termo no campo de busca e clicar no ícone da lupa:

➡️ Um **modal é exibido** com a mensagem:
```
Você buscou por: 'termo digitado'
```

🔁 O modal pode ser fechado clicando no ❌ ou fora dele.

---

## 🎠 Carrossel de Produtos

- Carrossel com **layout adaptável**
- Exibe cards com imagem, título, descrição, preço original e com desconto
- Implementado usando a biblioteca **Swiper.js**
- Responsivo: funciona com 2 a 5 slides por tela, conforme o dispositivo

---

## 📱 Responsividade

O layout é adaptado para diferentes resoluções de tela, utilizando `@media queries`.  
No mobile:

- Menus são escondidos e substituídos por um menu hambúrguer
- Accordion interativo no rodapé
- Cards ajustados para largura total
- Banner otimizado

---

## 🖼️ Preview do Projeto
 ### 📱 Mobile And 💻 Desktop 

![Image](https://github.com/user-attachments/assets/24826998-f032-441e-bc07-234257c840db)

---

## 🚀 Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/jonesnambundo/avanti-ecommerce.git
```

2. Abra o arquivo `index.html` em seu navegador ou utilize o Live Server no VS Code.

---

## ⚠️ Observações

- Este projeto é **puramente front-end**.
- Não possui backend nem integração com sistemas de pagamento reais.

---

## 👨‍💻 Autor

Desenvolvido por [**Jones Nambundo**](https://github.com/jonesnambundo)

---

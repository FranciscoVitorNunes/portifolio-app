
# 📱 Meu Perfil App

Um aplicativo simples feito em **React Native + Expo** para exibir informações pessoais e habilidades em duas telas.  
Este projeto foi desenvolvido como exercício de navegação, componentes e estilização.

---

## 🚀 Funcionalidades

### Main Screen (Tela Principal)
- Foto de perfil
- Nome
- Links importantes (LinkedIn, GitHub, Email, etc.)
- Botão para acessar a tela de habilidades

### Skill Screen (Tela de Habilidades)
- Foto de perfil
- Nome
- Árvore de habilidades, com nível de proficiência de cada tecnologia

---

## 📂 Estrutura do Projeto

```
/src
├── components
│   ├── ProfileImage.tsx   # foto de perfil
│   ├── ProfileName.tsx    # nome
│   ├── ProfileLinks.tsx   # lista de links importantes
│   ├── SkillTree.tsx      # árvore de habilidades
│   └── SkillItem.tsx      # componente de cada skill
│
├── screens
│   ├── MainScreen.tsx     # tela principal
│   └── SkillScreen.tsx    # tela de habilidades
│
└── AppNavigator.tsx       # configuração de navegação
App.tsx
```

---

## 🛠️ Tecnologias Utilizadas
- React Native
- Expo
- React Navigation

---

## ▶️ Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/FranciscoVitorNunes/portifolio-app.git
   cd meu-perfil-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Instale as bibliotecas de navegação:
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
   ```

4. Execute o projeto:
   ```bash
   npm start
   ```

5. Abra no aplicativo **Expo Go** no celular ou em um emulador.

---

## ✨ Demonstração

### 📸 Tela Principal (Main Screen)
- Foto de perfil, nome e links
- Botão para navegar para a Skill Screen

### 📸 Tela de Habilidades (Skill Screen)
- Foto de perfil e nome
- Lista organizada de habilidades com seus níveis

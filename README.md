# 🤖 Chatbot Application

> 🌟 An intelligent shopping assistant that makes your online shopping experience more interactive and personalized!

## 📺 Demo Video

[![Chatbot Demo](Screenshot/1.png)](https://youtu.be/3XQ-zuWE00g?si=tUpgNEbGcm33xisF)

*Watch our chatbot in action! Click the image above to view the demo video.*

*Our sleek and intuitive chat interface*

---
## 🌐 Live Links

🔗 **Live Site**: [Try the Chatbot](https://assignment-wing.vercel.app/)

🎥 **Main Demo**: [Watch on YouTube](https://youtu.be/3XQ-zuWE00g?si=tUpgNEbGcm33xisF)

## ✨ Features

🗣️ **Interactive Chat Interface**
- Real-time conversation with advanced AI
- Natural language processing for better understanding
- Quick response times for seamless interaction

![Chat Features](Screenshot/6.png)
*Example of personalized product recommendations*

🎯 **Personalized Shopping Experience**
- Smart product recommendations
- Purchase history analysis
- Preference-based suggestions

🎨 **Modern Design**
- Fully responsive layout
- Dark/Light mode support
- Smooth animations

## 🛠️ Technologies Used

- ⚛️ React 18
- 🎨 CSS Modules
- 🔄 React Router
- 🌐 Fetch API
- 💅 Styled Components

## 📁 Project Structure

```
📦 assignment_wing
├─ 📜 .gitignore
├─ 📖 README.md
├─ ⚙️ components.json
├─ 🔍 eslint.config.js
├─ 🌐 index.html
├─ 🔒 package-lock.json
├─ 📦 package.json
├─ 🎨 postcss.config.js
├─ 📂 public
│  └─ 🖼️ vite.svg
├─ 📂 src
│  ├─ 🎨 App.css
│  ├─ ⚛️ App.jsx
│  ├─ 📂 Pages
│  │  ├─ 💬 Chats
│  │  │  └─ Chats.jsx
│  │  ├─ 👥 Groups
│  │  │  ├─ Groups.jsx
│  │  │  ├─ chat-messages.jsx
│  │  │  ├─ files-list.jsx
│  │  │  └─ members-list.jsx
│  │  ├─ 🏠 Home
│  │  │  └─ Home.jsx
│  │  ├─ 💰 Sales
│  │  │  └─ Sales.jsx
│  │  ├─ ⚙️ Setting
│  │  │  └─ Setting.jsx
│  │  └─ 📑 index.js
│  ├─ 🎨 assets
│  │  └─ react.svg
│  ├─ 🧩 components
│  │  ├─ 🤖 Chatbot
│  │  │  ├─ ChatBot.module.css
│  │  │  ├─ InputForm.jsx
│  │  │  ├─ InputForm.module.css
│  │  │  ├─ Loading.jsx
│  │  │  ├─ Loading.module.css
│  │  │  ├─ MessageItem.jsx
│  │  │  ├─ MessageItem.module.css
│  │  │  ├─ MessageList.jsx
│  │  │  ├─ MessageList.module.css
│  │  │  └─ index.js
│  │  ├─ 👀 Glance
│  │  │  └─ Glance.jsx
│  │  ├─ 📌 Header
│  │  │  └─ Header.jsx
│  │  ├─ 📊 Insights
│  │  │  ├─ ConsulationChart.jsx
│  │  │  ├─ Insights.jsx
│  │  │  └─ VsPast.jsx
│  │  ├─ 📦 Orders
│  │  │  └─ Order.jsx
│  │  ├─ ⚙️ Setting
│  │  │  ├─ account-form.jsx
│  │  │  ├─ notifications-form.jsx
│  │  │  ├─ profile-form.jsx
│  │  │  ├─ security-form.jsx
│  │  │  ├─ separator.jsx
│  │  │  └─ sidebar-nav.jsx
│  │  ├─ 🔄 Sidebar
│  │  │  └─ Sidebar.jsx
│  │  ├─ 🎨 Theme
│  │  │  └─ Theme.jsx
│  │  ├─ 📑 index.js
│  │  └─ 🎯 ui
│  │     ├─ avatar.jsx
│  │     ├─ button.jsx
│  │     ├─ card.jsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.jsx
│  │     ├─ input.jsx
│  │     ├─ label.jsx
│  │     ├─ scroll-area.jsx
│  │     ├─ table.jsx
│  │     ├─ tabs.jsx
│  │     └─ textarea.jsx
│  ├─ 🖼️ img
│  │  ├─ Logo.png
│  │  ├─ assistant.png
│  │  ├─ image.jpg
│  │  └─ user.png
│  ├─ 🎨 index.css
│  ├─ 🛠️ lib
│  │  └─ utils.ts
│  ├─ ⚡ main.jsx
│  └─ 🎨 svg
│     ├─ Arrow45Svg.jsx
│     ├─ ArrowDownSvg.jsx
│     ├─ ArrowUpSvg.jsx
│     ├─ BarSvg.jsx
│     ├─ ChartPieSliceSvg.jsx
│     ├─ ChatTeardropSvg.jsx
│     ├─ ConversionSvg.jsx
│     ├─ DownSvg.jsx
│     ├─ HomeSvg.jsx
│     ├─ LogoSvg.jsx
│     ├─ MessageSvg.jsx
│     ├─ OrderValueSvg.jsx
│     ├─ PiggyBankSvg.jsx
│     ├─ SaleValueSvg.jsx
│     ├─ SettingSvg.jsx
│     ├─ TagSvg.jsx
│     ├─ UserSvg.jsx
│     └─ index.js
├─ 🎨 tailwind.config.js
├─ ⚙️ tsconfig.app.json
├─ ⚙️ tsconfig.json
├─ 🚀 vercel.json
└─ ⚡ vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Jeevesh0207/assignment_wing.git
```

2. **Navigate to project folder:**
```bash
cd assignment_wing
```

3. **Install dependencies:**
```bash
npm install
```

4. **Set up environment variables:**
Create a `.env` file:
```env
VITE_URL=your_api_url_here
```

5. **Start development server:**
```bash
npm run dev
```
*Quick and easy setup process*

## 💡 Usage

1. 🌐 Open your browser and navigate to `http://localhost:3000`
2. 💬 Start chatting with the bot
3. 🛍️ Get personalized shopping recommendations
4. ✨ Enjoy the smooth shopping experience!

![Usage Example](Screenshot/9.png)
*Example of a shopping conversation*

## 🤝 Contributing

We love your input! We want to make contributing as easy and transparent as possible:

1. 🍴 Fork the repo
2. 🔄 Create your branch (`git checkout -b feature/amazing`)
3. 💻 Make changes
4. ✅ Commit (`git commit -m 'Add amazing feature'`)
5. 🚀 Push (`git push origin feature/amazing`)
6. ✨ Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by Jeevesh Rai

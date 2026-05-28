# FallingSquares 🟥🔵 V1.0

> **Inspiration Note:** This project was heavily inspired by the mobile game **SquareFall**. The goal was to recreate the core mechanics of the original game while expanding it with new features built entirely from scratch for the web.

**FallingSquares** is a fast-paced arcade survival game where your reflexes are your best weapon! You control a blue ball orbiting a central circle, constantly moving to dodge an endless barrage of falling red enemies.

## 🚀 Play Now
**[👉 Click here to play FallingSquares directly in your browser!](https://mateusnunesp.github.io/SquareGame/)**

## 🎮 How to Play
Survive as long as possible by dodging the enemies (red squares) while collecting coins (yellow circles) to buy perks in the shop.

### Controls
* **`G`** - Invert the orbit direction.
* **`Space`** - Pause / Unpause the game.
* **`F`** - Emergency brake (Unlockable ability from the shop).

## ✨ Key Features
* **Survive & Adapt:** The difficulty is based purely on your reaction time. The longer you survive, the higher your *Best Time*.
* **Economy System:** Collect yellow coins that randomly fall across the map.
* **In-Game Shop:** Spend your hard-earned coins to unlock powerful abilities, like the emergency brake (`Stop`).
* **Saved Progress:** Your "Best Time" is automatically saved in your browser (via `localStorage`), ensuring your high score is never lost when closing the tab.
* **Smart Pause:** The game automatically pauses if you switch tabs or minimize the browser, making sure you don't lose an ongoing run unfairly.

## 🛠️ Tech Stack
This project was built **without the use of game engines (like Unity or Godot)** or external libraries. It was made purely using the core web trinity:
* **HTML5** (For structure and vector graphic rendering via **SVG**)
* **CSS3** (For styling, Flexbox layouts, and a responsive interface)
* **Vanilla JavaScript (ES6)** (For all the game logic, physics engine, and collision detection)

## 🏗️ Code Architecture
The game uses **Object-Oriented Programming (OOP)** to keep the codebase clean, modular, and easy to expand. The main classes include:
* `Bola` (Ball): Controls the player, the orbital physics, and direction changes.
* `Quadrado` (Square): Procedurally generated enemies with randomized speeds.
* `Moeda` (Coin): The loot system with its own collision detection.
* `Loja` (Shop): Manages transactions, validates balances, and injects new abilities into the game through callbacks.
* `Mapa` (Map): Renders the base environment.

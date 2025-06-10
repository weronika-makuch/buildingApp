# Brutalist Buildings App

Brutalist Buildings App to minimalistyczna aplikacja frontendowa stworzona w React, której celem jest prezentowanie budynków w stylu brutalizmu. Aplikacja pozwala użytkownikom przeglądać obiekty, oceniać je, oznaczać jako ulubione i dodawać własne propozycje.

## Opis działania

Aplikacja umożliwia:

- Wyświetlanie listy brutalistycznych budynków z nazwą, lokalizacją oraz obrazem.
- Głosowanie na każdy budynek (łapka w górę lub w dół).
- Oznaczanie wybranych budynków jako ulubione (gwiazdką).
- Dodawanie nowego budynku do listy przez użytkownika, z formularzem zawierającym nazwę, lokalizację i link do zdjęcia.
- Automatyczny podział budynków na kategorie w zależności od liczby głosów:
  - **Hot** – budynki o wysokiej ocenie (różnica upvotes − downvotes większa niż 5)
  - **Regular** – pozostałe budynki

## Jak uruchomić projekt?

1. Sklonuj repozytorium lub pobierz pliki projektu.
2. Otwórz terminal i przejdź do folderu projektu:
cd meme-app

3. Zainstaluj wymagane pakiety:
npm install

4. Uruchom aplikację lokalnie:
npm start

5. Otwórz przeglądarkę i przejdź do:
http://localhost:3000

## Struktura katalogów

src/
├── App.js # Główny komponent i konfiguracja routingu
├── components/ # Komponenty: Building, BuildingList, Navbar
├── pages/ # Widoki: Hot.js, Regular.js, AddBuilding.js
├── data/buildingData.js # Początkowa baza 10 budynków (Unsplash/Wikipedia)
├── App.css # Stylizacja: ciemna

## Styl i wygląd

Projekt wykorzystuje ręczne stylowanie w pliku CSS i oddaje charakter brutalizmu:
- surowe tło (ciemne),
- bez ramek i ozdobników,
- duża, czytelna typografia,
- interfejs oparty na prostocie i funkcjonalności.

## Dodatkowe informacje

- Obrazy pochodzą z otwartych źródeł.

## Autor

Weronika Makuch
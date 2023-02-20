1. У папці з файлами відкрити термінал та ввести (nodejs сподіваюсь встановлений😅)  
>npm i
2. створити .env у який скопіювати:

PG_USER = 'postgres'
PG_HOST = 'localhost'
PG_DB = 'postgres'
PG_PASSWORD = "1234"
PG_PORT = 5432
PG_URI = postgres://poster:lFiogOtCjCoWDTIfyad1WIJGef2afj5b@dpg-cfpqt082i3mo4bsqe4o0-a/poster_99c1

3. запустити командою 
> npm run dev

4. має запуститися на http://localhost:8000
Змінити порт можна у папці ./config/default.json

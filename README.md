Есть список, который может работать в 2 режимах:
- добавление новых записей раз в секунду
- удаление записей по 1 в секунду

режимы меняются по нажатию на кнопку Change mode

Также есть возможность добавить элемент в список по нажатию на кнопку "Add to end"

Условия задания.
1) оптимизировать кол-во ререндеров всех компонентов
2) реализовать удаление выбранных элемент списка
3) реализовать добавление элементов списка в начало при нажатии на кнопку Add to start
3) при переключении режима работы списка - добавление и удаление элементов должно происходить по 1 шт
4) при нажатии на элемент списка должна происходить анимация пульсации 1 раз (без добавления стилей, классов и т.д.)
5) при добавлении элемента списка в начало  должна вызываться анимация пульсации 1 раз (без добавления стилей, классов и т.д.)
6) избавиться от дублирования кода для кнопок (реализовать переиспользуемый компонент)
7) переменную index убрать из глобальной видимости, занести в компонент List


Ограничения по выполнению
- Компонент List не должен дробиться на более мелкие компоненты
- Добавление новых стилей/анимаций запрещено
- использование сторонних библиотек запрещено

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

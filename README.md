# Bob 👷

Bob is a CSS grid layout framework.

## Introduction

Bob allows you to use the power of CSS Grid declaratively with a set of classes. Perfect for quickly prototyping complex layout.

## Demo

[View demo](https://antoinechassagne.github.io/bob/)

## Usage

Due to the nature of CSS Grid, Bob works on 2 axes :

- The horizontal axis is composed of columns
- The vertical axis is composed of rows

To allow positioning on these 2 axes, your content must be wrapped in an element carrying the class `grid`.

By default, you can position elements on 12 columns and 12 rows. (This is easily configurable in the [configuration file](#configuration)).

### Columns

An element must start and end on defined columns.

Exemple :

```html
<section class="grid">
  <div class="col-start-1 col-end-6">
    <p>Hello World !</p>
  </div>
</section>
```

> Here, the div start on column 1 and end on column 6.

To make an element 1 column wide :

```html
<section class="grid">
  <div class="col-start-1 col-end-1">
    <p>Hello World !</p>
  </div>
</section>
```

> Here, the div start on column 1 and end on column 1.

### Rows

By default, columns can wrap under each other without defining rows.

Exemple :

```html
<section class="grid">
  <div class="col-start-1 col-end-6">
    <p>Hello World !</p>
  </div>
  <div class="col-start-7 col-end-12">
    <p>Hello World 2 !</p>
  </div>
  <div class="col-start-1 col-end-8">
    <p>Hello World 3 !</p>
  </div>
</section>
```

> Here, the first and second div will be on the first row and the third div will wrap and be on the second row.

If you need to define on which rows an element should be placed, the system is the same as for the columns. You must define a start and end row.

Exemple :

```html
<section class="grid">
  <div class="col-start-1 col-end-8 row-start-1 row-end-1">
    <p>Hello World !</p>
  </div>
  <div class="col-start-1 col-end-8 row-start-2 row-end-2">
    <p>Hello World 2 !</p>
  </div>
  <div class="col-start-9 col-end-12 row-start-1 row-end-2">
    <p>Hello World 3 !</p>
  </div>
</section>
```

> Here, the first div is 8 column wide and is placed on the first row. The second div is 8 column wide and is placed on the second row. The third div is 4 column wide and is placed on first and second rows.

## Configuration

The grid can be easily customized for your needs. The configuration file is located at `/src/scss/_config.scss`. You can adjust each variable of the file.
If you change at least 1 variable value, you must rebuild Bob by running `npm run build`.

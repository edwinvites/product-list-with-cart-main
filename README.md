# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/aseets/captura.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/) - For styles



### What I learned


I use selectors to ligth bottons when hover.

```css
#waffleBotonAdicionar:hover,
#vanillaBeanCremeBruleeBotonAdicionar:hover,
#MacaronMixOfFiveBotonAdicionar:hover,
#classicTiramisuBotonAdicionar:hover,
#pistachioBaklavaBotonAdicionar:hover,
#LemonMeringuePieBotonAdicionar:hover,
#RedVelveCakeBotonAdicionar:hover,
#SaltedCaramelBrownieBotonAdicionar:hover,
#VanillaPannaCottaBotonAdicionar:hover
{
  border-color: $red !important;
  color: $red;

}
```

Bootstrap let's enhance his services, If his core is modified.

By modifying their theme-colors:

```scss
$theme-colors: (
...
,
  "ocre" : hsl(30, 71%, 47%),
);
```


Effect

```css
.text-ocre {
...
}

.bg-ocre {
...
}

.border-ocre {
...
}
```

If adding differents sizes for styles.


```scss
$font-size-base:  0.4rem;

$h1-font-size:                $font-size-base * 3;
$h2-font-size:                $font-size-base * 2.75;
$h3-font-size:                $font-size-base * 2.5;
$h4-font-size:                $font-size-base * 2.25;
$h5-font-size:                $font-size-base * 2.0;
$h6-font-size:                $font-size-base * 1.75;
$h7-font-size:                $font-size-base * 1.50;
$h8-font-size:                $font-size-base * 1.25;
$h9-font-size:                $font-size-base * 1.0;
$h10-font-size:               $font-size-base ;
```
Wrong behaviour when "$font-size-base" bigger than 1.2 rem!.


### Continued development

I need to use best practices with Bootstrap.

Also, I need to increase my work speed.


## Author

- Frontend Mentor - [@edwinvites](https://www.frontendmentor.io/profile/edwinvites)
- Linkedin - [@edwinvivas](https://www.linkedin.com/in/edwinvivas/)


## Acknowledgments

Developers via the Internet


# 🚀 Introduction to HTML

Let's start with an example here. This calculator is written in `HTML`, `CSS`, and `JavaScript`. We will learn these three languages all together in this page. **After this tutorial, you will be able to write this calculator all by your self!**

## 🧮 Calculator Example

<iframe 
  src="../calculator.html"
  width="100%" 
  height="500" 
  frameborder="0"
  scrolling="no"
>
</iframe>

## 🌟 What is HTML?

HTML stands for **HyperText Markup Language** - but don't let that scary name fool you! Think of HTML as the skeleton of every website you've ever visited. It's like the foundation of a house 🏠 - it gives structure to everything you see on the web!

:::tip 💡 Fun Fact
HTML was created in 1990 by Tim Berners-Lee. That's older than some of your favorite social media platforms!
:::

## 🛠️ Getting Started

Before we dive in, you'll need:
- An IDE: just use [VSCode](https://code.visualstudio.com/), it's free and awesome!
- A web browser 🌐: just use [Chrome](https://www.google.com/chrome/dr/download/?brand=OZZY&ds_kid=43700080456228412&gclsrc=aw.ds&gad_source=1&gad_campaignid=21457145903&gbraid=0AAAAAoY3CA5UzdX0aDeQI3J29vzhmeKkp&gclid=CjwKCAjw7rbEBhB5EiwA1V49ndJ2UentMgGU_d2nP7kkrdZHafKIEIRduz7KS-ectQV_bQXQspSuZhoClowQAvD_BwE), it's also free and awesome 🕶️
- Your enthusiasm! 🔥

## 📝 Your First HTML Document

Let's create your very first HTML page! Copy this code and save it as `my-first-page.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

:::warning 🎯 Try It Out!
Save this code in a file and open it in your browser. Congratulations! You're officially a web developer! 🎉
:::

:::tip 💡 Most things have short cuts
You can also use ! + enter to create this template code.
:::

## 🏗️ Understanding HTML Structure

Think of HTML like a Russian nesting doll 🪆. Everything fits inside something else:

```html
<!DOCTYPE html>  <!-- 📢 This tells the browser "Hey, this is HTML5!" -->
<html>           <!-- 🏠 The main house that contains everything -->
  <head>         <!-- 🧠 The brain - info about your page -->
    <title>Page Title</title>
  </head>
  <body>         <!-- 👁️ What visitors actually see -->
    <h1>Welcome!</h1>
  </body>
</html>
```

## 🏷️ HTML Tags: Your Building Blocks

HTML uses **tags** to mark up content. Tags are like magical brackets that tell the browser what each piece of content should be!

### 📏 The Anatomy of a Tag

```html
<tagname>Content goes here</tagname>
```

- `<tagname>` = Opening tag 🚪
- `</tagname>` = Closing tag 🔒
- Everything between = Content 📝

:::info 🤓 Nerd Alert!
Some tags are self-closing and don't need a closing tag, like `<img>` and `<br>`. They're the rebels of HTML! 😎
:::

## 📖 Essential HTML Tags

### 🎯 Headings - The Hierarchy Heroes

HTML has 6 levels of headings, from biggest to smallest:

```html
<h1>I'm the BIGGEST! 🦣</h1>
<h2>I'm pretty big too! 🐘</h2>
<h3>I'm medium-sized! 🐕</h3>
<h4>I'm getting smaller! 🐱</h4>
<h5>I'm quite small! 🐭</h5>
<h6>I'm tiny but mighty! 🐜</h6>
```

<iframe 
  src="../headings.html"
  width="100%" 
  height="320" 
  frameborder="0"
  scrolling="no"
>
</iframe>

:::tip 🎨 Pro Tip
Use headings like an outline! H1 for main topics, H2 for subtopics, and so on. It helps both readers and search engines understand your content!
:::

### 📝 Paragraphs - The Storytellers

```html
<p>This is a paragraph! It's perfect for telling stories, sharing thoughts, or explaining concepts. 📚</p>

<p>Each paragraph gets its own space, making your content easy to read! 😊</p>
```

:::tip Why p tag?
Unlike the generic `<div>` (which is just a block-level container for anything) or `<span>` (an inline container), **`<p>` automatically adds spacing above and below itself, creating that natural paragraph break you see in books and articles.** It's also semantic, meaning it tells screen readers and search engines "Hey, this is a complete thought!" 🧠

Plus, browsers have special rules for `<p>` tags - **they won't let you nest other block elements inside them** (try putting a `<div>` inside a `<p>` and watch the browser automatically fix your "mistake"!). Think of `<p>` as the well-behaved, intelligent cousin of `<div>` - it knows exactly what it's supposed to do and does it perfectly every time! ✨
:::

### 🔗 Links - The Connection Makers

Links are the magic that makes the web "worldwide"! 🌍

```html
<a href="https://www.google.com">Visit Google! 🔍</a>
<a href="mailto:friend@email.com">Send an email! 📧</a>
<a href="tel:+1234567890">Call me! 📞</a>
```

### 🖼️ Images - Worth a Thousand Words

```html
<img src="cute-cat.jpg" alt="An adorable fluffy cat" width="300">
```

:::warning ⚠️ Important!
Always include the `alt` attribute! It helps screen readers and shows text if the image doesn't load. Be inclusive! 🤝
:::

### 📋 Lists - The Organizers

**Unordered Lists** (bullet points):
```html
<ul>
    <li>🍎 Apples</li>
    <li>🍌 Bananas</li>
    <li>🍊 Oranges</li>
</ul>
```

**Ordered Lists** (numbered):
```html
<ol>
    <li>🥇 First place</li>
    <li>🥈 Second place</li>
    <li>🥉 Third place</li>
</ol>
```

## 🎨 Text Formatting - Make It Pretty!

```html
<p>I can make text <strong>super important</strong> or <em>nicely emphasized</em>!</p>

<p>Want to <mark>highlight something</mark>? Or maybe show some <code>computer code</code>?</p>

<p>How about <u>underlining</u> or even <del>crossing out mistakes</del>?</p>

<p>For math: H<sub>2</sub>O or E=mc<sup>2</sup>! 🧪</p>
```

<iframe 
  src="../textFormating.html"
  width="100%" 
  height="150" 
  frameborder="0"
  scrolling="no"
>
</iframe>

## 📊 Tables - Data Made Beautiful

```html
<table>
    <thead>
        <tr>
            <th>Name 👤</th>
            <th>Age 🎂</th>
            <th>Favorite Food 🍕</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>25</td>
            <td>Pizza</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>30</td>
            <td>Tacos</td>
        </tr>
    </tbody>
</table>
```

<iframe 
  src="../table.html"
  width="100%" 
  height="90" 
  frameborder="0"
  scrolling="no"
>
</iframe>

## 📝 Forms - Getting Interactive!

Forms let visitors talk back to your website! 💬

```html
<form>
    <label for="name">Your Name: 👋</label>
    <input type="text" id="name" name="name" placeholder="Enter your awesome name!">
    
    <label for="email">Email: 📧</label>
    <input type="email" id="email" name="email" placeholder="your@email.com">
    
    <label for="message">Message: 💭</label>
    <textarea id="message" name="message" placeholder="Tell us something cool!"></textarea>
    
    <button type="submit">Send Message! 🚀</button>
</form>
```

## 🎯 Semantic HTML - Making Meaning Clear

Modern HTML isn't just about looks - **it's about meaning!** These tags help screen readers and search engines understand your content:

```html
<header>
    <nav>🧭 Navigation goes here</nav>
</header>

<main>
    <article>
        <section>
            <h2>📰 Article Title</h2>
            <p>Article content...</p>
        </section>
    </article>
    
    <aside>
        <h3>🔗 Related Links</h3>
    </aside>
</main>

<footer>
    <p>© 2024 My Awesome Website 🌟</p>
</footer>
```

## 🎨 Adding Some Style with Inline CSS

While we'll learn proper CSS later, here's a tiny taste:

```html
<h1 style="color: blue; text-align: center;">🎨 Colorful Heading!</h1>

<p style="background-color: yellow; padding: 10px;">
    📝 This paragraph has a yellow background!
</p>
```

<iframe 
  src="../inlineCSS.html"
  width="100%" 
  height="150" 
  frameborder="0"
  scrolling="no"
>
</iframe>

:::info 🚨 Quick Note
Inline styles work, but it's better to use separate CSS files for real projects. Think of it like keeping your clothes organized! 👔
:::

## 🛠️ HTML Attributes - The Detail Makers

Attributes give extra information about elements:

```html
<img src="photo.jpg" alt="Description" width="500" height="300">
<a href="https://example.com" target="_blank" title="Opens in new tab">Link</a>
<div id="unique-element" class="my-style">Content</div>
```

## 🎯 Practice Project: Your Personal Page!

Let's put it all together! Create a simple personal page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me! 🌟</title>
</head>
<body>
    <header>
        <h1>Welcome to My World! 🌍</h1>
        <nav>
            <a href="#about">About</a> |
            <a href="#hobbies">Hobbies</a> |
            <a href="#contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section id="about">
            <h2>🙋‍♀️ About Me</h2>
            <p>Hi there! I'm learning HTML and loving every minute of it!</p>
            <img src="my-photo.jpg" alt="That's me!" width="200">
        </section>
        
        <section id="hobbies">
            <h2>🎯 My Hobbies</h2>
            <ul>
                <li>🎵 Listening to music</li>
                <li>📚 Reading books</li>
                <li>💻 Learning to code</li>
            </ul>
        </section>
        
        <section id="contact">
            <h2>📧 Get in Touch</h2>
            <form>
                <label for="visitor-name">Name:</label>
                <input type="text" id="visitor-name" name="name">
                
                <label for="visitor-message">Message:</label>
                <textarea id="visitor-message" name="message"></textarea>
                
                <button type="submit">Send! 🚀</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>Made with ❤️ and HTML!</p>
    </footer>
</body>
</html>
```

## 🚀 Next Steps - Your HTML Adventure Continues!

Congratulations! You've learned the fundamentals of HTML! 🎉 Here's what to explore next:

1. **CSS** - Make your pages beautiful! 🎨
2. **JavaScript** - Add interactivity! ⚡
3. **Responsive Design** - Make sites work on all devices! 📱💻
4. **Web Accessibility** - Include everyone! 🤝

## 📚 Quick Reference Cheat Sheet

| Tag | Purpose | Example |
|-----|---------|---------|
| `<h1>-<h6>` | Headings | `<h1>Big Title</h1>` |
| `<p>` | Paragraph | `<p>Some text</p>` |
| `<a>` | Link | `<a href="url">Link</a>` |
| `<img>` | Image | `<img src="pic.jpg" alt="Pic">` |
| `<ul>/<li>` | List | `<ul><li>Item</li></ul>` |
| `<div>` | Container | `<div>Content</div>` |
| `<span>` | Inline container | `<span>Text</span>` |

## 🎉 You Did It! 

You're now equipped with the HTML knowledge to start building amazing websites! Remember, every expert was once a beginner. Keep practicing, stay curious, and most importantly - have fun! 🌟

:::tip 🚀 Final Pro Tip
The best way to learn HTML is by doing! Start building, experimenting, and don't be afraid to break things. That's how you learn! 💪
:::

Happy coding! 👨‍💻👩‍💻
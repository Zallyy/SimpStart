<template>
  <header-component></header-component>
    <div class="form">
        <!-- This is the welcome message -->
        <h1>お帰りなさい</h1> 
        <div>
            <input id="searchbox" type="text" autocomplete="on" maxlength="100" size="18" autofocus="autofocus" target="_blank">
            <i class="fas fa-search"></i>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap");
:root {
  --header-color: #3D2E92;
  --text-color: #ffffff;
  --background-color: #f3f3f3;
  --background-url: url('https://images7.alphacoders.com/946/thumb-1920-946883.jpg'); /* If you dont want a wallpaper erase the link not the variable*/
  --search-bar-color: #9f90b9;
}

* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
}

#app {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: var(--background-color);
  background: var(--background-url);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-family: 'Roboto', sans-serif;
}

.form {
  position: relative;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.form h1 {
  font-size: 3.5em;
  color: var(--text-color);
  margin-bottom: 50px;
}

.form input {
  background: var(--search-bar-color);
  color: var(--text-color);
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  padding: 15px 15px;
  font-size: 1.2em;
  width: 600px;
  border: none;
  outline: none;
}

.form .fa-search {
  color: var(--text-color);
  font-size: 1.5em;
  margin-left: -40px;
}

header {
  z-index: 10000;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: var(--header-color);
  color: var(--text-color);
  padding: 15px 20px;
}

header a {
  text-decoration: none;
  color: var(--text-color);
}

header a:visited {
  color: var(--text-color);
}

header .categories {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

header .categories .category {
  position: relative;
  background: var(--header-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 20px;
}

header .categories .category i {
  margin-right: 5px;
}

header .categories .category .category-folder {
  background: var(--header-color);
}

header .categories .category .category-folder .category-title:hover {
  text-decoration: underline;
  cursor: pointer;
}

header .categories .category .category-folder .link {
  padding: 10px;
}

header .categories .category .category-folder .link:hover {
  cursor: pointer;
  text-decoration: underline;
}

header .categories .category .category-folder .items {
  margin: 15px 0;
  background: var(--header-color);
  min-width: 200px;
  position: absolute;
  left: 0;
}

header .categories .category .category-folder .items .folders .folder {
  position: relative;
  background: var(--header-color);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

header .categories .category .category-folder .items .folders .folder .links {
  min-width: 200px;
  background: var(--header-color);
  margin: 0;
  position: absolute;
  top: 0;
  left: 100%;
}
/*# sourceMappingURL=style.css.map */
</style>